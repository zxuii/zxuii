// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from './assets/hero.png'
import { Avatar } from "./components/Avatar.tsx";
import { AboutMe } from "./components/AboutMe.tsx";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <Avatar></Avatar>
        <AboutMe></AboutMe>
      </section>

      <section id="info-lain">
        <div id="social">
          <h2>Hubungi Gw</h2>
          <p>Pilih sosmed dibawah ini yak!</p>
          <ul>
            <li>
              <a href="https://github.com/zxuii" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.com/users/zxuiii_real" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}

export default App;
