import './Home.css'
import CardStatus from '../../components/Cards/CardStatus/Card';
import colors from '../../components/ThemeColors/ThemeColors';
import CardNews from '../../components/Cards/CardNews/CardNews';
import * as React from 'react';
import  {getTransactions, getUsers} from '../../services/api_services';
import { OcurrenceRecord } from '../../interfaces';
import {Chart} from 'react-google-charts';

interface IHomeProps {
  totalCredits? : number;
  totalDedits? : number;
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

  const options = {
    pieHole: 0.6,
    is3D: false,
    colors: [colors.green, colors.red],
    pieSliceText: "none",
    legend: {position: 'bottom', textStyle: {color: 'gray', fontSize: 16}},
  };
  
  var totalCredits : number = 0;
  var totalDedits : number = 0;
  const totalClients = getUsers().length.toString();
  const transiction =  getTransactions().length.toString();

  
  
  if(totalCredits == 0){
    getTransactions().forEach((e : OcurrenceRecord) => {
      if(e.typeRecord == 1){
        totalCredits += e.amount;
      }
      else{
        totalDedits += e.amount;
      }
    });
  }

  const data = [
    ["Task", "Hours per Day"],
    ["Credito", totalCredits],
    ["Debito", totalDedits + 1]
  ];

  return <div className='body-home px-5' data-spy='scroll'>
          <div className='status row'>
            <CardStatus icone={'group'} data={totalClients} color={colors.orange} linearGradient={[`${colors.orange} 50%`, `${colors.light_orange}`]} subtitle={'Clientes'} link={'/users'}/> 
            <CardStatus icone={'receipt_long'} data={transiction} linearGradient={[`${colors.blue} `, `${colors.light_blue}`]} color={colors.blue} subtitle={'Transações'} link={'/transactions'}></CardStatus>
            <CardStatus icone={'payments'} data={'R$' + totalCredits}  linearGradient={[`${colors.green} 50%`, `${colors.light_green}`]} color={colors.green} subtitle={'Creditos'} link={'/transactions'}></CardStatus>
            <CardStatus icone={'payments'} data={'R$' + totalDedits}  linearGradient={[`${colors.red} 50%`, `${colors.light_red}`]} color={colors.red} subtitle={'Débitos'} link={'/transactions'}></CardStatus>
          </div>
          <div className="row">
            <CardNews></CardNews>
            <div className="card col-4 py-4 m-2">
              <div className="titleChart card-title text-start px-4">
                <h5>Comparativos</h5>
                <hr className='pb-0' />
              </div>
              {(totalCredits == 0 || totalDedits == 0)? 
                <h5 className='text-secondary pt-5 mt-2'>Não existe comparativos</h5>
                :
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"350px"}
                />
            }
                
            </div>
          </div>
          
         </div>
};

export default Home;

