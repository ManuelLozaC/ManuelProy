import { formatProdErrorMessage } from "@reduxjs/toolkit";

import useForm from "../Hooks/useForm";
const FormLoginWithHook = ({titleForm}) => {

    const [formData, handleChange, resetForm]=useForm({
        username: '',
        email: ''
    });
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit Method', formData);
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
                    <button type="button" onClick={resetForm}>Reset</button>
                </div>

            </form> 
        </>
    );
}

export default FormLoginWithHook;