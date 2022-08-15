import './CardNews.css';
import { ReactElement } from 'react';
import { IUser } from '../../../interfaces/IUser';
import * as React from 'react';
import { getUsers } from '../../../services/api_services';

interface ICardNewsProps {
}

const CardNews: React.FunctionComponent<ICardNewsProps> = (props) => {
    const elementUsers : Array<ReactElement> = ([]);
    
    const resp = getUsers().sort((a: IUser,b: IUser) => a.id - b.id );
    
    resp.forEach((e: IUser) => { 
      let date: Date = new Date(e.account.openingAt);
      
      elementUsers.push( <div className='card mx-4 p-1 mt-2 '>
                          <div className='card-body row text-start p-0 '>
                            <div className='col-9 py-2 px-4'>
                              <strong > Cadastro Novo usuario,</strong>
                              <div>Nome: {e.name} | Telefone: {e.phone} | Conta: {e.account.numberAccount} </div>
                            </div>
                            <div className='col-3 py-1 px-4 text-end align-items-stretch'>
                              <div className='date-time'>{date.toLocaleString()}</div>
                            </div>
                          </div>
                        </div>)
    })
     

  return <div className='card col py-4 m-2 bg-white card-news'>
             <div className=" card-title text-start px-4">
               <h5>Novidades</h5>
               <hr />
             </div>
             <div className='d-flex flex-column news-body'>
              {elementUsers}
             </div>
         </div>;
};


export default CardNews;

