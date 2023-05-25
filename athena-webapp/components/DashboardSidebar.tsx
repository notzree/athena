"use client";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  Squares2X2Icon,
  PencilSquareIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "../public/light-logo.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function DashboardSidebar() {
  return (
    <Card className="fixed h-screen w-full max-w-[20rem] bg-violet-50">
      <div className="p-8 py-16 text-center text-violet-50 text-4xl bg-neutral-800">
        <Typography
          variant="h1"
          color="blue-gray"
          className="flex flex-row items-center justify-center"
        >
          <Link href="/">
            <Image width="70" height="70" src={Logo} alt="athena light logo" />
          </Link>
          Athena
        </Typography>
      </div>

      <List className="p-10">
        <ListItem className="text-xl py-3">
          <ListItemPrefix>
            <Squares2X2Icon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem className="text-xl py-3">
          <ListItemPrefix>
            <PencilSquareIcon className="h-5 w-5" />
          </ListItemPrefix>
          Questionnaire
        </ListItem>
        <ListItem className="text-xl py-3">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem className="text-xl py-3">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Results
        </ListItem>
        <div className="absolute bottom-16">
          <LogoutButton />
        </div>
      </List>
    </Card>
  );
}
