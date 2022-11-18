import React, {useEffect, useState} from 'react';
import "./header.css";
import bofapes from "../../img/bofapes1500.png"
import 'bootstrap/dist/css/bootstrap.css';
import { ethers } from 'ethers';
import { useParams, useRouteMatch, useNavigate } from 'react-router-dom';


export default function Header(props) {

  const navigate = useNavigate();
  const [menuToggle, setMenutoggle] = useState(false);


  const home = () => {
    navigate(`/`);
 }

  const token = () => {
    navigate(`/Tokens`);
 }

 const lockup = () => {
  navigate(`/Lockups`);
}


const vest = () => {
  navigate(`/Vest`);
}



  const togglemenu = () => {
    console.log("Just clicked");
    setMenutoggle(!menuToggle);
  }

  //connect wallet check is connected
  const isConnected = () => {
   const value =  props.signer !== undefined;
   console.log(value);
   return value;
  } 

  console.log(isConnected);


  //getWallet address
  const getWalletAddress = () => {
    props.signer.getAddress().
    then(address => {
      props.setSignerAddress(address)

    })
  }


  const getChain = () => {
    props.signer.getChainId().
    then( chain => {
      props.setChain(chain);
    })
  }



  //getSigner
  const getSigner = async ( provider ) => {
    console.log("Second guy");
  provider?.send("eth_requestAccounts", []);
  const signer =  provider.getSigner();
  props.setSigner(signer);
  return;
  }



      //display address
      const displayaddr = () => {
        return `${props.signerAddress?.substring(0,10)}`;
    }

    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      props.setProvider(provider);
      console.log("ran through");
                
  }


      //useEffect
      useEffect(() => {
      console.log("Entered");
     if(!window.ethereum) {
        props.setbg("warning");
        props.setMessage("Please install metamask");
        props.setShow(true);
     } else {
       onLoad();
     }


      if (props.signer !== undefined) {
        console.log("sign ooo")
        console.log(props.signerAddress);
        console.log(props.chain)
        getWalletAddress();
        getChain();
        }

      

  
      }, [props.signer, props.changed])


     
      window.ethereum.on('chainChanged', function (chainId) {
        //account = accounts[0];
        onLoad();
        console.log("changed");
        getSigner(props.provider);
        getWalletAddress();
        getChain();
    });


    

  return (
    
    <div className="headercontain">
    <nav className="navbar navbar-expand-lg headernav">

   
        <img src={bofapes} alt="" className='logoimg' onClick={home} />


  <button
    className="navbar-toggler text-white bg-light"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    onClick={togglemenu}
  >
    <span className="navbar-toggler-icon text-white" />
  </button>
  <div class={ !menuToggle ? "navbar-collapse collapse" : "navbar-collapse collapse show w-100" } id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active logonav each" onClick={token}>
        <a className="nav-link text-white" href="#">
          All Tokens <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item each" onClick={lockup}>
        <a className="nav-link text-white" href="#">
          Lockups
        </a>
      </li>
      <li className="nav-item each" onClick={vest}>
        <a className="nav-link text-white" href="#">
          Vesting
        </a>
      </li>
    </ul>

    <button class="btn btn-outline-success my-2 my-sm-0 ms-auto" onClick={ () => getSigner(props.provider)}>{ props.signer !== undefined ? displayaddr() : "Connect wallet"  }</button>


  </div>
</nav>
</div>

  )
}
