import { motion } from "motion/react";
import useForm from "../Hooks/useForm";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { useState } from "react";

const FormWithMotionAndHook = ({titleForm}) => {

    const [formData, handleChange, resetForm]=useForm({
        username: '',
        email: ''
    });

    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        console.log('handleSubmit Method', formData);
    };


    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  transition={{duration:0.5}} onSubmit={handleSubmit}>
            <ModalInfo visible={showModal} message="Formulario Enviado!" onClose={onCloseModalInfo} />
            <form onSubmit={handleSubmit}>
                <motion.div initial={{x:-100}} animate={{x:0}}  transition={{duration:0.5}}>
                <h3>{titleForm}</h3>
                </motion.div>
                <motion.div initial={{x:-100}} animate={{x:0}}  transition={{duration:0.5}}>                
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required value={formData.username} onChange={handleChange} />
                </motion.div>
                <motion.div initial={{x:-100}} animate={{x:0}}  transition={{duration:0.5}}>  
                    <label htmlFor="password">Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} />
                </motion.div>
                <motion.div initial={{x:-100}} animate={{x:0}}  transition={{duration:0.5}}>  
                    <button type="submit">Enviar</button>
                    <button type="button" onClick={resetForm}>Reset</button>
                </motion.div>

            </form> 
        </motion.div>
    );
}


export default FormWithMotionAndHook;