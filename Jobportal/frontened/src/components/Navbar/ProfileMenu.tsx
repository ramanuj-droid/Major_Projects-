import { Menu, Button, Text, Avatar, Indicator } from '@mantine/core';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdNotifications } from 'react-icons/io';
import { IoNewspaperOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';


export default function ProfileMenu() {
     return (
          <Menu shadow="md" width={200}>
               <Menu.Target>
                    <div className="flex gap-2 items-center">
                         <h2 className="hidden">Marshell</h2>
                         <Avatar color="gray" radius="sm" size={50} src="images/avatar.png" alt="Profile" />
                    </div>
               </Menu.Target>

               <Menu.Dropdown>
                    <Link to="/profile">
                         <Menu.Item leftSection={<FaRegCircleUser size={20} />} >
                              Profile
                         </Menu.Item>
                    </Link>

                    <Menu.Item leftSection={<IoNewspaperOutline size={20} />} >
                         Resume
                    </Menu.Item>
                    <Menu.Item leftSection={<LuMessageCircleMore size={20} />} >
                         Message
                    </Menu.Item>
                    <Menu.Item leftSection={<IoMdNotifications size={20} />}>
                         Notifications
                    </Menu.Item>
                    <Menu.Item color='red' leftSection={<CiLogout size={20} />}>
                         Log out
                    </Menu.Item>




               </Menu.Dropdown>
          </Menu>
     );
}