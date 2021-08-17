import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from '../Component/Header';
import { StyleSheet, Image, Text, View, ImageBackground, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import image from '../Assets/images/bg.jpg';
import profile from '../Assets/images/images.jpeg';

import { Entypo as Icones } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 as Icone } from '@expo/vector-icons';

export default function Index() {

  return (
    <>
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  <Header title='Total acumulado no mês:' valor='R$ 22.006,00' fontSize={14}/>
    <ScrollView style={styles.container}>
 
    {/*<View style={styles.containerAlt}>
            <Text style={styles.textAlt}>
           
              <Icone name="user" size={18} color="white" /> acessar conta         
            </Text>
    </View>*/}

    <View style={styles.faixaExterna}>

        <View style={styles.faixa}>
        <View style={styles.moedas}>
            <Text style={styles.textMoeda}>      
                 Conta Comum       
            </Text>
    </View>
    <View style={styles.containerMoedas}>
            <Text style={styles.textMoedas}>
             0 <MaterialCommunityIcons name="currency-usd-circle" size={25} color="yellow" /> 
            </Text>
    </View>
    </View>
    <View style={styles.imageLogo}>
    <Image source={profile} style={{ width: 100, height: 100}}/>
    </View>  
    </View>
    <Text style={styles.nome}>
           Fernando de Oliveira
           </Text>
           <Text style={styles.posicao}>  
           Posição no mês: #02 ( 15 acertos )
           </Text>


           <View style={styles.opcoes} >
             
           </View>
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
  
  imageLogo:{
    left:12,
    top:15,
    position: "absolute",
    borderRadius:300,
    overflow: 'hidden',
    borderWidth:7,
    borderColor:'#f6726d',
  },

  faixa: {
    alignItems:'stretch',
    height:50,
    width:'100%',
    marginTop:35,
    paddingTop:10,
    paddingBottom: 10,
    backgroundColor:'rgba(246, 114, 109, .8)',  
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
  },

  moedas: {
    width:'100%',
    alignItems:'center',
    textAlign:'center',
    position:'relative',
    marginTop:0,
    marginLeft:50,
    justifyContent:'center',
  },

  containerMoedas: {
    width:'100%',
    alignItems:'flex-end',
    position:'absolute',
    top:10,  
    right:15,  
  },

  textMoedas: {
    fontFamily:'Montserrat-SemiBold',
    fontSize:18,
    color:'#fff',
    textAlignVertical:"center",
    justifyContent:'center',
    alignItems:'center',
  },

  containerAlt: {
    width:'100%',
    alignItems:'flex-end',
    position:'absolute',
    top:13,  
    right:20,  
    justifyContent:'center',
  },

  textAlt: {
    fontFamily:'Montserrat-Medium',
    fontSize:16,
    color:'#fff',
    textAlign:'right',
  },

  faixaExterna: {
    height:115,
    paddingTop:10,
    paddingBottom: 10,
  },

  scroll: {
    flex:1,
  },

  image: {
    flex: 1,
  },

  textfaixa: {
    fontFamily:'Montserrat-Black',
    fontSize:14,
    color:'#fff',
    textAlign:'center'
  },

  textMoeda: {
    fontFamily:'Montserrat-Bold',
    fontSize:15,
    color:'#fff',
    textAlign:'center'
  },

  nome: {
    fontFamily:'Montserrat-SemiBold',
    fontSize:16,
    color:'#fff',
    textAlign:'right',
    marginTop:-10,
    marginRight:10,
  },

  posicao: {
    fontFamily:'Montserrat-Medium',
    fontSize:15,
    color:'#fff',
    textAlign:'right',
    marginTop:5,
    color: '#f6726d',
    marginRight:10,
  },

});

