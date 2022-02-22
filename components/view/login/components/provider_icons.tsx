import { HStack, Button } from '@chakra-ui/react'
import { social, CustomIconButton } from '@Components/view/icons'
import type { HoveredIconProps } from '@Components/view/icons'
import { useState } from 'react'

const boxSize = 10

const GoogleIcon = (props: HoveredIconProps) =>
    social.google(props)
const GoogleColoredIcon = (props: HoveredIconProps) =>
    social.googleColoredV2(props)
const FacebookIcon = (props: HoveredIconProps) =>
    social.facebook(props)

const ProviderIcons = () => {
    return (
        <HStack spacing={5} justify="start" align="center">
            <CustomIconButton
                aria-label="google"
                icon={<GoogleIcon {...{ boxSize }} />}
            />
            <CustomIconButton
                aria-label="googleColored"
                icon={<GoogleColoredIcon {...{ boxSize }} />}
            />
            <CustomIconButton
                aria-label="facebook"
                icon={<FacebookIcon {...{ boxSize }} />}
            />
        </HStack>
    )
}

export default ProviderIcons
