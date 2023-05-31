import React from 'react'
import HeroesList from './HeroesList'

const DCPage = ({publisher="DC Comics"}) => {
  
  return (
    <>
      DC Page
      <HeroesList publisher='DC Comics'/>
    </>
  )
}

export default DCPage