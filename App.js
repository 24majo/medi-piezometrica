import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MedicionesAsignadas from './assets/components/MedicionesAsignadas';
import Medi_piezo from './assets/components/Medi_piezo';
import Profundidad_Dinamica from './assets/components/Profundidad_Dinamica';
import Profundidad_Estatica from './assets/components/Profundidad_Estatica';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Asignadas">
        <Stack.Screen name="Asignadas" component={MedicionesAsignadas} options={{ title: 'Asignadas' }} />
        <Stack.Screen name="Medi_piezo" component={Medi_piezo} options={{ title: 'Medición' }} />
        <Stack.Screen name="Profundidad_Dinamica" component={Profundidad_Dinamica} options={{ title: 'Profundidad Dinámica' }} />
        <Stack.Screen name="Profundidad_Estatica" component={Profundidad_Estatica} options={{ title: 'Profundidad Estática' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

///////////////////////////////////////////////////////////////
// // App.js
// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import MedicionesAsignadas from './components/MedicionesAsignadas';
// import Medi_piezo from './components/Medi_piezo';
// import Profundidad_Dinamica from './components/Profundidad_Dinamica';
// import Profundidad_Estatica from './components/Profundidad_Estatica';
// import { createTables } from './database';

// const Stack = createStackNavigator();

// export default function App() {
//   useEffect(() => {
//     createTables();
//     // fetchMediciones();
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Asignadas">
//         <Stack.Screen name="Asignadas" component={MedicionesAsignadas} options={{ title: 'Asignadas' }} />
//         <Stack.Screen name="Medi_piezo" component={Medi_piezo} options={{ title: 'Medición' }} />
//         <Stack.Screen name="Profundidad_Dinamica" component={Profundidad_Dinamica} options={{ title: 'Profundidad Dinámica' }} />
//         <Stack.Screen name="Profundidad_Estatica" component={Profundidad_Estatica} options={{ title: 'Profundidad Estática' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import MedicionesAsignadas from './components/MedicionesAsignadas';
// import Medi_piezo from './components/Medi_piezo';
// import Profundidad_Dinamica from './components/Profundidad_Dinamica';
// import Profundidad_Estatica from './components/Profundidad_Estatica';
// import * as SQLite from 'expo-sqlite';

// const Stack = createStackNavigator();

// const testDatabaseConnection = () => {
//   try {
//     const db = SQLite.openDatabase('test.db');
//     db.transaction(tx => {
//       tx.executeSql('SELECT 1;', [], (_, result) => {
//         console.log('Conexión exitosa a SQLite:', result);
//       });
//     });
//   } catch (error) {
//     console.log('Error al conectar con SQLite:', error);
//   }
// };

// export default function App() {
//   useEffect(() => {
//     console.log('Probando conexión a SQLite...');
//     testDatabaseConnection();
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Asignadas">
//         <Stack.Screen name="Asignadas" component={MedicionesAsignadas} options={{ title: 'Asignadas' }} />
//         <Stack.Screen name="Medi_piezo" component={Medi_piezo} options={{ title: 'Medición' }} />
//         <Stack.Screen name="Profundidad_Dinamica" component={Profundidad_Dinamica} options={{ title: 'Profundidad Dinámica' }} />
//         <Stack.Screen name="Profundidad_Estatica" component={Profundidad_Estatica} options={{ title: 'Profundidad Estática' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//test de sqlite
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import TestSQLite from './components/TestSQLite';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <TestSQLite />
//     </NavigationContainer>
//   );
// }

//  const Stack = createStackNavigator();

// export default function App() {
//   useEffect(() => {
//     // createTables(); // crear la tabla y carga las mediciones de prueba
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Asignadas">
//         <Stack.Screen name="Asignadas" component={MedicionesAsignadas} options={{ title: 'Asignadas' }} />
//         <Stack.Screen name="Medi_piezo" component={Medi_piezo} options={{ title: 'Medición' }} />
//         <Stack.Screen name="Profundidad_Dinamica" component={Profundidad_Dinamica} options={{ title: 'Profundidad Dinámica' }} />
//         <Stack.Screen name="Profundidad_Estatica" component={Profundidad_Estatica} options={{ title: 'Profundidad Estática' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
