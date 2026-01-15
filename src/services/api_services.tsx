import * as React from 'react';
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

  export function CreateUserPost(name: String, cpf: String, phone: String ){
     api.post("/v1/Users", {"name": name,"cpf": cpf, "phone": phone});
    return alert(`Usuario ${name} criado com sucesso!`)
  }
  
  export function getUsers(){
    return GetApi('Users');
  }

  export function getUser(id : any){
    return GetApi('Users/' + id);
  }

  export function getAccounts(){
    return GetApi('Accounts');
  }

  export function getTransactions(){
    return GetApi('OcurrencesRecord');
  }

  export function addTransaction(numberAccount : string, amount: number, type: string){

    console.log(type);

    api
    .put(`/v1/Accounts/${numberAccount}/${type == 'Credito'? 'AddCredit': 'Withdraw'}` , {"amount": amount})
    .then()
    .catch((err) => {
      alert("ops! ocorreu um erro" + err);
    });
    alert('Criado com sucesso')
  }

  export async function deleteUser(e : any){
    await api
          .delete("/v1/Users/" + e)
          .then()
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    return window.location.href = "/users";
  }

  
