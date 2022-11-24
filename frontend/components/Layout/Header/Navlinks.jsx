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
      <a
        href="https://community.savinghistory.xyz/c/general/4"
        className="px-4"
        target="_blank"
      >
        FAQ
      </a>
      <Menu>
        <MenuButton className="px-4">History</MenuButton>
        <MenuList>
          <MenuItem
            onClick={() =>
              window.open(
                "https://community.savinghistory.xyz/c/histories/6",
                "_blank"
              )
            }
          >
            Browse Histories{" "}
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton className="px-4">Proposals</MenuButton>
        <MenuList>
          <MenuItem
            onClick={() =>
              window.open(
                "https://community.savinghistory.xyz/c/proposals/5",
                "_blank"
              )
            }
          >
            Open Proposal{" "}
          </MenuItem>
          <MenuItem
            onClick={() =>
              window.open(
                "https://community.savinghistory.xyz/tags/c/proposals/5/accepted",
                "_blank"
              )
            }
          >
            {" "}
            Accepted Proposals{" "}
          </MenuItem>
          <MenuItem
            onClick={() =>
              window.open(
                "https://demo.snapshot.org/#/savinghistory.eth/",
                "_blank"
              )
            }
          >
            Vote Proposals{" "}
          </MenuItem>
        </MenuList>
      </Menu>
      <a href="/farming" className="px-4">Farming</a>
      <Link href="/staking">Staking</Link>
      <a
        className="px-4"
        href="https://github.com/Giftea/savingHistory"
        target="_blank"
      >
        <Image src="/images/Header/github-icon.png" width={24} height={24} />
      </a>
    </div>
  );
};

export default Navlinks;
