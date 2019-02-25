import * as React from "react";
import * as feather from "feather-icons";

interface IProps {
  check: boolean;
  label: string;
}

export const Check = ({ check, label }: IProps) => (
  <div className="flex">
    <div className="mv1">
      <div className="w-100 cf">
        <span
          dangerouslySetInnerHTML={{
            __html: check
              ? feather.icons.check.toSvg()
              : feather.icons.x.toSvg()
          }}
        />
      </div>
    </div>
    <div className="fw5 ml2 v-mid pv2">{label}</div>
  </div>
);
