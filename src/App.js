import React, {useEffect, useState} from 'react'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Header from './components/header/Header';
import Tokens from './components/Tokens';
import Lockups from './components/Lockups';
import Vesting from './components/Vesting';
import Notifier from './components/Notifier';

function App() {

    //variables
    const [provider, setProvider] = useState(undefined);
    const [signer, setSigner] = useState(undefined);
    const [signerAddress, setSignerAddress] = useState(undefined);
    const [chain, setChain] = useState();
    const [changed, setChanged] = useState(false);
    const [approved, setApproved] = useState(undefined);
    //notification
    const [bg, setbg] = useState();
    const [message, setMessage] = useState();
    const [show, setShow] = useState(false);


    const toggleShowA = () => {
      setShow(!show);
     }


  //getWallet address
  const getWalletAddress = () => {
    signer.getAddress().
    then(address => {
      setSignerAddress(address)

    })
  }


    useEffect(() => {

      if(window.ethereum) {
          setTimeout(() => {
            setMessage('');
            setShow(false);
          }, 5000);
      }


    }, [])


  return (
    <div className="">
     
      <div className="containerapp">
          <Notifier
            bg={bg}
            setbg={setbg}
            show={show}
            setShow={setShow}
            message={message}
            setMessage={setMessage}
            toggleShowA={toggleShowA}
          />
          <Header 
           provider={provider}
           setProvider={setProvider}
           signer={signer}
           setSigner={setSigner}
           signerAddress={signerAddress}
           setSignerAddress={setSignerAddress}
           setChain={setChain}
           chain={chain}
           changed={changed}
           bg={bg}
           setbg={setbg}
           show={show}
           setShow={setShow}
           message={message}
           setMessage={setMessage}
           getWalletAddress={getWalletAddress}
          />

          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
              <Route path="/Tokens" 
              element={<Tokens
                provider={provider}
                setProvider={setProvider}
                signer={signer}
                setSigner={setSigner}
                signerAddress={signerAddress}
                setSignerAddress={setSignerAddress}
                bg={bg}
                setbg={setbg}
                show={show}
                setShow={setShow}
                message={message}
                setMessage={setMessage}
                approved={approved}
                setApproved={setApproved}
                getWalletAddress={getWalletAddress}
                chain={chain}
               />} />
          </Routes>

          <Routes>
              <Route path="/Lockups" 
              element={<Lockups
                provider={provider}
                setProvider={setProvider}
                signer={signer}
                setSigner={setSigner}
                signerAddress={signerAddress}
                setSignerAddress={setSignerAddress}
                setChain={setChain}
                chain={chain}
                changed={changed}
                setChanged={setChanged}
                bg={bg}
                setbg={setbg}
                show={show}
                setShow={setShow}
                message={message}
                setMessage={setMessage}
                approved={approved}
                setApproved={setApproved}
                getWalletAddress={getWalletAddress}
               />} />
          </Routes>


          <Routes>
              <Route path="/Vest" 
              element={<Vesting
                provider={provider}
                setProvider={setProvider}
                signer={signer}
                setSigner={setSigner}
                signerAddress={signerAddress}
                setSignerAddress={setSignerAddress}
                setChain={setChain}
                chain={chain}
                changed={changed}
                setChanged={setChanged}
                bg={bg}
                setbg={setbg}
                show={show}
                setShow={setShow}
                message={message}
                setMessage={setMessage}
                approved={approved}
                setApproved={setApproved}
                getWalletAddress={getWalletAddress}
               />} />
          </Routes>

      </div>


    </div>
  );
}

export default App;
