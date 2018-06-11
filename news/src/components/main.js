import React, { Component } from 'react';
import { connect } from 'react-redux'
import Dimensions from 'Dimensions'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import { newsList, actionEventSearch } from '../redux/action/index_action.js'
import ListNews from './list.js'
import MyWeb from './webview.js'

type Props = {};
class Main extends Component<Props> {
  constructor() {
    super()
    this.state = {
      search: false
    }
  }

  searchEvent (event) {
    this.props.eventSearch_dispatch(event.text);
  }

  searchBar () {
    if(this.state.search) {
      return (
        <View style = {styles.navBar}>
          <TextInput
             style = {styles.input}
             onChangeText={(text) => this.searchEvent({text})}
             value={this.state.text}
           />
        </View>
      )
    }
  }
  toogleSearch() {
    if (this.state.search) {
      this.setState({search:false})
    } else {
      this.setState({search:true})
    }
  }
  componentWillMount() {
    this.props.newsList_dispatch()
  }
  render() {
    return (
      <View>
        <View style = {styles.container}>
          <View style = {styles.navBar}>
            <Text style = {styles.textNavBar}>Newspedia</Text>
            <Text onPress={() => this.toogleSearch()} style = {styles.searchNavBar}>Search</Text>
          </View>
          {this.searchBar()}
          <View style = {styles.list}>
            <ListNews navigate={this.props.navigation}/>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newsList_dispatch: () => dispatch(newsList()),
    eventSearch_dispatch: (payload) => dispatch(actionEventSearch(payload))
  }
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
   input: {
     height: 50,
     width: width-40,
     color: 'white',
     fontSize:30,
     marginLeft:15,
     marginRight:15,
   },
   textNavBar: {
     color: 'white',
     fontSize: 20,
     marginLeft:20,
   },
   searchNavBar: {
     width:52,
     padding: 5,
     height: 30,
     borderWidth: 1,
     borderRadius: 3,
     borderColor: 'white',
     marginRight:20,
     color: 'white',
     fontSize: 15,
     marginLeft:10,
   },
   navBar: {
     flexDirection:'row',
     height:60,
     justifyContent: 'space-between',
     alignItems: 'center',
     // color:'white',
     backgroundColor:'green'
   }
})


const Conn = connect(null, mapDispatchToProps)(Main)
export default Conn;
