import COLORS from 'constants/colors'
const texto = {
  color: COLORS.text,
}

const saldo = {
  flex: 1,
  height: 200,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  position: 'relative',
}

export default {
  saldoNegativo: {
    ...saldo,
    backgroundColor: COLORS.negative,
  },

  saldoPositivo: {
    ...saldo,
    backgroundColor: COLORS.positive,
  },

  valorSaldo: {
    ...texto,
    fontSize: 60,
  },

  valorSalario: {
    ...texto,
  },
}

