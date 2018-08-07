import COLORS from 'constants/colors'
const BORDER = {
  color: COLORS.grey,
  width: 2,
  style: 'solid',
}

export default {
  ogBox: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    height: 300,
  },

  boxContainer: {
    padding: 20,
    paddingTop: 0,
    marginTop: 10,
  },

  boxBodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    borderTopWidth: 0,
    height: 250,
  },

  boxBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderColor: BORDER.color,
    borderWidth: BORDER.width,
    borderStyle: BORDER.style,
    alignSelf: 'stretch',
    borderTopWidth: 0,
    height: 250,
  },

  boxHeader: {
    alignSelf: 'stretch',
    padding: 8,
    borderColor: BORDER.color,
    borderWidth: BORDER.width,
    borderStyle: BORDER.style,
  },

  textStyle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.grey,
    textAlign: 'center',
  },
}
