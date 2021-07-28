import Head from "next/head"
import router from "next/router"
import {useRouter} from "next/router"
const Detail = ({ result }) => {
    console.log(result)
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
     const data = await fetch('http://localhost:8000/api/games')
    const results = await data.json();
    const paths = results.data.map(result => {
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
        const data = await fetch('http://localhost:8000/api/searchlists')
        const results = await data.json();
    const result = results.find(result => id == result.id);
    console.log(result)
    if (!result) {
        return {
            notFound:true
        }
    }
    return {
        props: { result },
        revalidate: 3, //every 1 min regenerate the static pages (build process)
    }
    
     
 }
export default Detail;