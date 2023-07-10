import React from 'react'
import { useParams } from 'react-router-dom'

const Advocate = () => {
    const params = useParams()
    const username = params.username
  return (
    <h1>Advocate page {username}</h1>
  )
}

export default Advocate