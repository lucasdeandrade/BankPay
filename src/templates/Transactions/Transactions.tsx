import * as React from 'react';
import { ReactElement, useState } from 'react';
import { IUser, OcurrenceRecord } from '../../interfaces/IUser';
import {addTransaction, getTransactions } from '../../services/api_services';
import './Transactions.css'

interface ITransactionsProps {
}

const Transactions: React.FunctionComponent<ITransactionsProps> = (props) => {

    const elementTransactions: Array<ReactElement> = [];


    const [valName, setValName] = useState(false);
    const [valPhone, setValPhone] = useState(false);
    const [inputType, setInputType] = useState('Credito');
    const [inputnumberAccount, setInputNumberAccount] = useState(0);
    const [inputBalance, setInputBalance] = useState(0);
    const [modal, setModal] = useState(false);

    function ordernarId(a: IUser, b: IUser) {
      if (a.id < b.id ) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      // a deve ser igual a b
      return 0;
    }
  

    getTransactions().sort(ordernarId).forEach((e: OcurrenceRecord) => { 
      var date : Date = new Date(e.createdAt);

      elementTransactions.push(<tr className="table-infos">
                          <th scope="row">{e.id}</th>
                          <td>{date.toLocaleDateString()}</td>
                          <td className={e.typeRecord == 1? 'text-success': 'text-danger'}>
                            {e.typeRecord == 1? 'Credito' : 'Debito'}
                          </td>
                          <td>{e.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                        </tr>
      ) 
    })

    

    return (
        <div className='body'>
          <div className='card shadow-sm border-0 p-2'> 
            <div className='card-body'>
              <div className='card-title d-flex justify-content-between text-start fs-5 '>
                Transações
                <span  onClick={()=>{modal == true? setModal(false) : setModal(true)}} className="material-symbols-outlined p-1 add-icon">add</span>
              </div>
              <hr/>
              <table className="table table-striped rounded-3 overflow-hidden">
                <thead>
                  <tr>
                    <th className='col-1'>Id</th>
                    <th className='col-3'>Data</th>
                    <th className='col-2'>Tipo</th>
                    <th className='col-2'>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {elementTransactions}
                </tbody>
              </table>
            </div>
          </div>
          {/* MODAL */}
          <div className={`modalCreate shadow  card ${modal === true? 'able' : 'disable'}`}>
            <div className="card shadow-sm border-0 p-4">
              <div className="row">
                <div className="card-title text-start col fs-5">
                    Nova Transação
                </div>
                <div className="form col-4">
                  <select onChange={(e)=>{setInputType(e.target.value)}} className="form-select" id="floatingSelect" >
                    <option selected>Credito</option>
                    <option value="Debito">Debito</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="card-body">
                  <form>
                      <div className="form-group row align-items-center text-start">
                          <div className="col-3">
                              <label htmlFor="exampleInputEmail1">Nº Conta:</label>
                          </div>
                          <div className="col-4">
                              <input onChange={e => e.target.valueAsNumber > 9999? (setValName(true), setInputNumberAccount(e.target.valueAsNumber)): setValName(true)} type="number" required className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="12345"/>
                          </div>
                      </div>
                      <div className="form-group pt-3 row align-items-center text-start">
                          <div className="col-3">
                              <label htmlFor="exampleInputEmail1">Quantia:</label>
                          </div>
                          <div className="col-4">
                              <input onChange={e => e.target.valueAsNumber > 10? (setValPhone(true),  setInputBalance(e.target.valueAsNumber)): setValPhone(true)} required type="number"  className="form-control" id="inputTelefone"  placeholder="R$ 0,00"/>
                          </div>
                          <hr className='mt-4'/>
                      </div>
                      <div className="col-12 d-flex justify-content-end">
                          <button onClick={()=>{addTransaction(inputnumberAccount.toString(), inputBalance, inputType)}} className={`btn btn-secondary ${
                              (valName && valPhone)? 'able' : 'disabled'
                          }`} >Criar</button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      </div>
      );
};

export default Transactions;
function GetTransactions(id: number): OcurrenceRecord | PromiseLike<OcurrenceRecord> {
  throw new Error('Function not implemented.');
}

