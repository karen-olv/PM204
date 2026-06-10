import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Perfil from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Repaso de Componentes</Text>
      <Text>--------------------------------</Text>
      <Image source={require('./assets/wave.png')} />
      <Perfil 
        nombre="Karen Olvera Ramirez" 
        carrera="Ingenieria en Sistemas" 
        materia="Programacion Movil" 
        cuatri="9no" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});