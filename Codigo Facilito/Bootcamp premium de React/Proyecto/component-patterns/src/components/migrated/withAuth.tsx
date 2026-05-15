import { useState } from "react";

const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
        const [isAuthenticated] = useState(false);

        const onAuth = () => {
            // Logica para iniciar sesion
            console.log('Iniciando sesion');
        };

        const onLogout = () => {
            // Logica para cerrar sesion
            console.log('Cerrando sesion');
        };
        return (
            <WrappedComponent 
                onAuth={onAuth}
                onLogout={onLogout}
                isAuthenticated={isAuthenticated}
                {...props} 
            />
        );
    }

    return WithAuth;
};


export default withAuth;