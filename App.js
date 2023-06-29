import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ETEC de Itanhaém</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Sobre (Ou quem somos)"
          onPress={() => navigation.navigate('Sobre')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Desenvolvimento de Sistemas"
          onPress={() => navigation.navigate('Desenvolvimento de Sistemas')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Administração"
          onPress={() => navigation.navigate('Administração')}
        />
      </View>
    </View>
  );
};

const SobreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A ETEC de Itanhaém iniciou suas atividades em 01/08/2006, como Classe Descentralizada da ETEC “Adolpho Berezin” de Mongaguá, através de um convênio do Governo do Estado de São Paulo com a atual administração da Prefeitura Municipal de Itanhaém.
      </Text>
    </View>
  );
};

const DesenvolvimentoDeSistemasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.
      </Text>
    </View>
  );
};

const AdministracaoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controle e auxilia nos processos de direção, utilizando ferramentas da informática. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
        <Stack.Screen name="Desenvolvimento de Sistemas" component={DesenvolvimentoDeSistemasScreen} />
        <Stack.Screen name="Administração" component={AdministracaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginHorizontal: 20,
    textAlign: 'justify',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default App;
