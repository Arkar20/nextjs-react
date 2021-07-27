import Head from "next/head"
const Detail = ({ result }) => {
    return (
        <div>
        <Head>
            <title>{result.title}</title>
        </Head>

            <h2>Detail page</h2>
        <p>{result.title}</p>
        <p>{result.body}</p>
        </div>
    );
}
export const getStaticPaths =async () => {
     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const results = await data.json();
  
    const paths = results.map(result => {
        return {
           params: {id:result.id.toString()}
        }
    })
    
    return {
        paths,
        fallback: false
    }
   
}
export const getStaticProps = async (context) => {
    const id = context.params.id
     const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const result = await data.json();

    return {
        props:{result}
    }
    
     
 }
export default Detail;