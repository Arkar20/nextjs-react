import Head from "next/head"
import router from "next/router"
import {useRouter} from "next/router"
const Detail = ({ result }) => {
    const router = useRouter()
    
    if (router.isFallback)
        return <h3>Loading...</h3>

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
    console.log(results.slice(0,3))
    const paths = results.map(result => {
        return {
            params: { id: result.id.toString() },
        }
    })
    
    return {
        paths: paths.slice(0,3),
        fallback: true
    }
   
}
export const getStaticProps = async (context) => {
    const id = context.params.id
     const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const result = await data.json();

    if (!result.id) {
        return {
            notFound:true
        }
    }
    return {
        props:{result}
    }
    
     
 }
export default Detail;