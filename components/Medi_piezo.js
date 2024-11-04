import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Medi_piezo({ route, navigation }) {
  const { medicionId, medicionNombre } = route.params;
  const [valor, setValor] = useState('');

  const navegar_pe = () => {
    navigation.navigate('Profundidad_Estatica', { medicionId, medicionNombre})
  };
    const navegar_pd = () => {
    navigation.navigate('Profundidad_Dinamica', { medicionId, medicionNombre })
  };

return (
    <View style={styles.container}>
      <Text style={styles.label}>Formulario para {medicionNombre}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Profundidad Estática" onPress={navegar_pe} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Profundidad Dinámica" onPress={navegar_pd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
    },
  label: { 
    fontSize: 18, 
    marginBottom: 10 
  },
  buttonContainer: {
    marginVertical: 10, 
    borderRadius: 10,   
    overflow: 'hidden',
  },
});
