import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';
import Paper from '../Paper/Paper';

class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    elevation: PropTypes.number,
  };
  render() {
    const { style, elevation } = this.props;
    return (
      <Paper
        elevation={elevation ? elevation : 0}
        style={[{ backgroundColor: '#fff' }, style]}>
        {this.props.children}
      </Paper>
    );
  }
}

export default withTheme(List);
