import Express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/server';
import path from 'path';
import http from 'http';
import storeBuilder from '../store/createStore';
import config from '../config';
import videos from './videos';
import App from '../containers/App';
const app = new Express();
const server = new http.Server(app);

app.use(Express.static(path.join(__dirname, '../..', 'static')));

app.use('/api/videos', videos);

const Html = ({assets, component, store}) => {
  const content = ReactDOM.renderToString(component);
  return (
    <html lang="en-us">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        {Object.keys(assets.styles).map((style, key) =>
          <link href={assets.styles[style]} key={key} media="screen, projection"
                rel="stylesheet" type="text/css"/>
        )}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: content}}/>
        <script dangerouslySetInnerHTML={{__html: `window.__REDUX_STATE__=${JSON.stringify(store.getState())};`}} charSet="UTF-8"/>
        <script src={assets.javascript.main}/>
      </body>
    </html>
  );
}

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }

  const store = storeBuilder(); 

  store.dispatch(App.fetchMethod()).then(() => {
    const component = (
      <Provider store={store} key="provider">
        <App />
      </Provider>
    );
    res.send('<!doctype html>\n' +
      ReactDOM.renderToString(<Html 
        assets={webpackIsomorphicTools.assets()} 
        component={component} 
        store={store} />
      ));
  });

});

server.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('Open http://%s:%s to view the app', config.host, config.port);
});

