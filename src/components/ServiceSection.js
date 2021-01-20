import React from 'react'
import clockIcon from '../img/clock.svg'
import diaphragmIcon from '../img/diaphragm.svg'
import moneyIcon from '../img/money.svg'
import teamWorkIcon from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import {About, Description, Image} from '../style'
import styled from 'styled-components'
import {useScroll} from './useScroll'
import {fade} from '../animation'

const ServicesSection = () =>{
    const [el, controls] = useScroll()
    return(
        <Services variants={fade} animate={controls} initial="hidden" ref={el}>
            <Description>
                <h2>High <span>quility</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clockIcon} alt=""/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragmIcon} alt=""/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={moneyIcon} alt=""/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamWorkIcon} alt=""/>
                            <h3>TeamWork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt=""/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
        margin-left: 3rem;
    }
    p{
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* max-width: 450px; */
    justify-content: space-around;
    margin-left: 1rem;

    
`

const Card = styled.div`
    .icon{display: flex;
    align-items: center;}
    h3{
        margin-left: 1rem;
        background-color: white;
        color: black;
        padding: 8px;
    }
`

export default ServicesSection