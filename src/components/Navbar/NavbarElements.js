import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';
import { NavHashLink } from 'react-router-hash-link';

export const Nav = styled.div`
    background: #000;

    width:100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 1.5vw;
    position: sticky;
    top:0;
    // margin-bottom:20px;
    z-index:21;

    @media screen and (max-width: 992px) {
        transition: 0.8 all ease;
    }

    @media screen and (max-width:1026px) {
      font-size: 2vw;
    }
    @media screen and (max-width:1366px) {
      font-size: 1.4vw;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-around;
    height: 80px;
    
    width: 100%;
    padding: 0 var(--bs-gutter-x, 0.75rem);
    margin: 0px auto;
    
    @media screen and (max-width:992px){
        justify-content: space-between;
      }
    
    @media screen and (min-width:300px){
      max-width:100%;
    }  
    @media screen and (min-width:576px){
      max-width:540px;
    }
    @media screen and (min-width:768px){
      max-width:720px;
    }
    @media screen and (min-width:992px){
      max-width:960px;
    }
    @media screen and (min-width:1200px){
      max-width:1140px;
    }
    @media screen and (min-width:1400px){
      max-width:1320px;
    }
`;

export const NavLogo = styled(NavHashLink)`
    color: #70D9B8;
    justufy-self: flex-start;
    cursor: pointer;
    font-size: 2vw;
    display:flex;
    align-items: center;
    // margin-left: 24px;
    font-weight: 650;
    text-decoration: none;

    &:hover{
      color:#70D9B8;
      transition: all 0.4s ease-in-out;
    }
    @media screen and (max-width:1026px) {
      font-size: 4vw;
      font-weight: 600;
    }
    @media screen and (max-width:560px){
      font-size:7vw;
    }
    
`;

export const StyledBurger = styled.button`
  
  display: none;
  
  
  @media screen and (max-width: 991px){
    display: flex;
    position: absolute;
    // top: 0;
    // left: 0;
    flex-direction: column;
    justify-content: space-between;
    width: 2.121rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index:20;
    
    padding: 0;
    margin-top:2rem;
    &:focus {
      outline: none;
    }
      
    div {
        width: 100%;
        height: 0.1rem;
        background: #777;
        border-radius: 5px;
        transition: all 0.2s linear;
        position: relative;
        transform-origin: 2.121rem;
        z-index:20;
        

        :first-child {
          transform: ${({ open }) => open ? 'rotate(-41deg)' : 'rotate(0)'};
        }
    
        :nth-child(2) {
          opacity: ${({ open }) => open ? '0' : '1'};
          transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
        }
    
        :nth-child(3) {
          transform: ${({ open }) => open ? 'rotate(41deg)' : 'rotate(0)'};
        }
    }

  
  }  
`;

export const SocialMedia = styled.div`
  width:150px;
  display:none;
  align-items: center;
  justify-content:space-between; 
  height:100%;
  @media screen and (max-width: 560px){
    display:flex;
  }
`;

export const SocialMediaIcon = styled.img`
width: 25px;
height: 25px;
`;

export const NavMenu = styled.ul`
  display:flex;
  align-items: center;
  list-style-type: none;
  text-align: center;
  margin-top:0;
  margin-bottom:0;
  margin-right: -42px;
  @media screen and (max-width: 991px){
    display:none;
  }

`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(NavHashLink)`
  color:${({isGold})=>isGold?'gold':'#888'};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;


  &.active {
    border-bottom: 5px solid white;
    transition: all 0.2s ease-in-out;
    color:${({isGold})=>isGold?'gold':'#70D9B8'};
  }
  &:hover{
    color:#70D9B8;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavLinkS = styled(LinkS)`
  color: #888;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 5px solid white;
    transition: all 0.2s ease-in-out;
    color:#70D9B8;
  }
  &:hover{
    color:#70D9B8;
    transition: all 0.2s ease-in-out;
  }
`;


export const NavButton = styled.nav`
  display:none;
  align-items: center;
  

  @media screen and (max-width: 991px){
      display:flex;
      opacity:${({ open }) => open ? '0' : '100%'};
      transition: all 0.2s ease-in-out;
    }
`;

export const NavButtonLink = styled.a`

  display:flex;
  align-items:center;
  outline:none;
  background: black;
  color: #70D9B8;
  border: 2px solid #70D9B8;
  border-radius: 5px;
  transition: ease-in-out .4s;
  text-decoration:none;
  padding: 0.2rem;
  margin:1.2rem 0.5rem;
  
  @media screen and (max-width:1026px) {
    font-size: 1.7vw;
    font-weight: 600;
  }
  @media screen and (max-width:560px){
    font-size:3vw;
  }
  @media screen and (max-width:450px){
    font-size:3.5vw;
  }

  &:hover {
    color: #111;
    background: #70D9B8;
  }

`;
