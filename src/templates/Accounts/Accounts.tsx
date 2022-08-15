import * as React from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AddIcon } from '../../components/CustomIcons/Add/Add';
import { Account, IUser } from '../../interfaces/IUser';
import { getAccounts } from '../../services/api_services';

interface IAccountsProps {
}

const Accounts: React.FunctionComponent<IAccountsProps> = (props) => {

    const elementAccounts : Array<ReactElement> = [];

    function ordernarId(a: Account, b: Account) {
        if (a.id < b.id ) {
        return -1;
        }
        if (a.id > b.id) {
        return 1;
        }
        // a deve ser igual a b
        return 0;
    }

    console.log(getAccounts);

    getAccounts().sort(ordernarId).forEach((e: Account) => { 
        elementAccounts.push(<tr className="table-infos">
                            <th scope="row">{e.id}</th>
                            <td>{e.userId}</td>
                            <td>{e.numberAccount}</td>
                            <td>{e.balance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                            
                        </tr>
        ) 
    })

    return (
        <div className='body'>
          <div className='card shadow-sm border-0 p-2'> 
            <div className='card-body'>
              <div className='card-title d-flex justify-content-between text-start fs-5'>
                Contas
                </div>
              <hr/>
              <table className="table table-striped rounded-3 overflow-hidden">
                <thead>
                  <tr>
                    <th className='col-1'>Id</th>
                    <th className='col-3'>Id Cliente</th>
                    <th className='col-2'>Nº Conta</th>
                    <th className='col-2'>Saldo Atual</th>
                  </tr>
                </thead>
                <tbody>
                  {elementAccounts}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
};

export default Accounts;
