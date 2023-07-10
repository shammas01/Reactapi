import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Homepage = () => {
    const [advocates, setAdvocate] = useState([])

    useEffect(() =>{
        getData()
    }, [])

    
let getData = async () => {
    let response = await axios.get('http://127.0.0.1:8000/advocate/')
    console.log('RESPONSE:', response)

}

  return (
    <h1>Homepage page</h1>
  )
}

export default Homepage