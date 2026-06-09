import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Repaso de Componentes</Text>
      <Text>--------------------------------</Text>
      <Perfil />
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