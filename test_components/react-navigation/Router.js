import React from 'react'
import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation'

import NavigationService from './NavigationService'
import TestList from '../reusable/TestList'
import css from '../../styles/css'
import COLOR from '../../styles/ColorConstants'

import node_forge_test from '../node-forge/node_forge_test'
import dateformat_test from '../dateformat/dateformat_test'
import react_native_hyperlink_test from '../react-native-hyperlink/react_native_hyperlink_test'
import moment_test from '../moment/moment_test'
import html_entities_test from '../html-entities/html_entities_test'
import react_native_animatable_test from '../react-native-animatable/react_native_animatable_test'
import animated_circular_progress_test from '../animated-circular-progress/animated_circular_progress_test'
import react_native_svg_test from '../react-native-svg/react_native_svg_test'
import react_native_barcode_builder_test from '../react-native-barcode-builder/react_native_barcode_builder_test'
import react_native_datepicker_test from '../react-native-datepicker/react_native_datepicker_test'
import react_native_popup_menu_test from '../react-native-popup-menu/react_native_popup_menu_test'
import react_native_sortable_list_test from '../react-native-sortable-list/react_native_sortable_list_test'
import react_navigation_header_buttons_test from '../react-navigation-header-buttons/react_navigation_header_buttons_test'
import react_native_circle_checkbox_test from '../react-native-circle-checkbox/react_native_circle_checkbox_test'
import react_native_device_info_test from '../react-native-device-info/react_native_device_info_test'
import react_native_exception_handler_test from '../react-native-exception-handler/react_native_exception_handler_test'
import react_native_exit_app_test from '../react-native-exit-app/react_native_exit_app_test'
import react_native_keychain_test from '../react-native-keychain/react_native_keychain_test'

let MainStack = createStackNavigator(
	{
		MainPage: {
			screen: TestList,
			navigationOptions: { header: null }
		},
		react_native_exception_handler: {
			screen: react_native_exception_handler_test,
			navigationOptions: { title: 'react-native-exception-handler' }
		},
		node_forge: {
			screen: node_forge_test,
			navigationOptions: { title: 'node-forge-test' }
		},
		dateformat: {
			screen: dateformat_test,
			navigationOptions: { title: 'dateformat-test' }
		},
		react_native_hyperlink: {
			screen: react_native_hyperlink_test,
			navigationOptions: { title: 'react-native-hyperlink-test' }
		},
		moment: {
			screen: moment_test,
			navigationOptions: { title: 'moment-test' }
		},
		html_entities: {
			screen: html_entities_test,
			navigationOptions: { title: 'html-entities-test' }
		},
		react_native_animatable: {
			screen: react_native_animatable_test,
			navigationOptions: { title: 'react-native-animatable-test' }
		},
		animated_circular_progress: {
			screen: animated_circular_progress_test,
			navigationOptions: { title: 'animated-circular-progress-test' }
		},
		react_native_svg: {
			screen: react_native_svg_test,
			navigationOptions: { title: 'react-native-svg-test' }
		},
		react_native_barcode_builder: {
			screen: react_native_barcode_builder_test,
			navigationOptions: { title: 'react-native-barcode-builder' }
		},
		react_native_datepicker: {
			screen: react_native_datepicker_test,
			navigationOptions: { title: 'react-native-datepicker' }
		},
		react_native_popup_menu: {
			screen: react_native_popup_menu_test,
			navigationOptions: { title: 'react-native-popup-menu' }
		},
		react_native_sortable_list: {
			screen: react_native_sortable_list_test,
			navigationOptions: { title: 'react-native-sortable-list' }
		},
		react_navigation_header_buttons: {
			screen: react_navigation_header_buttons_test,
			navigationOptions: { title: 'react-navigation-header-buttons' }
		},
		react_native_circle_checkbox: {
			screen: react_native_circle_checkbox_test,
			navigationOptions: { title: 'react-native-circle-checkbox' }
		},
		react_native_device_info: {
			screen: react_native_device_info_test,
			navigationOptions: { title: 'react-native-device-info' }
		},
		react_native_exit_app: {
			screen: react_native_exit_app_test,
			navigationOptions: { title: 'react-native-exit-app-test' }
		},
		react_native_keychain: {
			screen: react_native_keychain_test,
			navigationOptions: { title: 'react-native-keychain-test' }
		}
	},
	{
		initialRouteName: 'MainPage',
		defaultNavigationOptions: {
			headerStyle: css.nav,
			headerTitleStyle: css.navTitle,
			headerTintColor: COLOR.WHITE,
		},
		headerLayoutPreset: 'center',
		cardStyle: { backgroundColor: COLOR.BG_GRAY }
	},
)

MainStack = createAppContainer(MainStack)

const Router = () => (
	<MainStack ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
)

export default Router