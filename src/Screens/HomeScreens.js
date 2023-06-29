import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={[styles.buttonText, { fontWeight: 'bold', color: 'darkred' }]}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ADM')}>
        <Text style={[styles.buttonText, { fontWeight: 'bold', color: 'darkred' }]}>ADM</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Desenvolvimento')}>
        <Text style={[styles.buttonText, { fontWeight: 'bold', color: 'darkred' }]}>Desenvolvimento de Sistemas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Farmacia')}>
        <Text style={[styles.buttonText, { fontWeight: 'bold', color: 'darkred' }]}>Farmácia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    width: '100%',
    height: 60,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});



