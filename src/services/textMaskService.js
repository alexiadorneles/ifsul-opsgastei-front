import { MaskService } from 'react-native-masked-text'

class TextMaskService {
  toMoney(number = 0) {
    return MaskService.toMask('money', number, {
      unit: 'R$',
      separator: '.',
      delimiter: ',',
    })
  }
}

export { TextMaskService }
