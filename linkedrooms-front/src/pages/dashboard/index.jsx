import * as S from "./styles";

import { useEffect, useState } from "react";

import M from "materialize-css";

import AccordionRooms from "../../components/AccordionRooms";
import AccordionCourses from "../../components/AccordionCourses";

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
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a href="#rooms">Salas</a>
            </li>
            <li className="tab">
              <a href="#test2">Turmas</a>
            </li>

            <li className="tab">
              <a href="#courses">Cursos</a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="rooms" className="col s12">
        <AccordionRooms />
      </div>
      <div id="test2" className="col s12">
        Teste
      </div>
      <div id="courses" className="col s12">
        <AccordionCourses />
      </div>
    </S.Container>
  );
}
