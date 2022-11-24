import React, {useState, useEffect} from 'react';
import videoplay from "../img/blgr.mp4";
import Assetone from "../img/Asset21500.svg";
import blank from "../img/balnk.webp";
import bofapes from "../img/bofapes1500.png";
import "./lockup.css";
import { ethers } from 'ethers';
import wallet from "../img/vault.png";
import { useNavigate } from 'react-router-dom';
import { testnetcontractaddress, tokenAbi, ethcontractABI, ethcontractaddress, bsccontractaddress, poacontractaddress, ethchainID, bscchainID, poachainID, testID } from '../utils/constants';
import { ConstructionOutlined } from '@mui/icons-material';






export default function Tokens(props) {

          /* global BigInt */
    const navigate = useNavigate();
    const [lockedTokens, setLockedTokens] = useState([]);
    const [lockswitch, setLockSwitch] = useState(false);
    const [myownlock, setMyOwmLock] = useState([]);

    //view more
    const [viewbool, setViewbool] = useState(false);
    const [viewdata, setViewData] = useState();
    const [viewindex, setViewIndex] = useState();

    //token details
    //for name
    const [tokeninfoone, setTokenInfoone] = useState();
    const [tokeninfotwo, setTokenInfotwo] = useState();
    const [tokeninfothree, setTokenInfothree] = useState();
    const [tokeninfofour, setTokenInfofour] = useState();
    const [tokeninfofive, setTokenInfofive] = useState();
    const [tokeninfosix, setTokenInfosix] = useState();
    const [tokeninfoseven, setTokenInfoseven] = useState();
    //for sym
    const [tokeninfoonesym, setTokenInfoonesym] = useState();
    const [tokeninfotwosym, setTokenInfotwosym] = useState();
    const [tokeninfothreesym, setTokenInfothreesym] = useState();
    const [tokeninfofoursym, setTokenInfofoursym] = useState();
    const [tokeninfofivesym, setTokenInfofivesym] = useState();
    const [tokeninfosixsym, setTokenInfosixsym] = useState();
    const [tokeninfosevensym, setTokenInfosevensym] = useState();
    //for decimals
    const [tokeninfoonedeci, setTokenInfoonedeci] = useState();
    const [tokeninfotwodeci, setTokenInfotwodeci] = useState();
    const [tokeninfothreedeci, setTokenInfothreedeci] = useState();
    const [tokeninfofourdeci, setTokenInfofourdeci] = useState();
    const [tokeninfofivedeci, setTokenInfofivedeci] = useState();
    const [tokeninfosixdeci, setTokenInfosixdeci] = useState();
    const [tokeninfosevendeci, setTokenInfosevendeci] = useState();



    const getethContract = async () => {
        //console.log("bad guy called");
        const temporalProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const signer =  temporalProvider.getSigner();
        return new ethers.Contract(ethcontractaddress, ethcontractABI, signer);
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





    const getTokens = async ()  => {


        if(!props.signerAddress) {
            props.setbg("warning");
            props.setMessage("Connect Wallet to Proceed");
            props.setShow(true);
            return;
        }
        
        console.log("Entered the get all token");

        const chaincomp = await props.signer.getChainId();


        if(chaincomp === ethchainID) { 
        const contractInstanceone =  await getethContract();
        const ethTokencount = await contractInstanceone.getTotalLockCount();

        const etharr = [];

        //for eth
        for (let index = 0; index < ethTokencount; index++) {
            const tokens = await contractInstanceone.getLockAt(index);
            etharr.push(tokens);
        }


        setTimeout(() => {
            console.log("All wrapped up setTimeOut market");
            setLockedTokens(etharr);
          }, 1000);


        } else if(chaincomp === bscchainID) {
            const contractInstancetwo =  await getbscContract();
            const bscTokencount = await contractInstancetwo.getTotalLockCount();

            const bscarr = [];


            //for bsc
            for (let index = 0; index < bscTokencount; index++) {
                const tokens = await contractInstancetwo.getLockAt(index);
                bscarr.push(tokens);
            }

          setTimeout(() => {
            console.log("All wrapped up setTimeOut market");
            setLockedTokens(bscarr);
            }, 1000);    
        
        } else if(chaincomp === poachainID) {

            const contractInstancethree =  await getpoaContract();
            const poaTokencount = await contractInstancethree.getTotalLockCount();
            
            const poaarr = [];

            //for poa
            for (let index = 0; index < poaTokencount; index++) {
                const tokens = await contractInstancethree.getLockAt(index);
                poaarr.push(tokens);
            }

            setTimeout(() => {
                console.log("All wrapped up setTimeOut market");
                setLockedTokens(poaarr);
             }, 1000);  

        } else if(chaincomp === testID) { 
        
            console.log("Finding the error got here")
            const contractInstancefour =  await gettestContract();
            const testTokencount = await contractInstancefour.getTotalLockCount();

            //temp arrs
            const testarr = [];


            //for test
            for (let index = 0; index < testTokencount; index++) {
                console.log("inside here")
                const tokens = await contractInstancefour.getLockAt(index);
                testarr.push(tokens);
                console.log(testarr);
            }      


            setTimeout(() => {
                console.log("All wrapped up setTimeOut market");
                setLockedTokens(testarr);
            }, 1000);

        }

    }



    //get token name
    const getname = (address, index) => {
        //console.log(address);
        //instantiate contract
        let finalvalue;
        const ERC20TokenContract = new ethers.Contract(address, tokenAbi, props.signer);

        // Grant the allowance target an allowance to spend our tokens.
        ERC20TokenContract.name().then(name => {
            
            if(index == 0) {
                setTokenInfoone(name);
            } else if(index == 1){
                setTokenInfotwo(name);
            } else if(index == 2) {
                setTokenInfothree(name);
            } else if(index == 3) {
                setTokenInfofour(name);
            } else if(index == 4) {
                setTokenInfofive(name);
            } else if(index == 5) {
                setTokenInfosix(name);
            } else if(index == 6) {
                setTokenInfoseven(name);
            }
        });

        if(index == 0) {
             finalvalue = tokeninfoone;
        } else if(index == 1){
            finalvalue = tokeninfotwo;
        } else if(index == 2) {
            finalvalue = tokeninfothree;
        } else if(index == 3) {
            finalvalue = tokeninfofour;
        } else if(index == 4) {
            finalvalue = tokeninfofive;
        } else if(index == 5) {
            finalvalue = tokeninfosix;
        } else if(index == 6) {
            finalvalue = tokeninfoseven;
        }

        return finalvalue;
    }


  
   //get token symbol
    const getsymbol = (address, index) => {
        let finalvalue;
        const ERC20TokenContract = new ethers.Contract(address, tokenAbi, props.signer);

        // Grant the allowance target an allowance to spend our tokens.
        ERC20TokenContract.symbol().then(name => {
            
            if(index == 0) {
                setTokenInfoonesym(name);
            } else if(index == 1){
                setTokenInfotwosym(name);
            } else if(index == 2) {
                setTokenInfothreesym(name);
            } else if(index == 3) {
                setTokenInfofoursym(name);
            } else if(index == 4) {
                setTokenInfofivesym(name);
            } else if(index == 5) {
                setTokenInfosixsym(name);
            } else if(index == 6) {
                setTokenInfosevensym(name);
            }
        });

        if(index == 0) {
             finalvalue = tokeninfoonesym;
        } else if(index == 1){
            finalvalue = tokeninfotwosym;
        } else if(index == 2) {
            finalvalue = tokeninfothreesym;
        } else if(index == 3) {
            finalvalue = tokeninfofoursym;
        } else if(index == 4) {
            finalvalue = tokeninfofivesym;
        } else if(index == 5) {
            finalvalue = tokeninfosixsym;
        } else if(index == 6) {
            finalvalue = tokeninfosevensym;
        }

        return finalvalue;
     }
     
    
    //get token decimal
    const getdecimal = (address, index) => {
        let finalvalue;
        const ERC20TokenContract = new ethers.Contract(address, tokenAbi, props.signer);

        // Grant the allowance target an allowance to spend our tokens.
        ERC20TokenContract.decimals().then(name => {
            
            if(index == 0) {
                setTokenInfoonedeci(name);
            } else if(index == 1){
                setTokenInfotwodeci(name);
            } else if(index == 2) {
                setTokenInfothreedeci(name);
            } else if(index == 3) {
                setTokenInfofourdeci(name);
            } else if(index == 4) {
                setTokenInfofivedeci(name);
            } else if(index == 5) {
                setTokenInfosixdeci(name);
            } else if(index == 6) {
                setTokenInfosevendeci(name);
            }
        });

        if(index == 0) {
             finalvalue = tokeninfoonedeci;
        } else if(index == 1){
            finalvalue = tokeninfotwodeci;
        } else if(index == 2) {
            finalvalue = tokeninfothreedeci;
        } else if(index == 3) {
            finalvalue = tokeninfofourdeci;
        } else if(index == 4) {
            finalvalue = tokeninfofivedeci;
        } else if(index == 5) {
            finalvalue = tokeninfosixdeci;
        } else if(index == 6) {
            finalvalue = tokeninfosevendeci;
        }

        return finalvalue;
     }


/*
     const gettokenscallsone = async () => {
        //myownlock
        console.log("called one");
        const temparrone = [];
        const symbtempone = [];
        const decitempsone = [];
        console.log("Outside map")
        myownlock[0]?.map( async (data) => {
            console.log("Inside map")
            const name = await getname(data.token);
            console.log(name);
            const symbol = await getsymbol(data.token);
            const decimals = await getdecimal(data.token);
                temparrone.push(name);
                symbtempone.push(symbol);
                decitempsone.push(decimals);
        })
        console.log(decitempsone);
        console.log(symbtempone)
            setTokenNames(temparrone);
            setTokenSymb(symbtempone);
            setTokenDecimal(decitempsone);

    }


    const gettokenscallstwo = async () => {
        //lockedTokens
        console.log("called two")
        const temparr = [];
        const symbtemp = [];
        const decitemps = [];
        lockedTokens?.map( async (data) => {
            const name = await getname(data.token);
            const symbol = await getsymbol(data.token);
            const decimals = await getdecimal(data.token);
            temparr.push(name);
            symbtemp.push(symbol);
            decitemps.push(decimals);
        })
        console.log(temparr, "checking temp");
            setTokenNamesall(temparr);
            setTokenSymball(symbtemp);
            setTokenDecimalall(decitemps);
        
    }
*/


    //get my locks 

    const mylocks = async () => {

        if(!props.signerAddress) {
            props.setbg("warning");
            props.setMessage("Connect Wallet to Proceed");
            props.setShow(true);
            return;
        }
        console.log("Here Testing");
        setViewbool(false);
        setLockSwitch(true);

        const chaincomp = await props.signer.getChainId();
        
        if(chaincomp === ethchainID) {
            const contractInstance =  await getethContract();
            const mylocks = await contractInstance.normalLocksForUser(props.signerAddress);
            const lplocks = await contractInstance.lpLocksForUser(props.signerAddress);

            if(mylocks.length !== 0 && lplocks.length === 0) {
                setMyOwmLock([mylocks]);
            } else if(lplocks.length !== 0 && mylocks.length === 0) {
                setMyOwmLock([lplocks]);
            } else if(mylocks.length === 0 && lplocks.length === 0){
                setMyOwmLock([]);
            } else {
                setMyOwmLock([...mylocks, ...lplocks]);
            }

        }
        else if(chaincomp === bscchainID) {
            const contractInstance =  await getbscContract();
            const mylocks = await contractInstance.normalLocksForUser(props.signerAddress);
            const lplocks = await contractInstance.lpLocksForUser(props.signerAddress);

            if(mylocks.length !== 0 && lplocks.length === 0) {
                setMyOwmLock([mylocks]);
            } else if(lplocks.length !== 0 && mylocks.length === 0) {
                setMyOwmLock([lplocks]);
            } else if(mylocks.length === 0 && lplocks.length === 0){
                setMyOwmLock([]);
            } else {
                setMyOwmLock([...mylocks, ...lplocks]);
            }

        }
        else if(chaincomp === poachainID) {
            const contractInstance =  await getpoaContract();
            const mylocks = await contractInstance.normalLocksForUser(props.signerAddress);
            const lplocks = await contractInstance.lpLocksForUser(props.signerAddress);

            if(mylocks.length !== 0 && lplocks.length === 0) {
                setMyOwmLock([mylocks]);
            } else if(lplocks.length !== 0 && mylocks.length === 0) {
                setMyOwmLock([lplocks]);
            } else if(mylocks.length === 0 && lplocks.length === 0){
                setMyOwmLock([]);
            } else {
                setMyOwmLock([...mylocks, ...lplocks]);
            }
        }
        else if(chaincomp === testID) {
            
            const contractInstance =  await gettestContract();
            //console.log(contractInstance);
            const mylocks = await contractInstance.normalLocksForUser(props.signerAddress);
            const lplocks = await contractInstance.lpLocksForUser(props.signerAddress);
            //console.log(mylocks);
            //console.log(lplocks);
            //setMyOwmLock([mylocks]);
            
            if(mylocks.length !== 0 && lplocks.length === 0) {
                setMyOwmLock([mylocks]);
            } else if(lplocks.length !== 0 && mylocks.length === 0) {
                setMyOwmLock([lplocks]);
            } else if(mylocks.length === 0 && lplocks.length === 0){
                setMyOwmLock([]);
            } else {
                setMyOwmLock([...mylocks, ...lplocks]);
            }
            
        }
        
    }


    const all = () => {
        setViewbool(false);
        setLockSwitch(false);
    }





    const viewmore = (data, index) => {
       setViewbool(true);
       setViewData(data);
       setViewIndex(index);
    }


    const getDate = (ama) => {
        console.log(parseInt(BigInt(ama)))
        const dateama = new Date(parseInt(BigInt(ama)) * 1000);
  
        const timeString = dateama.toUTCString().split(" ")[4]; //This will return your 17:50:00
        //For the date string part of it
        const dateNumber = dateama.getDate();
        const monthNumber = dateama.getMonth() + 1;
        const yearNumber = dateama.getFullYear();
        const dateString = `${dateNumber}/${monthNumber}/${yearNumber}`;
        const finalDateString = [dateString, timeString].join(" ");
        return finalDateString;
    
     }


     const getDatetwo = (ama) => {

        const dateama = new Date(parseInt(BigInt(ama)) * 1000);
        const currentdate = new Date().getTime();

        const unlockdate = dateama - currentdate;
        console.log(unlockdate);
  
        const timeString = dateama.toUTCString().split(" ")[4]; //This will return your 17:50:00
        //For the date string part of it
        const dateNumber = unlockdate.getDate();
        const monthNumber = unlockdate.getMonth() + 1;
        const yearNumber = unlockdate.getFullYear();
        const dateString = `${dateNumber}/${monthNumber}/${yearNumber}`;
        const finalDateString = [dateString, timeString].join(" ");
        return finalDateString;
    
     }


     const lockup = () => {
        navigate(`/Lockups`);
      }
      


    const unlock = async (data) => {

        const chaincomp = await props.signer.getChainId();
        
        if(chaincomp === ethchainID) {
            const contractInstance =  await getethContract();
            const unlock = await contractInstance.unlock(data.id);
            await unlock.wait();
        }
        else if(chaincomp === bscchainID) {
            const contractInstance =  await getbscContract();
            const unlock = await contractInstance.unlock(data.id);
            await unlock.wait();

        }
        else if(chaincomp === poachainID) {
            const contractInstance =  await getpoaContract();
            const unlock = await contractInstance.unlock(data.id);
            await unlock.wait();
        }
        else if(chaincomp === testID) {
            
            const contractInstance =  await gettestContract();
            const unlock = await contractInstance.unlock(data.id);
            await unlock.wait();
            
        }
    }



    const getercdetails = (index) => {
        console.log("check check", index)
       // return tokenNamesall[index];
    }


          //display address
          const displayaddr = (token) => {
            return `${token?.substring(0,14)}`;
        }


        useEffect(() => {
            
            getTokens();
            console.log(lockedTokens);
        
        }, [props.signerAddress, myownlock]);




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
        
                                <div className="w-100 d-flex flex-column flex-lg-row justify-content-between">
                                     
                                    <div className="w-100">
                                        <h3  className='text-white header-text'> { !lockswitch ?  "All Tokens for" : "Your Locked for" } {props.chain === 1 ? 'Ethereum' : props.chain === 56 ? 'Binance' : props.chain === 493 ? 'ProofofApes' : 'Binance Testnet'}. </h3>
                                    </div>

                                    <div className="lockswitch-buttons">
                                    <button className={ !lockswitch ? "btn btn-success my-2 my-sm-0" : "btn btn-outline-success my-2 my-sm-0"} onClick={all}>All</button>

                                    <button className={lockswitch ? "btn btn-success my-2 my-sm-0" : "btn btn-outline-success my-2 my-sm-0"} style={{marginLeft: '10px'}} onClick={mylocks}>My locks</button>
                                    </div>

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
                              {!viewbool ? 
                                <div className="tablecontain">
                                    <table className="table worktable">
                                    <thead className='thead'>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    {props.signerAddress !== undefined &&
                                    <>
                                    { !lockswitch ?

                                        <tbody>
                                        {lockedTokens?.map((data, index) => (
                                            <tr className='trfix' key={index}>
                                            <td scope="row">{getname(data.token, index)}</td>
                                            <td>{ (Math.round(data?.amount/10 ** 18) * 10 ) / 10 } {getsymbol(data.token, index)} </td>
                                            <td className='viewhover' onClick={ () => viewmore(data, index)} >view</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                        :
                                        <tbody>
                                        { myownlock[0]?.map((data, index) => (
                                            <tr className='trfix' key={index}>
                                            <td scope="row">{getname(data.token, index)}</td>
                                            <td>{ (Math.round(data?.amount/10 ** 18) * 10 ) / 10 } {getsymbol(data.token, index)} </td>
                                            <td className='viewhover' onClick={ () => viewmore(data, index)} >view</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                     }
                                    </>
                                    }

                                    </table>
                                </div>
                                :
                                <div className="border-containerfive">


                                 <div className="row">
                                    <h4 className="header mb-4 text-warning">Lock info</h4>

                                    <div className="col-6 d-flex flex-column gap-3 align-items-start text-white">
                                       <div className="info">Current Locked Amount</div>
                                       <div className="info">Token Address</div>
                                       <div className="info">Token Name</div>
                                       <div className="info">Token Symbol</div>
                                       <div className="info">Token Decimals</div>
                                       <div className="info">lock time(UTC)</div>
                                    </div>

                                    <div className="col-6 d-flex flex-column gap-3 align-items-end text-white">
                                      <div className="infoleft">{ (Math.round(viewdata?.amount/10 ** 18) * 10 ) / 10 } {getsymbol(viewdata.token, viewindex)}</div>
                                      <div className="infoleft">{ window.innerWidth < 600 ? displayaddr(viewdata.token) : viewdata.token } { window.innerWidth < 600 && "..."}</div>
                                      <div className="infoleft">{getname(viewdata.token, viewindex)}</div>
                                      <div className="infoleft">{getsymbol(viewdata.token, viewindex)}</div>
                                      <div className="infoleft">{getdecimal(viewdata.token, viewindex)}</div>
                                      <div className="infoleft">{getDate(viewdata.lockDate)}</div>
                                    </div>
                                 </div>
                                   {lockswitch &&
                                        <div className="d-flex justify-content-center align-items-center w-100 mt-3">
                                            <button className="btn btn-outline-success my-2 my-sm-0"onClick={ () => unlock(viewdata) } >unlock</button>
                                        </div>
                                   }

                                 </div>

                                 }

                                   
                                    {!props.signerAddress && 

                                        <div className="border-container">
                                                    
                                            <div className="img-container">
                                            <img className='connectwallet' src={wallet} alt="" />
                                            </div>

                                            <div className="connect">
                                            <div className="info">Connect Wallet</div>
                                            <div className="">
                                            <button class="btn btn-outline-success my-2 my-sm-0 ms-auto" onClick={() => props.getWalletAddress() } >Connect wallet</button>
                                            </div>

                                            </div>

                                        </div>
                                    }
                                    
                                    { !lockswitch && props.signerAddress ?

                                     <>
                                       { lockedTokens?.length === 0 && 

                                          <div className="border-container">
                                                        

                                                <div className="connect">
                                                   <h3 className="info">There are no locks on {props.chain === 1 ? 'Ethereum' : props.chain === 56 ? 'Binance' : props.chain === 493 ? 'ProofofApes' : 'Binance Testnet'}</h3>

                                                </div>

                                          </div>
                                        }
                                     </>
                                     :
                                     <>
                                        { lockswitch && myownlock?.length === 0 && 

                                            <div className="border-container">
                                                        

                                                <div className="connect">
                                                <h3 className="info">You have no locked tokens</h3>
                                                <div className="">
                                                <button class="btn btn-outline-success my-2 my-sm-0 ms-auto" onClick={lockup } >go to locks</button>
                                                </div>

                                                </div>

                                            </div>

                                            }
                                     </>

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
