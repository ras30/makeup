import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite aqui"
      />

      {/* Linha 1 */}
      <View style={styles.row}>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Base líquida.jpeg')}
            style={styles.productImage}
          />
          <Text>BASE LÍQUIDA MATTE MARY K. MARCA: MARY KAY R$ 38,99</Text>
        </View>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Mascara de cilios.jpeg')}
            style={styles.productImage}
          />
          <Text>MÁSCARA DE CÍLIOS R$ 82,90</Text>
        </View>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Esponja de maquiagem.jpeg')}
            style={styles.productImage}
          />
          <Text>ESPONJA DE MAQUIAGEM R$ 23,69</Text>
        </View>
      </View>

      {/* Linha 2 */}
      <View style={styles.row}>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Paleta de sombras.jpeg')}
            style={styles.productImage}
          />
          <Text>PALETA DE SOMBRAS NÁDIA TAMBASCO R$35,00</Text>
        </View>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Corretivo líquido.jpeg')}
            style={styles.productImage}
          />
          <Text>CORRETIVO LÍQUIDO R$ 39,00</Text>
        </View>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Contorno em bastão.jpeg')}
            style={styles.productImage}
          />
          <Text>CONTORNO EM BASTÃO BEGE MARIANA R$ 70,90</Text>
        </View>
      </View>

      {/* Linha 3 */}
      <View style={styles.row}>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Pó facial.jpeg')}
            style={styles.productImage}
          />
          <Text>BOCA ROSA BY PAYOT PÓ FACIAL R$ 36,90</Text>
        </View>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Blush.jpeg')}
            style={styles.productImage}
          />
          <Text>MAX LOVE BLUSH 10G 4 MAX LOVE R$ 9,99</Text>
        </View>
      </View>

      {/* Linha 4 */}
      <View style={styles.row}>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Blush vermelho.jpeg')}
            style={styles.productImage}
          />
          <Text>BLUSH VERMELHO R$ 35,90</Text>
        </View>
        <View style={styles.productContainer}>
          <Image
            source={require('./src/imagens/Océane blush.jpeg')}
            style={styles.productImage}
          />
          <Text>OCÉANE BLUSH R$ 26,90</Text>
        </View>
      </View>

      {/* Botão com cor de fundo branca */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC8C8',
    height: '100%',
    padding: 16,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

