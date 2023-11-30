import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export function Cadastro({navigation}) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleButtonPress = () => {
    Alert.alert(`Texto do Input 1: ${input1}\nTexto do Input 2: ${input2}`);
    // Adicione aqui o código que deseja executar quando o botão for pressionado
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ins5@aluno.ifal.edu.br"
        onChangeText={(text) => setInput1(text)}
        value={input1}
      />
      <TextInput
        style={styles.input}
        placeholder="*******"
        onChangeText={(text) => setInput2(text)}
        value={input2}
      />
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Cadastro2')}}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 8,
    width: '80%',
    backgroundColor: '#FFFFFF'
  },
  button: {
    backgroundColor: '#FFFF',
    padding: 10,
    borderRadius: 5,
    borderColor: 'gray',
    
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

