import Head from 'next/head'
import { Header } from '../components/header'
import { Article } from '../components/article'
import fs from "fs";
import matter from "gray-matter";

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
        <div className="container">
            <Head>
                <title>Create Next App</title>
            </Head>
            <Header />
            <main>
            <h1>Articles</h1>
            {Object.keys(articlesByYear).sort().reverse().map(function(key,index){
                return(
                    <r-grid columns="8">
                        <r-cell span="1"><h3 className="sticky">{key}</h3></r-cell>
                        <r-cell span="7" className="article-box">
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
        </div>
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