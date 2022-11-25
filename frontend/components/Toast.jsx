import { useToast } from "@chakra-ui/react";

export default function Toast({ title, desc, status }) {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: { title },
          description: { desc },
          status: { status },
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}
