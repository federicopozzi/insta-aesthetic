import '../scss/style.scss';

export default function FourImg({ imgDescr, description }) {
  return (
    <div className="container-fluid border-bottom border-dark border-1">
      <div className="row">
        {
        imgDescr.map(({
          src, descr,
        }, i) => (
          <div className="col-3">
            <img src={src} className="img-fluid" alt="" />
            <p className="text-center">{descr}</p>
          </div>
        ))
      }
      </div>
      <div className="row">
        <p className="text-end">{description}</p>
      </div>
    </div>
  );
}
