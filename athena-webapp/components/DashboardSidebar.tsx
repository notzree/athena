"use client";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  IconButton,
  Navbar,
} from "@material-tailwind/react";
import {
  Squares2X2Icon,
  PencilSquareIcon,
  UserCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "../public/light-logo.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function SidebarList() {
  return (
    <List className="p-10">
      <ListItem className="text-xl py-3">
        <ListItemPrefix>
          <Squares2X2Icon className="h-5 w-5 mr-2" />
        </ListItemPrefix>
        Dashboard
      </ListItem>
      <ListItem className="text-xl py-3">
        <ListItemPrefix>
          <PencilSquareIcon className="h-5 w-5 mr-2" />
        </ListItemPrefix>
        Questionnaire
      </ListItem>
      <ListItem className="text-xl py-3">
        <ListItemPrefix>
          <UserCircleIcon className="h-5 w-5 mr-2" />
        </ListItemPrefix>
        Profile
      </ListItem>
      <ListItem className="text-xl py-3">
        <ListItemPrefix>
          <InboxIcon className="h-5 w-5 mr-2" />
        </ListItemPrefix>
        Results
      </ListItem>
      <ListItem>
        <div className="md:absolute md:bottom-16 py-3">
          <LogoutButton />
        </div>
      </ListItem>
    </List>
  );
}
export default function DashboardSidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenSidebar(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Card className="hidden md:block fixed h-screen w-full max-w-[20rem] bg-violet-50">
        <div className="p-8 py-16 text-center text-violet-50 text-4xl bg-neutral-800">
          <Typography
            variant="h1"
            color="blue-gray"
            className="flex flex-row items-center justify-center"
          >
            <Link href="/">
              <Image
                width="70"
                height="70"
                src={Logo}
                alt="athena light logo"
              />
            </Link>
            Athena
          </Typography>
        </div>
        <SidebarList />
      </Card>
      {/* {
        <div className="w-screen px-6 py-3">
          <IconButton
            variant="text"
            className="float-right m-5 z-60 text-neutral-800 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            {openSidebar ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>

          <div
            className={`top-24 left-0 w-full bg-violet-50 px-5 text-neutral-800 fixed h-full overflow-hidden z-10 ease-in-out duration-300 ${
              openSidebar ? "translate-x-full " : "translate-x-0"
            }`}
          >
            <SidebarList />
          </div>
        </div>
      } */}
    </>
  );
}
