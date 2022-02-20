import { Icon } from '@chakra-ui/react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const GoogleColoredIcon = (props) => {
    return (
        <Icon /*width="50" height="50"*/ viewBox="0 0 25 25" {...props}>
            {/* <rect id="Background" width="50" height="50" rx="25" fill="#fff" /> */}
            <g
                id="Group_69890"
                data-name="Group 69890"
                transform="translate(1 -1.5)">
                <g id="logo_googleg_48dp" transform="translate(0 2.228)">
                    <path
                        id="Shape"
                        d="M20.52,9.818A13.788,13.788,0,0,0,20.3,7.364H9v4.642h6.458a5.52,5.52,0,0,1-2.395,3.622v3.011h3.878a11.7,11.7,0,0,0,3.578-8.82Z"
                        transform="translate(3 2.455)"
                        fill="#4285f4"
                        fillRule="evenodd"
                    />
                    <path
                        id="Shape-2"
                        data-name="Shape"
                        d="M11.681,20.43a11.456,11.456,0,0,0,7.942-2.907l-3.878-3.011a7.24,7.24,0,0,1-10.778-3.8H.957v3.109A12,12,0,0,0,11.681,20.43Z"
                        transform="translate(0.319 3.57)"
                        fill="#34a853"
                        fillRule="evenodd"
                    />
                    <path
                        id="Shape-3"
                        data-name="Shape"
                        d="M5.285,12.627a7.094,7.094,0,0,1,0-4.56V4.958H1.276a12.015,12.015,0,0,0,0,10.778l4.009-3.109Z"
                        transform="translate(0 1.653)"
                        fill="#fbbc05"
                        fillRule="evenodd"
                    />
                    <path
                        id="Shape-4"
                        data-name="Shape"
                        d="M11.681,4.773a6.483,6.483,0,0,1,4.587,1.795L19.71,3.125A11.533,11.533,0,0,0,11.681,0,12,12,0,0,0,.957,6.611L4.966,9.72a7.152,7.152,0,0,1,6.715-4.947Z"
                        transform="translate(0.319)"
                        fill="#ea4335"
                        fillRule="evenodd"
                    />
                    <path
                        id="Shape-5"
                        data-name="Shape"
                        d="M0,0H24V24H0Z"
                        fill="none"
                        fillRule="evenodd"
                    />
                </g>
            </g>
        </Icon>
    )
}

const GoogleColoredIconV2 = (props) => {
    return (
        <Icon viewBox="0 0 48 48" {...props}>
            <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
        </Icon>
    )
}

const social = {
    facebook: (props) => (
        <Icon as={FaFacebook} {...{ fill: 'blue.700', ...props }} />
    ),
    google: (props) => <Icon as={FaGoogle} {...props} />,
    googleColored: (props) => <GoogleColoredIcon {...props} />,
    //googleV2: (props) => <GoogleColoredIconV2 {...props} />,
}

export { social }
