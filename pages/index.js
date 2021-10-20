import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Row from '../components/Row'
import requests from '../components/requests'

export default function Home() {
  return (
    <div className={styles.container}>
      <Row title={"RECOMMENDED"} fetchUrl={requests.fetchNetflixOriginals}/>
    </div>
  )
}
