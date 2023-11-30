import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export function Cadastro2() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleButtonPress = () => {
    Alert.alert(
      `Texto do Input 1: ${input1}\nTexto do Input 2: ${input2}\nTexto do Input 3: ${input3}\nTexto do Input 4: ${input4}`
    );
    // Adicione aqui o código que deseja executar quando o botão for pressionado
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nº TELEFONE"
        onChangeText={(text) => setInput1(text)}
        value={input1}
      />
      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        onChangeText={(text) => setInput2(text)}
        value={input2}
      />
      <TextInput
        style={styles.input}
        placeholder="SENHA"
        onChangeText={(text) => setInput3(text)}
        value={input3}
      />
      <TextInput
        style={styles.input}
        placeholder="CONFIRMAR SENHA"
        onChangeText={(text) => setInput4(text)}
        value={input4}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
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
    borderWidth: 1,
    margin: 10,
    padding: 8,
    width: '80%',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
   color: 'white',

  },
});

