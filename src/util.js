import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = url => {
  const [data, updateData] = useState(undefined)

  useEffect(() => {
    axios.get(url).then(res => updateData(res.data))
  }, [url])
  
  return data
}
