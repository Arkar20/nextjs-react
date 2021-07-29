import Head from "next/head"
import Link from "next/link";
import List from "../components/List"
import React from "react";
import { useSelector } from "react-redux";
import { wrapper } from '../redux/store';

export const getStaticProps = wrapper.getStaticProps(
     (store) => async ({ preview }) => {
        const data = await fetch('http://128.199.101.80/api/games').catch(err=>console.log(err))
        const results = await data.json();
        console.log(store.getState)
        store.dispatch({ type: 'SERVER_ADD_GAMES', payload: results })
       
    }
)
const Todos = () => {
    
  const results = useSelector(state => state)
    const data = results.server.data
    console.log(data)
    return (
        <div>
            
            <Head>
                <title>Todos</title>
            </Head>
            {
                data
                   
                    ? (
                         <ul>
            {
                data.data.map(result => 
                    <List data={result} key={result.id}/>
                   
                
                )
                }
                 </ul>
                    )
                     :<h3>Loading...</h3>
            }
          
           <Link href="/todos/page/2">Page 2</Link>
          
        <p>
            <Link href="/">back to home</Link></p>
        </div>
     );
}
 
export default React.memo(Todos);