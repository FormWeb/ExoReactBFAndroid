import { useState } from "react"

const Counter = (props) => {

    // Props
    const { incrementation } = props

    // State
    const [value, setValue] = useState(0)

    // Fonction

    const handleAdd = () => {
        setValue(p => p + incrementation)
    }

    const handleReset = () => {
        setValue(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{value}</p>
            <button onClick={handleAdd}>+ {incrementation}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

Counter.defaultProps = {
    incrementation: 1
}

export default Counter