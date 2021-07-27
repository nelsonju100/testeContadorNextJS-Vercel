
import {GetStaticProps} from "next";
export default function Home({org}){
    return (
    <div>
        <h1>INICIO</h1>
        <h1>{org.login}</h1>
        <h3>{org.datetime}</h3>

        <p>Site: <a href={org.blog}>{org.blog}</a></p>
    </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Sao_Paulo');
    const data = await response.json();
  
    return {
        props: {
            org: data,
        },
        revalidate: 1
    }
};

