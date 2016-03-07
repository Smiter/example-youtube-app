import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../../store/modules/videos';
import VideoList from '../../components/VideoList';
import { ArtistsList, ARTISTS } from '../../components/ArtistsList';
import ListType from '../../components/ListType';

import './default.scss';
import './global.scss';

const style = require('./style.scss');

class App extends Component {

  static propTypes = {
    videoActions: PropTypes.object.isRequired,
    videos: PropTypes.object.isRequired
  };

  // load by default videos using first item in ArtistsList
  componentDidMount() {
    const { videoActions: { loadVideos } } = this.props;
    loadVideos(ARTISTS[0]);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  // handler when we select new artist from the dropdown
  onSelectArtist(artist) {
    const { videoActions: { loadVideos } } = this.props;
    loadVideos(artist);
  }

  // change list layout { type :: String } -> Void
  onChangeLayout(type) {
    const { videoActions: { changeListType } } = this.props;
    changeListType(type);
  }

  // load next videos if we reach the bottom of the page 
  handleScroll() {
    const { videoActions: { loadVideos }, videos: { nextPageToken, isLoading, artist } } = this.props;
    const offset = 300;
    if (!isLoading && (window.innerHeight + window.scrollY + offset) >= document.body.offsetHeight) {
      loadVideos(artist, nextPageToken);
    }
  }

  // static fetch method for server side loading
  static fetchMethod() {
    return videoActions.loadVideos(ARTISTS[0]);
  }

  render() {
    const { videos: { listType } } = this.props;
    return (
      <div>
        <div className={style.menu}>
          <div className="left">
            <ArtistsList onChange={this.onSelectArtist.bind(this)} />
          </div>
          <div className="right">
            <ListType onClick={this.onChangeLayout.bind(this)} listType={listType} />
          </div>
          <div className="clearfix"></div>
        </div>
        <VideoList {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    videoActions: bindActionCreators(videoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
