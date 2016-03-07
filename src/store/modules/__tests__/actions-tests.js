import {expect} from 'chai';
import * as actions from '../videos'
import { VIDEOS_GRID_VIEW, VIDEOS_LIST_VIEW } from '../../../helpers/constants';

describe('videos actions', () => {
  it('changeListType should create CHANGE_LIST_TYPE action', () => {
    expect(actions.changeListType(VIDEOS_GRID_VIEW)).to.deep.equal({
      type: 'CHANGE_LIST_TYPE',
      payload: VIDEOS_GRID_VIEW
    })
  })
})

