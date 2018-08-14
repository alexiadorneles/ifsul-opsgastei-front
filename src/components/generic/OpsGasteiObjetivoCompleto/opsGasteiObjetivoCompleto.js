import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import { OpsGasteiIcone, OpsGasteiObjetivo } from 'components/generic'
import COLORS from 'constants/colors'
import STYLES from './opsGasteiObjetivoCompletoStyle'

class OpsGasteiObjetivoCompleto extends Component {
  static propTypes = {
    objetivo: PropTypes.object,
    callbackAcao: PropTypes.function,
  }

  constructor() {
    super()

    //bindings
    this.prepararExclusao = this.prepararExclusao.bind(this)
    this.excluir = this.excluir.bind(this)
  }

  prepararExclusao() {
    // _swalService.confirm('Desejas excluir o objetivo?', this.excluir, this.objetivo)
  }

  excluir() {
    // _objetivoService.deletar(objetivo.id).then(() => {
    //   this.props.callbackAcao()
    // })
  }

  render() {
    return (
      <View style={STYLES.container}>
        <OpsGasteiObjetivo objetivo={this.props.objetivo}>
          <TouchableOpacity style={STYLES.deletarObjetivoCompleto} onPress={this.prepararExclusao}>
            <OpsGasteiIcone icone='times' cor={COLORS.negative} fontSize={25} />
          </TouchableOpacity>
        </OpsGasteiObjetivo>
      </View>
    )
  }
}

export default OpsGasteiObjetivoCompleto
