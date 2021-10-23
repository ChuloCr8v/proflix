import style from '../styles/Header.module.scss'
import Random from '../images/random.jpg'
import Banner from '../components/Banner'
import requests from './requests'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {

   const [showHeader, setShowHeader] = useState(true)
   const [scroll, setScrollY] = useState('')

   useEffect(() => {
      setScrollY(window.pageYOffset)
   }, [])
   let prevPos = scroll
   const changeBg = () => {
      let currentPos = window.pageYOffset
      if (currentPos < prevPos) {
         setShowHeader(true)
      } else {
         setShowHeader(false)
      }
      prevPos = currentPos

   }

   useEffect(() => {
      window.addEventListener('scroll', changeBg);
      return () => {
         window.removeEventListener("scroll", changeBg);
      };
   }, [])


   return (

      <div className={style.header}>
         {showHeader &&
            <div className={style.navbar}>
               <div className={style.logo}>
                  <Link href="/">PROFLIX</Link>
               </div>
               <div className={style.random}>
                  <img src={Random.src} alt="random movie" />
               </div>
            </div>
         }
         <Banner fetchUrl={requests.fetchNetflixOriginals} />
      </div>
   )
}

export default Header