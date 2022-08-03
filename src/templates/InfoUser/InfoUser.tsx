import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IUser, OcurrenceRecord } from '../../interfaces/IUser';
import api from '../../services/api';
import { deleteUser, getUser } from '../../services/api_services';
import './InfoUser.css'

export interface IRowsInfo {
  datatime?: any;
  data?: any;
  text: String;
}

export function RowsInfo (props: IRowsInfo) {


  return (
    <div className='row justify-content-between'>
      <div className='col text-start  '>
        <strong>{props.text}:</strong>
      </div>
      <div className='col  text-end'>
        {props.data == null ? props.datatime :  props.data  }
      </div>
    </div>
  )
}



export interface IInfoUserProps {

}

export function InfoUser (props: IInfoUserProps) {

  const [user, setUser] = useState<IUser>();
  
  var url = window.location.href[window.location.href.length -1]
  api
      .get("/v1/Users/" + url)
      .then((response) => ((setUser(response.data))))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  


  function OcurrenceGet(){

    const [ocurrencesUser, setOcurrenceUser] = useState([]);

    api
      .get("/v1/Accounts/" + user?.account.numberAccount+ "/OcurrencesRecord/Statement")
      .then((response) => ((setOcurrenceUser(response.data))))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

    return ocurrencesUser;
  }

  const ocurrences : Array<ReactElement> = [];
  

  OcurrenceGet().forEach((o: OcurrenceRecord) => {
    ocurrences.push(
      <div className='card col-4 m-2 px-3 py-2 shadow'>
        <div className='card-title row justify-content-between '>
          {o.typeRecord == 1? 
            <div className='col text-start text-success'>Credito</div>
          : 
            <div className='col text-start text-danger'>Debito</div>
          }
          <div className='col-9 text-end date-ocurrence'>{o.createdAt.toLocaleString()}</div>
        </div>
        <div className='row'> 
            <RowsInfo text={'Valor'} data={o.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}/>
        </div>
      </div>
    )
  })

  return (
    <div className='body'>
      <div className='card py-2 border-0' style={{backgroundColor: '#434343'}}>  
        <div className='px-3 pb-1 row align-items-center justify-content-between bg-transparent'>
          <div className='col text-white text-start fs-5'>
            {user?.name.toUpperCase()}
          </div>
          <div className='d-flex col p-1 justify-content-end'>
            <span className="material-symbols-outlined bg-info icon-info ">edit_note</span>
            <Link to={'/users'}><span onClick={() => {deleteUser(user?.id)}} className="bg-danger material-symbols-outlined icon-info">delete</span></Link>
          </div>
        </div>
        <div className='card-body-info bg-white p-3 '>
          
          <div className='row justify-content-center py-3'>
            <div className='col-5 mx-4 p-3'>
              <div className='col-12 text-start pt-1'><h5>Cliente</h5><hr className='mb-2'/></div>
                <RowsInfo text={'Nome'} data={user?.name}/>
                <RowsInfo text={'Telefone'} data={user?.phone}/>
            </div>
            <div className='col-5 mx-4 p-3'>
              <div className='col-12 text-start pt-1'><h5>Conta</h5><hr  className='mb-2'/></div>
                <RowsInfo text={'Numero'} data={user?.account.numberAccount}/>
                <RowsInfo text={'Saldo'} data={user?.account.balance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}/>
                <RowsInfo text={'Data abertura'} datatime={user?.account.openingAt}/>
            </div>
          </div>
          <h3 className='py-3'>Movimentações</h3>
          <div className='row justify-content-center '>
          {ocurrences}
          </div>
        </div>
        <div className='card-footer'></div>
      </div>
    </div>
  );
}

