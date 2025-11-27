import { View, StyleSheet, Text, TouchableOpacity  } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda do dia</Text>
      <Text style={styles.text}>Tulio Fernandes Faria</Text>
      <Text style={styles.text}>Ciência da Computação - 8 semestre</Text>
      <View style={styles.buttonsCol}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Meus compromissos')}
          >
          <Text style={styles.buttonText}>Meus compromissos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Compromissos da equipe')}
          >
          <Text style={styles.buttonText}>Compromissos da equipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 16, marginBottom: 20,},
  buttonsCol: { alignSelf: 'stretch', gap: 10 },
  button: { backgroundColor: '#007AFF', padding: 5, borderRadius: 5, alignItems: 'center', width: 'max-content', margin: 'auto', color: 'white'},
  buttonText: {color: 'white'},
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign:'center'}
});
