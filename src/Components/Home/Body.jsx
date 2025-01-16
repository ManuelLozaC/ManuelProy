import { useState } from 'react'
const  Body = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="card">
            <h1>Vite + React</h1>
            <h2>Diplomado Fullstack</h2>
            <h3>Mod 7;Front End Developer con React</h3>
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default Body;