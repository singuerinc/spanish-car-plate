import * as React from "react";
import { useState } from "react";
import {
  isValid,
  isOld,
  isSpecial,
  parse,
  getCounter,
  getNumber,
  getProvinceName,
  getProvinceCode,
  getSpecialName,
  getSpecialCode
} from "spanish-car-plate";
import { Check } from "./Check";

export function App() {
  const [value, setValue] = useState("");
  const parseResult = parse(value);

  function handleChange({ target: { value } }: { target: HTMLInputElement }) {
    setValue(value);
  }

  return (
    <form className="black-80 w-100 w-50-l center">
      <div>
        <input
          className="input-reset f2 f1-ns ba bw2 br3 b--silver-80 bg-white pa2 mb2 db w-100 black fw6 tc"
          maxLength={10}
          type="text"
          placeholder="1234 BCD"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-wrap flex-column justify-between mt4 mb2 pb4">
        <Check label="isValid" check={isValid(value)} />
        <Check label="isOld" check={isOld(value)} />
        <Check label="isSpecial" check={isSpecial(value)} />
      </div>
      <dl className="f6 lh-title mv2">
        <dt className="dib b">Counter</dt>
        <dd className="dib ml2 white">{getCounter(value) || "-"}</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b">Number</dt>
        <dd className="dib ml2 white">{getNumber(value) || "-"}</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b">Province name</dt>
        <dd className="dib ml2 white">{getProvinceName(value) || "-"}</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b">Province code</dt>
        <dd className="dib ml2 white">{getProvinceCode(value) || "-"}</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b">Special name</dt>
        <dd className="dib ml2 white">{getSpecialName(value) || "-"}</dd>
      </dl>
      <dl className="f6 lh-title mv2">
        <dt className="dib b">Special code</dt>
        <dd className="dib ml2 white">{getSpecialCode(value) || "-"}</dd>
      </dl>
    </form>
  );
}
