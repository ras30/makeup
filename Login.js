import React from 'react';
import { View, Image, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

export function Login({navigation}) {
  const handleButtonPress = (buttonNumber) => {
    Alert.alert(`Botão ${buttonNumber} pressionado!`);
    // Adicione aqui o código que deseja executar quando um botão for pressionado
  };

  return (
    <View style={styles.container}>
    
      <Image
        source={require('./src/imagens/MAKEUP.jpeg')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.buttonText}>Registra-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC8C8',
  },
  image: {
    width: '80%',
    height: '50%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#DA71AA', // Pode ajustar as cores conforme necessário
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});


