import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Food from '../FoodOptions/Food';
import DiningHall from "../DiningHall/DiningHall";
import TopRecommended from "../DiningHall/TopRecommended";

export default function Dashboard() {
    let res = localStorage.getItem("token").split('@');
    const name = res[0];

    const [prefs, setPrefs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get(`https://trojans-eat.herokuapp.com/api/v1/user/email/${localStorage.getItem("token")}/getPref`);
                setPrefs(response);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, []);

    const village = {
        "id" : 5,
        "name" : "USC Village Dining Hall",
        "img_url" : "https://hospitality.usc.edu/wp-content/uploads/2017/07/01_usc_village_dining_hall.jpg",
        "open" : false
    }

    // menu GET request
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get('https://trojans-eat.herokuapp.com/api/v1/menu');
                setMenu(response);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, []);

    // dining hall GET request
    const [diningHalls, setDiningHalls] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get('https://trojans-eat.herokuapp.com/api/v1/dining-halls');
                setDiningHalls(response);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, []);

    return(
    <div className='dark:bg-gray-900'>
        <Navbar />
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold ml-4 dark:text-white'>Hi {name}!👋</h1>
            <div className='grid grid grid-cols-1 sm:grid-cols-2 sm:gap-10 pl-4'>
                <div>
                    <h1 className='text-lg font-bold pt-5 pb-2 dark:text-white'>Top Recommended</h1>
                    <TopRecommended props={village} />
                </div>
                <div className='sm:ml-5'>
                    <h1 className='text-lg font-semibold pt-5 pb-2 dark:text-white'>Personalized Options</h1>
                    <div className='flex flex-col h-[280px] overflow-y-scroll'>
                        {
                            menu.map((item) => <Food props={item}/>)
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