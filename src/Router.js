import {  Route,Routes } from "react-router-dom";
import MainPage from './pages/MainPage'
import WalletChecker from './pages/WalletChecker'
import MintWrapper from "./pages/MintWrapper";

export const Router= ()=>{
return (
   
        <Routes>
            <Route path='/' element={ <MainPage/>} /> 
            <Route path='/walletChecker' element={<WalletChecker/>} /> 
            <Route path='/mint' element={<MintWrapper/>} />  
        </Routes>

)
}