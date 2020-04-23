import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import ReactNativeScreen from './src/screens/ReactNativeScreen';
import HelloWorldScreen from './src/screens/HelloWorldScreen';
import GreetingsScreen from './src/screens/GreetingsScreen';
import CounterScreen from './src/screens/CounterScreen';
import MapScreen from './src/screens/MapScreen';
import CovidListScreen from './src/screens/CovidListScreen';


const navigator = createStackNavigator({
  Home: HomeScreen,
  ReactNative: ReactNativeScreen,
  HelloWorld: HelloWorldScreen,
  Greetings: GreetingsScreen,
  Counter: CounterScreen,
  Map: MapScreen,
  CovidList: CovidListScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Covid 19'
  }
});

export default createAppContainer(navigator);
