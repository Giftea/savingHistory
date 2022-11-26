import {
  Button,
  ButtonGroup,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Divider,
  Box,
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ({ jwt, api_key, api_secret }) {
  const [histories, setHistories] = useState({});

  const getIpfsUrl = (hash) => {
    return `https://gateway.pinata.cloud/ipfs/${hash}`;
  };

  const getHistories = async () => {
    try {
      var config = {
        method: "get",
        url: "https://api.pinata.cloud/data/pinList?includesCount=false&metadata[name]=histories.json",
        headers: {
          pinata_api_key: api_key,
          pinata_secret_api_key: api_secret
        }
      };

      const res = await axios(config);
      const hash = res.data.rows[0].ipfs_pin_hash;

      const historiesRes = await axios({
        method: "get",
        url: getIpfsUrl(hash)
      });

      setHistories(historiesRes.data);
    } catch (error) {}
  };

  useEffect(() => {
    getHistories()
    if (jwt != undefined) getHistories();
  },[]);
  return (
    <div className="bg-ash py-20 px-5 md:px-10 lg:px-14">
      <div className="w-full pb-10 mb-6">
        <Box>
          <Flex justify={"space-between"} align={"center"}>
            <Heading as="h1" size="lg" noOfLines={1}>
              History
            </Heading>
            <Button colorScheme="blue" size={"md"}>
              Add History
            </Button>
          </Flex>
        </Box>
        <div className="">
          <Text>
            Here you would find all histories recorded on the blockchain for
            posterity
          </Text>
        </div>
      </div>

      <div className="w-full">
        <Flex mb={"8"}>
          <InputGroup size="md" w={"full"} pr={"12px"}>
            <InputLeftElement width="3rem">
              <SearchIcon />
            </InputLeftElement>
            <Input
              pl={"3rem"}
              placeholder="Search"
              bg={"white"}
              borderWidth={"1px"}
              borderColor={"gray.700"}
            />
          </InputGroup>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg={"white"}
              borderColor={"gray.700"}
              border={"1px"}
            >
              <span className={"pr-4"}>Selected (1)</span>
            </MenuButton>
            <MenuList>
              <MenuItem>Austria</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {Object.keys(histories).map((ipfsId, index) => (
            <a href={`history/${ipfsId}`} key={ipfsId}>
              <Box
                cursor={"pointer"}
                maxW="lg"
                borderWidth={"1px"}
                borderRadius={"lg"}
                boxShadow="sm"
                bg={"white"}
                padding={"12px"}
              >
                <img
                  alt={""}
                  src={getIpfsUrl(histories[ipfsId].banner)}
                  style={{ width: "100%" }}
                />
                <Stack mt="6" spacing="3">
                  <Heading as={"h6"} size="sm">
                    {histories[ipfsId].title}
                  </Heading>

                  <Text color={"gray.700"}>
                    <span className={"pr-2"}>{histories[ipfsId].date}</span>
                    &#183;
                    <span className={"px-2"}>{histories[ipfsId].country}</span>
                  </Text>
                </Stack>
              </Box>
            </a>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const jwt = process.env.PINATA_JWT;
  const api_key = process.env.API_KEY;
  const api_secret = process.env.API_SECRET;
  return {
    props: {
      jwt: jwt,
      api_key: api_key,
      api_secret: api_secret,
    }, // will be passed to the page component as props
  };
}
