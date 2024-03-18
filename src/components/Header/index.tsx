import {HeaderContainer} from "./styles.ts";

import logoIgnite from '../../assets/logo-ignite.svg';
import {NavLink} from "react-router-dom";
import {Scroll, Timer} from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
          <span>
              <img src={logoIgnite} alt=""/>
          </span>

            <nav>
                <NavLink to="/" title="timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="history">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
