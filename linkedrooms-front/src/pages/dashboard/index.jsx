import * as S from "./styles";

import { useEffect, useState } from "react";

import M from "materialize-css";

export default function Dashboard() {
  const [tabs, setTabs] = useState(null);

  useEffect(() => {
    setTabs(M.Tabs.init(document.querySelector(".tabs")));
  }, []);

  return (
    <S.Container>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" id="logo">
            LinkedRooms
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a href="#test1">Salas</a>
            </li>
            <li className="tab">
              <a href="#test2">Turmas</a>
            </li>

            <li className="tab">
              <a href="#test4">Cursos</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">JavaScript</a>
        </li>
      </ul>

      <div id="test1" className="col s12">
        Test 1
      </div>
      <div id="test2" className="col s12">
        Test 2
      </div>
      <div id="test4" className="col s12">
        Test 4
      </div>
    </S.Container>
  );
}
