import "./App.css";
import foto from "./img/AAAAAAAAAAAAAAAAAAAAAAA.jpg";

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight((anterior) => !anterior);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={foto}>PikaveePPGxRRB</Perfil>

      <Switch troca={troca} isLight={isLight} />
      <div id="container">
        <ul>
          <Links Link={"https://github.com/Pikanavee"}>Github</Links>
          <Links Link={"https://www.instagram.com/pikaveeppgxrrb/"}>
            Instagram
          </Links>
          <Links Link={"https://github.com/Pikanavee"}>Youtube</Links>
          <Links Link={"https://github.com/Pikanavee"}>Tiktok</Links>
        </ul>
      </div>

      <div id="socialLinks">
        <SocialLinks
          Link={"https://github.com/Pikanavee"}
          icon={"logo-github"}
        />
        <SocialLinks
          Link={"https://www.instagram.com/pikaveeppgxrrb/"}
          icon={"logo-instagram"}
        />
        <SocialLinks
          Link={"https://www.youtube.com/@pikaveeppgxrrb"}
          icon={"logo-youtube"}
        />
        <SocialLinks
          Link={"https://www.tiktok.com/@pikaveeppgxrrb"}
          icon={"logo-tiktok"}
        />
      </div>
      <Rodape>@PikaveePPGxRRB</Rodape>
    </div>
  );
};

export default App;
