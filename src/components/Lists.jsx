function Lists({myArray, delOnClick,doneOnClick}) {
  if(Array.isArray(myArray) && myArray.length > 0)
    return (
        <div>
           <table>
               <thead></thead>
               <tbody>
                <tr>
                    <td>List Id</td>
                    <td>List Name</td>
                    <td>Controls</td>
                </tr>
                {/*# Loop In JSx*/}
                {myArray.map((el,index)=>(
                <tr key={index} className={el.isDone ? 'strick' : ""}>
                    <td>{el.id}</td>
                    <td>{el.Name}</td>
                    <td className="text-center"> <button type="button" onClick={()=>doneOnClick(index)}>{(el.isDone ? "Undo" : "Done")}</button> <button type="button" onClick={()=>delOnClick(index)}>Delete</button></td>
                </tr>
                )
                )}</tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
    else
    return (<p>No data found</p>)
}

export default Lists
