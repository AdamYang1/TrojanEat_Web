import React from "react"
import {StarIcon} from "@heroicons/react/24/solid";

const DiningHall = ({ props }) => {
    return (
        <div className='w-96 mr-4 sm:mb-0 mb-5 transition ease-in-out hover:scale-110 duration-300'>
            <img className='rounded-lg w-screen' alt={props.name} src={props.img_url}/>
            <div className='pt-2'>
                <h1 className='text-md font-medium w-96 dark:text-white'>{props.name}</h1>
                <div className='flex w-96'>
                    <StarIcon className='w-5 text-orange-300'/>
                    <StarIcon className='w-5 text-orange-300'/>
                    <StarIcon className='w-5 text-orange-300'/>
                    <StarIcon className='w-5 text-orange-300'/>
                    <StarIcon className='w-5 text-gray-300'/>
                </div>
            </div>
        </div>
    )
}

export default DiningHall;