import './App.css'

//rotas
import {Routes, Route} from 'react-router-dom'
import Sidebar from "./components/Siderbar/Sidebar";
import Header from "./components/Header/Header"
import Users from './templates/Users/Users';
import Home from './templates/Home/Home';
import { InfoUser } from './templates/InfoUser/InfoUser';
import CreateUser from './templates/Users/CreateUser/CreateUser';
import Transactions from './templates/Transactions/Transactions';
import Accounts from './templates/Accounts/Accounts';

export default function App() {
    
  return (
    <div className="App">
        <Header/>
        <main>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path='/info/:id' element={<InfoUser/>}></Route>
            <Route path='/users/create' element={<CreateUser/>}></Route>
            <Route path='/transactions' element={<Transactions/>}></Route>
            <Route path='/accounts' element={<Accounts/>}></Route>
          </Routes>
        </main>
    </div>  
  );
}