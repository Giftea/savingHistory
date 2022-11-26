import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import remarkGfm from "remark-gfm";

export default function () {
  const router = useRouter();
  const { history } = router.query;
  const [content, setContent] = useState("");

  const getContent = async () => {
    try {
      const historyRes = await axios({
        method: "get",
        url: getIpfsUrl(history)
      });

      setContent(historyRes.data);

      console.log(historyRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getIpfsUrl = (hash) => {
    return `https://gateway.pinata.cloud/ipfs/${hash}`;
  };

  useEffect(() => {
    getContent();
  });

  return (
    <div className="bg-ash py-20 px-5 md:px-10 lg:px-14">
      <div className={"w-full"}>
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        {/* <Heading as={"h3"} size={"lg"} mb={3}>
          Petrolina
        </Heading>
        <Flex mb={5}>
          <Box
            w={"25px"}
            h={"25px"}
            borderRadius={"full"}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            backgroundImage={"https://countryflagsapi.com/svg/br"}
          />
          <Text px={"2"}>Petrolina, Brazil</Text>
        </Flex>

        <Flex>
          <Box borderRadius={6} p={3} bg={"white"} boxShadow={"sm"}>
            <Heading as={"h6"} size={"xs"} mb={3}>
              Author
            </Heading>
            <Flex align={"center"}>
              <Text>Godswill Okpara</Text>

              <Box
                w={"35px"}
                h={"35px"}
                ml={4}
                borderRadius={"full"}
                background={"green.500"}
                backgroundPosition={"center"}
              />
            </Flex>
          </Box>
        </Flex> */}

        {/* <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text> */}
      </div>
    </div>
  );
}
