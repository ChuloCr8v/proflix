import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Row from '../components/Row'
import Banner from '../components/Banner'
import requests from '../components/requests'

export default function Home() {
  return (
    <div className={styles.container}>
    <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row isLarge title={"Trending Now"} fetchUrl={requests.fetchTrending}/>
      <Row title={"Recommended For You "} fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title={"Hot 🔥"} fetchUrl={requests.fetchTopRated}/>
      <Row title={"Action"} fetchUrl={requests.fetchActionMovies}/>
      <Row title={"Comedy"} fetchUrl={requests.fetchComedyMovies}/>
      <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies}/>
      <Row title={"Romance"} fetchUrl={requests.fetchRomanceMovies}/>
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}
