import {
    extendTheme,
    withDefaultColorScheme,
    ComponentStyleConfig,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { Styles, StyleFunctionProps } from '@chakra-ui/theme-tools'

const Input: ComponentStyleConfig = {
    baseStyle: {
        borderColor: 'red.600',
    },
}

const styles: Styles = {
    global: (props) => {
        return {
            body: {
                fontFamily: 'body',
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                color: mode('gray.800', 'whiteAlpha.900')(props),
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                bg: mode('gray.50', 'gray.800')(props),
                lineHeight: 'base',
            },
            a: {
                _hover: {
                    textDecoration: 'none !important',
                },
            },
        }
    },
}

//const customTheme = extendTheme({oldTheme: theme()}, withDefaultColorScheme({ colorScheme: 'green' /*gray*/ }))
const customTheme = extendTheme(
    {
        config: {
            cssVarPrefix: 'ck',
        },
        styles,
        components: {
            Input,
        },
    },
    withDefaultColorScheme({
        colorScheme: 'green' /*gray*/,

    })
)

export { customTheme }
