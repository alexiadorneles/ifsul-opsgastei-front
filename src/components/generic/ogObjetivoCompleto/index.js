import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icons } from 'react-native-fontawesome'
import PropTypes from 'prop-types'

import OpsGasteiObjetivo from 'components/ogObjetivo'
import OpsGasteiIcone from 'components/generic/ogIcone'
import STYLES from './ogObjetivoCompletoStyle'

class OpsGasteiObjetivoCompleto extends Component {
  propTypes = {
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
      <OpsGasteiObjetivo objetivo={this.props.objetivo}>
        <TouchableOpacity style={STYLES.deletarObjetivoCompleto} onPress={this.prepararExclusao}>
          <OpsGasteiIcone style={STYLES.icone} icone={Icons.faTimes} />
        </TouchableOpacity>
      </OpsGasteiObjetivo>
    )
  }
}

export default OpsGasteiObjetivoCompleto
