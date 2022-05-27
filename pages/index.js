import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const queryArchive = () => {
    fetch('https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_masse,ra,dec+from+ps+where+upper(soltype)+like+%27%CONF%%27+and+pl_masse+between+0.5+and+2.0&format=json')
      .then((res) => res.json())
      .then((json) => {
        console.log(json[0].pl_masse)
      })
  }

  return (
    <div>
      <span>Hello World</span>
      <button onClick={queryArchive}>Request</button>
    </div>
  )
}
