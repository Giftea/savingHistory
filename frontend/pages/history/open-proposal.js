import { Input, InputGroup, InputLeftElement, Text, Textarea, Button, useToast, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

const OpenProposal = () => {
  const router = useRouter();
  const { address } = useAccount();
  const toast = useToast();
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const [values, setValues] = useState({
    title: "",
    tobe_accepted: "",
    how_qualified: "",
    proposal_details: "",
    budget: "",
  });
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnchange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onCountryChange = (e) => {
    setCountry(e.label);
    setValues((prev) => ({ ...prev, tags: tags, country: country }));
  };
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
      setValues((prev) => ({ ...prev, tags: tagsCopy, country: country }));
    }
  };
  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, tags: tags, country: country }));
    if (!address) {
      return toast({
        title: "Connect Klaytn Wallet",
        description: "Click the 'Connect Wallet' button to connect wallet",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }

    if (country === "") {
      return toast({
        title: "Add a Country",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(true);
    const body = values;
    try {
      setValues((prev) => ({ ...prev, tags: tags, country: country }));
      const response = await fetch("/api/store-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(values);
      if (response.status !== 200) {
        toast({
          title: "Error Creating Proposal",
          status: "error",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
      } else {
        setValues({
          title: "",
          country: "",
          tags: [],
          tobe_accepted: "",
          how_qualified: "",
          proposal_details: "",
          budget: "",
        });
        setCountry("");
        setTags([]);
        toast({
          title: "Proposal Successfully Created!",
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);

        router.push("/");
        let responseJSON = await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" px-5 md:px-10 py-10  lg:px-20 bg-ash">
      <div className="  md:mx-10 lg:mx-20  rounded-2xl bg-[white]">
        <div className="proposal-header rounded-t-2xl"></div>

        <div className="py-10 px-10 lg:px-20 lg:mx-20">
          {" "}
          <form onSubmit={handleSubmit}>
            {" "}
            <h1 className="text-2xl font-bold">Create a Proposal</h1>
            <div className="my-5">
              {" "}
              <Text mb="8px">Title of Proposal</Text>
              <Input placeholder="" value={values.title} required name="title" onChange={handleOnchange} />
            </div>
            <div className="my-5">
              {" "}
              <Text mb="8px">Country</Text>
              <Select required options={options} onChange={onCountryChange} />
            </div>{" "}
            <div className="my-5">
              {" "}
              <Text mb="8px">Tags (Seperate tags with comma)</Text>
              <div className="container">
                <Input value={input} placeholder="Enter a tag" name='tags' onKeyDown={onKeyDown} onKeyUp={onKeyUp} onChange={onChange} />
                {tags.map((tag, index) => (
                  <Tag size={"lg"} key={index} borderRadius="full" variant="solid" className="!bg-primary" mr={2} my={5}>
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => deleteTag(index)} />
                  </Tag>
                ))}
              </div>
            </div>{" "}
            <div className="my-5">
              {" "}
              <Text mb="8px">Why should this proposal be accepted?</Text>
              <Textarea required size="lg" resize="vertical" value={values.tobe_accepted} name="tobe_accepted" onChange={handleOnchange} />
            </div>{" "}
            <div className="my-5">
              {" "}
              <Text mb="8px">Why do you qualify to document this history (Provide proof of competence where applicable)</Text>
              <Textarea required size="lg" resize="vertical" value={values.how_qualified} name="how_qualified" onChange={handleOnchange} />
            </div>{" "}
            <div className="my-5">
              {" "}
              <Text mb="8px">Proposal Details</Text>
              <Textarea required size="lg" resize="vertical" value={values.proposal_details} name="proposal_details" onChange={handleOnchange} />
            </div>{" "}
            <div className="my-5">
              {" "}
              <Text mb="8px">Proposal Budget</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children="$" />
                <Input required placeholder="Enter amount" type="number" value={values.budget} name="budget" onChange={handleOnchange} />
              </InputGroup>
            </div>
            <Button isLoading={loading} type="submit" className="!bg-primary !text-sm !py-3 !px-5 !rounded-3xl !w-full !my-8 !font-bold !text-lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OpenProposal;
