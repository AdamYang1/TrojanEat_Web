import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Food from '../FoodOptions/Food';
import DiningHall from "../DiningHall/DiningHall";
import TopRecommended from "../DiningHall/TopRecommended";

const meal_begins = ["06:00:00", "12:00:00", "17:00:00"];
const meal_ends = ["12:00:00", "17:00:00", "22:00:00"];

function getMeal(s) {
    if (s > meal_begins[0] && s < meal_ends[0]) {
        return "breakfast";
    } else if (s > meal_begins[1] && s < meal_ends[1]) {
        return "lunch";
    } else if (s > meal_begins[2] && s < meal_ends[2]) {
        return "dinner";
    }
}

export default function Dashboard() {
    let res = []
    if (localStorage.getItem("token")) {
        res = localStorage.getItem("token").split('@');
    }
    const name = res[0];

    const [topObj, setTopObj] = useState({});

    // menu GET request
    const [menu, setMenu] = useState([]);
    // dining hall GET request
    const [diningHalls, setDiningHalls] = useState([]);
    // gets User's preferences
    const [prefs, setPrefs] = useState([]);
    const [matched, setMatched] = useState([]);

    let top_recommended = {}

    useEffect(() => {
        const fetchPrefs = async () => {
            try {
                const {data: response} = await axios.get(`https://trojans-eat.herokuapp.com/api/v1/user/email/${localStorage.getItem("token")}/getPref`);
                let keys = []
                Object.entries(response).map(([k,v]) => keys.push(k.toLowerCase()));
                console.log(keys)
                setPrefs(keys);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchPrefs()
    }, [])

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const {data: response} = await axios.get('https://trojans-eat.herokuapp.com/api/v1/menu');
                setMenu(response);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchMenu()
    }, [])

    useEffect(() => {
        const fetchDiningHalls = async () => {
            try {
                const {data: response} = await axios.get('https://trojans-eat.herokuapp.com/api/v1/dining-halls');
                setDiningHalls(response);
                console.log(response)
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchDiningHalls()
    },[])

    const fetchData = async () => {
        // const dHalls = ["EVK", "VLG", "PKS"];
        const pref = await fetch(
            `https://trojans-eat.herokuapp.com/api/v1/user/email/${localStorage.getItem(
                "token"
            )}/getPref`
        );
        var today = new Date();
        const time =
            today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(time);

        const prefJson = await pref.json();
        const prefList = Object.keys(prefJson);
        const prefLList = prefList.map((item) => {
            return item.toLowerCase();
        });
        let top = { VLG: [], EVK: [], PKS: [] };
        for (const pref of prefLList) {
            const res1 = await fetch(
                `https://trojans-eat.herokuapp.com/api/v1/matchedMenu/type/${pref}/dh/evk/meal/${getMeal(
                    time
                )}`
            );
            const res2 = await fetch(
                `https://trojans-eat.herokuapp.com/api/v1/matchedMenu/type/${pref}/dh/vlg/meal/${getMeal(
                    time
                )}`
            );
            const res3 = await fetch(
                `https://trojans-eat.herokuapp.com/api/v1/matchedMenu/type/${pref}/dh/pks/meal/${getMeal(
                    time
                )}`
            );

            const res1Json = await res1.json();
            const res2Json = await res2.json();
            const res3Json = await res3.json();
            for (const temp of res1Json) {
                const existingTemp = top.EVK.filter((item) => item.id === temp.id);
                if (existingTemp.length == 0) {
                    top.EVK.push(temp);
                }
            }
            for (const temp of res2Json) {
                const existingTemp = top.VLG.filter((item) => item.id === temp.id);
                if (existingTemp.length == 0) {
                    top.VLG.push(temp);
                }
            }
            for (const temp of res3Json) {
                const existingTemp = top.PKS.filter((item) => item.id === temp.id);
                if (existingTemp.length == 0) {
                    top.PKS.push(temp);
                }
            }
        }
        const res4 = await fetch(
            `https://trojans-eat.herokuapp.com/api/v1/dining-halls`
        );
        const res4Json = await res4.json();
        let vlgSize = top.VLG.length;
        let evkSize = top.EVK.length;
        let pksSize = top.PKS.length;
        let tempTop = {};
        if (vlgSize >= evkSize && vlgSize >= pksSize) {
            tempTop = top.VLG;
        } else if (evkSize > pksSize && evkSize > pksSize) {
            tempTop = top.EVK;
        } else {
            tempTop = top.PKS;
        }
        console.log("tempTop: ");
        console.log(tempTop);
        setMatched(tempTop);

        if (tempTop[0].dHall === 'EVK') {
            setTopObj(res4Json[0])
        } else if (tempTop[0].dHall === 'PKS') {
            setTopObj(res4Json[1])
        } else if (tempTop[0].dHall === 'VLG') {
            setTopObj(res4Json[2])
        }
    };
    const fetchAsync = async () => {
        await fetchData();
        console.log(topObj);
    };
    useEffect(() => {
        fetchAsync();
    }, []);

    return(
    <div className='dark:bg-gray-900'>
        <Navbar />
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold ml-4 dark:text-white'>Hi {name}!👋</h1>
            <div className='grid grid grid-cols-1 sm:grid-cols-2 sm:gap-10 pl-4'>
                <div>
                    <h1 className='text-lg font-bold pt-5 pb-2 dark:text-white'>Top Recommended</h1>
                    <TopRecommended props={topObj} />
                </div>
                <div className='sm:ml-5'>
                    <h1 className='text-lg font-semibold pt-5 pb-2 dark:text-white'>Personalized Options</h1>
                    <div className='flex flex-col h-[280px] overflow-y-scroll'>
                        {
                            matched.map((item) => <Food props={item}/>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-lg font-bold pt-5 pl-4 dark:text-white'>Other Recommendations</h1>
                <div className='flex overflow-x-scroll p-5 mt-2'>
                    {
                        diningHalls.map((hall,i) => <DiningHall key={i} props={hall}/>)
                    }
                </div>
            </div>
        </div>
    </div>
  );
}