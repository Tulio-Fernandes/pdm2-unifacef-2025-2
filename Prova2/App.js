import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Home} />
        <Stack.Screen name="Compromissos Do Dia" component={Tela2}/>
        <Stack.Screen name="Compromissos Da Semana" component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
