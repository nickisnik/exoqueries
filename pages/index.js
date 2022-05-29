import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import Details from '../components/Details'

export default function Home() {

  const [planetData, setPlanetData] = useState([]);
  const [firstRender, setFirstRender] = useState(true);

  const [showEarth, setShowEarth] = useState(false);

  const [queryMaxMass, setQueryMaxMass] = useState(2.5);

  useEffect(() => {
    queryArchive();
  }, [])

  const handleShowEarth = () => {
    setShowEarth((prev) => !prev)
  }

  const randomPlanetNum = Math.floor(Math.random() * 21);
  const queryArchive = () => {
    fetch(`https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,st_age,pl_rade,pl_orbper,sy_dist,pl_masse,ra,dec+from+ps+where+upper(soltype)+like+%27%CONF%%27+and+pl_masse+between+0.5+and+3.0&format=json`)
      .then((res) => res.json())
      .then((json) => {
        setPlanetData(json[randomPlanetNum])
        console.log(json[2])
      })
      .catch((error) => {console.log(error)})
  }
  useEffect(() => {
    if(firstRender) {
      setFirstRender(false);
      return
    }
    console.log(planetData)
    const earthSize =  1 / (planetData.pl_rade);
    const earthSizePx = earthSize*35;
    document.documentElement.style.setProperty('--earth-size', `${earthSizePx}vh`)
  }, [planetData])
  
  

  return (
    <div className={styles.home}>
      <nav className={styles.nav}>
        <div className={styles.back_button} onClick={() => {alert('Oops! This feature is not ready yet...')}}>
          <img src="./Back_arrow.svg" className={styles.back_arrow}></img>
          <span className={styles.back_button_span}>Back</span>
        </div>

        <button onClick={handleShowEarth} id={styles.showEarthBtn}>{showEarth? 'Hide Earth' : 'Show Earth'}</button>
      </nav>
      
      
      <main id={styles.exoplanet_main}>
        <section id={styles.exoplanet_container}>
          <span className={styles.exoplanet_name}>{planetData.pl_name || 'Loading...'}</span>
          <span className={styles.exoplanet_type}>(exoplanet)</span>
          <div id={styles.exoplanet_img_container}><img src="./exoplanet.png" alt="" className={styles.planet}/></div>
          <span className={styles.exoplanet_distance}>Distance: {planetData.sy_dist || '*'} parsecs</span>
        </section>
        
        <section id={styles.exoplanet_details_container} className={showEarth && styles.details_nobg}>
          {!showEarth && <Details planetData={planetData} />}
          {showEarth && <div id={styles.earth_container}><img src="./earth.png" alt="" className={styles.planet}/></div>}
        </section>
          
      </main>
    </div>
  )
}
