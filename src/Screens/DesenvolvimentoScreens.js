import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DesenvolvimentoInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'darkred',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
