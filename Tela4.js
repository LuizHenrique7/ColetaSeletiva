import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { useNavigation } from '@react-navigation/native';

const Tela4 = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3E0CF" />
      <View style={styles.statusBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>ROTAS REALIZADAS</Text>
        <Text style={styles.text}>
          A Secretaria Municipal de Agricultura e Meio Ambiente disponibiliza a Coleta Seletiva nos seguintes bairros:
          Centro, Independência e Santa Rita.
        </Text>
        <View style={styles.imagemContainer}>
          <Image style={styles.imagem} source={require('./image/tela4coleta.jpeg')} />
        </View>
        <Text style={styles.title2}>Centro de Mendes</Text>
        <Text style={styles.text}>
          Rua Alberto Paiva » Rua Adélia Vieira Nunes » Rua Adolfo B. Figueiredo Junior » Avenida Júlio Braga » Rua
          Capitão Francisco Cabral (Pontos em Rosa)
        </Text>
        <View style={styles.imagemMapContainer}>
          <ImageZoom
            cropWidth={350}
            cropHeight={250}
            imageWidth={350}
            imageHeight={250}
            pinchToZoom={true}
            enableSwipeDown={false}
          >
            <Image style={styles.imagemMap} source={require('./image/tela4map.jpeg')} />
          </ImageZoom>
        </View>
        <Text style={styles.title2}>Bairro Independência</Text>
        <Text style={styles.text}>
          RJ 127 Rua da Capela » Rua Carmen Lopes Costa » Rua Alto Boa Vista » Rua Ator Fregolente (até esquina com a
          Rua Dr. Manoel Filho) » Rua Dr. Manoel Tavares Filho » Avenida Governador Roberto Silveira » Rua Ator Fregolente »
          Rua Belo Horizonte » Rua Fiscal Marcelino de Paula » Ruas Jair Teixeira » Travessa Jair Teixeira » Rua Demétrio
          Xavier » Rua Vereador Abelardo Neopomuceno » Rua Silvio Brandão » Rua Nilson de Oliveira » Travessa Visconde dos
          Santos, retornando pela Rua João Demétrio Xavier » Rua Fiscal Marcelino de Paula » Avenida Governador Roberto
          Silveira » Rua Alvaro Berardineli » Estrada da Saudade » Avenida Onze de Julho (Pontos em Laranja)
        </Text>
        <View style={styles.imagemMapContainer}>
          <ImageZoom
            cropWidth={350}
            cropHeight={250}
            imageWidth={350}
            imageHeight={250}
            pinchToZoom={true}
            enableSwipeDown={false}
          >
            <Image style={styles.imagemMap} source={require('./image/tela4map2.jpeg')} />
          </ImageZoom>
        </View>
        <Text style={styles.title2}>Bairro Santa Rita</Text>
        <Text style={styles.text}>
          RJ 127 » Avenida Orsinda » Rua Francisco Alves » Rua Arthur Leandro Costa retorna pela Rua Francisco Alves » Rua
          Antonio Caramez » Rua Maestro Moises Nunes da Silva » Rua Modesto Mexias » Rua Vicente Rocha » Rua Luiz Fonseca »
          Travessa C » Rua Antonio Alves » Rua Antonio de Macedo » Rua Joaquim José Bernardo de Loyola » Rua Miguel dos
          Santos Correa » Rua Julio Lopes » Rua Vereador Arthur Marques dos Santos » Servidão Carlinhos Mazzoni » Servidão
          José Valentin » Rua Prefeito Antonio Caramez » Rua Santa Otília » Travessa Maria Peres » Rua Barão de Santa Cruz
          » Rua Maria Peres até a RJ 127. (Pontos em Azul)
        </Text>
        <View style={styles.imagemMapContainer}>
          <ImageZoom
            cropWidth={350}
            cropHeight={250}
            imageWidth={350}
            imageHeight={250}
            pinchToZoom={true}
            enableSwipeDown={false}
          >
            <Image style={styles.imagemMap} source={require('./image/tela4map3.jpeg')} />
          </ImageZoom>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2023 Secretaria Municipal de Agricultura e Meio Ambiente</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#F3E0CF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imagemContainer: {
    width: 200,
    height: 250,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    marginVertical: 20,
    textAlign: 'justify',
  },
  title: {
    color: '#A0C447',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  imagemMapContainer: {
    width: '100%',
    height: 250,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemMap: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title2: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 70,
  },
  footer: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#999999',
  },
});

export default Tela4;