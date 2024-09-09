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
        if ( inputStateValue != '' ) {
            var list: string[] = [];
            list = [...taskList];
            list.push(inputStateValue);
            setTaskList(list);
            setInputStateValue('');
        }

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

    const handleEditDecide = (index: number, inputText: string) => {
        var list : string[] = taskList.slice()
        list[index] = inputText
        setTaskList(list);
    }

    return (
        <div>
            <Header />
            <input type='text' className="border" ref={inputValue} />
            <button onClick={handleClick}>追加する</button>
            <input type='text' className="border" value={inputStateValue} onChange={(e)=>handleChangeInput(e.target.value)}/>
            <button onClick={handleStateClick}>追加する</button>
            {taskList.map((task, index)=>{return(<ListDesign　value={task} index={index} onDelClick={handleDelete} onEditDecide={handleEditDecide}/>)})}
        </div>
    )
}
export default ToDo;

interface ListProps {
    value: string;
    index: number;
    onDelClick(index: number): void;
    onEditDecide(index: number, inputText: string): void;
}

const ListDesign: React.FC<ListProps> = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const [inputText, setInputText] = useState(props.value)
    
    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleEditDecide = () => {
        props.onEditDecide(props.index, inputText)
        setIsEditing(false)
    }

    return (
        <div>
            <span>{props.index}：</span>
            {isEditing ? (
                <span>
                    <input type='text'  value={inputText} onChange={(e)=>setInputText(e.target.value)} />
                    <button onClick={handleEditDecide}>確定</button>
                </span>
            ):(
                <span><span>{props.value}</span><button onClick={handleEdit}>編集</button></span>
            )}
            <button onClick={() => props.onDelClick(props.index)}>削除</button>
        </div>
    )
}