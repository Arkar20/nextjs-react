import Head from "next/head"
import List from "../../components/List"
import {useRouter} from "next/router"
import { wrapper } from "../../redux/store"

const Detail = ({ result }) => {
    const router = useRouter()
    
    if (router.isFallback)
        return <h3>Loading...</h3>

    return (
        <div>
        <Head>
            <title>{result.title}</title>
        </Head>

            <List data={result} />
            </div>
    );
}
export const getStaticPaths =async () => {
     const data = await fetch('http://128.199.101.80/api/games')
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
        const data = await fetch('http://128.199.101.80/api/searchlists')
        const results = await data.json();
    const result = results.find(result => id == result.id);
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