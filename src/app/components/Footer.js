import Link from "next/link";
import styles from './footer.module.css';
import Image from "next/image";

export default function Footer(){

    return(
        <footer className={styles.rodape}>
             <Image
            width={100}
            height={100}
            src={"https://www.ifms.edu.br/marcaifms.png"}  />
            <h1>Rodapé</h1>
            
        </footer>
    )
}
