// * https://auth.services.adobe.com/ru_RU/deeplink.html?deeplink=signup&callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fauth%252Flogin%253Fdestination%253D%252Fgallery%252F134883993%252FA-LoginSignup-Screens-Concept%252Fmoodboard%253FmoduleId%253D763256325%2523from_ims%253Dtrue%2526old_hash%253D%2526api%253Dauthorize%2526rctx%253D%25257B%252522intent%252522%25253A%252522signUp%252522%25252C%252522csrf%252522%25253A%252522e2af49d2-16eb-4995-b6e2-5f75d4972e51%252522%25252C%252522version%252522%25253A1%25257D%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%2522e2af49d2-16eb-4995-b6e2-5f75d4972e51%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&denied_callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fdenied%2FBehanceWebSusi1%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fauth%252Flogin%253Fdestination%253D%252Fgallery%252F134883993%252FA-LoginSignup-Screens-Concept%252Fmoodboard%253FmoduleId%253D763256325%2523from_ims%253Dtrue%2526old_hash%253D%2526api%253Dauthorize%2526rctx%253D%25257B%252522intent%252522%25253A%252522signUp%252522%25252C%252522csrf%252522%25253A%252522e2af49d2-16eb-4995-b6e2-5f75d4972e51%252522%25252C%252522version%252522%25253A1%25257D%26response_type%3Dtoken%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%2522e2af49d2-16eb-4995-b6e2-5f75d4972e51%2522%257D&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%22e2af49d2-16eb-4995-b6e2-5f75d4972e51%22%7D&relay=d5c60b4b-6b16-426f-805c-6a091c624d00&locale=ru_RU&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=create_account&el=true&ab_test=signup-progressive%2Csignup-progressive-with-names&s_p=apple%2Cfacebook%2Cgoogle#/signup

import {
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    VStack,
    Text,
    Button,
    Stack,
    Link,
    Input,
    Box,
    SimpleGrid,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import { social } from '@Components/view/icons'
import NextLink from 'next/link'


const iconCss = { boxSize: 10 }
const Login = () => {

    return (
        <Flex h="100%" justify="center">
            <Container
                bg="red.50"
                maxW="sm"
                rounded={[0, 10]}
                p={[2, 5]}
                m="auto"
                centerContent>
                <VStack spacing={4} align="start">
                    <Heading>Create an account</Heading>

                    <Stack direction={['column', 'row']}>
                        <Text>Already have an account?</Text>
                        <NextLink href="/" passHref>
                            <Link color="blue.500">Sign in</Link>
                        </NextLink>
                    </Stack>

                    <Divider orientation="horizontal" />

                    <Heading fontSize={'md'}>Sign up with social</Heading>

                    <HStack spacing={5} justify="start" align="center">
                        <Button variant="link">
                            {social.google({ ...iconCss })}
                        </Button>
                        <Button variant="link">
                            {social.googleColored({ ...iconCss })}
                        </Button>
                        <Button variant="link">
                            {social.facebook({ ...iconCss })}
                        </Button>
                    </HStack>

                    <HStack w="100%">
                        <Divider></Divider>
                        <Text>Or</Text>
                        <Divider></Divider>
                    </HStack>

                    <Heading fontSize={'md'}>Sign up with email</Heading>

                    <VStack spacing={3} w="100%">
                        <Input
                            placeholder="Email address"
                            variant="flushed"
                            size="lg"
                        />
                        <Grid
                            w="100%"
                            templateColumns={['1fr', '2fr 3fr']}
                            gap={[0, 10]}>
                            <GridItem>
                                <Input placeholder="First name" size="lg" />
                            </GridItem>
                            <GridItem>
                                <Input placeholder="Last name" size="lg" />
                            </GridItem>
                        </Grid>
                        <Input placeholder="First name" size="lg" />
                        <Input
                            placeholder="Password"
                            variant="flushed"
                            size="lg"
                        />
                    </VStack>
                </VStack>
            </Container>
        </Flex>
    )
}

export default Login
