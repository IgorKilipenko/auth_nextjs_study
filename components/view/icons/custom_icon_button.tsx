import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { useState, cloneElement } from 'react'

const CustomIconButton = (props: IconButtonProps) => {
    const { icon, ...rest } = props
    const [hovered, setHovered] = useState(false)
    return (
        <IconButton
            variant="link"
            onMouseEnter= {() => setHovered(true)}
            onMouseLeave= {() => setHovered(false)}
            isRound={true}
            _focus={{boxShadow:'none'}}
            _hover={{boxShadow:'outline'}}
            icon={cloneElement(icon, {
                hovered,
            })}
            {...rest}
        />
    )
}

export default CustomIconButton
