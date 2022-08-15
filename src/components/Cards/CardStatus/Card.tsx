// import * as React from 'react';
import { Link} from 'react-router-dom';
import './Card.css';
import * as React from 'react';
import {getUsers} from '../../../services/api_services';


interface ICardStatusProps {
  link?: String;
  subtitle: String;
  color?: any;
  linearGradient? : Array<String>;
  data? : String;
  icone? : String;
}

const CardStatus: React.FunctionComponent<ICardStatusProps> = (props) => {

  const totalClients = getUsers().length;
  const data = props.data? props.data : '0'
  console.log(data)


  return <Link to={`${props.link}`} className='status-card card col p-0 m-3 bg-white'>
             <div className="card-body py-2 px-3 m-0">
               <div className='row'>
                 <div className='col-8'>
                   <div className="statusNumber text-start" style={{color: props.color}}>{data}</div>
                   <div className="statusDesc text-muted text-start">{props.subtitle}</div>
                 </div>   
                 <span className="col icon material-symbols-outlined" style={{color: props.color}}>
                   {props.icone}
                 </span>
               </div> 
             </div>
               <div 
                 className="card-footer d-flex justify-content-between text-white" 
                 style={{backgroundImage: `linear-gradient(to right, ${props.linearGradient})`,
                         backgroundColor: props.color}}>
                 Ver todos
                 <span className="arrow material-symbols-outlined">arrow_forward</span>
               </div>
           </Link>;
};

export default CardStatus;
