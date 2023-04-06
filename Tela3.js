import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Image } from 'react-native';

export default Tela1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            
            <Text>QUAIS MATERIAIS COLETAMOS?</Text>
            
            <Text style={styles.text}>
              O programa de Coleta Seletiva Municipal visa proporcionar para esses materiais um destino diferente do que acontece com lixo que é encaminhado aos lixões ou aterros sanitários. Quando esses materiais recicláveis são descartados junto aos demais resíduos sólidos, eles acabam sendo contaminados e perdem o potencial de serem recuperados atrávés da reutilização ou da reciclagem. A coleta seletiva faz parte de um ciclo que tem início com a geração e o descarte dos resíduos  e se completa quando o material reciclável é reempregado em um processo produtivo.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3E0CF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20, 
    },
    text: {
      marginVertical: 20,
    },
    button: {
        backgroundColor: '#A0C447',
        borderRadius: 5,
        padding: 10,
        marginTop: 100,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
