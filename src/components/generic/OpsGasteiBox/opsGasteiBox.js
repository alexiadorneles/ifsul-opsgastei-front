import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import PropTypes from 'prop-types'

import STYLES from './opsGasteiBoxStyle'

const LOCAL_STATE = {}

class OpsGasteiBox extends Component {
  state = { showBody: true }
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
  }

  constructor() {
    super()

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    LOCAL_STATE.showBody = !this.state.showBody
    this.setState(LOCAL_STATE)
  }

  renderChildren() {
    if (this.state.showBody) {
      return <View style={STYLES.boxBody}>
        {this.props.children}
      </View>
    }
  }

  render() {
    return (
      <View style={STYLES.boxContainer}>
        <View style={STYLES.ogBox}>
          <View style={STYLES.boxHeader}>
            <TouchableNativeFeedback onPress={this.toggle}>
              <Text style={STYLES.textStyle}>{this.props.title.toUpperCase()}</Text>
            </TouchableNativeFeedback>
          </View>

          <View style={STYLES.boxBodyContainer}>
            {this.renderChildren()}
          </View>
        </View>
      </View>
    )
  }
}

export default OpsGasteiBox
