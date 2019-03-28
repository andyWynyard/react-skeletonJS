import 'typeface-raleway'
import { css } from 'styled-components'

const style = css`
  font-family: 'Raleway';
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300;

  font-size: ${props => {
    switch (props.level) {
      case 1:
        return `4rem;`
      case 2:
        return `3.6rem`
      case 3:
        return `3rem`
      case 4:
        return `2.4rem`
      case 5:
        return `1.8rem`
      case 6:
        return `1.6rem`
      default:
        return `4rem`
    }
  }};

  /* Larger than phablet */
  @media (min-width: 550px) {
    font-size: ${props => {
      switch (props.level) {
        case 1:
          return `5rem;`
        case 2:
          return `4.2rem`
        case 3:
          return `3.6rem`
        case 4:
          return `3rem`
        case 5:
          return `2.4rem`
        case 6:
          return `1.5rem`
        default:
          return `4rem`
      }
    }};
  }

  line-height: ${props => {
    switch (props.level) {
      case 1:
        return `1.2;`
      case 2:
        return `1.25`
      case 3:
        return `1.3`
      case 4:
        return `1.35`
      case 5:
        return `1.5`
      case 6:
        return `1.6`
      default:
        return `1.2`
    }
  }};

  letter-spacing: ${props => {
    switch (props.level) {
      case 1:
        return `-0.1rem`
      case 2:
        return `-0.1rem`
      case 3:
        return `-0.1rem`
      case 4:
        return `-0.08rem`
      case 5:
        return `-0.05rem`
      case 6:
        return `0`
      default:
        return `-0.1rem`
    }
  }};
`

export default style
