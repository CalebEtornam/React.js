import { useState } from "react"
import data from "./data"
import './style.css'
export default function Accordion(){

  const [selected, setSelected] = useState(null)
  const [enableMultiSeletion, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

    function handleSingleSelector(getCurrentId){
        setSelected(selected === getCurrentId ? null : getCurrentId )
    }

    function handleMultipleSelection(getCurrentId){
       let cpyMultiple = [...multiple]
       const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
       if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

       return setMultiple(cpyMultiple)
    }
  return(
    <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSeletion)}>Enable Multiple Selection</button>
        
        <div className="accordion">
            {
                data && data.length > 0 ? data.map((dataItem) => (
                    <div className="item">
                        <div className="title" onClick={enableMultiSeletion ? 
                            () => handleMultipleSelection(dataItem.id)
                            :() => {handleSingleSelector(dataItem.id)}}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>

                        {
                            enableMultiSeletion && multiple.indexOf(dataItem.id) !== -1 ?
                            <div className="content">{dataItem.answer}</div> :
                        selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null
                    }
                    </div> 

                   

                )) : <div>Data not found!</div>
            }
        </div>
    </div>
  )
            
}