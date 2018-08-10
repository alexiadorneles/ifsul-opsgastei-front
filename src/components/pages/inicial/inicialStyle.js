import DEFAULT_STYLES from 'constants/defaultStyles'

export default {
  ...DEFAULT_STYLES,

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  inicialContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },

  button: {
    flex: 1,
    flexShrink: 1,
  },

  label: {
    padding: 10,
  },

  input: {
    alignSelf: 'stretch',
  },
}

