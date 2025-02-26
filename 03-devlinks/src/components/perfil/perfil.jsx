import styles from "./perfil.module.css";

// eslint-disable-next-line react/prop-types
const Perfil = ({children, fotoPerfil}) => {
  return (
    <div id={styles.perfil}>
      <img src={fotoPerfil} alt="" />
      <p>{children}</p>
    </div>
  );
};

export default Perfil;
