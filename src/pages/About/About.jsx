import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>This page is about page</h1>
        <Link to="/">
            <Button variant='outlined'>Home</Button>
        </Link>
    </div>
  )
}

export default About