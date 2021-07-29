import Image from "next/image"
import Link from "next/link"

const List = ({ data }) => {
    return (
        <li>
                        
                        <h1>
                            <Link href={'/todos/'+data.id}>
                                {data.title}
                            </Link>
                            <p>{data.img1}</p>
                            <Image src={'http://128.199.101.80/' + data.img1} alt={data.title} width={300} height={300} loading="eager"/>
                             
                        </h1>
                        <h2>{data.slug}</h2>
                        <p>{data.desc}</p>
                       
                    </li>
     );
}
 
export default List;