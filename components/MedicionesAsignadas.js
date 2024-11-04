import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const mediciones = [
  { id: '1', nombre: 'Medición A' },
  { id: '2', nombre: 'Medición B' },
  { id: '3', nombre: 'Medición C' },
];

export default function MedicionesAsignadas({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={mediciones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Medi_piezo', { medicionId: item.id, medicionNombre: item.nombre })}
          >
            <Text style={styles.text}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 20, marginVertical: 8, backgroundColor: '#ddd', borderRadius: 8 },
  text: { fontSize: 18 },
});
