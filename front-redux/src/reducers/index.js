import { combineReducers } from "redux";
let contador = 1;

const initialState = {
    pedidos: []
}

function pedidosReducer(state = initialState, action) {
    if(action.type === "ADICIONAR") {
      return { pedidos: [...state.pedidos, {id: contador++, nome: action.nome}]}
    } else if(action.type === "REMOVE") {
    
      return { pedidos: (state.pedidos).filter(item => item.id != action.id)}
  
    } else{
      return state;
    }
  }


function clienteReducer(state = {cliente: "Cliente"} , action) {

    if (action.type === "ALTERAR") {
        return {cliente: action.value}; 
    }
    else{
        return state;
    }
    }


const reducers = combineReducers({pedidosReducer, clienteReducer}); 

export default reducers;