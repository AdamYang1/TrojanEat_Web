import React from "react"
import { useState, useContext } from "react";

function Preferences() {

    const [isClicked, setisClicked] = useState(false);
    const [isBeefClicked, setisBeefClicked] = useState(false);
    const [isDairyClicked, setisDairyClicked] = useState(false);
    const [isEggsClicked, setisEggsClicked] = useState(false);
    const [isShellfishClicked, setisShellfishClicked] = useState(false);
    const [isPorkClicked, setisPorkClicked] = useState(false);
    const [isChickenClicked, setisChickenClicked] = useState(false);
    const [isFishClicked, setisFishClicked] = useState(false);
    const [isSesameClicked, setisSesameClicked] = useState(false);
    const [isVeganClicked, setisVeganClicked] = useState(false);

    const submitHandler = function (event) {
        console.log("submitted");
    }

    const onChangeBeef = () =>{
        console.log("clicked beef");
        setisBeefClicked((prevState) => !prevState);
    }
    
    const onChangeDairy = () =>{
        console.log("clicked dairy");
        setisDairyClicked((prevState) => !prevState);
    }

    const onChange = () =>{
        console.log("clicked");
        setisClicked((prevState) => !prevState);
    }

    const onChangeEggs = () =>{
        console.log("clicked eggs");
        setisEggsClicked((prevState) => !prevState);
    }

    const onChangeShellfish = () => {
        console.log("clicked shellish");
        setisShellfishClicked((prevState) => !prevState);
    }

    const onChangePork = () => {
        console.log("clicked pork");
        setisPorkClicked((prevState) => !prevState);
    }

    const onChangeChicken = () => {
        console.log("clicked chicken");
        setisChickenClicked((prevState) => !prevState);
    }

    const onChangeFish= () => {
        console.log("clicked fish");
        setisFishClicked((prevState) => !prevState);
    }

    const onChangeSesame = () => {
        console.log("clicked sesame");
        setisSesameClicked((prevState) => !prevState);
    }

    const onChangeVegan = () => {
        console.log("clicked vegan");
        setisVeganClicked((prevState) => !prevState);
    }
    
    return(
        <div className = "flex min-h-full items-center justify-center mx-10 px-8 mt-20">
        <div className = "mx-8 max-w-7xl px-2 sm:px-6 lg:px-8">
            <h1 className = "text-3xl font-bold mx-8 my-2 mt-6 tracking-tight">Select Your Preferences</h1>
            <h6 className = "mx-8 my-2">Check all that apply</h6>
            <form className="mt-10 mx-8 mb-0 space-y-6" onSubmit={submitHandler}>
                <div className = "grid grid-cols-4 gap-4 justify-content">
                { isBeefClicked ? (
                    <div onClick={onChangeBeef} className="checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Beef</p>
                    </div>
                ) : (
                     <div onClick={onChangeBeef} className="checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-600 hover:border-red-600 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Beef</p>
                    </div>
                )}
                { isDairyClicked ? (
                    <div onClick={onChangeDairy} className="checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Dairy</p>
                    </div>
                 ) : (
                    <div onClick={onChangeDairy} className="checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-600 hover:border-red-600 hover:text-white text-sm px-4 py-2 border rounded-full">
                       <p>No Dairy</p>
                    </div>
                )}
                 { isEggsClicked ? (
                    <div onClick={onChangeEggs} className="checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Eggs</p>
                    </div>
                ) : (
                     <div onClick={onChangeEggs} className="checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-600 hover:border-red-600 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Eggs</p>
                 </div>
                )}
                { isShellfishClicked ? (
                    <div onClick={onChangeShellfish} className="checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Shellfish</p>
                    </div>
                ) : (
                    <div onClick={onChangeShellfish} className="checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Shellfish</p>
                    </div>
                )}
                </div>
                <div className = "grid grid-cols-8 gap-4 justify-content">
                { isPorkClicked ? (
                    <div onClick={onChangePork} className="col-start-2 col-end-4 checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Pork</p>
                    </div>
                ) : (
                    <div onClick={onChangePork} className="col-start-2 col-end-4 checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Pork</p>
                    </div>
                )}
                { isChickenClicked ? (
                    <div onClick={onChangeChicken} className="col-start-4 col-end-6 checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Chicken</p>
                    </div>
                ) : (
                    <div onClick={onChangeChicken} className="col-start-4 col-end-6 checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Chicken</p>
                    </div>
                )}
                 { isFishClicked ? (
                    <div onClick={onChangeFish} className="col-start-6 col-end-8 checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Fish</p>
                    </div>
                ) : (
                    <div onClick={onChangeFish} className="col-start-6 col-end-8 checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Fish</p>
                    </div>
                )}
                </div>
                <div className = "grid grid-cols-8 gap-4 justify-content">
                { isSesameClicked ? (
                    <div onClick={onChangeSesame} className="col-start-3 col-end-5 checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Sesame</p>
                    </div>
                ) : (
                    <div onClick={onChangeSesame} className="col-start-3 col-end-5 checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                         <p>No Sesame</p>
                    </div>
                )}
                { isVeganClicked ? (
                    <div onClick={onChangeVegan} className="col-start-5 col-end-7 checkmark justify-content text-center border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Vegan</p>
                    </div>
                ) : (
                    <div onClick={onChangeVegan} className="col-start-5 col-end-7 checkmark justify-content text-center border-2 border-red-600 text-black hover:bg-red-700 hover:border-red-700 hover:text-white text-sm px-4 py-2 border rounded-full">
                        <p>No Vegan</p>
                    </div>
                )}
                </div>
                <div className="grid grid-cols-9 justify-content mt-20 mx-20"> 
                    <button
                        type="submit"
                        className="col-start-4 col-end-7 group relative flex w-full justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Preferences; 
