import React, {useState, useEffect} from 'react';
import videoplay from "../img/blgr.mp4";
import Assetone from "../img/Asset21500.svg";
import blank from "../img/balnk.webp";
import bofapes from "../img/bofapes1500.png";
import "./lockup.css";
import { ethers } from 'ethers';
import wallet from "../img/vault.png";
import { tokenAbi, ethcontractABI, ethcontractaddress, bsccontractaddress, poacontractaddress, ethchainID, bscchainID, poachainID } from '../utils/constants';






export default function Tokens(props) {


    const [lockedTokens, setLockedTokens] = useState([]);
    const [lockswitch, setLockSwitch] = useState(false);
    const [myownlock, setMyOwmLock] = useState();


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





    const getTokens = async ()  => {


        if(!props.signerAddress) {
            props.setbg("warning");
            props.setMessage("Connect Wallet to Proceed");
            props.setShow(true);
            return;
        }
      
        const contractInstanceone =  await getethContract();
        const ethTokencount = await contractInstanceone.getTotalLockCount();

        const contractInstancetwo =  await getbscContract();
        const bscTokencount = await contractInstancetwo.getTotalLockCount();

        const contractInstancethree =  await getpoaContract();
        const poaTokencount = await contractInstancethree.getTotalLockCount();
        

        //temp arrs
        const etharr = [];
        const bscarr = [];
        const poaarr = [];

         //for eth
        for (let index = 0; index < ethTokencount; index++) {
            const tokens = await contractInstanceone.getLockAt(index);
            etharr.push(tokens);
        }


        //for bsc
        for (let index = 0; index < bscTokencount; index++) {
            const tokens = await contractInstancetwo.getLockAt(index);
            bscarr.push(tokens);
        }



        //for poa
        for (let index = 0; index < poaTokencount; index++) {
            const tokens = await contractInstancethree.getLockAt(index);
            poaarr.push(tokens);
        }


        setTimeout(() => {
            console.log("All wrapped up setTimeOut market");
            setLockedTokens(lockedTokens => [...lockedTokens, ...etharr, ...bscarr,  ...poaarr]);
          }, 3000);

    }


    //get my locks 

    const mylocks = async () => {

        if(!props.signerAddress) {
            props.setbg("warning");
            props.setMessage("Connect Wallet to Proceed");
            props.setShow(true);
            return;
        }
        console.log("Here Testing");
        setLockSwitch(true);

        const chaincomp = await props.signer.getChainId();
        
        if(chaincomp === ethchainID) {
            const contractInstance =  await getethContract();
            const mylocks = await contractInstance.normalLocksForUser(props.signerAddress);
            const lplocks = await contractInstance.lpLocksForUser(props.signerAddress);
            setMyOwmLock(myownlock => [...myownlock, ...mylocks, lplocks]);
        }
        else if(chaincomp === bscchainID) {
            const contractInstance =  await getbscContract();
            const mylocks = await contractInstance.normalLocksForUser(props.signerAddress);
            const lplocks = await contractInstance.lpLocksForUser(props.signerAddress);
            setMyOwmLock(myownlock => [...myownlock, ...mylocks, lplocks]);
        }
        else if(chaincomp === poachainID) {
            const contractInstance =  await getpoaContract();
            const mylocks = await contractInstance.normalLocksForUser(props.signerAddress);
            const lplocks = await contractInstance.lpLocksForUser(props.signerAddress);
            setMyOwmLock(myownlock => [...myownlock, ...mylocks, lplocks]);
        }
        
    }




        useEffect(() => {
            
            getTokens();

        }, [props.signerAddress]);




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
                    style={{ height: '100vh' }}
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


                                <div className="w-100 d-flex justify-content-end pr-2">
                                  <button className={lockswitch ? "btn btn-success my-2 my-sm-0 ms-auto" : "btn btn-outline-success my-2 my-sm-0 ms-auto"} onClick={mylocks}>My locks</button>
                                </div>

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


                            <div className="containthem">
                                {/* here */}

                                <div className="tablecontain table-responsive">
                                    <table className="table worktable">
                                    <thead className='thead'>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Blockchain</th>
                                        <th scope="col">Liquidity locked</th>
                                        <th scope="col">Tokens Locked</th>
                                        <th scope="col">Value Locked</th>
                                        <th scope="col">Next unlocked</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    {props.signerAddress &&
                                    <>
                                    {lockswitch ?

                                        <tbody>
                                        {lockedTokens?.map((data, index) => {
                                            <tr className='trfix' key={index}>
                                            <th scope="row">{data.id}</th>
                                            <td>Mark</td>
                                            <td>{data.tgeBps}</td>
                                            <td>{ethers.utils.parseEther(data.amount)}</td>
                                            <td>${ethers.utils.parseEther(data.unlockedAmount)}</td>
                                            <td>{data.cycle}</td>
                                            <td>view</td>
                                            </tr>
                                        })}
                                        </tbody>

                                        :
                                        <tbody>
                                        {myownlock?.map((data, index) => {
                                            <tr className='trfix' key={index}>
                                            <th scope="row">{data.id}</th>
                                            <td>Mark</td>
                                            <td>{data.tgeBps}</td>
                                            <td>{ethers.utils.parseEther(data.amount)}</td>
                                            <td>${ethers.utils.parseEther(data.unlockedAmount)}</td>
                                            <td>{data.cycle}</td>
                                            <td>view</td>
                                            </tr>
                                        })}
                                        </tbody>
                                     }
                                    </>
                                    }

                                    </table>
                                </div>
                                    {!props.signerAddress && 

                                        <div className="border-container">
                                                    
                                            <div className="img-container">
                                            <img className='connectwallet' src={wallet} alt="" />
                                            </div>

                                            <div className="connect">
                                            <div className="info">Connect Wallet</div>
                                            <div className="">
                                            <button class="btn btn-outline-success my-2 my-sm-0 ms-auto">Connect wallet</button>
                                            </div>

                                            </div>

                                        </div>
                                    }

                                {/* here */}
                            </div>                    

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
