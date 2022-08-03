import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser, OcurrenceRecord } from '../interfaces/IUser';

import api from './api'

  function GetApi(route: String){

    const [resp, setResp] = React.useState([]);

    React.useEffect(() => {
      api
      .get("/v1/" + route)
      .then((response) => ((setResp(response.data))))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, [''])

    return resp;
  } 

  export function CreateUserPost(name: String, phone: String ){
  
    api.post("/v1/Users", {"name": name,"phone": phone});

    alert("success")

  }
  
  

  export function getUsers(){
    
    return GetApi('Users');
  }

  export function getUser(id : any){
    return GetApi('Users/'+id);
  }

  export async function deleteUser(e : any){
    await api
          .delete("/v1/Users/" + e)
          .then()
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    return window.location.href = "/users"
  } 

  export function getAccounts(){
    return GetApi('Accounts');
  }




