import React from 'react'
import styles from './styles'
import {Button, View} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

export default class MeniuStanga extends React.Component
{
    constructor(props){
        super(props)
    
        this.state = {
          open : false,
          value : null,
          items : [{
            label:'Dorb Vicele',
            value: 'dorb',
          },
          {
          label : 'Danela Presedinta',
          value : 'danela',
          },
          {
            label: 'Pacuraru Secretaru',
            value: 'robert',
          }
        ],
        }
    
        this.setOpen = this.setOpen.bind(this)
        this.setValue = this.setValue.bind(this)
        this.setItems = this.setItems.bind(this)
      }
    
    
    setOpen(open){
      this.setState({
          open
      })
    }

    setValue(callback)
    {
      this.setState(state => ({
          value: callback(state.value)
      }))
    }

    setItems(callback)
    {
      this.setState(state => ({
          items: callback(state.items)
      }))
    }

    render()
    {
        const {open, value, items} = this.state
        return(
        <View style={styles.meniuStangaContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={this.setOpen}
            setValue={this.setValue}
            setItems={this.setItems}
            dropDownDirection="BOTTOM"
            placeholder="Despre noi"
            rtl={true}
            style={{
              backgroundColor: "crimson"
            }}
            labelStyle={{
              backgroundColor: 'blue'
            }}
            itemStyle={{alignItems: 'center'}}
          />
          <View style={styles.butonContactContainer}>
            <Button title="Contact"/>
          </View>
          <View style={styles.butonProiecteContainer}>
            <Button title='Proiecte' />
          </View>
        </View>
        )
    }
}