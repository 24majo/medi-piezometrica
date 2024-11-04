import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mediciones.db');

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS mediciones (id INTEGER PRIMARY KEY AUTOINCREMENT, medicionId TEXT, medicionNombre TEXT, valor TEXT);'
    );
  });
};

export const insertMedicion = (medicionId, medicionNombre, valor) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO mediciones (medicionId, medicionNombre, valor) VALUES (?, ?, ?);',
      [medicionId, medicionNombre, valor]
    );
  });
};

export const fetchMediciones = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM mediciones;',
      [],
      (_, { rows }) => {
        callback(rows._array); // Devuelve un array de resultados
      }
    );
  });
};
