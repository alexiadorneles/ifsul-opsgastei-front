import swal from 'sweetalert'
import _ from 'lodash'

class SwalService {
  confirm(message, onConfirm, model) {
    swal(this.getSwalConfirmObject(message))
      .then((confirmed) => {
        if (confirmed) {
          onConfirm(model)
          swal('Confirmado!', 'Ação realizada com sucesso.', 'success')
        } else {
          swal('Cancelado', 'Operação cancelada.', 'error')
        }
      })
  }

  success(message = 'Ação realizada com sucesso.') {
    swal('Sucesso!', message, 'success')
  }

  error(message) {
    swal('Erro!', message, 'error')
  }

  info(message) {
    swal('Atenção!', message, 'info')
  }

  custom(options) {
    return swal(options)
  }

  input({ title, text, inputOptions }, callBack = () => { }) {
    const defaultOptions = {
      content: {
        element: 'input',
        attributes: inputOptions,
      },
      buttons: true,
    }
    const mergedOptions = _.extend(defaultOptions, { title, text })
    swal(mergedOptions)
      .then((inputValue) => {
        if (!inputValue || inputValue === '') return { error: true }
        callBack(inputValue)
      })
      .then(value => {
        if (!!value) value.error ? this.error('Valor Incorreto') : ''
      })
  }

  getSwalConfirmObject(message) {
    return {
      title: 'Tem certeza?',
      text: message,
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Cancelar',
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: 'Confirmar',
          value: true,
          visible: true,
          className: 'button-confirm',
          closeModal: true,
        },
      },
    }
  }
}

const swalService = new SwalService()
export { swalService }
