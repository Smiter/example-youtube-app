
import React from 'react';
const style = require('./style.scss');

export default () => {
  return (
    <div className={style.loadingOverlay}>
      <div className={style.loader}></div>
    </div>
  );
};
