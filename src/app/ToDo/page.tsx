'use client'

import Header from "../components/header";
import React, { RefObject, useState } from "react";
import { useRef } from "react";
import internal from "stream";
import { List } from "postcss/lib/list";

const ToDo = () => {

    const inputValue: RefObject<HTMLInputElement> = useRef(null);
    const [taskList, setTaskList] = useState<string[]>([])

    const handleClick = () => {
        if ( inputValue.current){
            var list: string[] = []
            list = [...taskList]
            list.push(inputValue.current.value)
            setTaskList(list)
            inputValue.current.value = ''
        }
    }

    const handleDelete = (index: number) => {
        var list : string[] = []
        list = [...taskList]
        list.splice(index, 1)
        setTaskList(list)
    }

    const handleEdit = (index: number) => {
        
    }

    return (
        <div>
            <Header />
            <input type='text' className="border" ref={inputValue}></input>
            <button onClick={handleClick}>追加する</button>
            {taskList.map((task, index)=>{return(<ListDesign value={task} index={index} onDelClick={handleDelete} onEditClick={handleEdit}/>)})}
        </div>
    )
}

interface ListProps {
    value: string;
    index: number;
    onDelClick(index: number): void;
    onEditClick(index: number): void;
}

const ListDesign: React.FC<ListProps> = (props) => {
    return (
        <div>
            {props.index}：{props.value}
            <button className="border" onClick={() => props.onDelClick(props.index)}>削除</button>
            <button className="border" onClick={() => props.onEditClick(props.index)}>編集</button>
        </div>
    )
}

export default ToDo;