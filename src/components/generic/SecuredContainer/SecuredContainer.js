import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { OpsGasteiMenubar, OpsGasteiNavbar } from 'components/generic'
let _icone

const onChange = icone => {
	_icone = icone
}

const SecuredContainer = ({ children }) => {
	return (
		<ScrollView
			style={{ flex: 1 }}
			contentContainerStyle={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between' }}
		>
			<ScrollView>
				<OpsGasteiNavbar title="Novembro" />
				{children}
			</ScrollView>
			<OpsGasteiMenubar onChange={onChange} active={_icone} />
		</ScrollView>
	)
}

SecuredContainer.propTypes = { children: PropTypes.any, style: PropTypes.any }
export { SecuredContainer }
