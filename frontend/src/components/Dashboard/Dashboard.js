import React from 'react';
import Navbar from './Navbar'
import Food from '../FoodOptions/Food';
import { StarIcon } from '@heroicons/react/24/solid'

const name = 'Josh'

export default function Dashboard() {
  return(
    <div>
        <Navbar />
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold'>Hi {name}!👋</h1>
            <div className='grid grid grid-cols-1 sm:grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-lg font-semibold pt-5 pb-2'>Top Recommended</h1>
                    <img className='w-full rounded-lg' alt="USC Village Dining Hall" src='https://hospitality.usc.edu/wp-content/uploads/2017/07/01_usc_village_dining_hall.jpg'/>
                    <div className='py-2'>
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
                    <div>
                        <img className='rounded-lg w-full' alt="Everybody's Kitchen" src='https://hospitality.usc.edu/wp-content/uploads/2015/06/01_evk_slider.jpg'/>
                        <h1 className='text-lg font-semibold'>USC Village Dining Hall</h1>
                        <div className='flex'>
                            <StarIcon className='w-5 text-orange-300'/>
                            <StarIcon className='w-5 text-orange-300'/>
                            <StarIcon className='w-5 text-orange-300'/>
                            <StarIcon className='w-5 text-orange-300'/>
                            <StarIcon className='w-5 text-gray-300'/>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-lg w-full' alt="Everybody's Kitchen" src='https://hospitality.usc.edu/wp-content/uploads/2015/06/01_evk_slider.jpg'/>
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
            </div>
        </div>
    </div>
  );
}