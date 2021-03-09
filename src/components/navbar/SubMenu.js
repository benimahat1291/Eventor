import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import API from "../../utils/API"
import { useAuth0 } from "@auth0/auth0-react";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
    const { user, isAuthenticated } = useAuth0();
    const [userEvents, setUserEvents] = useState([])
    // let [refresh, setRefresh] = useState("1")

    useEffect(() => {
        API.getConferencebyUser(user.email).then(resp => {
            console.log("data", resp.data)
            const tempArr = resp.data
            const sortedArr = tempArr.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
            setUserEvents(sortedArr);
        })
    },[])

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        userEvents.map((e) => {
          return (
            <DropdownLink to={`/yourevents/${e._id}`} key={e._id}>
              {item.icon}
              <SidebarLabel>{e.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;