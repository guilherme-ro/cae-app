import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';



const RelatorioForm = ({ onSubmit, initialValues }) => {
  const [nome, setNome] = useState(initialValues.nome);
  const [escola, setEscola] = useState(initialValues.escola);
  const [fone, setFone] = useState(initialValues.fone);
  const [end, setEnd] = useState(initialValues.end);
  const [data, setData] = useState(initialValues.data);
  const [horVisitaInicio, setHorVisitaInicio] = useState(initialValues.horVisitaInicio);
  const [horVisitaFim, setHorVisitaFim] = useState(initialValues.horVisitaFim);
  const [nroAlunosDia, setNroAlunosDia] = useState(initialValues.nroAlunosDia);
  const [totalAlunos, setTotalAlunos] = useState(initialValues.totalAlunos);
  const [perAtend, setPerAtend] = useState(initialValues.perAtend);
  const [responsavelCAE, setResponsavelCAE] = useState(initialValues.responsavelCAE);
  const [diretorEscola, setDiretorEscola] = useState(initialValues.diretorEscola);
 
 
  return (
   <>
      <View style={{ padding: 16 }}>
        <Text style={{padding: 8, fontSize: 18, fontWeight: 'bold'}}>Cadastro de Relatório</Text>
      </View>
      <View style={{  padding: 16, paddingBottom: 100 }}>
                <Text style={styles.label}>Relatório:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={text => setNome(text)}
        />
        
        <Text style={styles.label}>Escola:</Text>
        <TextInput
          style={styles.input}
          value={escola}
          onChangeText={text => setEscola(text)}
        />
            
        <Text style={styles.label}>Fone:</Text>
        <TextInput
          style={styles.input}
          value={fone}
          onChangeText={text => setFone(text)}
        />
      
        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          value={end}
          onChangeText={text => setEnd(text)}
        />
      
        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          value={data}
          onChangeText={text => setData(text)}
        />
   
        <Text style={styles.label}>Horário da Visita: Das:</Text>
        <TextInput
          style={styles.input}
          value={horVisitaInicio}
          onChangeText={text => setHorVisitaInicio(text)}
        />
    
        <Text style={styles.label}>às:</Text>
        <TextInput
          style={styles.input}
          value={horVisitaFim}
          onChangeText={text => setHorVisitaFim(text)}
        />
     
        <Text style={styles.label}>No de alunos atendidos no dia:</Text>
        <TextInput
          style={styles.input}
          value={nroAlunosDia}
          onChangeText={text => setNroAlunosDia(text)}
        />
      
        <Text style={styles.label}>Total de alunos matriculados:</Text>
        <TextInput
          style={styles.input}
          value={totalAlunos}
          onChangeText={text => setTotalAlunos(text)}
        />
    
        <Text style={styles.label}>Período de Atendimento:</Text>
        <TextInput
          style={styles.input}
          value={perAtend}
          onChangeText={text => setPerAtend(text)}
        />
      
        <Text style={styles.label}>Responsável CAE:</Text>
        <TextInput
          style={styles.input}
          value={responsavelCAE}
          onChangeText={text => setResponsavelCAE(text)}
        />
   
        <Text style={styles.label}>Diretor(a):</Text>
        <TextInput
          style={styles.input}
          value={diretorEscola}
          onChangeText={text => setDiretorEscola(text)}
        />
       
       
        <View style={{ padding: 5 }}>
          <Button style={styles.botao} title="Enviar" onPress={() => onSubmit(nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola)} />
        </View>

      </View>
    </>
      
    
  );
};

RelatorioForm.defaultProps = {
  initialValues: {
      nome: '',
      escola: '',
      fone: '',
      end: '',
      data: '',
      horVisitaInicio: '',
      horVisitaFim: '',
      nroAlunosDia: '',
      totalAlunos: '',
      perAtend: '',
      responsavelCAE: '',
      diretorEscola: ''
  }
};



const styles = StyleSheet.create({
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  botao: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RelatorioForm;