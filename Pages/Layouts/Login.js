import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from '../Component/Header';
import Logo from '../Component/Logo';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { AntDesign as Icone } from '@expo/vector-icons';
import image from '../Assets/images/bg.jpg';



export default function Login() {

    const navigation = useNavigation();

  
  return (
    <>
  
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Logo />


    <View style={styles.containerLogin}>

    <TextInput style={styles.input}   placeholderTextColor="#999"  placeholder='e-mail / usuário' />
   

    <TextInput style={styles.input}  placeholderTextColor="#999"  placeholder='senha' />
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Index')} >
    <Icone name="login" size={18} color="white" />
        <Text style={styles.textWhite}>Login</Text>
    </TouchableOpacity >


  


   <Text style={{ color:'#999', textAlign:'center', fontFamily:'Montserrat-SemiBold', }}> Esqueceu sua senha? </Text>

   
      </View>

      <View style={styles.containerBase}>
      <Text style={styles.textSenha}> Não possui uma conta? </Text>
     
      <TouchableOpacity style={styles.buttonicon} onPress={()=>navigation.navigate('Register')} >
      <Icon name="user-circle" size={18} color="white" />
        <Text style={styles.textWhiteIcon}>Criar minha conta</Text> 
     </TouchableOpacity >
    </View>
      <StatusBar style="light" />

      </ImageBackground>
    </View>


    </>
  );



}

const styles = StyleSheet.create({



  container: {
    flex:1,
  
    backgroundColor: '#3f3e44',
  
  
  },

  containerBase: {
 

      marginTop:70,


  },

  image: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal:60,
    paddingVertical:50,  
    alignItems: 'center',
  },
  
buttonicon: {
  flexDirection: "row",
  justifyContent:'center',
  color:'#fff', 
  textAlign:'center', 
  width:230,
  marginVertical:20,
  padding:15,
  borderRadius:50, 
  fontFamily:'Montserrat-SemiBold', 
  backgroundColor:'#22606b',

},

  containerLogin: {
    
    alignItems: 'stretch',
    width:'100%', 
    marginTop:60,
    justifyContent: "center"
  },

  button: {
    flexDirection: "row",
    marginVertical: 20,
    height: 50,
    borderRadius: 30,
    alignItems:'center',
    paddingHorizontal: 24,
    justifyContent:'center',
    backgroundColor:'#f6726d',  
  
    
  },

  buttonSign: { 
    color:'#fff', 
    textAlign:'center', 
    width:190,
    marginVertical:20,
    padding:15,
    borderRadius:50, 
    fontFamily:'Montserrat-SemiBold', 
    backgroundColor:'#22606b',

},



  textWhite: {
    fontFamily:'Montserrat-SemiBold',
    color:'#fff',
    textAlign: 'center',
    marginLeft: 10,
    fontSize: 15,

  },

  textWhiteIcon: {
    fontFamily:'Montserrat-SemiBold',
    color:'#fff',
    textAlign: 'center',
    fontSize:14,
    marginLeft: 10,

  
  },
  


  textSenha: {
    alignItems:'baseline',
    color:'#fff',
    textAlign: 'center',
    marginTop:25,
    fontFamily:'Montserrat',

  },


  input:{
    marginTop: 10,
    height: 50,
    color:'#fff',
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingHorizontal: 24,
    fontSize: 14,
    backgroundColor:'#242b35',
    borderBottomWidth:1,
    borderRightWidth:1,
    borderColor:'#686c70',
    fontFamily:'Montserrat',


  },


});

