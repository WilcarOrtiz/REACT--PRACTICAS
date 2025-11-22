import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_fACT = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState()
  const [alt, setAlt] = useState()
  const [url, setUrl] = useState()

  // recuperar el hecho
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_fACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  //para recupear la imagen

  useEffect(() => {
    if (!fact) return
    const firtsWord = fact.split(' ', 3).join(' ')

    fetch(
      `https://cataas.com/cat/says/${firtsWord}?fontSize=50&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setUrl(url)
        setAlt(firtsWord)
      })
  }, [fact])

  return (
    <main>
      <h1>App De Gatitos</h1>
      {fact && url ? (
        <>
          <p>{fact}</p>
          <img src={url} alt={alt} />
        </>
      ) : (
        <p>cargando..</p>
      )}
    </main>
  )
}
