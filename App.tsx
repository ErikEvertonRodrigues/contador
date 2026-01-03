import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [userInput, onChangeUserInput] = useState('1');

  function isNumeric(str: string) {
    return /^\d+$/.test(str);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  function SetCountToZero() {
    setCount(0);
  }

  function incrementByUserInput() {
    if (!isNumeric(userInput)) {
      Alert.alert('O texto digitado não é um número');
    } else {
      let num: number = Number(userInput);
      setCount(count + num);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Número atual: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={incrementCount}
          title='Adicionar 1'/>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Adicionar quantidade digitada pelo usuario</Text>
        <TextInput
          style={styles.textInput}
          editable
          maxLength={10}
          value={userInput}
          onChangeText={text => onChangeUserInput(text)}
        />
        <Button
          onPress={incrementByUserInput}
          title='Adicionar'
          color="#0f0"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          onPress={SetCountToZero}
          title='Zerar contador'
          color="#ff0000"
          />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textInput: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
  }
});
