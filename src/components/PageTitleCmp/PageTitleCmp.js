import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

import styles from './PageTitleCmp.min.css';

class PageTitleCmp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title : props.title
    }
  }

  render() {
    return (
      <div className="page-title">
        <h1>{this.state.title}</h1>
      </div>
    )
  }

}

export default PageTitleCmp;
