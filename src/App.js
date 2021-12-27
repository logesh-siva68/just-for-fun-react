import Header from "./components/Header";

import { useState } from "react";
import Lists from "./components/Lists";
import AddList from "./components/AddList";

function App() {

    // const txt = "test text";
    // const num = 2212;
    const someArray = [{ id: 1, Name: "Logesh", isDone: true }, { id: 2, Name: "Ramya", isDone:false }]
    
    //States
    const [myArray, setMyArray] = useState(someArray);
    const [listState, setListState] = useState();
    
    const listVal = ()=>{
        console.log("-------------->",listState);
        myArray.push( { id: myArray.length + 1, Name: listState, isDone: false });
        // console.log(myArray);
        setMyArray([...myArray])
    }
    
    const test = (i) => {
        myArray.splice(i, 1);
        setMyArray([...myArray]);
    }

    const done = (i) => {
        if (myArray[i].isDone)
        myArray[i].isDone = true;
        myArray[i].isDone = !myArray[i].isDone;
        setMyArray([...myArray]);
    }
    
    return (
        /*# JSX Notes*/
        <>
            <Header text="My Lists" />
            {/* <p>This is a test thing</p>
            <p>Below is dynamic value</p>
            <p>{txt}</p>
            <p>Below is exp</p>
            <p>{(num === 1) ? 'true' : 'false'}</p> */}
            <AddList getListVal={listVal} listState={setListState} />
            <Lists myArray={myArray} delOnClick={test} doneOnClick={done} />
        </>
    )
}



export default App;