import React from 'react';
import { useSelector, useDispatch } from "react-redux";


export default function App() {

  const [inputPedidos, setInputPedidos] = React.useState("");
  const [inputCliente, setInputCliente] = React.useState("");

  //Redux
  const pedidos = useSelector((state) => state.pedidosReducer.pedidos);
  const stateCliente = useSelector(state => state.clienteReducer.cliente);
  const dispatch = useDispatch();

function addCompra(event){

  event.preventDefault();

  dispatch( {type: "ADICIONAR", nome: inputPedidos});
  setInputPedidos("");
}
 function removePedidos(event) {
  event.preventDefault();

   dispatch( {type: "REMOVE", id: event.target.id});

 }
function altCliente(event) {
  setInputCliente(event.target.value);
  dispatch( {type: "ALTERAR", value: event.target.value});
  
}

return (
  <>
  
  <div class="container-fluid bg-transparent" style={{height:'100vh'}}> 
  <div className="d-flex justify-content-between p-3"> 
    <section className=" bg-success container w-5 p-5 my-5"> 
  

      <h1 className= "display-6">Lista de Pedidos</h1>
        <form onSubmit={addCompra}>
          <input 
            className="form-control" 
            placeholder="Insira aqui seus pedidos..."  
            value={inputPedidos}
            onChange={(event) => setInputPedidos(event.target.value)}  
          />
          <button className="btn btn-danger my-3">Adicionar</button>
        </form>
      <h2></h2>
      <table className="table table-striped table-hover" >
        <thead> 
          <tr> 
            <th scope="col">Posição</th>
            <th scope="col">Produtos</th>
            <th scope="col">Apagar</th>
          </tr> 
        </thead>
        {pedidos.map((compra) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{compra.id}</th>
                <td>{compra.nome}</td>
                <td><button id={compra.id} className="btn btn-danger my-3" onClick={removePedidos}>Apagar</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
      <form>
        <h1>{stateCliente}</h1>
        <input className="form-control my-4"  
        placeholder="Digite o nome do cliente"
         value={inputCliente}
        onChange={altCliente}/>
      </form>
    </section>

  </div>
  </div>
  </>
);
}