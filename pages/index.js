import Head from 'next/head'
import { Header } from '../components/header'
import { ProfileImage } from '../components/image'
import { Welcome } from '../components/welcome'
import { Hire } from '../components/hire'
import { Button } from '../components/button'

const SOCIAL = [
  { name : "GITHUB" , url : "https..."},
  { name : "LINKEDIN" , url : "https..."},
  { name : "MEDIUM" , url : "https..."},
  { name : "TWITTER" , url : "https..."},
  { name : "INSTAGRAM" , url : "https..."},
]

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="wrapper-c">
        <r-grid columns="12">
          <r-cell span="4" span-s="row">
            <ProfileImage image="/images/drawing.png"/>
          </r-cell>
          <r-cell span="6-12" span-s="row">
            <Welcome>
                  <h2>Hey 👋, I'm Barış.<br/> 24 year old, experienced developer.</h2>
                  <div>
                      <p>👨‍🎓 Computer engineering student,</p>
                      <p>💻 Full-Stack developer,</p>
                      <p>✏  Drawing enthusiast,</p>
                      <p>☕ Coffee addicted</p>
                  </div>
                  <Hire 
                    text = "Currently, I'm working as a freelancer"
                    urlText ="hire me"
                    url = "mailto:baris@barisdede.com"
                  />
            </Welcome>
          </r-cell>
        </r-grid>
        <r-grid columns="5" class="buttons" >
          {SOCIAL.map(page => {
            return(
                <r-cell span-s="row" key={page.url}>
                  <Button
                    url={page.url}
                    text={page.name}
                  />
                </r-cell>
              )
            }
          )}
        
        </r-grid>
      
      </main>
    </div>
  )
}
