import Head from "next/head"
import Link from "next/link";

export const  getStaticProps = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const results =await data.json();
 
    return {
        props:{results}
    }
}

const Todos = ({results}) => {
    
    
    return (
        <div>
            <Head>
                <title>Todos</title>
            </Head>
            <h1>Todos</h1>
            <ul>
            {
                results.map(result => 
                    <li key={result.id}>
                        <h1>{result.title}</h1>
                        <h2>{ result.body}</h2>
                    </li>
                   
                
                )
                }
                 </ul>
        <p>
            <Link href="/">back to home</Link></p>
        </div>
     );
}
 
export default Todos;