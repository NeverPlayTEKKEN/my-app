'use client'

import Header from "../components/header";
import { RefObject, useState } from "react";
import { useRef } from "react";

const ToDo = () => {

    const inputValue: RefObject<HTMLInputElement> = useRef(null);

    const handleClick = () => {
        if ( inputValue.current){
            alert(inputValue.current.value)
        }
    }

    return (
        <div>
            <Header />
            <input type='text' className="border" ref={inputValue}></input>
            <button onClick={handleClick}>追加する</button>
        </div>
    )
}

export default ToDo;