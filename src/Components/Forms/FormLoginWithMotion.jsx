import { motion } from "motion/react"; // Cambié "motion/react" a "framer-motion" (asegúrate de tener instalada la librería)
import { useState, useEffect  } from "react";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { updateField, resetForm, submitForm } from '../../store/form/formSlice.js';
import useForm from "../../Components/Hooks/useForm.js";

const FormWithMotionAndHook = ({ titleForm }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const correctPassword = formData.password; // La contraseña almacenada en el slice

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [inputPassword, setInputPassword] = useState(''); 

  const [localFormData, handleChange, resetLocalForm] = useForm({
    username: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /*useEffect(() => {
    setLocalUsername(formData.username);
    setLocalEmail(formData.email);
    setInputPassword(''); 
  }, [formData.username, formData.email]); // Escuchar cambios en el estado global
*/
  useEffect(() => {
    resetLocalForm({
      username: formData.username,
      email: formData.email,
      password: '',
    });
  }, [formData.username, formData.email]);


  /*const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizamos el estado local en lugar del estado global
    if (name === "username") {
      setLocalUsername(value);
    } else if (name === "email") {
      setLocalEmail(value);
    }
  };*/

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value); // Guardamos la contraseña ingresada por el usuario en el estado local
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit Method', formData);
    console.log(inputPassword);
    console.log(correctPassword);

    // Validar contraseña ingresada
    if (localFormData.password === correctPassword) {
      // Si la contraseña es correcta, actualizamos el estado global
      dispatch(
        submitForm({
          username: localFormData.username,
          email: localFormData.email,
        })
      );
      setModalMessage(`¡Bienvenido, ${localFormData.username}!`);
    } else {
      // Contraseña incorrecta, mostrar mensaje de error
      setModalMessage('Contraseña incorrecta');
    }

    setShowModal(true); // Mostrar el modal
  };

  const handleReset = () => {
    dispatch(resetForm());
    resetLocalForm();
    setShowModal(false);
  };

  const onCloseModalInfo = () => {
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalInfo visible={showModal} message={modalMessage} onClose={onCloseModalInfo} />
      <form onSubmit={handleSubmit}>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <h3>{titleForm}</h3>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <label htmlFor="module">Module</label>
          <input type="text" name="module" id="module" value={formData.module} disabled={true} />
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={localFormData.username}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={localFormData.email}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
            value={localFormData.password}
            onChange={handleChange}
          />
          <button type="button"
            onClick={togglePasswordVisibility}
            style={{
              background: "#5378c3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </motion.div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default FormWithMotionAndHook;