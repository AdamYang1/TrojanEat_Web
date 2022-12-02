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

    let res = localStorage.getItem("token").split('@');
    const name = res[0];

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

    useEffect(() => {

        const dHalls = ["EVK", "VLG", "PKS"]

        const fetchData = async () => {
            for (let i = 0; i < prefs.length; i++) {
                for (let j = 0; j < diningHalls.length; j++) {
                    try {
                        var today = new Date()
                        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
                        console.log(time)
                        const {data: response} = await axios.get(`https://trojans-eat.herokuapp.com/api/v1/matchedMenu/type/${prefs[i]}/dh/${dHalls[j]}/meal/${getMeal(time)}`);
                        console.log(response)
                        if (response.length > matched.length) {
                            setMatched(response);
                        }

                        console.log("matched = ")
                        console.log(matched)
                    } catch (error) {
                        console.error(error.message);
                    }
                }
            }
        }
        fetchData()
    }, []);

    return(
    <div className='dark:bg-gray-900'>
        <Navbar />
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold ml-4 dark:text-white'>Hi {name}!👋</h1>
            <div className='grid grid grid-cols-1 sm:grid-cols-2 sm:gap-10 pl-4'>
                <div>
                    <h1 className='text-lg font-bold pt-5 pb-2 dark:text-white'>Top Recommended</h1>
                    <TopRecommended props={diningHalls[0]} />
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