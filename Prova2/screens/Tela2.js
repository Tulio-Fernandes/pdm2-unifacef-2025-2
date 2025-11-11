import { View, Text, FlatList, StyleSheet } from 'react-native';

const compromissosHoje = [
  { id: '1', hora: '08h00', titulo: 'Médico' },
  { id: '2', hora: '10h00', titulo: 'Reunião De Planejamento' },
  { id: '3', hora: '15h00', titulo: 'Saida Viagem' },
];

export default function Tela2() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.hora}>{item.hora}:</Text>
      <Text style={styles.titulo}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles}>
      <Text style={styles.header}>11/11(ter)</Text>
      <Text style={styles.text}>Tulio Fernandes Faria</Text>
      <Text style={styles.text}>Ciência da Computação - 8 semestre</Text>
      <FlatList
        data={compromissosHoje}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        initialNumToRender={8}
        windowSize={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 14, marginBottom: 10, elevation: 1, flexDirection: 'row', gap: 5 },
  text: { fontSize: 16, marginBottom: 20, textAlign: 'center'},
  hora: { fontWeight: 'bold', marginBottom: 4 },
  titulo: { color: '#333' }
});
