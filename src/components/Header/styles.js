import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 25px 25px;
  background: #fff;

  h2 {
    color: #000;
  }

  nav {
    flex-grow: 1;
  }
`

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;

  list-style: none;

  li {
    a {
      color: #000;
      text-decoration: none;

      &:hover {
        color: grey;
      }
    }

    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }
`
