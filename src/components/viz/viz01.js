import { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

import dist1 from '../../images/page01/dist1.png';
import dist2 from '../../images/page01/dist2.png';
import { ReactComponent as Prova } from '../../images/svg/page01/viz01.svg';

export default function Viz01() {
  const [viz1, setViz1] = useState(dist1);
  const visual = useRef();

  useEffect(() => {

  });

  return (
    <div className="container-fluid border-bottom border-dark border-1">
      <div className="row">
        <div className="col-6" onClick={() => setViz1(dist1)}>viz1</div>
        <div className="col-6" onClick={() => setViz1(dist2)}>viz2</div>
      </div>
      <div className="row" ref={visual}>
        <Prova />
      </div>
    </div>
  );
}
