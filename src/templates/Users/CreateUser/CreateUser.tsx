import { getValue } from '@testing-library/user-event/dist/utils';
import * as React from 'react';
import { useState } from 'react';
import {CreateUserPost} from '../../../services/api_services'
import './CreateUser.css'

interface ICreateUserProps {
}

const CreateUser: React.FunctionComponent<ICreateUserProps> = (props) => {


    const [valName, setValName] = useState(false);
    const [valPhone, setValPhone] = useState(false);
    const [valCpf, setValCpf] = useState(false);

    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputCpf, setInputCpf] = useState('');


  return <div className='body'>
            <div className="card shadow-sm border-0 p-4">
                <div className="card-title text-start fs-5">
                    Criando Cliente
                </div>
                <hr />
                <div className="card-body">
                    <form>
                        <div className="form-group row align-items-center text-start">
                            <div className="col-2">
                                <label htmlFor="exampleInputEmail1">Nome:</label>
                            </div>
                            <div className="col-4">
                                <input onChange={e => e.target.value.trim().length > 0? (setValName(true), setInputName(e.target.value.trim())): setValName(false)} type="string" required className="form-control" id="inputName" placeholder=""/>
                            </div>
                        </div>
                        <div className="form-group pt-3 row align-items-center text-start">
                            <div className="col-2">
                                <label htmlFor="exampleInputEmail1">Cpf:</label>
                            </div>
                            <div className="col-2">
                                <input onChange={e => e.target.value.trim().length > 0? (setValCpf(true), setInputCpf(e.target.value.trim())): setValCpf(false)} type="string" required className="form-control" id="inputCpf" placeholder=""/>
                            </div>
                        </div>
                        <div className="form-group pt-3 row align-items-center text-start">
                            <div className="col-2">
                                <label htmlFor="exampleInputEmail1">Telefone:</label>
                            </div>
                            <div className="col-2">
                                <input onChange={e => e.target.value.trim().length > 10? (setValPhone(true),  setInputPhone(e.target.value.trim())): setValPhone(false)} required type="tel"  className="form-control" id="inputTelefone"  placeholder="(00) 00000-0000"/>
                            </div>
                            <hr className='mt-4'/>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button onClick={()=>{ CreateUserPost(inputName, inputCpf, inputPhone)}} className={`btn btn-secondary ${
                                (valName && valPhone && valCpf)? 'able' : 'disabled'
                            }`} >Criar</button>
                        </div>
                    </form>
                </div>
            </div>
         </div>;
};

export default CreateUser;
