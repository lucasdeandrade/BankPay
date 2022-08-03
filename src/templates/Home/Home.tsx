import './Home.css'
import CardStatus from '../../components/Cards/CardStatus/Card';
import colors from '../../components/ThemeColors/ThemeColors';
import CardNews from '../../components/Cards/CardNews/CardNews';
import * as React from 'react';
import  {getUsers} from '../../services/api_services';
import StackedColumn from '../../components/Highcharts/StackedColumn/StackedColumn';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    
  const totalClients = getUsers().length.toString();

  return <div className='body-home px-5' data-spy='scroll'>
           <div className='status row'>
             <CardStatus data={totalClients} color={colors.orange} linearGradient={[`${colors.orange} 50%`, `${colors.light_orange}`]} subtitle={'Clientes'} link={'/users'}/> 
             <CardStatus linearGradient={[`${colors.red} 50%`, `${colors.light_red}`]} color={colors.red} subtitle={'Movimentações'} link={'/users'}></CardStatus>
             <CardStatus data={'R$' + 0}  linearGradient={[`${colors.green} 50%`, `${colors.light_green}`]} color={colors.green} subtitle={'Creditos'} link={'/users'}></CardStatus>
             <CardStatus data={'R$' + 0}  linearGradient={[`${colors.blue} `, `${colors.light_blue}`]} color={colors.blue} subtitle={'Débitos'} link={'/users'}></CardStatus>
           </div>
           <CardNews></CardNews>
           <StackedColumn></StackedColumn>
         </div>
};

export default Home;

