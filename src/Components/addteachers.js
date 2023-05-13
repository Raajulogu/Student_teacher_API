import { useHistory } from 'react-router-dom';
import Base from "../Basic/base";
import React, { useState } from 'react'

function Addteachers({state,setstate}){
    let history = useHistory()
    let [name,setname]=useState("");
    let [batch,setbatch]=useState("");
    let [gender,setgender]=useState("");
    let [qualification,setqualification]=useState("");
    async function add(){
        let obj={
            name,
            batch,
            gender,
            qualification
        };
        let response = await fetch("https://644b33c017e2663b9deab958.mockapi.io/student_teacher", {
        method:"POST",
        body:JSON.stringify(obj),
        headers :{
            "Content-Type":"application/json"
        },
        })
        let data = await response.json()
        setstate([...state,data])
        history.push("/teacher_list")
    }
    return(
        <Base
        title="Add Teacher"
        content="New teacher name shuold be adding here"
        >
        <div className="input_box">
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Batch"
            value={batch}
            onChange={(e)=>setbatch(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e)=>setgender(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e)=>setqualification(e.target.value)}
            className="input"
            /> 
            <br/>
            <button className="add" onClick={()=>add()}>Add</button>
        </div>
        </Base>
    );
}

export default Addteachers;