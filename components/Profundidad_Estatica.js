import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { insertMedicion } from '../database';

export default function Profundidad_Estatica({ route, navigation }) {
  const { medicionId, medicionNombre } = route.params;
  const [valor, setValor] = useState('');

  const handleSave = () => {
    console.log(`Medición ${medicionNombre} (${medicionId}): ${valor}`);
    // insertMedicion(medicionId, medicionNombre, valor);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Formulario para {medicionNombre}</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el valor"
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 20 },
});
/////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { insertMedicion, fetchMediciones } from '../database';

// export default function Profundidad_Estatica({ route, navigation }) {
//   const { medicionId, medicionNombre } = route.params;
//   const [valor, setValor] = useState('');

//   const handleSave = async () => {
//     console.log(`Medición ${medicionNombre} (${medicionId}): ${valor}`);
//     insertMedicion(medicionId, medicionNombre, valor);
//     navigation.goBack();
//     // Aquí podrías agregar lógica para sincronizar los datos
//     // syncWithServer();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Formulario para {medicionNombre}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Ingresa el valor"
//         value={valor}
//         onChangeText={setValor}
//       />
//       <Button title="Guardar" onPress={handleSave} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   label: { fontSize: 18, marginBottom: 10 },
//   input: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 20 },
// });
