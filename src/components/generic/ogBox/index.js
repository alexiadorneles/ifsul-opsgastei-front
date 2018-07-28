import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import STYLES from './ogBoxStyle'

class OpsGasteiBox extends Component {
  state = { showBody: true }
  constructor() {
    super()

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.state.showBody = !this.state.showBody
    this.setState(this.state)
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
              <Text style={STYLES.textStyle}>{this.props.ogTitle.toUpperCase()}</Text>
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
