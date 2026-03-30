import { Outlet, useLocation, useNavigate, Link } from "react-router";

import styles from "./Profile.module.css";

const Profile = () => {
  // useLocation es un hook que nos permite acceder a la ubicación actual de la ruta
  const { pathname } = useLocation();
  const navigate =  useNavigate();

  //Se agrega el manejador de evento de los tabs para redirigir a la url adecuada
  const handlerTabClick = (path:string) => {
         navigate(`/profile/${path}`);
  };

  return (
    <div>
      {/* Se agrego un Link al home */}
      <Link to="/" className={styles.homeLink}>Inicio</Link>
      <div className={styles.tabsContainer}>
        {/* Con el pathname se verifica la ruta para activar los estilos correspondientes */}
        <span 
            className={`${pathname.includes('my-info') ? styles.active : ''} ${styles.tab}`}
            onClick={ () => handlerTabClick('my-info') }
            style={
              {marginRight: 8}
            }
            >
              Mi información
        </span>
        <span 
            className={`${pathname.includes('liked-events') ? styles.active : ''} ${styles.tab}`}
            onClick={ () => handlerTabClick('liked-events') }
            >
              Eventos Favoritos
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
