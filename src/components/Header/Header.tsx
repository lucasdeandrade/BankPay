import * as React from 'react';
import { useState } from 'react';
import icon_logo from '../../assets/img/icon_logo.png'
import bankpay_logo from '../../assets/img/bankpay_logo.png'
import './Header.css';

const Header = () => {
  const[style_sidebar, setStyle] = useState("header-sidebar");

  let changestyle = () => {
    if (style_sidebar === "header-siderbar2") {
      setStyle('header-sidebar')
    }
    else{
      setStyle('header-sidebar2')
      console.log(style_sidebar)
    }
  }

  return (
    <div className='header'>
        <header>
            <div className={style_sidebar} onClick={changestyle}>
              <img src={icon_logo} className='icon_logo' alt="" />
              <img src={bankpay_logo} className='bankpay_logo' alt="" />
            </div>
            <div className='header-main '>
              <div className='user-picture'>
                <span className="material-symbols-outlined">account_circle</span>
              </div>
              Admin
            </div>
        </header>
    </div>
  );
};

export default Header;