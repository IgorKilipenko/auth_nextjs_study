import Image, { ImageProps } from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@chakra-ui/react'

interface IProps extends ImageProps {
    css: string | object | object[]
    style: object
}

const WrappedImage = (props: IProps) => {
    const {
        width = '100%',
        height = '100%',
        layout,
        src,
        alt = '',
        className,
        css,
        style,
        ...rest
    } = props

    const theme = useTheme()

    return (
        <motion.div style={style} {...{ className, css }}>
            <Image
                {...{
                    ...(!layout && { width, height }),
                    layout,
                    src,
                    alt,
                    ...rest,
                }}
            />
        </motion.div>
    )
}

export { WrappedImage }
