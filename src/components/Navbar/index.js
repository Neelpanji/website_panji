import React, { useState } from 'react';
import { Nav, NavButton, NavButtonLink, NavItem, NavLink, NavLogo, NavMenu, NavbarContainer, StyledBurger, SocialMedia, SocialMediaIcon, NavLinkS } from './NavbarElements';
import { baseUrl } from '../../shared/baseUrl';

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

// import { baseUrl } from '../../shared/baseUrl';
const Burger = ({ open, toggle }) => {
    // console.log(open);   
    return (
        <div className="nav-burger-button" style={{ width: "2.121rem" }}>
            <StyledBurger open={open} onClick={() => toggle(open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </div>
    )
}

const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Return the width so we can use it in our components
    return { width };
}


const Navbar = ({ open, toggle }) => {

    function closeSidebar(open) {
        if (open === true) {
            toggle(open);
        }
        // window.location.reload();
    }

    // const { width } = useViewport();


    // const [scrollService, setScroll] = useState(0);




    // useEffect(() => {
    //   document.addEventListener("scrollService", () => {
    //     const scrollCheck = window.scrollY > 100 && window.scrollY < 200
    //     if (scrollCheck !== scrollService) {
    //       setScroll(scrollCheck)
    //     }
    //   })
    // })


    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to={process.env.PUBLIC_URL + "/#hero"} onClick={() => closeSidebar(open)} scroll={el => scrollWithOffset(el)}>
                    <img src={baseUrl + 'assets/images/brand_logos/long_logo_bg_black.png'} style={{ height: "100%" }} className='nav-logo' alt="PodLeaf Logo" />
                    {/* <div>PodLeaF</div> */}
                </NavLogo>
                {/* <SocialMedia>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/instagram.png"/></a>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/linkedin-3-48.png"/></a>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/facebook-3-48.png"/></a>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/messenger (1).png"/></a>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/email (1).png"/></a>
                        </SocialMedia> */}
                <NavMenu>
                    <NavItem>
                        <NavLink to="/about#top"
                        >About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink smooth to="/#pricing"
                            scroll={el => scrollWithOffset(el)}
                        >Pricing</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink smooth to="/#clients"
                            scroll={el => scrollWithOffset(el)}
                        >Clients</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact#top"
                        >Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/faqs#top" isGold={1}
                        >FAQs</NavLink>
                    </NavItem>

                </NavMenu>
                <NavButtonLink href="https://calendly.com/neelpanji/30min" target={"_blank"}>Book a Free Call</NavButtonLink>
                <Burger open={open} toggle={toggle} />
            </NavbarContainer>

        </Nav>

    )
}

export default Navbar;

