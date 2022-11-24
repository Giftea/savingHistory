import React from "react";
import { navlinks } from "../../../data";
import {
  Divider,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";

const ResponsiveNavlinks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenConnectWallet, onOpen: onOpenConnectWallet, onClose: onCloseConnectWallet } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="responsive-navlinks">
      <Button
        className="!font-bold !text-2xl"
        ref={btnRef}
        onClick={onOpen}
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        bg="none"
        _hover={{ bg: "none" }}
        _focus={{ bg: "none" }}
        _expanded={{ bg: "none" }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src="/images/Header/SH-Logo.png" width={200} height={50} />
          </DrawerHeader>

          <DrawerBody className="!px-0">
            <Accordion defaultIndex={[0]} allowMultiple>
              {navlinks.map((link, index) => (
                <AccordionItem key={index}>
                  <AccordionButton className="!py-3">
                    <Box flex="1" textAlign="left">
                      {link.title}
                    </Box>

                    {link.dropDown !== null && <AccordionIcon />}
                  </AccordionButton>
                  {link.dropDown !== null && (
                    <AccordionPanel className="!py-0">
                      {link.dropDown.links.map((item, index) => (
                        <div key={index}>
                          <Divider />
                          <a href={item.link} className="py-3 block">{item.text} </a>
                        </div>
                      ))}
                    </AccordionPanel>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
            <div className="px-3">
              <button className="bg-primary text-sm py-4 font-bold  rounded-3xl my-10  w-full" onClick={onOpenConnectWallet}>
                Connect Wallet
              </button>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ResponsiveNavlinks;
