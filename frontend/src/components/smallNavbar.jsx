import React, { useState } from 'react';
import arr from './arr';

const CategoryArray = (props) => {
  let { uniqueSize, filterSize } = props;

  const [activeSize, setActiveSize] = useState(null);

  return (
    <>

      <div className=' btn_small flex items-center justify-center m-12 gap-3'>
        {uniqueSize.map((x) => (
          <div key={x} role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={`tab ${activeSize === x ? 'bg-black text-white' : 'bg-slate-200'} font-bold text-lg`}
            >
              <button
                onClick={() => {
                  filterSize(x);
                  setActiveSize(x);
                }}
              >
                {x}
              </button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryArray;
