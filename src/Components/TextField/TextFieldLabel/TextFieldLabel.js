import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, Easing } from 'react-native';
import withTheme from '../../../Theme/withTheme';

class TextFieldLabel extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    style: PropTypes.object,
    error: PropTypes.bool,
    labelColor: PropTypes.string,
    focused: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  };

  state = {
    translateYAnimation: new Animated.Value(20),
    scaleAnimation: new Animated.Value(1),
    animationDuration: 200,
    animationEasing: Easing.ease,
  };

  componentDidUpdate(prevProps) {
    const { focused, type } = this.props;
    if (focused !== prevProps.focused) {
      if (type == 'outlined') {
        this._handleLabelOutlinedAnimation();
      } else {
        this._handleLabelAnimation();
      }
    }
  }

  _handleLabelAnimation() {
    const { focused, value } = this.props;
    const {
      translateYAnimation,
      scaleAnimation,
      animationEasing,
      animationDuration,
    } = this.state;

    if (value && value.length > 0) return;

    let position = focused ? 10 : 20;
    let scale = focused ? 0.75 : 1;

    Animated.parallel([
      Animated.timing(translateYAnimation, {
        toValue: position,
        duration: animationDuration,
        easing: animationEasing,
      }),
      Animated.timing(scaleAnimation, {
        toValue: scale,
        duration: animationDuration,
        easing: animationEasing,
      }),
    ]).start();
  }

  _handleLabelOutlinedAnimation() {
    const { focused, value } = this.props;
    const {
      translateYAnimation,
      scaleAnimation,
      animationEasing,
      animationDuration,
    } = this.state;

    if (value && value.length > 0) return;

    let position = focused ? -10 : 20;
    let scale = focused ? 0.75 : 1;

    Animated.parallel([
      Animated.timing(translateYAnimation, {
        toValue: position,
        duration: animationDuration,
        easing: animationEasing,
      }),
      Animated.timing(scaleAnimation, {
        toValue: scale,
        duration: animationDuration,
        easing: animationEasing,
      }),
    ]).start();
  }

  render() {
    let { error, labelColor, label, focused, type } = this.props;
    const { translateYAnimation, scaleAnimation } = this.state;

    const translateX = type == 'flat' ? -1 : 11;

    if (!labelColor) labelColor = 'rgba(0, 0, 0, 0.54)';

    if (focused) labelColor = 'rgba(33, 150, 243, 1)';

    if (error) {
      labelColor = 'red';
      label = 'Error';
    }

    return (
      <Animated.Text
        style={[
          styles.label,
          {
            color: labelColor,
            backgroundColor: type == 'outlined' ? 'white' : 'transparent',
            paddingHorizontal: type == 'outlined' ? 4 : 0,
            transform: [
              { scale: scaleAnimation },
              { translateY: translateYAnimation },
              { translateX: translateX },
            ],
          },
        ]}>
        {label}
      </Animated.Text>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    zIndex: 10,
  },
});

export default withTheme(TextFieldLabel);
