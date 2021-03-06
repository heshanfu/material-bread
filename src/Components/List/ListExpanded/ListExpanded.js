import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Text, StyleSheet } from 'react-native';
import withTheme from '../../../Theme/withTheme';
import Ripple from '../../Ripple/Ripple';
import Icon from '../../Icon/Icon';

class ListExpanded extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.object,
    title: PropTypes.string,
    titleStyle: PropTypes.object,
  };

  state = {
    isOpen: false,
    menuHeight: new Animated.Value(0),
    animationDuration: 150,
  };

  componentDidMount() {
    const { expanded } = this.props;
    if (expanded) {
      this.setState({ isOpen: expanded });
    }
  }

  componentDidUpdate(prevProps) {
    const { expanded } = this.props;

    if (expanded !== prevProps.expanded) {
      this.setState({ isOpen: expanded });
    }
  }

  toggleMenu = () => {
    const { onPress } = this.props;
    const { isOpen, animationDuration, menuHeight, initialHeight } = this.state;

    let height = initialHeight;
    if (isOpen) height = 0;

    if (onPress) {
      onPress();
    }

    Animated.timing(menuHeight, {
      toValue: height,
      duration: animationDuration,
    }).start();

    this.setState({
      isOpen: !isOpen,
    });
  };

  onMenuLayout = e => {
    const { width, height } = e.nativeEvent.layout;

    this.setState({
      initialWidth: width,
      initialHeight: height,
    });
  };

  renderExpandedContent() {
    const { children } = this.props;
    const { menuHeight } = this.state;
    return (
      <Animated.View
        style={{ height: menuHeight, overflow: 'hidden', width: '100%' }}>
        <View
          style={{ position: 'absolute', width: '100%' }}
          onLayout={this.onMenuLayout}>
          {children}
        </View>
      </Animated.View>
    );
  }

  render() {
    const { title, style, titleStyle } = this.props;
    const { isOpen } = this.state;

    return (
      <View>
        <Ripple
          style={[styles.container, style]}
          onPress={this.toggleMenu}
          rippleDuration={100}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Icon name={isOpen ? 'expand-less' : 'expand-more'} size={24} />
        </Ripple>
        {this.renderExpandedContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 14,
  },
});

export default withTheme(ListExpanded);
