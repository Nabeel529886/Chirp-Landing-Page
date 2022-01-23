import React from 'react'
import {styled} from '@mui/material/styles'
import Link from '@mui/material/Link'


const NavLinkItems = styled(Link)(({theme}) => ({
    color: "#999",
    textDecoration: "none",
    cursor: "pointer",

    [theme.breakpoints.down('sm')]:{
        display: 'block',
        width: '100%',
        fontSize: '35px',
        letterSpacing: '5px',
        textAlign: 'center',
        margin: '20px 0',
    }

}))

export default function NavLink({children}){
    return <NavLinkItems>{children}</NavLinkItems>
}