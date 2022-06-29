export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map(subscriber => {
    return {
      params: { id: subscriber.id.toString() }
    }
  }) 

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await response.json();

  console.log(data)

  return {
    props: { subscriber: data }
  }
}

const Details = ({ subscriber }) => {
  return (
    <div>
      <h1>{ subscriber.name }</h1>
      <p>{ subscriber.email }</p>
      <p>{ subscriber.website }</p>
      <p>{ subscriber.address.city }</p>
    </div>
  );
}
 
export default Details;