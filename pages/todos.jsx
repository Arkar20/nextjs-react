import React,{useEffect, useState} from "react";

import Head from "next/head"
import Link from "next/link";

export async function  getStaticProps() {
    const data = await fetch('http://localhost:8000/api/games')
    const results = await data.json();
  
    return {
        props: { results:results },

    }
}


const Todos = ({ results }) => {
    

    
    return (
        <div>
            
            <Head>
                <title>Todos</title>
            </Head>
            {
                results.data
                   
                    ? (
                         <ul>
            {
                results.data.map(result => 
                    <li key={result.id}>
                        
                        <h1>
                            <Link href={'todos/'+result.id}>
                                {result.title}
                            </Link>
                        </h1>
                        <h2>{result.slug}</h2>
                        <p>{result.desc}</p>
                       
                    </li>
                   
                
                )
                }
                 </ul>
                    )
                     :<h3>Loading...</h3>
            }
            {
                
          }
            <p> <Link href="/todos/page/2">Page 2</Link></p>
          
        <p>
            <Link href="/">back to home</Link></p>
        </div>
     );
}
 
export default React.memo(Todos);