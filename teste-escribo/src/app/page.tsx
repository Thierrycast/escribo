"use client"

import styles from './page.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react';

export default function Home() {

  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

 

  const handleSubtract = () => {
    
    let somatorio = 0;

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    setResult(somatorio)
    return

  };

  return (
    <main className={styles.main}>
      <Header/>
      <div className={styles.container}>
        <h1> Teste a função</h1>
        <form>
        
          <div className={styles.inputs} >
          <label>
          Número de entrada:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          />
        </label>

          
        <label>
          Resultado:
          <input
            type="number"
            value={result}
            readOnly
          />
        </label>
          
        </div>

       
        <button type="button" onClick={handleSubtract}>
          Enviar
        </button>
      </form>

        <div className={styles.links} >
          <a target='_blank' href="https://github.com/Thierrycast/escribo">- Link do repositorio.</a>
          <a target='_blank' href="https://github.com/Thierrycast">- Meu Github.</a>
        </div>
      </div>

      <Footer/>
    </main>
  )
}
