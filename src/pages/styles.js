import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 600px;
`

export const Fieldset = styled.fieldset`
  border: 2px solid ${({ isDisabled }) => (isDisabled ? '#888685' : '#6e42ff')};
  display: flex;
  flex-direction: column;
  padding: 30px;

  & *:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const HeadingContainer = styled.div`
  margin: 30px 0;

  & *:not(:last-child) {
    margin-bottom: 20px;
  }
`
