import '../scss/style.scss';

export default function FourImg({ imgDescr, description }) {
  return (
    <div className="container-fluid border-bottom border-dark border-1">
      <div className="row pb-5">
        {
        imgDescr.map(({
          src, descr,
        }, i) => (
          <div className="col-3">
            <img src={src} className="img-fluid" alt="" />
            <p className="text-center pt-4"><p className="text-start">{descr}</p></p>
          </div>
        ))
      }
      </div>
      <div className="row py-3 justify-content-end pe-3">

        <div className="col-4"><p className="text-end text-decoration-underline ">{description}</p></div>

      </div>
    </div>
  );
}
