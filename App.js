import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MedicionesAsignadas from './components/MedicionesAsignadas';
import Medi_piezo from './components/Medi_piezo';
import Profundidad_Dinamica from './components/Profundidad_Dinamica';
import Profundidad_Estatica from './components/Profundidad_Estatica';

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
//     // Aquí podrías agregar lógica para descargar datos de PostgreSQL
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
