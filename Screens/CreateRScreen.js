import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/RelatorioContext';
import RelatorioForm from '../components/RelatorioForm';

const CreateRScreen = ({ navigation }) => {
  const { addRelatorio } = useContext(Context);

  return (
    <RelatorioForm
      onSubmit={(nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola) => {
        addRelatorio(nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola, () => navigation.navigate('IndexR'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateRScreen;

