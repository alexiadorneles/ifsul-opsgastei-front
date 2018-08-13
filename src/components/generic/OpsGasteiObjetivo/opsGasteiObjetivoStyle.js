import COLORS from 'constants/colors'

export default {
  objetivoContainer: {
    marginBottom: 25,
  },

  objetivoTitle: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  texto: {
    fontSize: 22,
    fontWeight: '600',
    margin: 0,
  },

  info: {
    paddingLeft: 40,
  },

  type: {
    fontSize: 20,
    color: COLORS.darkGrey,
  },

  categoriaComnponent: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    paddingRight: 15,
  },

  categoria: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
}
