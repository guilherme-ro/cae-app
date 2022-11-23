import createDataContext from './createDataContext';

const relatorioReducer = (state, action) => {
  const length = state.length;
  switch (action.type) {
    case 'edit_relatorio':
      return state.map((relatorio) => {
        return relatorio.id === action.payload.id ? action.payload : relatorio;
      });
    case 'delete_relatorio':
      return state.filter((relatorio) => relatorio.id !== action.payload);
    case 'add_relatorio':
      return [
        ...state,
        {
          id: length+1,
          nome: action.payload.nome,
          escola: action.payload.escola,
          fone: action.payload.fone,
          end: action.payload.end,
          data: action.payload.data,
          horVisitaInicio: action.payload.horVisitaInicio,
          horVisitaFim: action.payload.horVisitaFim,
          nroAlunosDia: action.payload.nroAlunosDia,
          totalAlunos: action.payload.totalAlunos,
          perAtend: action.payload.perAtend,
          responsavelCAE: action.payload.responsavelCAE,
          diretorEscola: action.payload.diretor,
        },
      ];
    default:
      return state;
  }
};

const addRelatorio = (dispatch) => {
  return (nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola, callback) => {
    dispatch({ type: 'add_relatorio', payload: { nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola } });
    if (callback) {
      callback();
    }
  };
};
const deleteRelatorio = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_relatorio', payload: id });
  };
};
const editRelatorio = (dispatch) => {
  return (id,nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola, callback) => {
    dispatch({
      type: 'edit_relatorio',
      payload: { id,nome, escola,fone,end,data,horVisitaInicio,horVisitaFim,nroAlunosDia,totalAlunos,perAtend,responsavelCAE,diretorEscola },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  relatorioReducer,
  { addRelatorio, deleteRelatorio, editRelatorio },
  [{  
      id: 1,  
      nome: 'Relatório 1',
      escola: 'Escola Reginato',
      fone: '(14)99999-9999',
      end: 'Rua X',
      data: '10/10/2022',
      horVisitaInicio: '12h',
      horVisitaFim: '13h',
      nroAlunosDia: '100',
      totalAlunos: '500',
      perAtend: 'Tarde',
      responsavelCAE: 'José',
      diretorEscola: 'João'}]
);