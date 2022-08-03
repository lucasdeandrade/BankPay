import * as React from 'react';
import { Link } from 'react-router-dom';
import { AddIcon } from '../../components/CustomIcons/Add/Add';
import './Transactions.css'

interface ITransactionsProps {
}

const Transactions: React.FunctionComponent<ITransactionsProps> = (props) => {
    return (
        <div className='body'>
          <div className='card shadow-sm border-0 p-2'> 
            <div className='card-body'>
              <div className='card-title d-flex justify-content-between text-start fs-5 '>
                Transações
                <AddIcon route={''}></AddIcon>
              </div>
              <hr/>
              <table className="table table-striped rounded-3 overflow-hidden">
                <thead>
                  <tr>
                    <th className='col-1'>Id</th>
                    <th className='col-3'>Nome</th>
                    <th className='col-2'>Nº Conta</th>
                    <th className='col-2'>Valor</th>
                    <th className='col-2'></th>
                  </tr>
                </thead>
                <tbody>
                  {}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
};

export default Transactions;
