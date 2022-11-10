import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCow } from '@fortawesome/free-solid-svg-icons'
import { faEgg } from '@fortawesome/free-solid-svg-icons'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faShrimp } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function Type({ category }) {
    if (category === 'dairy') {
        return (
            <div>
                <FontAwesomeIcon icon={faCow} className='p-2.5 py-[12.5px] text-white rounded-lg bg-indigo-700' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'eggs') {
        return (
            <div>
                <FontAwesomeIcon icon={faEgg} className='px-[15px] py-[12.5px] text-white rounded-lg bg-yellow-200' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'fish') {
        return (
            <div>
                <FontAwesomeIcon icon={faFish} className='p-[11px] py-[12.5px] text-white rounded-lg bg-sky-500' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'peanuts') {
        return (
            <div>
                <FontAwesomeIcon icon={faBan} className='p-2.5 py-3 text-white rounded-lg bg-yellow-600' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'pork') {
        return (
            <div>
                <FontAwesomeIcon icon={faDrumstickBite} className='p-[12.5px] py-[12.5px] text-white rounded-lg bg-rose-500' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'sesame') {
        return (
            <div>
                <FontAwesomeIcon icon={faBan} className='p-2.5 py-3 text-white rounded-lg bg-slate-500' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'shellfish') {
        return (
            <div>
                <FontAwesomeIcon icon={faShrimp} className='p-2.5 py-3 text-white rounded-lg bg-teal-300' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'soy') {
        return (
            <div>
                <FontAwesomeIcon icon={faCow} className='p-2.5 py-3 text-white rounded-lg bg-violet-300' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'tree-nuts') {
        return (
            <div>
                <FontAwesomeIcon icon={faCow} className='p-2.5 py-3 text-white rounded-lg bg-amber-500' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'vegan') {
        return (
            <div>
                <FontAwesomeIcon icon={faSeedling} className='p-[12.5px] py-[12.5px] text-white rounded-lg bg-lime-400' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'vegetarian') {
        return (
            <div>
                <FontAwesomeIcon icon={faLeaf} className='p-2.5 py-3 text-white rounded-lg bg-emerald-500' size={"lg"}/>
            </div>
        )
    }
    else if (category === 'wheat/gluten') {
        return (
            <div>
                <FontAwesomeIcon icon={faWheatAwn} className='p-2.5 py-3 text-white rounded-lg bg-pink-400' size={"lg"}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <FontAwesomeIcon icon={faX} className='p-2.5 py-3 text-white rounded-lg bg-black' size={"lg"}/>
            </div>
        )
    }
}