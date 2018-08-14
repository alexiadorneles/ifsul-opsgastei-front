import COLORS from 'constants/colors'

const containerDefault = {
  paddingVertical: 5,
}

export default {
  container: {
    ...containerDefault,
  },

  containerAtivo: {
    ...containerDefault,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },

  texto: {
    fontFamily: 'Roboto',
    margin: 0,
    fontSize: 12,
  },

  iconContainer: {
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}
