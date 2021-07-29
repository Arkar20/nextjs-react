import Link from "next/link"
import List from "../../../components/List"
const Page = (data) => {
    return (
        <div>
            Pagnation Pages {data.data.current_page}

            <ul>
              {  data.data.data.map(result => (
                  <List data={result} key={result.id}/>
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
    const response = await fetch('http://128.199.101.80/api/games?page=' + pageno)
    const data = await response.json()
    
    return {
        props:{data}
    }

    
}
export default Page;
