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
export default async function articles({posts}){
    const sortedPosts = posts.sort((a, b) => new Date(b.pDate) - new Date(a.pDate));
    const groupByYear = groupBy("year");
    const dataByYear = groupByYear(sortedPosts)
  
}

export async function getStaticProps(path) {
    const files = fs.readdirSync(`${process.cwd()}${path}`);
  
    const posts = files.map((filename) => {
      const markdownWithMetadata = fs
        .readFileSync(`.${path}/${filename}`)
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