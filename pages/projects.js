import Head from 'next/head'
import { Header } from '../components/header'
import { Project } from '../components/project'

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

export default function projects({posts}){
    
    const sortedProjects = posts.sort((a, b) => new Date(b.pDate) - new Date(a.pDate));
    
    return(
        <>
            <div className="container --auto-height">
                <Head>
                    <title>Projects</title>
                </Head>
                <Header />
                <h1>Projects</h1>
            </div>
            <div className="full-width">
                {sortedProjects.map(({ title, description, date, url, address, image }) => (
                    <Project 
                        title = {title}
                        description = {description}
                        date = {date}
                        url= {url}
                        address= {address}
                        image = {image}
                        key={title}
                    />
                ))}
            </div>
        </>
    )
}


export async function getStaticProps() {
    const files = fs.readdirSync(`${process.cwd()}/context/project`);
  
    const posts = files.map((filename) => {
      const markdownWithMetadata = fs
        .readFileSync(`./context/project/${filename}`)
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