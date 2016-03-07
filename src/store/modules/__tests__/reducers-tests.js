import {expect} from 'chai';
import videos from '../videos'
import { VIDEOS_GRID_VIEW, VIDEOS_LIST_VIEW } from '../../../helpers/constants';

describe('videos reducer', () => {
  it('should handle initial state', () => {
    expect(
      videos(undefined, {})
    ).to.deep.equal(
      {
        list: [],
        nextPageToken: '',
        isLoading: false,
        artist: '',
        listType: VIDEOS_GRID_VIEW
      }
    )
  })

  it('should handle CHANGE_LIST_TYPE', () => {
    expect(
      videos({}, {
        type: 'CHANGE_LIST_TYPE',
        payload: VIDEOS_GRID_VIEW
      })
    ).to.deep.equal(
      {
        listType: VIDEOS_GRID_VIEW
      }
    )
  });

})