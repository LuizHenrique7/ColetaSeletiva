import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { Image } from 'react-native';

export default Tela1 = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>QUAIS MATERIAIS COLETAMOS?</Text>
                    <Text style={styles.title2}>SEPARE O SEU MATERIAL RECICLÁVEL LIMPO E FIQUE ATENTO AO CAMINHO</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.imagem} source={require('./image/tela3plastico.jpeg')} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 30, }}>Plástico:</Text>
                    </View>
                    <Text style={[styles.text, {marginTop: 20}]}><Text style={{fontWeight: 'bold'}}>Reciclável:</Text>Embalagens, Garrafas, Copos, Tampas, Sacolas Plásticas, Baldes, Potes de Alimentos, PVC.</Text>
                    <Text style={[styles.text, {marginTop: 20}]}><Text style={{fontWeight: 'bold'}}>Não Reciclável:</Text>Fraudas Descartáveis, Adesivos e Embalagens com lâminas metalizadas como bombons e biscoitos.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.imagem} source={require('./image/tela3papel.jpeg')} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 30, }}>Papel:</Text>
                    </View>
                    <Text style={[styles.text, {marginTop: 20}]}><Text style={{fontWeight: 'bold'}}>Reciclável:</Text>Papel, Livros, Jornais, Papelão, Revistas, Cadernos, Embalagens, Cartonadas(leite, suco, etc)</Text>
                    <Text style={[styles.text, {marginTop: 20}]}><Text style={{fontWeight: 'bold'}}>Não Reciclável:</Text>Guardanapos, Papel, Higiênico, Etiquetas Adesivas, Papeis Metalizados e Plastificados, papel toalha</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.imagem} source={require('./image/tela3vidro.jpeg')} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 30, }}>Vidro:</Text>
                    </View>
                    <Text style={[styles.text, {marginTop: 20}]}><Text style={{fontWeight: 'bold'}}>Reciclável:</Text>Garrafas, Frascos, Potes de Produtos Alimentícios, Copos</Text>
                    <Text style={[styles.text, {marginTop: 20}]}><Text style={{fontWeight: 'bold'}}>Não Reciclável:</Text>Cristais, Espelhos, Lâmpadas, Ampolas de Medicamentos e Porcelanas.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.imagem} source={require('./image/tela3metal.jpeg')} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 30, }}>Metal:</Text>
                    </View>
                    <Text style={[styles.text, {marginTop: 20}]}><Text style={{fontWeight: 'bold'}}>Reciclável:</Text>Latas de alumínio (refrigerantes), Latas de Aço (sardinha), Ferramentas, Arame, Canos.</Text>
                    <Text style={[styles.text, {marginTop: 20}]}><Text style={{fontWeight: 'bold'}}>Não Reciclável:</Text>Clipes, Grampos, Pilhas, Baterias, Esponjas de Aço, Latas de Tinta, Veneno, Verniz e Solventes Químicos</Text>
                    
                    </View>
                    
                    
                    
            </View>
            <ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela 1')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3E0CF',
        paddingHorizontal: 20,
        
    },
    text: {
        marginVertical: 10,
        fontSize: 14,
        lineHeight: 22,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:  '#A0C447',
        marginTop: 80,
        marginBottom: 10,
    },
    title2: {
        fontSize: 14,
        fontWeight: 'bold',
        color:  '#A0C447',
        marginTop: 10,
        marginBottom: 10,
    },
    imagem: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        borderRadius: 3,
        marginTop: 30,
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
});