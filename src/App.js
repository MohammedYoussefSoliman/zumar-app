import React from 'react';
import './App.module.scss';
import {ProductData, CartData} from './context';
import AppTheme from './theme';
import Header from './components/layout/header/header';
import Main from './components/layout/main/main';


const App = ()=> {
  return (
    <AppTheme>
      <CartData>
        <ProductData>
            <Header />
            <Main />
        </ProductData>
      </CartData>
    </AppTheme>
  )
}

export default App