import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function SetCountToZero() {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text>Número atual: {count}</Text>
      <Button 
        onPress={incrementCount}
        title='Adicionar 1'/>
      <Button 
        onPress={SetCountToZero}
        title='Zerar contador'
        color="#00ff00"
        />
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
});
