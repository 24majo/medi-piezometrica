import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// Habilitar promesas para usar métodos asincrónicos
SQLite.enablePromise(true);

const TestSQLite = () => {
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        // Abriendo la base de datos con ubicación predeterminada
        const db = await SQLite.openDatabase({ name: 'test.db', location: 'default' });

        // Creación de la tabla y operaciones de transacción
        await db.transaction(async (tx) => {
          // Crear tabla si no existe
          await tx.executeSql(
            'CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY NOT NULL, name TEXT);'
          );
          
          // Insertar datos
          await tx.executeSql(
            'INSERT INTO people (name) VALUES (?);',
            ['Matías']
          );

          // Consultar datos
          const result = await tx.executeSql('SELECT * FROM people;');
          const rows = result[0].rows;
          console.log('Rows:', rows._array);
        });
      } catch (error) {
        console.error('Error al interactuar con la base de datos:', error);
      }
    };

    initializeDatabase();
  }, []);

  return (
    <View>
      <Text>Probando SQLite...</Text>
    </View>
  );
};

export default TestSQLite;
