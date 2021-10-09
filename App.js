import React from 'react';
import { View } from 'react-native';
import MeniuSus from './meniuSus';
import MeniuStanga from './MeniuStanga';
import Prezentare from './Prezentare'
import Danela from './Danela'

export default class App extends React.Component {

  state={
    page: 'main',
  }
  render()
  {
    if ( this.state.page === 'main')
      return (
        <View style={{flex:1}}>
          <MeniuSus />
          <MeniuStanga />
          <Prezentare />
        </View>
      )
    else if(this.state.page === 'danela')
        return(<Danela></Danela>)
  }
}


