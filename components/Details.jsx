import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css';
import VerticalChart from './VerticalChart';


const Details = ({planetData}) => {

   /*  const data = [{name: 'Kepler 1', radius: 100},
    {name: 'Kepler 2', radius: 200},
    {name: 'Kepler 3', radius: 300},
    {name: 'Kepler 4', radius: 400},
    {name: 'Kepler 5', radius: 500}]; */
    
    
    const [chartData, setChartData] = useState();

    useEffect(() => {
        setChartData({
            labels: ['K1', 'K2', 'K3'] /* data.map((planet) => planet.name) */,
            datasets: [
              {
                label: "Planet radius",
                data: [100, 200, 300] /* data.map((planet) => planet.radius) */,
                backgroundColor: [
                  "#ffbb11",
                  "#ecf0f1",
                  "#50AF95"/* ,
                  "#f3ba2f",
                  "#2a71d0" */
                ]
              }
            ]
          });
    
      
    }, [])
    

  return (
    <>
    <span className={styles.exoplanet_detail}>Mass:<span className={styles.unit}> {planetData.pl_masse || '*'}x</span> Earth's mass</span>
    {/* <VerticalChart /> */}
    <span className={styles.exoplanet_detail}>Orbital period: <span className={styles.unit}>{Math.floor(planetData.pl_orbper * 100)/100 || '*'}</span> days</span>
    <span className={styles.exoplanet_detail}>Radius: <span className={styles.unit}>{planetData.pl_rade || 'Unknown'}{planetData.pl_rade && `x`}</span> {planetData.pl_rade && `Earth's radius`}</span>
    <span className={styles.exoplanet_detail}>Host star age: <span className={styles.unit}>{planetData.st_age || 'Unknown'}</span>{planetData.st_age && `thousand year`}</span>
    </>
  )
}

export default Details