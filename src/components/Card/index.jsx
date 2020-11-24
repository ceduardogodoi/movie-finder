import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import {
  CardContainer,
  CardTitle,
  Figure,
  Img,
  Actions,
  CardModal,
  ModalActions,
  Section
} from './styles'

function Card({ data }) {
  const modalRef = useRef()
  const [showModal, setShowModal] = useState(false)

  const { poster, title, year, type, plot, language, actors, released } = data

  // adds event listener to close modal by pressing escape
  useEffect(() => {
    function handleKeyUp(event) {
      if (event.key === 'Escape') {
        setShowModal(!showModal)
      }
    }

    if (showModal) {
      window.addEventListener('keyup', handleKeyUp)
    }

    return function cleanup() {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [showModal])

  // locks document.body scrolling when modal is opened
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    }

    return function cleanup() {
      document.body.style.overflow = 'initial'
    }
  }, [showModal])

  function handleShowModal() {
    setShowModal(!showModal)
  }

  function handleClickOutsideModal(event) {
    if (event.target === modalRef.current) {
      setShowModal(!showModal)
    }
  }

  return (
    <CardContainer>
      <Figure>
        <Img src={poster} alt="Movie/series cover" />
      </Figure>
      <CardTitle>
        {title} <span>({year})</span> <span>({type})</span>
      </CardTitle>
      <p>{plot}</p>

      <Actions>
        <Button text="See more" size="small" onClick={handleShowModal} />
      </Actions>

      {showModal && (
        <CardModal
          data-testid="card-overlay"
          ref={modalRef}
          onClick={handleClickOutsideModal}
        >
          <CardContainer modal data-testid="card-container">
            <ModalActions>
              <span onClick={handleShowModal}>Close</span>
            </ModalActions>
            <Figure>
              <Img src={poster} alt="Cover" />
            </Figure>
            <Section>
              <h3>Title:</h3>
              <p>{title}</p>
            </Section>
            <Section>
              <h3>Plot:</h3>
              <p>{plot}</p>
            </Section>
            <Section>
              <h3>Languages:</h3>
              <p>{language}</p>
            </Section>
            <Section>
              <h3>Actors:</h3>
              <p>{actors}</p>
            </Section>
            <Section>
              <h3>Released:</h3>
              <p>{released}</p>
            </Section>
          </CardContainer>
        </CardModal>
      )}
    </CardContainer>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired
  }),
  modal: PropTypes.bool
}

export default Card
