import React from 'react'
import iconSet from 'icons.json';
import IcomoonReact from 'icomoon-react';
import text from 'utils/text';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links-wrapper">
        <div>
          <p>{text.footer.unsta}</p>
          <a href="https://apparcar-unsta.netlify.app/">{text.footer.site}</a>
        </div>
        <div className="first-set">
          <li className="home-unsta">
            <a href="https://www.unsta.edu.ar/ingenieria/desarrollo-y-calidad-de-software/">
              <IcomoonReact
                className=""
                iconSet={iconSet}
                color="white"
                size={20}
                icon="home"
              />
              <span>{text.footer.unstaBtn}</span>
            </a>
          </li>
          <li className="stats">
            <a href="https://drive.google.com/drive/folders/10A62Pe56qRWPHoFYLAdy1iYGZcl4M08d?usp=sharing">
              <IcomoonReact
                className=""
                iconSet={iconSet}
                color="white"
                size={20}
                icon="file-zip"
              />
              <span>{text.footer.gdocBtn}</span>
            </a>
          </li>
        </div>
        <div className="second-set">
          <li className="board">
            <a href="https://trello.com/proyectofinalunstatdcs">
              <IcomoonReact
                className=""
                iconSet={iconSet}
                color="white"
                size={20}
                icon="map"
              />
              <span>{text.footer.trelloBtn}</span>
            </a>
          </li>
          <li className="repo">
            <a href="https://github.com/ejrico/apparcar">
              <IcomoonReact
                className=""
                iconSet={iconSet}
                color="white"
                size={20}
                icon="github"
              />
              <span>{text.footer.repoBtn}</span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Footer
