import Link from 'gatsby-link';
import '../scss/style.scss';

export default function FullMethod({ home }) {
  return (
    <div className="container-fluid py-3">
      <div className="row px-5">
        <Link to={home}>FULL METHOD AND ANALYSIS ➙</Link>
      </div>
    </div>
  );
}
