import { useDispatch } from 'react-redux'
import { actions as storeActions, useMainComponentMousePosition } from '@Store'
import { useRef } from 'react'
import { Box, useTheme } from '@chakra-ui/react'
import { useEffect, useMemo, useCallback } from 'react'
import { useAccumWhell, useScrollRouter } from '@Hooks'
import Router, { useRouter } from 'next/router'

const Layout = (props) => {
    const { children } = props
    const theme = useTheme()
    const mousePosition = useMainComponentMousePosition()
    const dispatch = useDispatch()
    const timer = useRef(0)
    const routes = useMemo(() => ['/', '/login'], [])
    const pathname = useRouter().pathname
    const { current, next, back } = useScrollRouter(pathname, routes)
    const { summ, push } = useAccumWhell(200)

    const handleWheel = ({ deltaY }) => {
        push(deltaY)
    }

    const pushPage = useCallback((href) => {
        if (Router.isReady) {
            Router.push(href).catch(console.error)
        }
    }, [])

    useEffect(() => {
        pushPage(current)
    }, [current, pushPage])

    useEffect(() => {
        if (summ > 0) {
            next()
        } else if (summ < 0) {
            back()
        }
    }, [summ, next, back])

    const hadleMouseMove = (e) => {
        const now = Date.now()
        if (now - timer.current < 100) {
            return
        }

        const { clientX, clientY } = e

        if (
            Math.pow(
                Math.pow(clientX - mousePosition.clientX, 2) +
                    Math.pow(clientY - mousePosition.clientY, 2),
                0.5
            ) < 5
        ) {
            return
        }

        dispatch(
            storeActions.components.setMainComponentMousePosition({
                clientX,
                clientY,
            })
        )

        timer.current = now
    }

    const handleHover = (hovered) => {
        dispatch(
            storeActions.components.setMainComponentMousePosition({
                hovered,
            })
        )
    }
    return (
        <Box
            onWheel={(e) => handleWheel(e)}
            as="main"
            fontSize={theme.fontSizes.md}
            position="fixed"
            w="100%"
            h="100%"
            onMouseMove={(e) => hadleMouseMove(e)}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(true)}>
            {children}
        </Box>
    )
}

export default Layout
