import React from "react"
import Type from "./Type"

export default function Food({ category, name }) {
    return (
        <div className="flex items-center">
            <Type category={category}/>
            <p className="ml-2">{ name }</p>
        </div>
    )
}