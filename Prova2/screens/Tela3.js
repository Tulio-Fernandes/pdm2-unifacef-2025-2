import { View, Text, SectionList, StyleSheet } from 'react-native';

const semana = [
  {
    title: 'Segunda-feira (10/11)',
    data: [
      { id: 'seg-1', hora: '09h30',   titulo: 'Dentista' },
      { id: 'seg-2', hora: '16h00',   titulo: 'Pilates'  },
    ],
  },
  {
    title: 'Terça-feira (11/11)',
    data: [
      { id: 'ter-1', hora: '08h00', titulo: 'Médico' },
      { id: 'ter-2', hora: '10h30', titulo: 'Reunião De Planejamento' },
      { id: 'ter-3', hora: '15h00', titulo: 'Saída Viagem' },
    ],
  },
 {
    title: 'Quarta-feira (12/11)',
    data: [
        { id: 'quart-1', hora: '09h00', titulo: 'Congresso'},
        { id: 'quart-2', hora: '12h30', titulo: 'Almoço com executivos'},
        { id: 'quart-3', hora: '20h30', titulo: 'Jantar de confraternização'},
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
        sections={semana}
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
