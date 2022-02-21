import { useTheme } from '@chakra-ui/react'
import { Login } from '@Components/view'
import Head from 'next/head'

const LoginPage = (/*props*/) => {
    const theme = useTheme()
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Login />
        </>
    )
}

export { LoginPage as default }
