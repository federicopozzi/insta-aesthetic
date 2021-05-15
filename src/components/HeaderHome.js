import '../scss/style.scss';
import Link from 'gatsby-link';

export default function HeaderHome() {
  return (
    <div className="container-fluid bg-primary border-bottom border-dark sticky-top">
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center py-3 px-4">
          <Link to="/"><span className="text-dark">HOME</span></Link>
          <Link to="/about"><span className="text-dark ">ABOUT</span></Link>
        </div>
      </div>
    </div>
  );
}
