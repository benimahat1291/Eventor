import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';



export const SidebarData = [
    
    {
        title: 'New Event',
        path: '/yourevents/create/newevent',
        icon: <IoIcons.IoMdPeople />
      },
    {
      title: 'All Events',
      path: '/home',
      icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'All Events',
        path: '/home',
        icon: <FaIcons.FaCartPlus />
      },
    
    {
      title: 'Your Events',
      path: '/yourevents',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

 
];