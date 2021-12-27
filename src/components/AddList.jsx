import {useState} from 'react';


function AddList({getListVal, listState}) {
   
    const [inputVal, setInputVal] = useState('hello');
    const updateInput = (e)=>{
        setInputVal(e.target.value)
    }
    listState(inputVal);

    return (
        <div className="add-list">
            <p>AddLists</p>
            <input type='text' name="list" placeholder="Ex: Meet Mr.Logesh @12.00 AM" onChange={updateInput} /> <button onClick={()=>getListVal()}>Add List</button>
        </div>
    )
}

export default AddList
