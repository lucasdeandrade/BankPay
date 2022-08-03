import * as React from 'react';
import { ReactElement} from 'react';
import { Link } from 'react-router-dom';
import { AddIcon } from '../../components/CustomIcons/Add/Add';
import { IUser } from '../../interfaces/IUser';
import api from '../../services/api';
import {deleteUser, getUsers } from '../../services/api_services';
import './Users.css'

interface IUsersProps {
}

const Users: React.FunctionComponent<IUsersProps> = (props) => {


  const elementUsers : Array<ReactElement> = [];

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

  getUsers().sort(ordernarId).forEach((e: IUser) => { 
    elementUsers.push(<tr className="table-infos">
                        <th scope="row">{e.id}</th>
                        <td>{e.name}</td>
                        <td>{e.phone}</td>
                        <td>{e.account.numberAccount}</td>
                        <div className='icons border-bottom'>
                          <span className="material-symbols-outlined col-3 text-primary option-icons">edit_note</span>
                          <Link to={'/info/'+e.id}><span className="material-symbols-outlined col-3 text-success option-icons">description</span></Link>
                          <Link to={'/users'}><span onClick={() => {deleteUser(e.id)}} className="material-symbols-outlined col-3 text-danger option-icons">delete</span></Link>
                        </div>
                      </tr>
    ) 
  })

  

  return (
    <div className='body'>
      <div className='card shadow-sm border-0 p-2'> 
        <div className='card-body'>
          <div className='card-title d-flex justify-content-between text-start fs-5'>
            Clientes
            <AddIcon route={'/users/create'}></AddIcon>
          </div>
          <hr/>
          <table className="table table-striped rounded-3 overflow-hidden">
            <thead>
              <tr>
                <th className='col-1'>Id</th>
                <th className='col-3'>Nome</th>
                <th className='col-2'>Telefone</th>
                <th className='col-2'>Nº Conta</th>
                <th className='col-2'></th>
              </tr>
            </thead>
            <tbody>
              {elementUsers}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
