import { SEO } from '../components/seo'
import { Header } from '../components/header'
import { Article } from '../components/article'
import fs from "fs";
import matter from "gray-matter";
import { MouseTracker } from '../components/mouseTracker'
import { Footer } from '../components/footer'

function groupBy(key) {
    return function group(array) {
        return array.reduce((acc, obj) => {
            const property = obj[key];
            acc[property] = acc[property] || [];
            acc[property].push(obj);
            return acc;
            }, {});
    };
}
export default function articles({posts}){

    const sortedPosts = posts.sort((a, b) => new Date(b.pDate) - new Date(a.pDate));
    const groupByYear = groupBy("year");
    const articlesByYear = groupByYear(sortedPosts)
  
    return(
        <>
            <SEO 
            description = "All the articles I've written so far, I hope to write more articles."
            title = "Articles - Barış Dede { Gelişmekte Olan Geliştirici Genç }"
            />
             <div>
                <MouseTracker />
            </div>
        
            <div className="container">
                <Header active="articles" />
                <main>
                <h1>Articles</h1>
                {Object.keys(articlesByYear).sort().reverse().map(function(key,index){
                    return(
                        <r-grid columns="10">
                            <r-cell span="2"><h3 className="sticky">{key}</h3></r-cell>
                            <r-cell span="8" className="article-box">
                                {articlesByYear[key].map(({ title, description, date, readMin, image, platform, url }) => (
                                    <Article 
                                        title={title}
                                        description = {description}
                                        date = {date}
                                        readMin = {readMin}
                                        image = {image}
                                        platform = {platform}
                                        key={title}
                                        url={url}
                                    />
                                ))}
                            </r-cell>
                        </r-grid>
                    )
                
                })}
                    
                </main>
                <Footer /> 
            </div>
        </>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(`${process.cwd()}/context/blog`);
  
    const posts = files.map((filename) => {
      const markdownWithMetadata = fs
        .readFileSync(`./context/blog/${filename}`)
        .toString();
  
      const { data } = matter(markdownWithMetadata);
      const pureDate = data.date.toString();

      const options = { year: "numeric", month: "short", day: "numeric" };
      const formattedDate = data.date.toLocaleDateString("en-US", options);
  
  
      return {
        ...data,
        pDate: pureDate,
        date: formattedDate,
        year: data.date.toLocaleDateString("en-US",{year: "numeric"})
      };
    });
  
    return {
      props: {
        posts,
      },
    };
  }