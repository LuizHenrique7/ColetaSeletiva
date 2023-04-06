import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Formulario() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = () => {
    console.log('Mensagem enviada!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAIS INFORMAÇÕES</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mensagem"
        multiline={true}
        numberOfLines={20}
        value={mensagem}
        onChangeText={(text) => setMensagem(text)}
      />
      <TouchableOpacity style={styles.buttonEnviar} onPress={enviarMensagem}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela 1')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E0CF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#A0C447',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    paddingHorizontal: 60,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A0C447',
    marginTop: 10,
    marginBottom: 65,
  },
  buttonEnviar: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    paddingHorizontal: 60,
    
  },

});