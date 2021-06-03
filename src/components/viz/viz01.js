import { useState } from 'react';
import dist1 from '../../images/page01/dist1.png';
import dist2 from '../../images/page01/dist2.png';

export default function Viz01() {
  const [viz1, setViz1] = useState(dist1);

  return (
    <div className="container-fluid border-bottom border-dark border-1">
      <div className="row">
        <div className="col-6" onClick={() => setViz1(dist1)}>viz1</div>
        <div className="col-6" onClick={() => setViz1(dist2)}>viz2</div>
      </div>
      <div className="row">
        <img src={viz1} className="img-fluid" />
      </div>
    </div>
  );
}
