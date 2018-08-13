import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { OpsGasteiDisplayer } from 'components/generic'

class OpsGasteiObjetivo extends Component {
  static propTypes = {
    objetivo: PropTypes.object,
    children: PropTypes.Component,
  }

  render() {
    const { objetivo, children } = this.props

    return (
      <OpsGasteiDisplayer object={objetivo}>
        {children}
      </OpsGasteiDisplayer>
    )
  }
}

export default OpsGasteiObjetivo
