import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import "./Sidebar.css"

const Nav = styled.div`
  background: #1167b1;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const NavIcon = styled(Link)`
  margin: 0 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #1167b1;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 100;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const useWindowSize = () => {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth])
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return size;
}





const Sidebar = () => {
    const { logout, isAuthenticated } = useAuth0();
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    const [height, width] = useWindowSize();

    const displaySidebar = () => {
        if (width > 768) {
            setSidebar(true)
        } else {
            setSidebar(false)
        }
    }
    useEffect(() => {
        displaySidebar()
    }, [width])



    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                        <NavIcon onClick={showSidebar} to='#'>
                            <FaIcons.FaBars />
                        <h2 className="sidebar__navtitle">Eventor</h2>
                        </NavIcon>
                    <h2 onClick={() => logout()} className="sidebar__navlogout">LogOut</h2>
                </Nav>
                <SidebarNav sidebar={sidebar} className="sidebar__drawer">
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} className="sidebar__close" />
                            <h2 className="sidebar__title">Eventor</h2>
                        </NavIcon>
                        <div onClick={width < 768 && showSidebar} className="sidebar__drawer">
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                        </div>
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;