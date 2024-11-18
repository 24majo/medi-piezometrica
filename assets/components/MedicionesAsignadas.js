//sin bd
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
//
// const mediciones = [
//   { id: '1', nombre: 'Medición A' },
//   { id: '2', nombre: 'Medición B' },
//   { id: '3', nombre: 'Medición C' },
// ];
//
// export default function MedicionesAsignadas({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={mediciones}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.item}
//             onPress={() => navigation.navigate('Medi_piezo', { medicionId: item.id, medicionNombre: item.nombre })}
//           >
//             <Text style={styles.text}>{item.nombre}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   item: { padding: 20, marginVertical: 8, backgroundColor: '#ddd', borderRadius: 8 },
//   text: { fontSize: 18 },
// });
//-----------------------------------------------------------------------------------------------------------------------
// Para base de datos en pg
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

// export default function MedicionesAsignadas({ navigation }) {
//   const [mediciones, setMediciones] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Función para obtener las mediciones de la API
//     const fetchMediciones = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/mediciones'); 
//         const data = await response.json();
//         setMediciones(data);
//       } catch (error) {
//         console.error('Error al obtener mediciones:', error);
//       } finally {
//         setLoading(false); // Oculta el indicador de carga al finalizar
//       }
//     };

//     fetchMediciones();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Cargando mediciones...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={mediciones}
//         keyExtractor={(item) => item.id.toString()} 
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.item}
//             onPress={() => navigation.navigate('Medi_piezo', { medicionId: item.id, medicionNombre: item.ClvAprovechamiento })}
//           >
//             <Text style={styles.text}>{item.ClvAprovechamiento}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   item: { padding: 20, marginVertical: 8, backgroundColor: '#ddd', borderRadius: 8 },
//   text: { fontSize: 18 },
// });
//para bd en sqlite
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import SQLite from 'react-native-sqlite-storage';
//
// SQLite.enablePromise(true);
//
// // Conexión a la base de datos SQLite
// const db = SQLite.openDatabase({ name: 'mediciones.sqlite', location: 'default' });
// import * as SQLite from 'expo-sqlite';
// const db = SQLite.openDatabase('mediciones.sqlite');
//
// export default function MedicionesAsignadas({ navigation }) {
//     const [mediciones, setMediciones] = useState([]);
//
//     // Función para cargar datos desde la base de datos
//     const cargarMediciones = () => {
//         db.transaction(tx => {
//             tx.executeSql(
//                 "SELECT name FROM sqlite_master WHERE type='table' AND name='tabla_dep_piezo';",
//                 [],
//                 (_, { rows }) => {
//                     if (rows.length === 0) {
//                         console.error("La tabla 'tabla_dep_piezo' no existe.");
//                     } else {
//                         console.log("La tabla 'tabla_dep_piezo' existe.");
//                         cargarMediciones();
//                     }
//                 },
//                 (error) => {
//                     console.error('Error al verificar la tabla: ', error);
//                 }
//             );
//         });
//
//     };
//
//     // Cargar mediciones al montar el componente
//     useEffect(() => {
//         cargarMediciones();
//     }, []);
//
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={mediciones}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity
//                         style={styles.item}
//                         onPress={() => navigation.navigate('Medi_piezo', { medicionId: item.id, medicionNombre: item.nombre })}
//                     >
//                         <Text style={styles.text}>{item.nombre}</Text>
//                     </TouchableOpacity>
//                 )}
//                 ListEmptyComponent={<Text>No hay mediciones disponibles</Text>}
//             />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 20 },
//     item: { padding: 20, marginVertical: 8, backgroundColor: '#ddd', borderRadius: 8 },
//     text: { fontSize: 18 },
// });
//para expo-sqlite
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import SQLite from 'expo-sqlite';
//
// // Abre la base de datos
// const db = SQLite.openDatabase('mediciones.sqlite');
//
// export default function MedicionesAsignadas({ navigation }) {
//     const [mediciones, setMediciones] = useState([]);
//
//     // Función para cargar datos desde la base de datos
//     const cargarMediciones = () => {
//         // Verifica si la base de datos se abrió correctamente
//         if (db) {
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     'SELECT id, IdMedicion, ClvAprovechamiento FROM tabla_dep_piezo;',
//                     [],
//                     (_, results) => {
//                         const rows = results.rows;
//                         let datos = [];
//                         for (let i = 0; i < rows.length; i++) {
//                             datos.push({
//                                 id: rows.item(i).id.toString(),
//                                 nombre: rows.item(i).ClvAprovechamiento,
//                             });
//                         }
//                         setMediciones(datos);
//                     },
//                     (error) => {
//                         console.error('Error al cargar mediciones: ', error);
//                     }
//                 );
//             });
//         } else {
//             console.error('Error al abrir la base de datos.');
//         }
//     };
//
//     // Cargar mediciones al montar el componente
//     useEffect(() => {
//         cargarMediciones();
//     }, []);
//
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={mediciones}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity
//                         style={styles.item}
//                         onPress={() => navigation.navigate('Medi_piezo', { medicionId: item.id, medicionNombre: item.nombre })}
//                     >
//                         <Text style={styles.text}>{item.nombre}</Text>
//                     </TouchableOpacity>
//                 )}
//                 ListEmptyComponent={<Text>No hay mediciones disponibles</Text>}
//             />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 20 },
//     item: { padding: 20, marginVertical: 8, backgroundColor: '#ddd', borderRadius: 8 },
//     text: { fontSize: 18 },
// });
// //verificar
// import React from 'react';
// import { View, Text } from 'react-native';
// import * as SQLite from 'expo-sqlite';
//
// console.log('SQLite:', SQLite);
//
// const MedicionesAsignadas = () => {
//     return (
//         <View>
//             <Text>Mediciones Asignadas</Text>
//         </View>
//     );
// };
//
// export default MedicionesAsignadas;
//
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// Abre la base de datos (si no existe, la crea)
const openDatabase = () => {
    try {
        const db = SQLite.openDatabase({ name: 'myDatabase.db', location: 'default' });
        return db;
    } catch (error) {
        console.log("Error al abrir la base de datos:", error);
        return null;
    }
};

export default function MedicionesAsignadas() {
    const [mediciones, setMediciones] = useState([]);
    const db = openDatabase();

    useEffect(() => {
        if (db) {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS mediciones (id INTEGER PRIMARY KEY NOT NULL, nombre TEXT, valor REAL);',
                    [],
                    () => console.log('Tabla creada o ya existente'),
                    error => console.log('Error al crear la tabla: ', error)
                );
            });

            insertarMedicionPrueba();
            obtenerMediciones();
        } else {
            console.log("Error: No se pudo abrir la base de datos.");
        }
    }, []);
    useEffect(() => {
        return () => {
            db.close().then(() => console.log('Base de datos cerrada')).catch(error => console.log(error));
        };
    }, []);


    // Función para obtener mediciones desde la base de datos
    const obtenerMediciones = () => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM mediciones',
                [],
                (txObj, resultSet) => {
                    const medicionesArray = resultSet?.rows?._array ?? [];
                    setMediciones(medicionesArray);
                },
                (txObj, error) => console.log('Error al obtener mediciones: ', error)
            );
        });
    };
    const insertarMedicionPrueba = () => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO mediciones (nombre, valor) VALUES (?, ?);',
                ['Temperatura', 25.5],
                () => console.log('Medición insertada'),
                (txObj, error) => console.log('Error al insertar medición: ', error)
            );
        });
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mediciones Asignadas</Text>
            <FlatList
                data={mediciones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nombre}</Text>
                        <Text>{item.valor}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
