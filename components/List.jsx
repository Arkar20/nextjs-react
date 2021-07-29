import Image from "next/image"
import Link from "next/link"
import blurimg from "../public/image.webp"

const List = ({ data }) => {

    return (
        <li>
                        
                        <h1>
                            <Link href={'/todos/'+data.id}>
                                {data.title}
                            </Link>
                            <p>{data.img1}</p>
                <Image
                    src={'http://128.199.101.80/' + data.img1}
                    alt={data.title} width={300} height={300}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="                />
                             
                        </h1>
                        <h2>{data.slug}</h2>
                        <p>{data.desc}</p>
                       
                    </li>
     );
}
 
export default List;