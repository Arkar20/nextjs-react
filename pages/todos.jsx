import React,{useEffect, useState} from "react";

import Head from "next/head"
import Link from "next/link";

export async function  getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const results = await data.json();
  
    return {
        props: { results },
            revalidate: 1, // 1 day in seconds
    }
}


const Todos = ({ results }) => {
    console.log(results)
    

    
    return (
        <div>
            
            <Head>
                <title>Todos</title>
            </Head>
            {
                results
                   
                    ? (
                         <ul>
            {
                results.map(result => 
                    <li key={result.id}>
                        
                        <h1>
                            <Link href={'todos/'+result.id}>
                                {result.title}
                            </Link>
                        </h1>
                        <h2>{result.body}</h2>
                       
                    </li>
                   
                
                )
                }
                 </ul>
                    )
                     :<h3>Loading...</h3>
            }
           
        <p>
            <Link href="/">back to home</Link></p>
        </div>
     );
}
 
export default React.memo(Todos);