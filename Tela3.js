import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tela1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3E0CF"/>
      <View style={styles.statusBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>QUAIS MATERIAIS COLETAMOS?</Text>
        <Text style={styles.title2}>SEPARE O SEU MATERIAL RECICLÁVEL LIMPO E FIQUE ATENTO AO CAMINHO</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagem} source={require('./image/tela3plastico.png')} />
          <Text style={styles.materialTitle}>Plástico:</Text>
        </View>
        <Text style={styles.text}>
          <Text style={styles.bold}>Reciclável:</Text>
          Embalagens, Garrafas, Copos, Tampas, Sacolas Plásticas, Baldes, Potes de Alimentos, PVC.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Não Reciclável:</Text>
          Fraudas Descartáveis, Adesivos e Embalagens com lâminas metalizadas como bombons e biscoitos.
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagem} source={require('./image/tela3papel.png')} />
          <Text style={styles.materialTitle}>Papel:</Text>
        </View>
        <Text style={styles.text}>
          <Text style={styles.bold}>Reciclável:</Text>
          Papel, Livros, Jornais, Papelão, Revistas, Cadernos, Embalagens, Cartonadas (leite, suco, etc).
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Não Reciclável:</Text>
          Guardanapos, Papel Higiênico, Etiquetas Adesivas, Papeis Metalizados e Plastificados, Papel Toalha.
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagem} source={require('./image/tela3vidro.png')} />
          <Text style={styles.materialTitle}>Vidro:</Text>
        </View>
        <Text style={styles.text}>
          <Text style={styles.bold}>Reciclável:</Text>
          Garrafas, Frascos, Potes de Produtos Alimentícios, Copos.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Não Reciclável:</Text>
          Cristais, Espelhos, Lâmpadas, Ampolas de Medicamentos e Porcelanas.
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.imagem} source={require('./image/tela3metal.png')} />
          <Text style={styles.materialTitle}>Metal:</Text>
        </View>
        <Text style={styles.text}>
          <Text style={styles.bold}>Reciclável:</Text>
          Latas de alumínio (refrigerantes), Latas de Aço (sardinha), Ferramentas, Arame, Canos.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Não Reciclável:</Text>
          Clipes, Grampos, Pilhas, Baterias, Esponjas de Aço, Latas de Tinta, Veneno, Verniz e Solventes Químicos.
        </Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2023 Secretaria Municipal de Agricultura e Meio Ambiente</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E0CF',
  },
  statusBar: {
    height: StatusBar.currentHeight + 20,
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
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A0C447',
    marginTop: 20,
    marginBottom: 10,
  },
  title2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#A0C447',
    marginTop: 10,
    marginBottom: 10,
  },
  imagem: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 3,
    marginTop: 30,
  },
  materialTitle: {
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 30,
  },
  text: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 20,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#A0C447',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    marginBottom: 35,
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#999999',
  },

});