import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



function Header(props) {


    return(
        <View style={styles.container}>
            <Text style={{ fontSize: props.fontSize, color: 'white',fontFamily:'Montserrat' }} >
            {props.title}   <Text style={{ fontSize: props.fontSize, color: 'yellow',fontFamily:'Montserrat-SemiBold' }} >{props.valor}</Text> 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop:50,
      paddingBottom: 10,
      backgroundColor: '#22606b',
      alignItems: 'center',
    },
    headerText: {
      
      
      
      

    }
  });

export default Header;