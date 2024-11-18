import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('mediciones.sqlite');


// crear la tabla
export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tabla_dep_piezo (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        IdMedicion INTEGER, 
        ClvAprovechamiento TEXT, 
        Profundidad_NE REAL, 
        Profundidad_ND REAL
      );`,
      [],
      () => {
        console.log("Tabla 'tabla_dep_piezo' verificada o creada exitosamente.");
        initializeData(); // Llamada para inicializar datos
      },
      (tx, error) => {
        console.log("Error al crear/verificar la tabla:", error);
      }
    );
  });
};

// insertar las mediciones de prueba si no existen
const initializeData = () => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT COUNT(*) as count FROM tabla_dep_piezo;', 
      [],
      (_, { rows }) => {
        if (rows.item(0).count === 0) { //si no hay registros inserta los datos de prueba
          insertMedicion(1, "ABC 1");
          insertMedicion(2, "ABC 2");
          insertMedicion(3, "ABC 3");
          console.log("Mediciones de prueba insertadas.");
        } else {
          console.log("La tabla ya contiene datos. No se insertaron mediciones de prueba.");
        }
      }
    );
  });
};

// insertar una nueva medicion
export const insertMedicion = (IdMedicion, ClvAprovechamiento) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO tabla_dep_piezo (IdMedicion, ClvAprovechamiento, Profundidad_NE, Profundidad_ND) 
       VALUES (?, ?, NULL, NULL);`,
      [IdMedicion, ClvAprovechamiento],
      () => {
        console.log(`Medición con IdMedicion ${IdMedicion} insertada.`);
      },
      (tx, error) => {
        console.log("Error al insertar medición:", error);
      }
    );
  });
};

// obtener todas las mediciones
export const fetchMediciones = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM tabla_dep_piezo;',
      [],
      (_, { rows }) => {
        callback(rows._array); // devuelve los datos en un array
      },
      (tx, error) => {
        console.log("Error al obtener mediciones:", error);
      }
    );
  });
};
