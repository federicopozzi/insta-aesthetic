import Link from 'gatsby-link';
import '../scss/style.scss';

export default function FullMethod({ home, text }) {
  return (
    <div className="container-fluid py-4">
      <div className="row px-5">
        <Link to={home}>{text}</Link>
      </div>
    </div>
  );
}
