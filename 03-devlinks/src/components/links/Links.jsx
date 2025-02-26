import styles from "./Links.module.css";

// eslint-disable-next-line react/prop-types
const Links = ({children}) => {
  return (
    <li>
      <a href="https://google.com">{children}</a>
    </li>
  );
};

export default Links;
