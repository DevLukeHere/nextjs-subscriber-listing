import styles from '../../styles/Subscribers.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: { subscribers: data }
  }
}

const Subscribers = ({ subscribers }) => {
  return (
    <div>
      <h1>Subscribers</h1>
      {subscribers.map(subscriber => (
        <Link href={'/subscribers/' + subscriber.id} key={subscriber.id}>
          <a className={ styles.single }>
            <h3>{ subscriber.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Subscribers;