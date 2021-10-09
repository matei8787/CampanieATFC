import React from 'react'
import styles from './styles'
import {Text, View} from 'react-native'

export default class MeniuSus extends React.Component
{
    render()
    {
        return (
        <View style={styles.topViewContainer}>
          <Text style={styles.text}> Alegeti-ne, sa fim vocea voastra</Text>
        </View>
        )
    }
}