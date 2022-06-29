import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Subscriber List | Home</title>
        <meta name="keywords" content="subscribers"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo provident beatae.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo provident beatae.</p>
        <Link href="/subscribers"><a className={styles.btn}>View Subscribers</a></Link>
      </div>
    </>
  )
}
