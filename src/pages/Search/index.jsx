import React, { useState, useEffect, useContext } from 'react'

import { Context } from '../../store/AppContext'

import api from '../../services/api'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Card from '../../components/Card'

import { Main, Container, Fieldset, HeadingContainer } from '../styles'
import { SearchContainer, NoTitle } from './styles'

function Search() {
  const context = useContext(Context)
  const { setUser } = context

  const initialState = {
    title: '',
    year: '',
    type: '',
    response: '',
    poster: '',
    plot: '',
    language: ''
  }

  const [value, setValue] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [movie, setMovie] = useState(initialState)

  useEffect(() => {
    const value = localStorage.getItem('user')

    if (value) {
      const user = JSON.parse(value)

      setUser(user)
    }
  }, [setUser])

  function handleChange(event) {
    setValue(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)

    try {
      const resp = await api.get('', {
        params: {
          t: value
        }
      })

      const {
        Title: title,
        Year: year,
        Type: type,
        Response: response,
        Poster: poster,
        Plot: plot,
        Language: language,
        Actors: actors,
        Released: released
      } = resp.data

      setMovie({
        title,
        year,
        type,
        response,
        poster,
        plot,
        language,
        actors,
        released
      })
    } catch {
      setMovie(initialState)
    }

    setLoading(false)
  }

  return (
    <Main>
      <Container>
        <HeadingContainer>
          <h1>Movie/series finder</h1>
          <p>Search for movies, series and related content.</p>
        </HeadingContainer>
        <form onSubmit={handleSubmit}>
          <Fieldset isDisabled={isLoading || value.length < 1}>
            <Input
              id="title"
              name="title"
              type="search"
              placeholder="e.g: The Fresh Prince of Bel-Air"
              value={value}
              onChange={handleChange}
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading || value.length < 1}
              text="Search"
            />
          </Fieldset>
        </form>
        {movie.response === 'True' ? (
          <SearchContainer>
            <Card data={movie} />
          </SearchContainer>
        ) : (
          <NoTitle>No title found</NoTitle>
        )}
      </Container>
    </Main>
  )
}

export default Search
