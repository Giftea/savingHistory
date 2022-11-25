import {
	Button,
	ButtonGroup,
	SimpleGrid,
	Stack,
	Heading,
	Text, Divider, Box, Flex, Input, InputLeftElement, InputGroup, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react'
import {ChevronDownIcon, SearchIcon} from "@chakra-ui/icons";
import Link from "next/link";

export default function () {
	return (
		<div className="bg-ash py-20 px-5 md:px-10 lg:px-14">
			<div className="w-full pb-10 mb-6">
				<Box>
					<Flex justify={'space-between'} align={'center'}>
						<Heading as='h1' size='lg' noOfLines={1}>Communities</Heading>
						<Button colorScheme='blue' size={'md'}>Add Community</Button>
					</Flex>
				</Box>
				<div className="">
					<Text>Here you would find all the communities that joined</Text>
				</div>
			</div>


			<div className="w-full">
				<Flex mb={'8'}>
					<InputGroup size='md' w={'full'} pr={'12px'}>
						<InputLeftElement width='3rem' >
							<SearchIcon/>
						</InputLeftElement>
						<Input pl={'3rem'} placeholder='Search' bg={'white'} borderWidth={'1px'}  borderColor={'gray.700'}/>
					</InputGroup>

					<Menu>
						<MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg={"white"} borderColor={'gray.700'} border={'1px'}>
							<span className={'pr-4'}>Selected (2)</span>
						</MenuButton>
						<MenuList>
							<MenuItem>Download</MenuItem>
							<MenuItem>Create a Copy</MenuItem>
							<MenuItem>Mark as Draft</MenuItem>
							<MenuItem>Delete</MenuItem>
							<MenuItem>Attend a Workshop</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
				<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
					<Link href={'communities/1'} >
						<Box cursor={'pointer'} maxW="lg" borderWidth={'1px'} borderRadius={'lg'} boxShadow='sm' bg={'white'} padding={'12px'}>
							<img alt={''} src={'images/Features/Image2.png'} style={{width: '100%'}}/>
							<Stack mt='6' spacing='3'>
								<Heading as={'h6'} size='sm'>Fubu</Heading>

								<Text color={'gray.700'}>
								<span className={'pr-2'}>
									741</span>
									&#183;
									<span className={'px-2'}>Brazil</span>
								</Text>
							</Stack>
						</Box>
					</Link>
				</SimpleGrid>

			</div>
		</div>
	)
}