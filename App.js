import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';


import Page1 from "./Tela2"
import Page2 from "./Tela3"
import Page3 from './Tela4'
import Page4 from './Tela5'


const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imagem} source={require('./image/logo.jpeg')} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela 2')}>
          <Text style={styles.buttonText}>QUEM SOMOS?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela 3')}>
          <Text style={styles.buttonText}>QUAIS MATERIAIS COLETAMOS?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela 4')}>
          <Text style={styles.buttonText}>ROTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela 5')}>
          <Text style={styles.buttonText}>MAIS INFORMAÇÕES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Tela 1" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="Tela 2" component={Page1} />
        <Stack.Screen name="Tela 3" component={Page2} />
        <Stack.Screen name="Tela 4" component={Page3} />
        <Stack.Screen name="Tela 5" component={Page4} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F3E0CF',
    marginBottom: 0,
  },
  button: {
    backgroundColor: '#A0C447',
    borderRadius: 5,
    padding: 16,
    margin: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  imagem: {
    width: 200,
    height: 250,
    marginTop: 50,
  },
});