'use client';
import React from 'react'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [words, setWords] = useState('')

  const total_words = () => {
    return words.split(/\s/).filter(e => ( e != '')).length
  }
  

  return (
    <main className={styles.main}>
      <div>
        <h2 style={{paddingTop: 100, paddingBottom: 100}}>
          Coloque o texto na caixa logo abaixo para contar quantas palavras o texto tem!
        </h2>
        
        <textarea 
         rows={10}
         cols={70}

          value={words}
          onChange={e => setWords(e.target.value)}
        >
        </textarea>

        <h3 style={{paddingTop: 100}}>
          Numero de palavras {total_words()}
        </h3>
      </div>
    </main>
  )
}
