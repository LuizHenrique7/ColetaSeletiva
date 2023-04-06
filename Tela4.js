import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { Image } from 'react-native';


export default Tela4 = ({ navigation }) => {


    return (
        <View style={{flexGrow: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Rotas realizadas</Text>
                <Text style={styles.text}>A Secretaria Municipal de Agricultura e Meio Ambiente  disponibiliza a Coleta Seletiva nos seguintes bairros: Centro, Independência e Santa Rita.  </Text>
                <Image style={styles.imagem} source={require('./image/tela4coleta.jpeg')} />
                <Text style={styles.title2}>Centro de Mendes</Text>
                <Text style={styles.text}>Rua Alberto Paiva » Rua Adélia Vieira Nunes » Rua Adolfo B. Figueiredo Junior » Avenida Júlio Braga » Rua Capitão Francisco Cabral (Pontos em Rosa)</Text>
                <Image style={styles.imagemMap} source={require('./image/tela4map.jpeg')} />
                <Text style={styles.title2}>Bairro Independência</Text>
                <Text style={styles.text}>RJ 127 Rua da Capela » Rua Carmen Lopes Costa » Rua Alto Boa Vista » Rua Ator Fregolente (até esquina com a Rua Dr. Manoel Filho) » Rua Dr. Manoel Tavares Filho » Avenida Governador Roberto Silveira » Rua Ator Fregolente » Rua Belo Horizonte » Rua Fiscal Marcelino de Paula » Ruas Jair Teixeira » Travessa Jair Teixeira » Rua Demétrio Xavier » Rua Vereador Abelardo Neopomuceno » Rua Silvio Brandão » Rua Nilson de Oliveira » Travessa Visconde dos Santos, retornando pela Rua João Demétrio Xavier » Rua Fiscal Marcelino de Paula » Avenida Governador Roberto Silveira » Rua Alvaro Berardineli » Estrada da Saudade » Avenida Onze de Julho (Pontos em Laranja)</Text>
                <Image style={styles.imagemMap} source={require('./image/tela4map2.jpeg')} />
                <Text style={styles.title2}>Bairro Santa Rita</Text>
                <Text style={styles.text}>RJ 127 » Avenida Orsinda » Rua Francisco Alves » Rua Arthur Leandro Costa retorna pela Rua Francisco Alves » Rua Antonio Caramez » Rua Maestro Moises Nunes da Silva » Rua Modesto Mexias » Rua Vicente Rocha » Rua Luiz Fonseca » Travessa C » Rua Antonio Alves » Rua Antonio de Macedo » Rua Joaquim José Bernardo de Loyola » Rua Miguel dos Santos Correa » Rua Julio Lopes » Rua Vereador Arthur Marques dos Santos » Servidão Carlinhos Mazzoni » Servidão José Valentin » Rua Prefeito Antonio Caramez » Rua Santa Otília » Travessa Maria Peres » Rua Barão de Santa Cruz » Rua Maria Peres até a RJ 127. (Pontos em Azul)</Text>
                <Image style={styles.imagemMap} source={require('./image/tela4map3.jpeg')} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela 1')}>
                  <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F3E0CF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20, 
    },
    imagem: {
        width: 200,
        height: 250,
        marginTop: 50,
        borderRadius: 5,
    },
    
    text:{ 
        marginVertical: 20, 
    },
    title:{
        color: '#A0C447',
        fontSize: 20,
        fontWeight: 'bold',
        color:  '#A0C447',
        marginTop: 80,
        marginBottom: 10,
    },
    imagemMap: {
        width: 350,
        height: 250,
        marginTop: 50,
        borderRadius: 5,

    },
    title2:{
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    button: {
        backgroundColor: '#A0C447',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        marginTop: 50,
        paddingHorizontal: 60,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
