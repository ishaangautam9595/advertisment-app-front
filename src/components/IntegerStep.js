import React from "react";
import { InputNumber, Slider } from "antd";
const IntegerStep = ({ range, setRange }) => {
  const onChange = (value) => {
    setRange(value);
  };

  return (
    <>
      <InputNumber
        className="block p-2.5 focus:outline-none w-full z-20 text-sm text-gray-900 bg-white rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 dark:placeholder-gray-400 [&::-webkit-inner-spin-button]:appearance-none"
        min={0}
        max={100000}
        defaultValue={[0, 0]}
        value={range}
        onChange={onChange}
      />
      <Slider
        range
        defaultValue={[0, 0]}
        min={0}
        max={1500000}
        onChange={onChange}
      />
    </>
  );
};

export default IntegerStep;
