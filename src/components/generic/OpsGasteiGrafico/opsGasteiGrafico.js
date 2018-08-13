import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import PieChart from 'react-native-pie-chart'

import STYLES from './opsGasteiGraficoStyle'

class OpsGasteiGrafico extends Component {
  static propTypes = {
    series: PropTypes.array,
    colors: PropTypes.array,
    title: PropTypes.string,
  }

  render() {
    const { series, colors, title } = this.props
    const chartSize = 250

    return (
      <View style={STYLES.container}>
        <Text style={STYLES.title}>{title}</Text>
        <PieChart
          chart_wh={chartSize}
          series={series}
          sliceColor={colors}
          doughnut={true}
          coverRadius={0.45}
        />
      </View>
    )
  }
}

export default OpsGasteiGrafico
