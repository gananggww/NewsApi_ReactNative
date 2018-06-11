import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';

import { passURI } from '../redux/action/index_action.js'

import { searchTitle } from '../helper/filter.js'

type Props = {};
class List extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  moveScreen(value) {
    this.props.passURI_dispatch(value)
    this.props.navigate.navigate('WebView');
  }
  render() {
      if (this.props.newsList_state) {
        return (
          <View>
              <View>
                <FlatList
                  data={this.props.newsList_state}
                  renderItem={({ item }) => {
                  return (
                    <View style={styles.list}>
                      <TouchableOpacity
                        onPress={() => this.moveScreen(item)}
                        >
                        <View style={styles.card}>
                          <View style={styles.header}>
                            <View style={styles.avatarLayer}>
                              <Image style={styles.avatar} source={{ uri: `${item.urlToImage}` }}/>
                            </View>
                            <View style={styles.usernameLayer}>
                              <Text style={styles.username}>{item.source.name}</Text>
                            </View>
                          </View>
                          <View style={styles.images}>
                            <Image style={styles.img} source={{ uri: `${item.urlToImage}` }}/>
                          </View>
                          <View style={styles.content}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.author}</Text>
                          </View>
                          <View style={styles.descLayout}>
                            <Text style={styles.desc}>{item.description}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )
                }}
                  />
              </View>
          </View>
        );
      }
    }
}

const mapStateToProps = (state) => {
  return {
    newsList_state: state.newsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    passURI_dispatch: (payload) => dispatch(passURI(payload)),
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#EEEEEE',
    padding: 12
  },
  card: {
    borderWidth:0,
    borderRadius: 10,
    height: 400,
    backgroundColor: 'white'
  },
  images: {
    width: 340,
    height: 200,
  },
  img: {
    resizeMode: 'cover',
    width: 335.5,
    height: 200
  },
  header: {
    flex: 2,
    flexDirection:'row',
    alignItems:'center',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },
  usernameLayer: {
    paddingLeft: 9,
  },
  username: {
  },
  avatarLayer: {
    // backgroundColor: '#ABABAB',
    paddingRight: 9,
    width:40
  },
  avatar: {
    borderRadius:40,
    width: 40,
    height: 40,
  },
  content: {
    padding: 10,
    // backgroundColor: '#ABABAB',
    height:60,
    borderBottomWidth: 0.3,
    borderColor: '#d6d7da',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  descLayout: {
    padding: 10,
    // backgroundColor: '#ABABAB',
    height:100
  },
  desc: {
    fontStyle: 'italic',
    fontSize: 15
  }
});



const Conn = connect(mapStateToProps, mapDispatchToProps)(List)
export default Conn;
