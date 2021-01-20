import React from 'react'
import styled from 'styled-components'
import {NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'

const Nav = () =>{
    const {pathname}= useLocation()

    return(
        <StyledNav>
            <h1><NavLink to='/'>Capture</NavLink></h1>
            <ul>
                <li><NavLink to='/'>1. About Us </NavLink>
                <Line transition={{duration: 0.75}} initial={{width:'0%'}} animate={{width: pathname === '/' ? '100%' : '0%'}}/>
                </li>
                <li><NavLink to='/works'>2. Our Work</NavLink>
                    <Line transition={{duration: 0.75}} initial={{width:'0%'}} animate={{width: pathname === '/works' ? '100%' : '0%'}}/>
                </li>
                <li><NavLink to='/contact'>3. Contact Us</NavLink>
                    <Line transition={{duration: 0.75}} initial={{width:'0%'}} animate={{width: pathname === '/contact' ? '100%' : '0%'}}/>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    ul{
        list-style: none;
        display: flex;
    }

    a{
        color: white;
        text-decoration: none;
        font-size: 1rem;
    }

    #logo{
        font-size: 2rem;
        font-family: 'Lobster', sans-serif;
        font-weight: lighter;
    }

    li{
        padding-left: 8rem;
        position: relative;
        flex-direction: column;
    }


    @media (max-width: 932px){
        flex-direction: column;
        white-space: nowrap;

        
        li{
            padding-left: 4rem;
        }

        ul{
            padding-right: 3.5rem;
        }
    }
`

const Line = styled(motion.div)`
    background: #23d997;
    height: .18rem;
    width: 0;
`
export default Nav