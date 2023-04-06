import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native"
import { Image } from 'react-native';

export default Tela1 = ({ navigation }) => {

    return (
        <View style={{flexGrow: 1}}>   
        
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>COLETA SELETIVA</Text>
                <Image style={styles.imagem} source={require('./image/tela2.jpeg')} />
                <Text style={styles.text}>O programa de Coleta Seletiva Municipal visa proporcionar para esses materiais um destino diferente do que acontece com lixo que é encaminhado aos lixões ou aterros sanitários. Quando esses materiais recicláveis são descartados junto aos demais resíduos sólidos, eles acabam sendo contaminados e perdem o potencial de serem recuperados atrávés da reutilização ou da reciclagem. A coleta seletiva faz parte de um ciclo que tem início com a geração e o descarte dos resíduos  e se completa quando o material reciclável é reempregado em um processo produtivo.</Text>
                <Text style={styles.title}>COLETA DE ÓLEO USADO</Text>
                <Image style={styles.imagem} source={require('./image/tela2oleo.jpeg')} />
                <Text style={styles.text}>A secretaria Municipal de Agricultura e Meio Ambiente (SMAMA) é o orgão responsável pelo gerenciamento do Programa de Coleta de Óleo Usado Municipal. 
Uma vez na semana fazemos a coleta em locais mapeados como grandes geradores, que são as lanchonetes, restaurantes e bares, e também recebemos diretamente na Secretaria óleo usado dos munícipes.</Text>
                <Text style={styles.title}>Coleta de Resíduos Eletroeletrônicos </Text>
                <Image style={styles.imagem} source={require('./image/tela2eletronico.jpeg')} />
                <Text style={styles.text}>A Secretaria Municipal de Agricultura e Meio Ambiente (SMAMA) é o órgão responsável pelo gerenciamento do Programa de Coleta de Resíduos Eletroeletrônicos Municipal e recebe diretamente em sua sede os resíduos dos municípies. 
A Secretaria possui uma parceria com a Empresa GM&C  que faz a coleta, transporte e disposição final dos Resíduos Eletroeletrônicos no Município de Mendes</Text>
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
    text: {
        marginVertical: 20, 
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:  '#A0C447',
        marginTop: 80,
        marginBottom: 10,
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
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
    },
    imagem: {
        width: 200,
        height: 200,
        marginTop: 50,
        borderRadius: 5,
    },
});