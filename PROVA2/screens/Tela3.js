import { View, Text, SectionList, StyleSheet } from 'react-native';

const pessoas = [
  {
    title: '(Eu)',
    data: [
      { id: 'eu-1', hora: '09h30',   titulo: 'Reunião "Daily"' },
      { id: 'eu-2', hora: '14h00',   titulo: 'Reunião com cliente Carros & Carros' },
      { id: 'eu-3', hora: '16h30',   titulo: 'Prazo final Projeto X'  },
    ],
  },
  {
    title: 'Jurema(chefe)',
    data: [
      { id: 'ju-1', hora: '09h30', titulo: 'Reunião "Daily"' },
      { id: 'ju-2', hora: '12h00', titulo: 'Almoço com a diretoria' },
      { id: 'ju-3', hora: '15h00', titulo: 'Saída viagem' },
    ],
  },
 {
    title: 'Aderbal',
    data: [
        { id: 'ad-1', hora: '09h30', titulo: 'Reunião "Daily"'},
        { id: 'ad-2', hora: '13h30', titulo: 'Visita técnica Uni-FACEF'},
        { id: 'ad-3', hora: '16h30', titulo: 'Prazo final Projeto X'},
    ],
 },
];

export default function Tela3() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.hora}>{item.hora}:</Text>
      <Text style={styles.titulo}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tulio Fernandes Faria</Text>
      <Text style={styles.text}>Ciência da Computação - 8 semestre</Text>

      <SectionList
        sections={pessoas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  text: { fontSize: 16, marginBottom: 20, textAlign: 'center'},

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 1,
    flexDirection: 'row',
    gap: 5
  },
  hora: { fontWeight: 'bold', marginBottom: 4 },
  titulo: { color: '#333' }
});
