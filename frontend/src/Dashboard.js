import React, { Component } from 'react';
import {
  Button
} from '@material-ui/core';

export default class Home extends Component {
  logOut = () => {
    localStorage.setItem('token', null);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Button
            className="button_style"
            variant="contained"
            size="small"
            onClick={this.logOut}
          >
            Log Out
          </Button>
      </div>
    );
  }
}