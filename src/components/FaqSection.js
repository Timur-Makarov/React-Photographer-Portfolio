import React from 'react'
import styled from 'styled-components'
import {About} from '../style'
import Toggle from './toggleEl'
import {useScroll} from './useScroll'
import {fade} from '../animation'

import {AnimateSharedLayout} from 'framer-motion'

const FaqSection = () =>{

    const [el, controls] = useScroll()
    return(
        <Faq variants={fade} animate={controls} initial='hidden' ref={el}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title={'How Do I Start?'}>

                            <div className="answer">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo.</p>
                            </div>

                </Toggle>



                <Toggle title={'Daily Schedule'}>

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo.</p>
                        </div>

                </Toggle>



                <Toggle title={'Differnt Payment Method'}>

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo.</p>
                        </div>

                </Toggle>



                <Toggle title={'What Products do you offer'}>

                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nemo.</p>
                        </div>

                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;

    span{
        display: block;
    }

    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line{
        background-color: #cccccc;
        height: .2rem;
        width: 100%;
        margin: 2rem 0rem;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        /* padding: 1rem 0rem 0rem 0rem; */
        margin-bottom: -2rem;
        p{
            padding: 1rem 0rem;
        }
    }

    /* h2{
        white-space: nowrap;
    } */
`

export default FaqSection