import { View, StyleSheet, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda</Text>
      <Text style={styles.text}>Tulio Fernandes Faria</Text>
      <Text style={styles.text}>Ciência da Computação - 8 semestre</Text>
      <View style={styles.buttonsCol}>
        <View style={styles.spacer}>
          <Button
            title="Compromissos Do Dia"
            onPress={() => navigation.navigate('Compromissos Do Dia')}
          />
        </View>
        <View style={styles.spacer}>
          <Button
            title="Compromissos Da Semana"
            onPress={() => navigation.navigate('Compromissos Da Semana')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 16, marginBottom: 20,},
  buttonsCol: { alignSelf: 'stretch' },
  spacer: { width: 'max-content', margin:'auto' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign:'center'}
});
