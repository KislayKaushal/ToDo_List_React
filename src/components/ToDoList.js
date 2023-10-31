import React, { useState } from 'react'


function ToDoList() {
    const [inputData,setInputData]=useState('');
    const [itemLists,setItemList] =useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); //stop default action of form
       
             //Adding element to list.
            if(!inputData){
            }else{
                setItemList([...itemLists,inputData]);
                setInputData('');
            }
      }

    

    //Deleting an item from the list.
    const deleteItem = (id) =>{
        const updateList= itemLists.filter((elem,ind)=>{
            return ind != id;
        })
        setItemList(updateList);
    }

    //Editing the added item.
    const handleEdit = (id) =>{
        const updateList= itemLists.filter((elem,ind)=>{
            return ind != id;
        })
        setItemList(updateList);
        const editItem=itemLists[id];
        setInputData(editItem);
        
    }
  return (
    <>
    <div className='main-div'>
        <div className='container'>
            <div className='title'>
                <h1>ToDo List</h1>
            </div>

            <form className='addItems' onSubmit={handleSubmit}>
                <input type="text" placeholder="Add items..." value={inputData} onChange={(e)=>setInputData(e.target.value)} />
                <button type="submit" onClick={handleSubmit} >Go</button>
            </form>
            <ul className='listItems'>
                {
                    itemLists.map((elem,ind)=>{
                        return(
                            <li className='eachItems' key={ind}>
                                <span className='tolist'>{elem}</span>
                                <button onClick={()=>handleEdit(ind)}>Edit</button>
                                <button onClick={()=> deleteItem(ind)}>Delete</button>
                            </li>
                        )   
                    })
                }
            </ul>
        </div>

    </div>
    </>
  )
}

export default ToDoList
