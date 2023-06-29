import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A ETEC de Itanhaém iniciou suas atividades em 01/08/2006, como Classe Descentralizada da ETEC “Adolpho Berezin”
		  de Mongaguá, através de um convênio do Governo do Estado de São Paulo com a atual administração da Prefeitura Municipal de Itanhaém.
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
	fontSize: 25
  },
});
