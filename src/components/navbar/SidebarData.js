import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';



export const SidebarData = [

    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'New Event',
        path: '/yourevents/create/newevent',
        icon: <IoIcons.IoIosAddCircle />
    },

    {
        title: 'Your Events',
        path: '/yourevents',
        icon: <MdIcons.MdEvent />,
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