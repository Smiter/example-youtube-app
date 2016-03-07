import superagent from 'superagent';
import config from '../config';

const URL = 'http://' + config.host + ':' + config.port + '/api';

// ajax handler { method :: String, path :: String, params :: Object } -> Promise
export default (method, path, { params } = {}) => 
  new Promise((resolve, reject) => {
    const newPath = path.indexOf('http') >= 0 ? path : URL + path;
    const request = superagent[method](newPath);

    if (params) {
      request.query(params);
    }
    
    request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
  });
