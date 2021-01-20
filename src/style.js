import styled from 'styled-components'
import {motion} from 'framer-motion'

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  padding: 5rem 8rem;
  color: white;

  @media (max-width: 932px){
        padding: 0;
        display: block;
        text-align: center;
        justify-content: center;
    }

`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 3;
  h2 {
    font-weight: lighter;
  }

  p{
    max-width: 450px;
    font-size: 1.1rem
  }
`

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
  z-index: 3;

    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

export const Hide = styled.div`
    overflow: hidden;
`
