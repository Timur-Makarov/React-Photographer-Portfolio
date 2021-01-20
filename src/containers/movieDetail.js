import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
        console.log(setMovies);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details variants={pageAnimation} exit='exit' initial='hidden' animate='show' >
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map(award => (
                            <Award title={award.title} desc={award.description} key={award.title} />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie" />
                    </ImageDisplay>
                </Details>
            )}
        </>
    );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%)

  }

  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 932px){
    h2{
      white-space: nowrap;
    }

  }
`
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  margin: 0rem 6rem;
  justify-content: space-around;

  @media (max-width: 932px){
    flex-direction: column;
    margin: 0rem 1rem;

  }
`

const StyledAward = styled.div`
  padding: 5rem;
  h3{
    font-size: 2rem;
  }
  .line{
    width: 100%;
    background: #23d997;
    height: .3rem;
    margin: 1rem 0rem;
  }
  p{
    padding: 2rem 0rem;
  }

  @media (max-width: 932px){
    p{
     font-size: 1.5rem; 
    }
  }
`

const ImageDisplay = styled.div`
  min-height: 50vh;
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`



const Award = ({ title, desc }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{desc}</p>
        </StyledAward>
    )
}
export default MovieDetail;
