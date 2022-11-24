import React from "react";
import Image from "next/image";
import { navlinks } from "../../../data";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Link from "next/link";

const Navlinks = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between nav-links">
      <a href="https://forum.savinghistory.xyz/" target="_blank">
        FAQ
      </a>
      <Menu>
        <MenuButton px={6}>History</MenuButton>
        <MenuList>
          <MenuItem>Browse Histories </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton  px={6}>Proposals</MenuButton>
        <MenuList>
          <MenuItem>Open Proposal </MenuItem>
          <MenuItem> Accepted Proposals </MenuItem>
          <MenuItem>Vote Proposals </MenuItem>
        </MenuList>
      </Menu>
      <Link href="/staking">Staking</Link>
      <a href="https://github.com/Giftea/savingHistory" target="_blank">
        <Image src="/images/Header/github-icon.png" width={24} height={24} />
      </a>
    </div>
  );
};

export default Navlinks;
