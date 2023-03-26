import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, P } from "../../globalStyled";
import { navbar } from "../../utils/navbar";
import { Logo, NavContainer, Section, Link } from "./style";
import { Button } from "../Generic";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavContainer>
                <Container justify="space-between" align="true">
          <Section onClick={() => navigate("/home")} cursor = "true">
            <Logo />
            <P bold="700" cl="--shade-1" size="--size25">
              XumoHouses
            </P>
          </Section>
          <Section>
            {navbar.map(({ path, id, title }) => {  
              return (
                <Link
                  className={({isActive}) => isActive && "active"}
                  to={path}
                  key={id()}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section><Button cl = "inherit"> Log in / sign in</Button></Section>
        </Container>
      </NavContainer>
    </div>
  );
};

export default Navbar;
