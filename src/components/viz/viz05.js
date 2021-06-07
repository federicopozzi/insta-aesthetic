export default function Viz05() {
  const vis05 = [
    {
      descr1: 'descrizione1',
      descr2: 'descrizione2',
      img1: 'img1',
      img2: 'img2',
      video1: 'video1',
      video2: 'video2',
      title: 'titolo',
      text: 'testo',
      quote: 'quote',
    },
  ];
  return (
    <div className="container-fluid bg-secondary">
      <div className="row border-bottom border-dark border-1">
        <div className="col-4 bg-success py-4 px-5">
          <p className="mb-0">GCDS: OUT OF THIS WORLD</p>
          <p className="mb-0">INES ALPHA'S X CHARLI XCX</p>
          <p className="mb-0">NYLON MAGAZINE GERMANY</p>
          <p className="mb-0">BEAUTY 3000 AS MAKE UP TREND</p>
        </div>
        <div className="col-4 border-start border-dark border-1">diascalia1</div>
        <div className="col-4 border-start border-dark border-1">didascalia2</div>
      </div>
      <div className="row ">
        <div className="col-4">descrizione</div>
        <div className="col-4 border-start border-dark border-1">img1</div>
        <div className="col-4 border-start border-dark border-1">img2</div>
      </div>
    </div>
  );
}
