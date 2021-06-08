import { useState } from 'react';

export default function Accordion({ children, question }) {
  const [open, setOpen] = useState(true);
  return (
    <article className="accordion ">
      <div className="accordion-header " onClick={() => setOpen(!open)}>
        <div className="col px-4 py-2">
          <p className="display-6 mb-0">{question}</p>
        </div>
        <div className="col-auto px-4">
          {open ? 'V' : 'V'}
        </div>
      </div>
      <div className={`accordion-body ${
        open && 'd-none'}`}
      >
        {children}
      </div>
    </article>
  );
}
