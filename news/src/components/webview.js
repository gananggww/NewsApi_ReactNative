import React, { Component } from 'react';
import { connect } from 'react-redux'
import Dimensions from 'Dimensions'

import {
  WebView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {};
class MyWeb extends Component<Props> {
  render() {
    return (
      <View>
        <View style= {styles.navBar}>
          <Text onPress={() => this.props.navigation.goBack()} style = {styles.backNavBar}>&#8249;</Text>
          <Text style= {styles.textNavBar}>Newspedia</Text>
        </View>
        <View style = {styles.webview}>
           <WebView
              source = {{ uri: `${this.props.uri_state.url}` }}
           />
        </View>
    </View>
    );
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
   webview: {
      height: height,
   },
   textNavBar: {
     color: 'white',
     fontSize: 20,
     marginLeft:10,
   },
   backNavBar: {
     width:50,
     height:50,
     color: 'white',
     fontSize: 40,
     justifyContent:'center',
     alignItems:'center',
     paddingLeft:20,
     marginBottom:5,
   },
   navBar: {
     flexDirection:'row',
     height:60,
     alignItems: 'center',
     color:'white',
     backgroundColor:'green'
   },
})

const mapStateToProps = (state) => {
  return {
    uri_state: state.uri
  }
}

const Conn = connect(mapStateToProps, null)(MyWeb)
export default Conn;
