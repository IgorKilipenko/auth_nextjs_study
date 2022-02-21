import { GridItem } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useTheme, Grid, Flex } from '@chakra-ui/react'
import Head from 'next/head'

const HomePage = (/*props*/) => {
    const theme = useTheme()
    return (
        <>
            <Head>
                <title>HOME</title>
            </Head>
            <Flex
                position="relative"
                w="100%"
                h="100%"
                align="center"
                justify="center">
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    {`Occaecat proident velit sit reprehenderit cupidatat anim cupidatat irure ad aliquip ullamco.
                    Sit enim dolore irure cupidatat ut.
                    Nisi ea ut ad dolor voluptate amet sint qui velit magna et sunt ad non.
                    Sint magna cupidatat irure fugiat.
                    Dolor enim culpa eu ea eiusmod aliqua sint velit fugiat ex veniam adipisicing laborum ea.`
                        .split(' ')
                        .filter((text) => text != '')
                        .map((text, i) => {
                            return (
                                <GridItem key={i}>
                                    <Button w="100%">{text}</Button>
                                </GridItem>
                            )
                        })}
                </Grid>
            </Flex>
        </>
    )
}

export { HomePage as default }
