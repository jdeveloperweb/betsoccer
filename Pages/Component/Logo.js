import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../Assets/images/logo.png';


function Logo() {


    return(
      <View style={styles.containerLogo}>   
      <Image source={logo} style={styles.imageLogo} />
      </View>
    );
}

const styles = StyleSheet.create({

  containerLogo: {

    marginBottom:30,
    justifyContent:'center',
    
  },

    textSlogan: {
      fontFamily:'Montserrat',
      color:'#fff',
      textAlign: 'center',
    },
  
    imageLogo:{
      height:125,
      resizeMode:'contain',
      marginTop:40,
    
     
  
    },
  });

export default Logo;