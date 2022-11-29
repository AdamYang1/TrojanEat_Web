import React from "react"
import Type from "./Type"

export default function Food({ props }) {
    let categories = []
    for (const [key, value] of Object.entries(props)) {
        if (value === 1) {
            categories.push(key);
        }
    }
    categories.sort()

    return (
        <div className="flex items-center mb-2">
            <Type category={categories[0]}/>
            <p className="ml-2 dark:text-white">{ props.food_name }</p>
        </div>
    )
}