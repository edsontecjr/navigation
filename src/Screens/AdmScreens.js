import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ADMInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controle e auxilia nos processos de direção, utilizando ferramentas da informática. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.
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
