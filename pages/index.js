import React from 'react'
import styles from '../styles/Welcome.module.css' 
import Link from 'next/link'

const Welcome = () => {
  return (
    <div className={styles.welcome_wrapper}>

        <div className={styles.content_wrapper}>
            <h1 className={styles.title}>
                Exoqueries
                <span className={styles.alpha}>ALPHA</span>
            </h1>
            <span className={styles.subtitle}>Explore the universe</span>
            <nav className={styles.menu_container}>
                <Link href="/exoplanet">
                    <a className={styles.menu_link_wrapper}>
                        <img src="./exoplanet.png" alt="" className={styles.menu_link_image} />
                        <span className={styles.menu_link_name}>Exoplanets</span>
                    </a>
                </Link>
                <a className={styles.menu_link_wrapper}>
                    <div className={styles.solar}></div>
                    <span className={styles.coming_soon}>Coming soon</span>
                    <span className={styles.menu_link_name_soon}>Solar system</span>
                </a>
                <a className={styles.menu_link_wrapper}>
                    <div className={styles.neutron}></div>
                    <span className={styles.coming_soon}>Coming soon</span>
                    <span className={styles.menu_link_name_soon}>Neutron stars</span>
                </a>
            </nav>
            
            <Link href="/exoplanet">
                <a className={styles.start_button}>Random exoplanet</a>
            </Link>
        </div>

    </div>
  )
}

export default Welcome