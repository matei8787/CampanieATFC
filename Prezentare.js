import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import BackgroundSlider from 'react-background-slider'

const imgPolitica = require("./imagini/truePolitics.jpg")
const imgPolitica1 = require('./imagini/JOHANNES.jpg')
const imgPolitica2 = require("./imagini/LIVIU.jpg") 

export default class Prezentare extends React.Component
{
    render()
    {
        return (
        <View style={styles.motivatieTextContainer}>
          <BackgroundSlider images={[imgPolitica, imgPolitica1, imgPolitica2]} duration={5} transition={2} />
              <Text style={styles.textMotivatie}> Sugem pule la sefi  </Text>
        </View>
        )
    }
}