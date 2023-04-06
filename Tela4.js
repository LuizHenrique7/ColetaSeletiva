import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Image } from 'react-native';


export default Tela4 = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text> ROTAS </Text>
            <Image source={require('./image/logo.jpeg')} />
            <Text style={styles.text}>A Secretaria Municipal de Agricultura e Meio Ambiente  disponibiliza a Coleta Seletiva nos seguintes bairros: Centro, Independência e Santa Rita.  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tela 5')}>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3E0CF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: 2,
        aspectRatio: 1,
        marginTop: 50,
      },
    
      text:{ 
      color: '#A0C447',
    },

});
