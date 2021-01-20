import React from 'react'
import {motion} from 'framer-motion'
import {pageAnimation, titleAniamtion} from '../animation'
import styled from 'styled-components'

const ContactUs = () =>{

    return(
        <ContactStyle variants={pageAnimation} exit='exit' initial='hidden' animate='show'  >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAniamtion}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAniamtion} >
                        <Circle />
                        <h2>Send Us a message</h2>
                    </Social>
                </Hide>
                
                <Hide>
                    <Social variants={titleAniamtion}>
                        <Circle />
                        <h2>Our Twitter</h2>
                    </Social>
                </Hide>

                <Hide>
                    <Social variants={titleAniamtion}>
                        <Circle />
                        <h2>Our YouTube</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    background: white;

    @media (max-width: 1300px){
        padding: 2rem 4rem;
        font-size: 70%;
    }
    
    @media (max-width: 932px){
        padding: 1rem 2rem;
        font-size: 60%;
    }
`

const Title = styled(motion.div)`
    margin-bottom: 4rem;
    color: black;
`

const Hide = styled.div`
    overflow: hidden;
`

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`

export default ContactUs