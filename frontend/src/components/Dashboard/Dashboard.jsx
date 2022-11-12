import React from 'react';
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Food from '../FoodOptions/Food';
import { StarIcon } from '@heroicons/react/24/solid'
import axios from 'axios';
import DiningHall from "../DiningHall/DiningHall";

export default function Dashboard() {
    const name = 'Josh'
    const [diningHalls, setDiningHalls] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const {data: response} = await axios.get('http://localhost:8080/api/v1/dining-halls');
                setDiningHalls(response);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, []);

    return(
    <div>
        <Navbar />
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold'>Hi {name}!👋</h1>
            <div className='grid grid grid-cols-1 sm:grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-lg font-semibold pt-5 pb-2'>Top Recommended</h1>
                    <img className='w-full rounded-lg' alt="USC Village Dining Hall" src='https://hospitality.usc.edu/wp-content/uploads/2017/07/01_usc_village_dining_hall.jpg'/>
                    <div>
                        <h1 className='text-lg font-semibold'>USC Village Dining Hall</h1>
                        <div className='flex'>
                            <StarIcon className='w-5 text-orange-300'/>
                            <StarIcon className='w-5 text-orange-300'/>
                            <StarIcon className='w-5 text-orange-300'/>
                            <StarIcon className='w-5 text-orange-300'/>
                            <StarIcon className='w-5 text-gray-300'/>
                        </div>
                    </div>
                </div>
                <div className='sm: ml-5'>
                    <h1 className='text-lg font-semibold pt-5 pb-2'>Personalized Options</h1>
                    <div className='flex flex-col justify-between h-[280px]'>
                        <Food name={'Ice Cream'} category={'dairy'}/>
                        <Food name={'Salad'} category={'vegan'}/>
                        <Food name={'Sushi'} category={'fish'}/>
                        <Food name={'Porkchops'} category={'pork'}/>
                        <Food name={'Omelettes'} category={'eggs'}/>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-lg font-semibold pt-5 pb-2'>Other Recommendations</h1>
                <div className='flex overflow-x-scroll'>
                    {
                        diningHalls.map((hall,i) => <DiningHall key={i} props={hall}/>)
                    }
                </div>
            </div>
        </div>
    </div>
  );
}