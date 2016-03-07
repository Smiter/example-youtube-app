import {expect} from 'chai';
import * as format from '../format';

describe('Helpers tests', function() {
  
  it('date format shoud return correct string', function() {
    expect(format.formatDate('2016-02-08T06:03:50.000Z')).to.be.equal('28 days');
  });

});