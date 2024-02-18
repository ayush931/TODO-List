/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { addTodo } from "../../actions/todoActions"

function AddTodo ({ addTodo }) {

    const [inputText, setInputText] = useState('')


    return (
        <div>
            <input
                type="text" 
                value={inputText}
                placeholder="add your next todo..."
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => {
                addTodo(inputText)
                setInputText('')
            }}>Add</button>
        </div>
    )
}

export default AddTodo