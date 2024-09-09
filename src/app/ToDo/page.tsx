'use client'

import Header from "../components/header";
import React, { RefObject, useState } from "react";
import { useRef } from "react";

const ToDo = () => {

    const inputValue: RefObject<HTMLInputElement> = useRef(null);
    const [inputStateValue, setInputStateValue] = useState<string>("")
    const [taskList, setTaskList] = useState<string[]>([]);
    const [isEditVisible, setEditVisible] = useState<boolean>(false);

    const handleClick = () => {
        if ( inputValue.current && inputValue.current.value != ''){
            var list: string[] = [];
            list = [...taskList];
            list.push(inputValue.current.value);
            setTaskList(list);
            inputValue.current.value = '';
        }
    }

    const handleStateClick = () => {
        
    }

    const handleChangeInput = (inputValue: string) => {
        setInputStateValue(inputValue)
    }

    const handleDelete = (index: number) => {
        var list : string[] = [];
        list = [...taskList];
        list.splice(index, 1);
        setTaskList(list);
    }

    const handleEdit = (index: number) => {
        setEditVisible(!isEditVisible)
    }

    return (
        <div>
            <Header />
            <input type='text' className="border" ref={inputValue} />
            <button onClick={handleClick}>追加する</button>
            <input type='text' className="border" value={inputStateValue} onChange={(e)=>handleChangeInput(e.target.value)}/>
            <button onClick={handleStateClick}>追加する</button>
            {taskList.map((task, index)=>{return(<ListDesign value={task} index={index} onDelClick={handleDelete} onEditClick={handleEdit}/>)})}
        </div>
    )
}
export default ToDo;

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