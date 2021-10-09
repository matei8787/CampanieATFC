import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    topViewContainer: {
      position: 'absolute',
      right: '0%',
      width:'90%',
      height: '5%',
      top:'0%',
    },
    meniuStangaContainer: {
      position:'absolute',
      width:'10%',
      height:'100%',
      top:'0%',
      left:'0%',
      backgroundColor:'yellow'
    },
    motivatieTextContainer: {
      width:'90%',
      height:'88%',
      position: 'absolute',
      top:'12%',
      right:0
    },
    image: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: '0%',
      left:'0%',
      justifyContent: "center"
    },
    text:{
      color: "#751600",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#fff"
    },
    textMotivatie:{
      color: "#751600",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
    },
    butonContactContainer:{
      position: 'absolute',
      bottom: 0,
      width:'100%'
    },
    butonProiecteContainer:{
      position: 'relative'
    },
  });
  export default styles