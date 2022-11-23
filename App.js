import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexRelatorio from './Screens/IndexRelatorio';
import { Provider } from './context/RelatorioContext';
import ShowRScreen from './Screens/ShowRScreen';
import CreateRScreen from './Screens/CreateRScreen';
import EditRScreen from './Screens/EditRScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.layout}> 
        <Text style={styles.title}>CAE-APP</Text>
        <View style={{ marginTop: 10 }}>
          <Button
            style={styles.button}
            title="Relatórios"
            onPress={() => this.props.navigation.navigate('IndexR')}
          />
        </View>

      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    
    IndexR: IndexRelatorio,
    ShowR: ShowRScreen,
    CreateR: CreateRScreen,
    EditR: EditRScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'CAE-APP',
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
      return (
      <Provider>
        <AppContainer />
       </Provider>
  );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 24,
  },
});
