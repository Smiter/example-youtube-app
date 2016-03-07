
import React, { PropTypes, Component } from 'react';
import VideoGridItem from '../VideoGridItem';
import VideoListItem from '../VideoListItem';
import LoadingOverlay from '../LoadingOverlay';
import { VIDEOS_GRID_VIEW } from '../../helpers/constants';

export default class VideoList extends Component {

  static propTypes = {
    videos: PropTypes.object.isRequired
  };

  render() {
    const { videos: { list, isLoading, listType } } = this.props;
    return (
      <div>
        {
          list.map( (video, index) => 
            listType === VIDEOS_GRID_VIEW ?
             <VideoGridItem key={index} video={ video } />
            :
             <VideoListItem key={index} video={ video } />
          )
        }
        { isLoading && <LoadingOverlay /> }
      </div>
    );
  }
}
