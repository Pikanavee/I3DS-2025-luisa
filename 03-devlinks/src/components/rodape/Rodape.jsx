import styles from "./Rodape.module.css";

// eslint-disable-next-line react/prop-types
const Rodape = ({children}) => {
  return (
    <footer>
      <p>
        Feito com 🤍 por <a href="https://github.com">{children}</a>
      </p>
    </footer>
  );
};

export default Rodape;
