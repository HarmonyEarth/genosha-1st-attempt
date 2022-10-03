import styled from 'styled-components';

export const SelectHeroCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    width: 13rem;
    height: 15rem;
  }
`;

export const SelectHeroSection = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
`;

export const SelectHeroesContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  align-items: flex-end;
`;

export const CharacterSelectContainer = styled.div`
  background: url(https://www.fightersgeneration.com/nf9/game/stage/2/xmen-vs-streetfighter-stage-showdown-at-the-park.gif);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: row;
  h3 {
    -webkit-text-stroke-width: 0.01rem;
    -webkit-text-stroke-color: white;
    font-size: 1.8rem;
    background-image: linear-gradient(
      -45deg,
      #53d6ff,
      #666be1,
      #e45372,
      #f07c63
    ) !important;
    background-size: 400% !important;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: Gradient 10s ease infinite !important;
    -moz-animation: Gradient 10s ease infinite !important;
    animation: Gradient 10s ease infinite !important;
  }
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
