import {  Route,Routes } from "react-router-dom";
import MainPage from './pages/MainPage'
import WalletChecker from './pages/WalletChecker'
import MintPage from "./pages/MintPage";
// import MintWrapper from "./pages/MintWrapper";
import IPRights from "./pages/IPRights"
import Terms from "./pages/Terms"

export const Router= ()=>{
return (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/walletChecker" element={<WalletChecker />} />
    <Route path="/mint" element={<MintPage />} />
    <Route path="/ip-rights" element={<IPRights />} />
    <Route path="/terms" element={<Terms />} />
  </Routes>
);
}