
import React, { PropTypes, Component } from 'react';

export const ARTISTS = [
  'Elton John',
  'Stevie Wonder',
  'Frank Sinatra',
  'Louis Armstrong'
];

export class ArtistsList extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  handleClick(event) {
    this.props.onChange(event.target.value);
  }  

  render() {
    return (
      <div>
          <label>Select artist: </label>
          <select onChange={ this.handleClick.bind(this) }>
            {
              ARTISTS.map( (artist) => 
                <option key={artist} value={artist}>{artist}</option>
              )
            }
          </select>
      </div>
    );
  }
}
