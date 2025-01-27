
import { useSelector } from 'react-redux'
import { useState } from 'react';
const About = () => {
    const count = useSelector((state) => state.product.initialValue)
    const [nameComponent, setNameComponent] = useState('About');
    return (
        <div>
            <h1>About</h1>
            <p>{count}</p>
            <p>{nameComponent}</p>
            <button onClick={() => {setNameComponent('Curso de React!')}}>Cambiar</button>
        </div>
    );
}

export default About;