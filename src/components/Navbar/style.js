import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
padding: calc(10px + 0.1%) 0;
background-color: var(--shade-0);
`
const Section = styled.div`
width: fit-content;
height: fit-content;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
.active{
    color: var(--yellow1);
}
cursor: ${({cursor})=> cursor ? "pointer": ""} ;
`
const Logo = styled(logo)`
width: 30px;
`
const Link = styled(NavLink)`
text-decoration: none;
font-family: var(--family);
font-size: var(--size16);
font-weight: 500;
color: var(--shade-1);
`


export { Section ,Logo, Link, };