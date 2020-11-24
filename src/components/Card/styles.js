import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 4px;
  border: none;
  background: #f0eeeb;
  padding: ${({ modal }) => (modal ? '0 30px 30px 30px' : '30px')};

  ${({ modal }) =>
    modal &&
    css`
      margin: 225px 0 25px 0;
      width: 50%;
    `}

  color: #000;

  h3,
  p {
    color: inherit;
  }

  p {
    font-weight: 300;
  }
`

export const CardTitle = styled.h2`
  margin-bottom: 20px;

  text-align: center;
  color: #000;

  span {
    font-size: 12px;
    color: inherit;
  }
`

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const Img = styled.img`
  width: 250px;
  user-select: none;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const CardModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`
export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;

  color: #000;

  span {
    color: inherit;

    cursor: pointer;

    &:hover {
      color: grey;
    }
  }
`

export const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  color: #000;

  h3 {
    margin-bottom: 5px;
  }

  h3,
  h4,
  p {
    color: inherit;
  }

  p {
    font-weight: 300;
  }
`
