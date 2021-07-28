import Link from "next/link"
const Page = (data) => {
    return (
        <div>
            Pagnation Pages {data.data.current_page}

            <ul>
              {  data.data.data.map(result => (
                  <li key={result.id}>
                        
                        <h1>
                            <Link href={'/todos/'+result.id}>
                                {result.title}
                            </Link>
                        </h1>
                        <h2>{result.slug}</h2>
                        <p>{result.desc}</p>
                       
                    </li>
                ))}
            </ul>
            
        </div>
    );
}
 
export const getStaticPaths = async() => {
    const response = await fetch('http://localhost:8000/api/games')
    const data = await response.json()
    const paths = []
    
    for (let i = 0; i < data.last_page; i++) {
        paths.push(
            {params:{page:(i+1).toString()}}
        )
    }
    console.log(paths)

    return {
        paths,
        fallback:false
    }
    
}
export const getStaticProps = async (context) => {
    const pageno=context.params.page
    const response = await fetch('http://localhost:8000/api/games?page=' + pageno)
    const data = await response.json()
    console.log(data)
    
    return {
        props:{data}
    }

    
}
export default Page;
