import { useState } from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { resetForm } from '../../store/form/formSlice'; // Importa la acción resetForm
import ModalInfo from '../../Components/Modals/ModalInfo.jsx'; // Importa el modal

const Navigator = () => {
    const dispatch = useDispatch();
    const { username, email } = useSelector((state) => state.form.formData);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
        dispatch(resetForm()); // Limpia el store
        setShowLogoutModal(false); // Cierra el modal
    };

    return (
        <nav className='navbar'>
            <div className="nav-links">
                <Link to="/" className='nav-Link'>Home</Link>
                <Link to="/login" className='nav-Link'>Login</Link>
                <Link to="/counter" className='nav-Link'>Counter</Link>
                <Link to="/think" className='nav-Link'>Think</Link>
                <Link to="/products" className='nav-Link'>Products</Link>
                <Link to="/about" className='nav-Link'>About</Link>
            </div>
            <div className="user-info">
                {username && email ? (
                    <>
                        <span>Bienvenido {username} | {email}</span>
                        <button style={{ background: "#5378c3", color: "white", border: "none", borderRadius: "4px", padding: "0.5rem 1rem", cursor: "pointer" }} onClick={() => setShowLogoutModal(true)} >
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    <span>Inicia sesión</span>
                )}
            </div>

            {/* Modal para confirmar el cierre de sesión */}
            <ModalInfo 
                visible={showLogoutModal} 
                message="¿Estás seguro de querer cerrar sesión?" 
                onClose={() => setShowLogoutModal(false)}
            >
                <button 
                    style={{ background: "#5378c3", color: "white", border: "none", borderRadius: "4px", padding: "0.5rem 1rem", cursor: "pointer", marginLeft: '10px' }} 
                    onClick={handleLogout}
                >
                    Presiona para salir
                </button>
            </ModalInfo>
        </nav>
    );
}

export default Navigator;