// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import "../../pages/MintPage/mintPage.css"
// import Button from "react-bootstrap/Button";



// export const Connect = () => {


//     return (
//         <ConnectButton.Custom>
//             {({
//                 account,
//                 chain,
//                 openAccountModal,
//                 openChainModal,
//                 openConnectModal,
//                 authenticationStatus,
//                 mounted,
//             }) => {

//                 const connectWallet = () => {
//                     openConnectModal()
//                 };
//                 // Note: If your app doesn't use authentication, you
//                 // can remove all 'authenticationStatus' checks
//                 const ready = mounted && authenticationStatus !== 'loading';
//                 const connected =
//                     ready &&
//                     account &&
//                     chain &&
//                     (!authenticationStatus ||
//                         authenticationStatus === 'authenticated');
//                 return (
//                     <div
//                         {...(!ready && {
//                             'aria-hidden': true,
//                             'style': {
//                                 opacity: 0,
//                                 pointerEvents: 'none',
//                                 userSelect: 'none',
//                             },
//                         })}
//                     >
//                         {(() => {
//                             if (!connected) {
//                                 return (
//                                     <Button className=" rotate-button journey"
//                                         style={{ backgroundColor: "rgb(23, 152, 23)", color: "white", cursor: "pointer", width: "385px", padding: "10px", borderRadius: "10px", marginBlock: "25px" }}
//                                         onClick={connectWallet}>
//                                         Connect Wallet
//                                     </Button>
//                                 );
//                             }
//                             if (chain.unsupported) {
//                                 return (
//                                     <Button
//                                         style={{ backgroundColor: "rgb(23, 152, 23)", color: "white", cursor: "pointer", width: "385px", padding: "10px", borderRadius: "10px", marginBlock: "25px" }}
//                                         onClick={openChainModal} >
//                                         Wrong network
//                                     </Button>
//                                 );
//                             }
//                             return (
//                                 <>
//                                     <Button
//                                         onClick={openAccountModal}
//                                         className=" rotate-button journey"
//                                         style={{ backgroundColor: "rgb(23, 152, 23)", color: "white", cursor: "pointer", width: "385px", padding: "10px", borderRadius: "10px", marginBlock: "25px" }}
//                                     >
//                                         {account.displayName}
//                                         {account.displayBalance
//                                             ? ` (${account.displayBalance})`
//                                             : ''}
//                                     </Button>
//                                 </>
//                             );
//                         })()}
//                     </div>
//                 );
//             }}
//         </ConnectButton.Custom>
//     );
// };
