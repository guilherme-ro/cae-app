import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/RelatorioContext';
import RelatorioForm from '../components/RelatorioForm';

const EditRScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editRelatorio } = useContext(Context);

  const relatorio = state.find(relatorio => relatorio.id === id);

  return (
    <RelatorioForm
      initialValues={{ 
        nome: relatorio.nome,
        escola: relatorio.escola,
        fone: relatorio.fone,
        end: relatorio.end,
        data: relatorio.data,
        horVisitaInicio: relatorio.horVisitaInicio,
        horVisitaFim: relatorio.horVisitaFim,
        nroAlunosDia: relatorio.nroAlunosDia,
        totalAlunos: relatorio.totalAlunos,
        perAtend: relatorio.perAtend,
        responsavelCAE: relatorio.responsavelCAE,
        diretorEscola: relatorio.diretorEscola, }}
      onSubmit={(nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola) => {
        editRelatorio(id, nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditRScreen;

