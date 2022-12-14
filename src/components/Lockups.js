import React, {useState, useEffect} from 'react';
import videoplay from "../img/blgr.mp4";
import Assetone from "../img/Asset21500.svg";
import ethereum from "../img/ethereum.svg";
import binance from "../img/binance.svg";
import poa from "../img/poalogo.png";
import blank from "../img/balnk.webp";
import wallet from "../img/vault.png";
import "./lockup.css"
import { ethers } from 'ethers';
import { testnetcontractaddress, tokenAbi, ethcontractABI, ethcontractaddress, bsccontractaddress, poacontractaddress, ethchainID, bscchainID, poachainID, testID } from '../utils/constants';




export default function Lockups(props) {

    const [selected, setSelected] = useState();
    const [ischecked, setIschecked] = useState(false);
    const [amountget, setamountget] = useState();
    const [tokenaddress, setTokenaddress] = useState();
    const [paramchoose] = useState([
        {
        chainId: `0x${Number(1).toString(16)}`,
        rpcUrls: [
          "https://eth-mainnet.public.blastapi.io",
        ],
        chainName: "BSC testnet",
        nativeCurrency: {
          name: "Ethereum",
          symbol: "ETH",
          decimals: 18,
        },
        blockExplorerUrls: [
          "https://explorer.binance.org/smart-testnet",
        ],
      },
      {
        chainId: `0x${Number(56).toString(16)}`,
        rpcUrls: [
          "https://bsc-dataseed3.binance.org",
        ],
        chainName: "BSC testnet",
        nativeCurrency: {
          name: "Binance",
          symbol: "BNB",
          decimals: 18,
        },
        blockExplorerUrls: [
          "https://explorer.binance.org/smart-testnet",
        ],
      },
      {
        chainId: `0x${Number(493).toString(16)}`,
        rpcUrls: [
          "https://rpc.proofofapes.com",
        ],
        chainName: "BSC testnet",
        nativeCurrency: {
          name: "ProofofApes",
          symbol: "POA",
          decimals: 18,
        },
        blockExplorerUrls: [
          "https://explorer.proofofapes.com",
        ],
      }
    
    ])




    const getethContract = async () => {
        //console.log("bad guy called");
        const temporalProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const signer =  temporalProvider.getSigner();
        return new ethers.Contract(ethcontractaddress, ethcontractABI, props.signer);
    }


    const getbscContract = async () => {
        //console.log("bad guy called");
        const temporalProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const signer =  temporalProvider.getSigner();
        return new ethers.Contract(bsccontractaddress, ethcontractABI, props.signer);
    }


    const getpoaContract = async () => {
        //console.log("bad guy called");
        const temporalProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const signer =  temporalProvider.getSigner();
        return new ethers.Contract(poacontractaddress, ethcontractABI, props.signer);
    }


    const gettestContract = async () => {
        //console.log("bad guy called");
        const temporalProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const signer =  temporalProvider.getSigner();
        return new ethers.Contract(testnetcontractaddress, ethcontractABI, props.signer);
    }







    const choose = async (choice) => {
        let paramselect;
         
        if(choice === ethchainID) {
            paramselect = paramchoose[0];
        } else if(choice === bscchainID) {
            paramselect = paramchoose[1];
        } else {
           paramselect = paramchoose[2];
        }


        //check for correct chain
        console.log("in here");
        console.log(props.chain, choice)
    
            console.log("called");
    
            await window.ethereum.request({ method: "eth_requestAccounts" });
    
            const chainId = await props.provider.getNetwork();
            //console.log(chainId.chainId);
            if (chainId.chainId !== choice) {
    
              console.log("still trying");
    
              try {
                //switch chain
                await window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [
                    {
                      chainId: `0x${Number(choice).toString(16)}`,
                    }],
                });
                props.setChanged(!props.changed);
                //connectWallet();
                
              } catch (error) {
                if (error === 4902) {
                  //add the token or currency to metamask
                  await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                       paramselect
                    ],
                  });
                  props.setChanged(!props.changed);
                  //connectWallet();
                }
              }
            } else {
                setSelected(choice);
            }
    

    }




    const setcheck = () => {
        setIschecked(!ischecked);
    }
    


     const approval = async () => {

        //const amount = e.target.amount.value;
        console.log(amountget);
        console.log(tokenaddress)
        if(amountget == "" || amountget == "") {
            props.setbg("warning");
            props.setMessage("Form fields should not be empty");
            props.setShow(true);
            return;
          }


        const chaincomp = await props.signer.getChainId();

            //amount
            const reformatamount = ethers.utils.parseEther(amountget);
    
            //approve
            const ERC20TokenContract = new ethers.Contract(tokenaddress, tokenAbi, props.signer);
            console.log("setup ERC20TokenContract: ", ERC20TokenContract);
          
            if(chaincomp === ethchainID) {
            // Grant the allowance target an allowance to spend our tokens.
            const tx = await ERC20TokenContract.approve( ethcontractaddress, reformatamount);

            await tx.wait();
            props.setApproved(tx);
           
            console.log("done");
            console.log(props.approved);
            }
            else if(chaincomp === bscchainID) {
              // Grant the allowance target an allowance to spend our tokens.
              const tx = await ERC20TokenContract.approve( bsccontractaddress, reformatamount);

              await tx.wait();
              props.setApproved(tx);

            }
            else if(chaincomp === poachainID) { 
              // Grant the allowance target an allowance to spend our tokens.
              const tx = await ERC20TokenContract.approve( poacontractaddress, reformatamount);

              await tx.wait();
              props.setApproved(tx);

            }
            else if(chaincomp === testID) {
              // Grant the allowance target an allowance to spend our tokens.
              const tx = await ERC20TokenContract.approve( testnetcontractaddress, reformatamount);

              await tx.wait();
              props.setApproved(tx);
            }
      
     }



    const lock = async (e) => {
        e.preventDefault();

        const owner = e.target.owner.value;
        const tokenadd = e.target.tokenadd.value;
        const amount = e.target.amount.value;
        const unlock = e.target.unlock.value;
        const description = e.target.description.value;
        //const check = e.target.check.value;

        console.log("checking", ischecked);
        console.log(amount);
        console.log(unlock);

        const chaincomp = await props.signer.getChainId();


        if(owner == "" || tokenadd == "" || amount == "" || unlock == "" || description == "") {
            props.setbg("warning");
            props.setMessage("Form fields should not be empty");
            props.setShow(true);
            return;
          }




       if(chaincomp === ethchainID) {
        //amount
        const reformatamount = ethers.utils.parseEther(amount);
        const convertdate = Math.floor(new Date(unlock)/1000);


          const contractInstance =  await getethContract();
          const fees = await contractInstance.vaultFee();
          const locking = await contractInstance.lock(owner, tokenadd, ischecked, reformatamount, convertdate, description, {value: fees, gasLimit: 1000000, nonce: 105 || undefined});
          await locking.wait();
       } 
       else if(chaincomp === bscchainID) {
        //amount
        const reformatamount = ethers.utils.parseEther(amount);
        const convertdate = Math.floor(new Date(unlock)/1000);
        
        const contractInstance =  await getbscContract();
        const fees = await contractInstance.vaultFee();
        const locking = await contractInstance.lock(owner, tokenadd, ischecked, reformatamount, convertdate, description, {value: fees, gasLimit: 1000000, nonce: 105 || undefined});
        await locking.wait();
     }
     else if(chaincomp === poachainID) {
        //amount
        const reformatamount = ethers.utils.parseEther(amount);
        const convertdate = Math.floor(new Date(unlock)/1000);

        const contractInstance =  await getpoaContract();
        const fees = await contractInstance.vaultFee();
        const locking = await contractInstance.lock(owner, tokenadd, ischecked, reformatamount, convertdate, description , {value: fees, gasLimit: 1000000, nonce: 105 || undefined});
        await locking.wait();
     }
     else if(chaincomp === testID) {
        //amount
        const reformatamount = ethers.utils.parseEther(amount);
        const convertdate = Math.floor(new Date(unlock)/1000);
        console.log(reformatamount);
        console.log(convertdate);


        const contractInstance =  await gettestContract();
        const fees = await contractInstance.vaultFee();
        console.log(fees, "fees ooo");
        console.log(ethers.BigNumber.from(fees));
        const locking = await contractInstance.lock(owner, tokenadd, ischecked, reformatamount, convertdate, description, {value: fees, gasLimit: 1000000, nonce: 105 || undefined});
        await locking.wait();
     }

     props.setApproved();
     
     props.setbg("success");
     props.setMessage("Token locked");
     props.setShow(true);
     return;

    }


    



    useEffect(() => {

    }, [props.chain, props.approved])


  return (
<div className="n2_clear">
<ss3-force-full-width
    data-overflow-x="body"
    data-horizontal-selector="body"
    style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}
>
    <div
    className="n2-section-smartslider fitvidsignore n2_clear"
    data-ssid={2}
    >
    <div id="n2-ss-2-align" className="n2-ss-align n2-ss-align-visible">
        <div className="n2-padding">
        <div
            id="n2-ss-2"
            data-creator="Smart Slider 3"
            data-responsive="fullwidth"
            className="n2-ss-slider n2-ow n2-has-hover n2-ss-tabletPortrait n2-ss-loaded"
            data-device-mode="tabletPortrait"
        >
            <div className="n2-ss-slider-1 n2-ow">
            <div className="n2-ss-slider-2 n2-ow">
                <video
                loop="loop"
                className="n2-ss-slider-background-video n2-ow n2-cover"
                playsInline="playsinline"
                webkit-playsinline="webkit-playsinline"
                data-keepplaying={1}
                preload="none"
                muted="muted"
                autoPlay
                >
                <source src={videoplay} type="video/mp4" />
                </video>
                <div className="n2-ss-slideJ-backgrounds n2-ow-all">
                <div
                    className="n2-ss-slide-background"
                    data-public-id={1}
                    data-mode="fill"
                >
                    <div
                    className="n2-ss-slide-background-image"
                    data-blur={0}
                    data-opacity={10}
                    data-x={50}
                    data-y={50}
                    data-alt=""
                    data-title=""
                    style={{ opacity: "0.1", margin: 0, padding: 0 }}
                    >
                    <picture
                        className="skip-lazy"
                        data-skip-lazy={1}
                        style={{ filter: "blur(0px)" }}
                    >
                     <img
                        src={Assetone}
                        alt=""
                        title=""
                        loading="eager"
                        className="skip-lazy"
                        data-skip-lazy={1}
                        />
                    </picture>
                    </div>
                    <div
                    data-gradient="vertical"
                    data-color-start="RGBA(19,19,19,0.28)"
                    data-color-end="RGBA(27,27,27,1)"
                    style={{
                        background:
                        "linear-gradient(to bottom, RGBA(19,19,19,0.28) 0%,RGBA(27,27,27,1) 100%)"
                    }}
                    className="n2-ss-slide-background-color"
                    data-overlay={1}
                    />
                </div>
                </div>{" "}
                <div className="n2-ss-slider-3 n2-ow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 800"
                    data-related-device="desktopPortrait"
                    className="n2-ow n2-ss-preserve-size n2-ss-preserve-size--slider n2-ss-slide-limiter"
                />
                <div
                    data-first={1}
                    data-slide-duration={0}
                    data-id={3}
                    data-slide-public-id={1}
                    data-title="Slide"
                    className="n2-ss-slide n2-ow n2-ss-slide-3 n2-ss-slide-active"
                    style={{ height: '123vh', overflowY: 'scroll' }}
                >
                    <div
                    role="note"
                    className="n2-ss-slide--focus"
                    tabIndex={-1}
                    >
                    Slide
                    </div>
                    <div className="n2-ss-layers-container n2-ss-slide-limiter n2-ow">
                    <div
                        className="n2-ss-layer n2-ow n-uc-hNm9cZsp1Wmj"
                        data-sstype="slide"
                        data-pm="default"
                        style={{ perspective: 1000, paddingTop: '0px' }}
                    >
                        <div
                        className="n2-ss-layer n2-ow n-uc-11359b3592b3f"
                        data-pm="absolute"
                        data-responsiveposition={1}
                        data-desktopportraitleft={-658}
                        data-desktopportraittop={406}
                        data-responsivesize={1}
                        data-desktopportraitwidth={455}
                        data-desktopportraitheight={1077}
                        data-desktopportraitalign="center"
                        data-desktopportraitvalign="middle"
                        data-parentid=""
                        data-desktopportraitparentalign="center"
                        data-desktopportraitparentvalign="middle"
                        data-sstype="layer"
                        style={{
                            width: "396.229px",
                            height: "937.873px",
                            transform:
                            "translate(-51px, 702px) translate(-50%, -50%)"
                        }}
                        >
                        <div className="n2-style-1d21c30b2bee64246e04df4e6b6b7372-heading  n2-ss-item-image-content n2-ss-item-content n2-ow-all">
                            <picture className="skip-lazy" data-skip-lazy={1}>
                            <img
                                id="n2-ss-2item1"
                                alt=""
                                className="skip-lazy"
                                style={{ width: "100%", height: "auto" }}
                                width={4679}
                                height={4675}
                                data-skip-lazy={1}
                                src={blank}
                                loading="eager"
                            />
                            </picture>
                        </div>
                        </div>
                        <div
                        className="n2-ss-layer n2-ow n-uc-4AC68ZMzAILf"
                        data-pm="absolute"
                        data-responsiveposition={1}
                        data-desktopportraitleft={497}
                        data-desktopportraittop={81}
                        data-responsivesize={1}
                        data-desktopportraitwidth={905}
                        data-desktopportraitheight={1077}
                        data-desktopportraitalign="center"
                        data-desktopportraitvalign="middle"
                        data-parentid=""
                        data-desktopportraitparentalign="center"
                        data-desktopportraitparentvalign="middle"
                        data-sstype="layer"
                        style={{
                            width: "788.104px",
                            height: "937.873px",
                            transform:
                            "translate(955px, 419px) translate(-50%, -50%)"
                        }}
                        >
                        <div className="n2-style-1d21c30b2bee64246e04df4e6b6b7372-heading  n2-ss-item-image-content n2-ss-item-content n2-ow-all">
                            <picture className="skip-lazy" data-skip-lazy={1}>
                            <img
                                id="n2-ss-2item2"
                                alt=""
                                className="skip-lazy"
                                style={{ width: "100%", height: "auto" }}
                                width={4679}
                                height={4675}
                                data-skip-lazy={1}
                                src={blank}
                                loading="eager"
                            />
                            </picture>
                        </div>
                        </div>
                        <div
                        className="n2-ss-layer n2-ow n-uc-ziJF3Fkbm9KL"
                        data-pm="default"
                        data-sstype="content"
                        data-hasbackground={0}
                        >
                        <div
                            className="n2-ss-section-main-content n2-ss-layer-with-background n2-ss-layer-content n2-ow n-uc-ziJF3Fkbm9KL-inner"
                            style={{ perspective: 1000 }}
                        >

                            <div
                            className="n2-ss-layer n2-ow n-uc-19fd0b39e2dfd"
                            data-pm="normal"
                            data-animv2='{"basic":{"in":{"type":"basic","name":"Blur","keyFrames":[{"opacity":0,"n2blur":10}]}}}'
                            data-hidedesktopportrait={1}
                            data-hidetabletportrait={1}
                            data-sstype="layer"
                            style={{
                                transformOrigin: "50% 50% 0px",
                                filter: "none",
                                opacity: 1
                            }}
                            >
                            </div>
                            <div
                            className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-17f642cb2e47c"
                            data-pm="normal"
                            data-animv2='{"basic":{"in":{"type":"basic","name":"Fade","keyFrames":[{"delay":1.5,"opacity":0}]}}}'
                            data-sstype="row"
                            style={{
                                transformOrigin: "50% 50% 0px",
                                opacity: 1,
                                marginBottom: '0px'
                            }}
                            >
                            <div className="n2-ss-layer-row n2-ss-layer-with-background n-uc-17f642cb2e47c-inner">
                                <div
                                className="n2-ss-layer-row-inner "
                                style={{ perspective: 1000 }}
                                >

                                  <h3 className='text-white w-100 text-center'>Create your own unique token lock.</h3>

                                </div>
                            </div>
                            </div>
                            <div
                            className="n2-ss-layer n2-ow n2-ss-layer--block n2-ss-has-self-align n-uc-18f5dfc7da9d3"
                            data-pm="normal"
                            data-sstype="row"
                            >
                            <div className="n2-ss-layer-row n2-ss-layer-with-background n-uc-18f5dfc7da9d3-inner">
                                <div
                                className="n2-ss-layer-row-inner "
                                style={{ perspective: 1000 }}
                                >

                              { props.signerAddress ?

                              <>
                                {selected === props.chain ?

                                   <div className="border-containerthree">

                                     <div className="choose"> Create your lock </div>

                                    <div className="containform">

                                    <form class="w-100" onSubmit={lock}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" style={{color: '#000', marginBottom: '10px'}}>Owner address</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter owner address"
                                            name="owner"
                                            />
                                            <small id="emailHelp" className="form-text text-muted">
                                            make sure this address is correct
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1 text-dark" style={{color: '#000', marginBottom: '10px'}} >Token address</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Token address"
                                            name="tokenadd"
                                            value={tokenaddress}
                                            onChange={(e) => setTokenaddress(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1 text-dark" style={{color: '#000', marginBottom: '10px'}} >amount</label>
                                            <input
                                            type="number"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Amount to lock up"
                                            name="amount"
                                            value={amountget}
                                            onChange={(e) => setamountget(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1 text-dark" style={{color: '#000', marginBottom: '10px'}} >unlock date</label>
                                            <input
                                            type="datetime-local"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="date to unlock"
                                            name="unlock"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1 text-dark" style={{color: '#000', marginBottom: '10px'}} >Description</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Description"
                                            name="description"
                                            />
                                        </div>

                                        <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" checked={ischecked} id="exampleCheck1" onClick={setcheck} />
                                        <label className="form-check-label text-dark" htmlFor="exampleCheck1">
                                            isLpToken
                                        </label>
                                        </div>
                                        
                                        <div className="w-100 d-flex justify-content-center">

                                          { props.approved !== undefined ? 
                                            <button type="submit" className="btn btn-success">
                                                Lock
                                            </button>
                                            :
                                            <div className="btn btn-success" onClick={approval}>Approve</div>
                                          }

                                        </div>


                                        </form>
                                        

                                    </div>

                                       <div className="text-white mt-3">
                                            Exclude Bank lockup address { props.chain === 1 ? ethcontractaddress : props.chain === 56 ? bsccontractaddress : props.chain === 493 ? poacontractaddress : testnetcontractaddress } from fees, incentives, and the transaction amount to locking tokens.
                                        </div>
                                    

                                   </div>

                                   :
                                   <div className="border-containertwo">
                                   <div className="choose"> Choose the blockchain your token is built on </div>

                                   <div className="row gy-4 w-100 p-2">
                                      
                                      <div className="col-xs-12 col-md-4 col-lg-4  chains" onClick={() => choose(ethchainID)}>
                                          <div className="col inside">
                                             <img src={ethereum} class="img-thumbnail rounded mr-1" alt="" /> <div className="">Ethereum</div> 
                                          </div>
                                      </div>

                                      <div className="col-xs-12 col-md-4 col-lg-4 chains" onClick={() => choose(bscchainID)}>
                                         <div className="col inside">
                                            <img src={binance} class="img-thumbnail rounded mr-1" alt="" /> <div className="">Binance</div> 
                                          </div>
                                      </div>

                                      <div className="col-xs-12 col-md-4 col-lg-4 chains" onClick={() => choose(poachainID)}>
                                          <div className="col inside">
                                          <img src={poa} class="img-thumbnail rounded mr-2" alt="" /><div className="">ProofofApes</div>
                                          </div>
                                      </div>


                                      <div className="col-xs-12 col-md-4 col-lg-4 chains" onClick={() => choose(testID)}>
                                          <div className="col inside">
                                          <img src={binance} class="img-thumbnail rounded mr-2" alt="" /><div className="">Testnet</div>
                                          </div>
                                      </div>

                                   </div>

                               </div>
                                 }
                              </>

                                : 
                                <div className="border-container">
                                    
                                    <div className="img-container">
                                        <img src={wallet} className="connectwallet" alt="" />
                                    </div>

                                   <div className="connect">
                                     <div className="info">Connect Wallet</div>
                                     <div className="">
                                        <button class="btn btn-outline-success my-2 my-sm-0 ms-auto"  onClick={() => props.getWalletAddress() } >Connect wallet</button>
                                     </div>

                                   </div>
                                     
                                </div>
                                }
                               

                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>{" "}
                </div>
            </div>
            </div>
        </div>
        <ss3-loader />
        </div>
    </div>
    <div className="n2_clear" />
    </div>
</ss3-force-full-width>
</div>
  )
}
