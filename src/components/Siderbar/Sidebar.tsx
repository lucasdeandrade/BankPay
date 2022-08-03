import * as React from 'react';
import './Sidebar.css'
import { Link} from 'react-router-dom'

export interface ISidebarProps {
}

export default class Sidebar extends React.Component<ISidebarProps> {

  public render() {

    return (
      <div>
          <div className='accordion sideBar' id="accordionExample">
            <Link className='link' to='/'><div className='navItem'> Dashboard<i/></div></Link>
            <Link className='link' to='/users'><div className='navItem'> Clientes<i/></div></Link>  
            <div className='accordion-item' style={{width: '100%', backgroundColor: 'black'}}>
              <h2 className='accordion-header'>
                <button className='accordion-button collapsed' id="headingOne" type='button' data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Contas
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body p-0 bg-dark  ">
                  <Link className='link' to='/accounts'><div className='navItem'>Todas as contas<i/></div></Link>
                  <Link className='link' to='/transactions'><div className='navItem'>Transações<i/></div></Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
