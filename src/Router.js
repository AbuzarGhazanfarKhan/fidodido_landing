import {  Route,Routes } from "react-router-dom";
import MainPage from './pages/MainPage'
import WalletChecker from './pages/WalletChecker'

export const Router= ()=>{
return (
   
        <Routes>
            <Route path='/' element={ <MainPage/>} /> 
               
         
            <Route path='/walletChecker' element={<WalletChecker/>} /> 
                
           
        </Routes>

)
}