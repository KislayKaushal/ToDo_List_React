import React, { useState } from 'react'

function ToDoList() {
    const [inputData,setInputData]=useState('');
  return (
    <>
    <div className='main-div'>
        <div className='container'>
            <div className='title'>
                <h1>ToDo List</h1>
            </div>

            <div className='addItems'>
                <input type="text" placeholder="Add items..." value={inputData} onChange={(e)=>setInputData(e.target.value)} />
                <button type="button">Go!</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default ToDoList
