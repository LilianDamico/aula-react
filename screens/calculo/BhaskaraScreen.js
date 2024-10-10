import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BhaskaraScreen = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState(null);

  const calculateBhaskara = () => {
    const aVal = Number(a);
    const bVal = Number(b);
    const cVal = Number(c);

    if (isNaN(aVal) || isNaN(bVal) || isNaN(cVal)) {
      setResult('Favor, insirir valores válidos.');
      return;
    }

    /*
    isNaN é utilizado quando queremos conferir se é um numero válido
    */

    const delta = bVal * bVal - 4 * aVal * cVal;

    if (delta < 0) {
      setResult('Não há raízes reais.');
    } else {
      const x1 = (-bVal + Math.sqrt(delta)) / (2 * aVal);
      const x2 = (-bVal - Math.sqrt(delta)) / (2 * aVal);
      setResult(`Raízes: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Bhaskara</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor de a"
        keyboardType="default"
        value={a}
        onChangeText={text => setA(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de b"
        keyboardType="default"
        value={b}
        onChangeText={text => setB(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de c"
        keyboardType="default"
        value={c}
        onChangeText={text => setC(text)}
      />
      <Button title="Calcular" onPress={calculateBhaskara} />
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BhaskaraScreen;
