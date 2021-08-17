import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from '../Component/Header';
import Logo from '../Component/Logo';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, ScrollView, ImageBackground, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import image from '../Assets/images/bg.jpg';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { AntDesign as Icone } from '@expo/vector-icons';


export default function Register() {

    const navigation = useNavigation();


  return (
    
    <>
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>

    <ScrollView style={styles.container}>
    <Header title='Cadastre-se' fontSize={18}/>
    <KeyboardAvoidingView   style={styles.containerKey}>

    <Logo />

    <View style={styles.containerLogin}>
 
    <TextInput style={styles.input}  placeholderTextColor="#999"  placeholder='Primeiro nome' />
    <TextInput style={styles.input}  placeholderTextColor="#999"  placeholder='Último nome' />
    <TextInput style={styles.input}  placeholderTextColor="#999"  placeholder='E-mail' />
    <TextInput style={styles.input}  placeholderTextColor="#999"  placeholder='Senha' />
    <TextInput style={styles.input}  placeholderTextColor="#999"  placeholder='CPF' />
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Form')} >
        <Text style={styles.textWhite}>Registrar</Text>
    </TouchableOpacity >
    

 

    <View style={styles.containerBase}>
    <Text style={styles.textSenha}> Já possui uma conta?  </Text>
     
      <TouchableOpacity style={styles.buttonicon} onPress={()=>navigation.navigate('Login')} >
      <Icone name="login" size={18} color="white" />
        <Text style={styles.textWhiteIcon}>Login</Text> 
     </TouchableOpacity >
    </View>

      </View>
  
      </KeyboardAvoidingView>
      <StatusBar style="light" />
     
    </ScrollView>  
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },

  containerKey: {
    flex:1,
    paddingHorizontal:60,
    justifyContent:'center',
    alignItems:'center',

  },


  scroll: {
    flex:1,
  },

  image: {
    flex: 1,


  },
  

  containerBase: {
    alignItems:'center',


    flex:1, 
},

  buttonicon: {
    flexDirection: "row",
    color:'#fff', 
    textAlign:'center', 
    width:150,
    marginVertical:20,
    padding:15,
    borderRadius:50, 
    fontFamily:'Montserrat-SemiBold', 
    backgroundColor:'#22606b',
    justifyContent:'center',

  },

  textWhiteIcon: {
    fontFamily:'Montserrat-SemiBold',
    color:'#fff',
    textAlign: 'center',
    fontSize:14,
    marginLeft: 10,

  
  },

  containerLogin: {
    alignItems: 'stretch',
    width:'100%', 
    flex:1, 
  },

  button: {
    marginVertical: 20,
    height: 45,
    borderRadius: 30,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor:'#f6726d',  

    
    
  },
  textWhite: {
    color:'#fff',
    textAlign: 'center',
    fontFamily:'Montserrat-SemiBold',
    fontSize: 16,

  },
  

  textSenha: {
    fontFamily:'Montserrat-SemiBold',
    alignItems:'baseline',
    color:'#fff',
    textAlign: 'center',
    marginTop:5,

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
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor:'#686c70',
    fontFamily:'Montserrat',
  
  },


});

