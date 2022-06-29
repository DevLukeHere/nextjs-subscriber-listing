import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/ashley-profile-picture.jpg" width={200} height={200} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/subscribers"><a>Subscribers</a></Link>
    </nav>
  );
}
 
export default Navbar;