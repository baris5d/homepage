import Head from 'next/head'
import { Header } from '../components/header'
import { ProfileImage } from '../components/image'
import { Welcome } from '../components/welcome'
import { Hire } from '../components/hire'
import { Button } from '../components/button'
import { MouseTracker } from '../components/mouseTracker'
import { SEO } from '../components/seo'
import { Footer } from '../components/footer'

const SOCIAL = [
  { name : "GITHUB" , url : "https..."},
  { name : "LINKEDIN" , url : "https..."},
  { name : "MEDIUM" , url : "https..."},
  { name : "TWITTER" , url : "https..."},
  { name : "INSTAGRAM" , url : "https..."},
]

export default function Home() {
  return (
    <>
      <SEO 
       description = "Gelişmekte olan geliştirici genç"
       title = "404 - Barış Dede { Gelişmekte Olan Geliştirici Genç }"
      />
        <div>
            <MouseTracker />
        </div>

      <div className="container">
        <Header />
        <main className="wrapper-c --center">
          <h1> 404 Not Found </h1>
            <img src="https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/source.gif" />
        <Footer /> 
        </main>
      </div>
    </>
  )
}
