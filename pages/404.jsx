import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter()
    
    useEffect(() => {
        setTimeout(() => {
        //   router.go(-1) //back and forward button in browser 
            router.push('/')
      },3000)
    }, [])
    
    return (
        <div>
            <Head>
                <title>404 NExt</title>
            </Head>
            <h1>This is not found Page.</h1>
        </div>
     );
}
 
export default NotFound;