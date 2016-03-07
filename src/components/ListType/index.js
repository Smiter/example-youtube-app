
import React, { PropTypes, Component } from 'react';
import { VIDEOS_GRID_VIEW, VIDEOS_LIST_VIEW } from '../../helpers/constants';
const style = require('./style.scss');

const VIEW_BUTTONS = {
  [VIDEOS_GRID_VIEW]: 'fa fa-th-large',
  [VIDEOS_LIST_VIEW]: 'fa fa-th-list',
};

export default class ListType extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    listType: PropTypes.string.isRequired
  };

  onClickBtn(type) {
    this.props.onClick(type);  
  }

  render() {
    const { listType } = this.props;
    return (  
      <div>
        {
          [ VIDEOS_GRID_VIEW, VIDEOS_LIST_VIEW ].map( type => {
            return (
              <div key={type} onClick={this.onClickBtn.bind(this, type)} 
                className={style.btn + ' ' + (listType === type && style.btnSelected)}>
                <i className={VIEW_BUTTONS[type]}></i>
              </div>
            );
          })
        }
      </div>
    );
  }
}
