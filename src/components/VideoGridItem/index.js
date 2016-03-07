
import React, { PropTypes, Component } from 'react';
import LazyLoad from 'react-lazy-load';
import { formatDate } from '../../helpers/format';
const style = require('./style.scss');

export default class VideoGridItem extends Component {

  static propTypes = {
    video: PropTypes.object.isRequired
  };

  render() {
    const { video } = this.props;
    return (
      <div className={style.main}>
        <div className={style.imgWrap}>
          <LazyLoad offsetVertical={450}>
            <a href={`http://youtu.be/${ video.id.videoId }`} target="_blank">
              <img src={video.snippet.thumbnails.medium.url} />
            </a>
          </LazyLoad>
          <a href={`http://youtu.be/${ video.id.videoId }`} target="_blank" className={style.playIcon}>
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div className={style.content}>
          <h4 className={style.title}>
            <a href={`http://youtu.be/${ video.id.videoId }`} target="_blank">{ video.snippet.title }</a>
          </h4>
          <div className={style.subtitle}>
            <a href={`http://youtube.com/channel/${ video.snippet.channelId }`} target="_blank">
              { video.snippet.channelTitle }
            </a>
          </div>
          <div className={style.subtitle}>
              Posted { formatDate(video.snippet.publishedAt) + ' ago' }
          </div>
        </div>
        <div className={style.description}>
          <small>{ video.snippet.description }</small>
        </div>
      </div>
    );
  }
}
