import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { OpsGasteiMenubar, OpsGasteiNavbar } from 'components/generic'

const SecuredContainer = ({ children }) => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between' }}>
      <ScrollView>
        <OpsGasteiNavbar title="Novembro" />
        {children}
      </ScrollView>
      <OpsGasteiMenubar />
    </ScrollView>
  )
}

SecuredContainer.propTypes = { children: PropTypes.any, style: PropTypes.any }
export { SecuredContainer }
