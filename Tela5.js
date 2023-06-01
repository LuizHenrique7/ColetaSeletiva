import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Tela5 = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async () => {
    try {
      const data = {
        from: 'coletaseletiva2023@outlook.com', 
        to: 'coletaseletiva2023@outlook.com', 
        subject: 'Assunto do Email',
        text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
        apiKey: '', 
      }; Alert.alert('Email enviado com sucesso');

      const response = await axios.post('https://api.elasticemail.com/v2/email/send', data);

      console.log('Email enviado com sucesso', response.data);
      
    } catch (error) {
      console.error('Erro ao enviar o email', error);
      
      Alert.alert('Erro', 'Ocorreu um erro ao enviar o email.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3E0CF"/>
      <View style={styles.statusBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <Text style={styles.title}>MAIS INFORMAÇÕES</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setNome(text)}
          value={nome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setTelefone(text)}
          value={telefone}
          placeholder="Telefone"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setMensagem(text)}
          value={mensagem}
          placeholder="Mensagem"
          multiline
        />
        <Button title="Enviar" onPress={handleSubmit} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2023 Secretaria Municipal de Agricultura e Meio Ambiente</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3E0CF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  statusBar: {
    height: StatusBar.currentHeight + 10,
    backgroundColor: '#F3E0CF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingHorizontal: 20,
  },
  backButton: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 250,
    marginBottom: 35,
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#999999',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#A0C447',
    marginTop: 30,
    marginBottom: 65,
    textAlign: "center",
  },
});

export default Tela5;