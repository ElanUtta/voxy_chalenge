'use client';
import React from 'react'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [words, setWords] = useState('')
  const [showError, setShowError] = useState(false)
  const [submit, setSubmit] = useState(false)
  

  const totalWords = () => {
    return words.split(/\s/).filter(e => ( e != '')).length
  }
  
  const userMensage = () => {
    return words === '' ? (   
      <h2>
        Ops voce tem que escrever alguma coisa!!!!
      </h2> 
    ) : (
      <h3>
        Número de palavras: {totalWords()}
      </h3>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.container_lines}>
        <h1 style={{paddingTop: 100, paddingBottom: 100, paddingLeft:300}}>
          Contador de palavras
        </h1>
      
        { showError && userMensage()} 
        
        <textarea 
          className={styles.textarea}
          rows={10}
          cols={70}
          placeholder='Insira seu texto aqui.'
          value={words}
          onChange={e => {
            setWords(e.target.value)
            setSubmit(false)
            setShowError(false)
          }}
        >
        </textarea>

        <div 
          className={styles.container} 
          style={{paddingTop: 50}}
        >
          <button 
            className={styles.button} 
            onClick={()=> {
              setShowError(true)
              setSubmit(true)
            }}
          >
              Submit
          </button>
        </div>
      </div>
    </main>
  )
}
