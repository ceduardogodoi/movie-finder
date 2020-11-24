import styled from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: ${({ size }) => size === 'small' ? '10px 26px' : '16px 26px'};
  background: #6e42ff;

  letter-spacing: 2px;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffffff;

  transition: background 300ms ease 0ms;

  &:disabled {
    background: #888685;
  }
`
