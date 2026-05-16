//Archivo creado en la Asesoría 6
//Componente creado para que cargue el initialize al inicio de la app

import { useEffect } from "react";
import { useAuthStore } from "~/store/auth";

const AuthProvider = () => {
    const {initialize} = useAuthStore()

    useEffect ( () => {
        const cleanup = initialize();
        return cleanup;

    }, [initialize]);

    return null;
};

export default AuthProvider;