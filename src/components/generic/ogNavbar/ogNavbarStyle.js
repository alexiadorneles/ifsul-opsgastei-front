import COLORS from 'constants/colors'

export default {
  appNavbar: {
    flexDirection: 'row',
    marginBottom: 0,
    backgroundColor: 'red',
  },

  appNavbarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageNavbar: {
    height: 30,
    width: 75,
  },

  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginVertical: 0,
  },
}
