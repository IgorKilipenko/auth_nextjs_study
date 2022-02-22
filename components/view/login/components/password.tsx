import {
    Input,
    InputRightElement,
    InputGroup,
    IconButton,
} from '@chakra-ui/react'
import { ShowPasswordIcon } from '@Components/view/icons'
import { useState } from 'react'

const Password = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [hovered, setHovered] = useState(false)
    return (
        <InputGroup>
            <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                variant="flushed"
                size="lg"
            />
            <InputRightElement>
                <IconButton
                    aria-label="show/hidden"
                    variant="link"
                    colorScheme='gray'
                    isRound={true}
                    _focus={{boxShadow:'none'}}
                    onClick={(e) => {
                        e.preventDefault()
                        setShowPassword((prevState) => !prevState)
                    }}
                    icon={
                        <ShowPasswordIcon
                            show={showPassword}
                            fontSize={'2xl'}
                            fill={hovered ? "gray.800" : "gray.500"}
                            onMouseEnter={()=> setHovered(true)}
                            onMouseLeave={()=> setHovered(false)}
                        />
                    }
                />
            </InputRightElement>
        </InputGroup>
    )
}

export default Password
