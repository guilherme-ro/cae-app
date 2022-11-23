import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/RelatorioContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowRScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const relatorio = state.find(
    (relatorio) => relatorio.id === navigation.getParam('id')
  );

  return (
    <>
      <View style={{ padding: 16 }}>
        <Text style={{padding: 8, fontSize: 18, fontWeight: 'bold'}}>Cadastro de Relatório</Text>
      </View>
      
      <View style={{ padding: 24 }}>
        <Text style={styles.campo}>Relatório: <Text style={styles.conteudo}>{relatorio.nome}</Text></Text>
        <Text style={styles.campo}>Escola: <Text style={styles.conteudo}>{relatorio.escola}</Text></Text>
        <Text style={styles.campo}>Fone: <Text style={styles.conteudo}>{relatorio.fone}</Text></Text>
        <Text style={styles.campo}>Endereço: <Text style={styles.conteudo}>{relatorio.end}</Text></Text>
        <Text style={styles.campo}>Data: <Text style={styles.conteudo}>{relatorio.data}</Text></Text>
        <Text style={styles.campo}>Horário da Visita: Das: <Text style={styles.conteudo}>{relatorio.horVisitaInicio} 
        <Text style={styles.campo}> às</Text> {relatorio.horVisitaFim}</Text></Text>
        <Text style={styles.campo}>No de Alunos atendidos no dia: <Text style={styles.conteudo}>{relatorio.nroAlunosDia}</Text></Text>
        <Text style={styles.campo}>Total de Alunos Matriculados: <Text style={styles.conteudo}>{relatorio.totalAlunos}</Text></Text>
        <Text style={styles.campo}>Período de Atendimento: <Text style={styles.conteudo}>{relatorio.perAtend}</Text></Text>
        <Text style={styles.campo}>Responsável CAE: <Text style={styles.conteudo}>{relatorio.responsavelCAE}</Text></Text>
        <Text style={styles.campo}>Diretor(a): <Text style={styles.conteudo}>{relatorio.diretorEscola}</Text></Text>
      </View>
      
    </>
  );
};

ShowRScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditR', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  campo: {
    fontSize: 16,
    paddingVertical: 10,
    fontWeight: 'bold'
  },
  conteudo: {
    fontWeight: 'normal'
  }
});

export default ShowRScreen;