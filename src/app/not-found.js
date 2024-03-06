import Link from 'next/link';
import styles from './not-found.module.css';


export default function NotFound(){
    return (
    <div>
        <h1 className={styles.card}>ERRO!! ESTA PAGINA NÃO EXISTE.</h1>
        <a href = "/">Retornar Home</a>
    </div>
    )
}