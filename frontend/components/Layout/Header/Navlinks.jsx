import React from "react";
import Image from "next/image";
import { navlinks } from "../../../data";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Navlinks = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between nav-links">
      {navlinks.map((navlink, index) => (
        <Menu key={`${navlink.title} -- ${index}`}>
          <MenuButton
            bg="none"
            pr={5}
            py={0}
            _hover={{ bg: "none", color: "#F8B60C" }}
            _focus={{ bg: "none" }}
            _expanded={{ bg: "none", color: "#F8B60C" }}
            className={`!font-light ${router.pathname === navlink.link && "text-[#F8B60C]"}`}
            as={Button}
            rightIcon={navlink.dropDown !== null && <ChevronDownIcon />}
            onClick={() =>
              navlink.link === "/about"
                ? window.open("https://gifteas-organization.gitbook.io/savinghistory/", "_blank")
                : navlink.link !== "/about" && navlink.dropDown === null
                ? router.push(`${navlink.link}`)
                : null
            }
          >
            {navlink.title}
          </MenuButton>
          {navlink.dropDown !== null && (
            <MenuList>
              {navlink.dropDown.links.map((item, index) => (
                <div key={index}>
                  <MenuItem>
                    <a href={item.link}>{item.text}</a>
                  </MenuItem>
                  <MenuDivider />
                </div>
              ))}
            </MenuList>
          )}
        </Menu>
      ))}
      <a href="https://github.com/Giftea/savingHistory" target="_blank">
        <Image src="/images/Header/github-icon.png" width={24} height={24} />
      </a>
    </div>
  );
};

export default Navlinks;
