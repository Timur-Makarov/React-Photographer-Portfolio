import React from 'react'
import photographer from '../img/home1.png'
import {About, Description, Image, Hide} from '../style'

import {motion} from 'framer-motion'
import {titleAniamtion, fade, photoAnim} from '../animation'
import Wave from './wave'
import styled from 'styled-components'
const AboutSection = () => {

    return (
        <HeadLine >

            <Description>
                <motion.div className="title" >
                    <Hide>
                        <motion.h2 variants={titleAniamtion} >We work to make</motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2  variants={titleAniamtion} >your <span>dreams</span></motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAniamtion} >come true.</motion.h2>
                    </Hide>
                </motion.div>
                <div>
                    <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                    <motion.button variants={fade}>Contact Us</motion.button>
                </div>
            </Description>
            <Photo>
                <motion.img src={photographer} alt="photographer" variants={photoAnim}></motion.img>
            </Photo>
            <Wave />
        </HeadLine>
    )
}

const HeadLine = styled(About)`

    @media (max-width: 932px){
        padding-top: 8rem;
        padding-left: 3rem;
    }
`

const Photo = styled(Image)`

    @media (max-width: 932px){
        display: none;
    }
`




export default AboutSection