
const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="module-title">
                <h1>Module 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </div>
            
            <h2 className="section-title">Bienvenido</h2>
            
            <p>Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>, el manejo de <b>hooks</b>, y el uso de <b>Redux</b>.</p>
            
            <h2 className="section-title">Temas Cubiertos</h2>
            <div className="topics-container">
                <ul className="topics-list">
                    <li>Componentes funcionales y de clase</li>
                    <li>Uso de <b>React hooks</b> como useState y useEffect</li>
                    <li>Creación de <b>custom hooks</b></li>
                    <li>Gestión de variables de estado con <b>useState</b></li>
                    <li>Gestión de estado global con <b>Redux</b></li>
                    <li>Integración de <b>Redux</b> con <b>React</b></li>
                    <li>Manejo de formularios en<b>React</b></li>
                    <li>Publicando nuestra <b>página</b> con <b>GitHub Pages</b></li>
                </ul>
            </div>

            <h2 className="section-title">Recursos Adicionales</h2>
            <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
            

            <footer className="footer">
                <p>© 2024 Modulo 7.USIP</p>
            </footer>
        </div>
    );
}

export default LandingPage;