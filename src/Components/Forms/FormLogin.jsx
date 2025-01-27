import { useState } from "react";
const FormLogin = ({titleForm}) => {
    const [formData, setFormData] = useState({
        username:'',
        email:''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit Method', formData);
    }

    const handleChange = (e) => {
        console.log('handleChange Method', e);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>

            </form> 
        </>
    );
}

export default FormLogin;