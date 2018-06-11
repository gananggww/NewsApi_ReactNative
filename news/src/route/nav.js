import { StackNavigator } from 'react-navigation'

import Home from '../components/main.js'
import MyWeb from '../components/webview.js'

const Navigation = StackNavigator({
  Home: { screen: Home },
  WebView: { screen: MyWeb },
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})

export default Navigation
