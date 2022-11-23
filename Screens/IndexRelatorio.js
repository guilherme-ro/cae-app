import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/RelatorioContext';
import { Feather } from '@expo/vector-icons';

const IndexRelatorio = ({ navigation }) => {
  const { state, deleteRelatorio } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(relatorio) => relatorio.nome}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowR', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.nome}>
                  {item.nome} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteRelatorio(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexRelatorio.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('CreateR')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  nome: {
    fontSize: 18,
  },
  icon: {
    fontSize: 22,
  },
});

export default IndexRelatorio;