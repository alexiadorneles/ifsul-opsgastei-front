import { MaskService } from 'react-native-masked-text'

class TextMaskService {
  static toMoney(number = 0) {
    return MaskService.toMask('money', number, {
      unit: 'R$',
      separator: '.',
      delimiter: ',',
    })
  }
}

export { TextMaskService }
