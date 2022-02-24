import { Heading, useTheme } from '@chakra-ui/react'
import { Login } from '@Components/view'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import type { Session } from 'next-auth'
import { useSession, getSession } from 'next-auth/react'

const LoginPage = (/*props*/) => {
    const { data: session, status } = useSession()
    console.debug({ session })
    console.debug({ status })
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            {!(session && status === 'authenticated') ? <Login /> : <Heading>authenticated</Heading>}
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{
    session: Session | null
}> = async (context) => {
    return {
        props: {
            session: await getSession(context),
        },
    }
}

export { LoginPage as default }
