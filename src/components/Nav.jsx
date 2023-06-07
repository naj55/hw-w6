import { Flex, Box, Text, Button, Heading, Spacer, HStack } from '@chakra-ui/react'
export default function Nav() {
    return (
        <Flex bg='gray.200' justify='space-between' alignItems='center' >
            <HStack spacing='20px;'>
                <Box bg="gray.200" p="10px;">loginLogo</Box>
                <Text>مرحبا</Text>
                <Button colorScheme='purple'>log Out</Button>
            </HStack>

            <Spacer />
            <Box w="150px;" h="50px;">الانضمام لنا</Box>
            <Box w="150px;" h="50px;">من نحن</Box>
            <Box w="150px;" h="50px;">الرئيسية</Box>
            <Heading>اكاديمية التعلم</Heading>
            {/* 
            <Box w="150px;" h="50px;"></Box>
            <Box w="150px;" h="50px;">الانضمام لنا</Box>
            <Box w="150px;" h="50px;">من نحن</Box>
            <Box w="150px;" h="50px;">الرئيسية</Box> */}
        </Flex>
    )
}
