import COLORS from 'constants/colors'

export default {
  objetivoContainer: {
    marginBottom: 25,
  },

  objetivoTitle: {
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    paddingLeft: 15,
  },

  infoCategoria: {
    marginTop: 2,
    marginBottom: 5,
    marginHorizontal: 0,
  },

  type: {
    fontSize: 20,
    color: COLORS.darkGrey,
  },

  infoCategoriaNome: {
    fontSize: 20,
  },

  tagCategoria: {
    alignSelf: 'center',
    width: 50,
    height: 10,
  },

  itemLista: {
    alignItems: 'center',
    margin: 10,
    completar: {
      color: COLORS.green,
    },
    deletar: {
      paddingRight: 7,
      color: COLORS.red,
    },
  },

  icone: {
    marginVertical: 0,
    marginHorizontal: 10,
    fontSize: 30,
  },
}
