import { Provider } from 'react-redux'
import configureAppStore from '@Store'
import { Layout } from '@Components/view'
import Head from 'next/head'
import { Chakra } from '@Components/chakra'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

const store = configureAppStore({
    components: {
        componentsState: {},
    },
    todos: {},
})

const App = ({ Component, pageProps }: AppProps) => {
    const { session } = pageProps
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <SessionProvider session={session}>
                <Provider store={store}>
                    <Chakra>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Chakra>
                </Provider>
            </SessionProvider>
        </>
    )
}

export default App
export { getServerSideProps } from '@Components/chakra'
