import { GridItem } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
    useTheme,
    Box,
    Text,
    Grid,
    Center,
    Container,
    Heading,
    Flex,
} from '@chakra-ui/react'
import { Login } from '@Components/view'
import Head from 'next/head'

const LoginPage = (/*props*/) => {
    const theme = useTheme()
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Login/>
        </>
    )
}

export { LoginPage as default }
