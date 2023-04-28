import { Children, cloneElement, useEffect, useRef, useState } from "react";
import type {
  ChangeEvent,
  FC,
  ReactElement,
  Dispatch,
  SetStateAction,
} from "react";
import type { Modify } from "~/types";
import Select from "react-select";
export const DefaultInput: FC<Input> = ({
  type,
  placeholder,
  value,
  onChange,
  width = 400,
}) => {
  return (
    <input
      style={{ width: `${width > 160 ? width : 160}px` }}
      className="rounded-[10px] border-2 border-gray bg-white px-[25px] pb-[18px] pt-[15px] text-[15px] leading-[22px] text-text outline-none placeholder:text-placeholder focus:border-blue-400"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export const DefaultWithIconInput: FC<Input> = ({
  children,
  type,
  placeholder,
  value,
  onChange,
  whereSVG,
  width = 400,
}) => {
  const [currentColor, setCurrentColor] = useState("#898989");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const styleWidth = {
    width: `${width > 160 ? width : 160}px`,
  };
  const styles: Record<string, string> = {
    paddingLeft: whereSVG === "left" ? "55px" : "25px",
    paddingRight: whereSVG === "right" ? "55px" : "25px",
  };
  styles.width = styleWidth.width;
  const renderChildren = (color: string) => {
    return Children.map(children, (child) => {
      if (child)
        return cloneElement(child, {
          fillColor: color,
        });
    });
  };
  useEffect(() => {
    if (isFocused) {
      setCurrentColor("#60A5FA");
    } else setCurrentColor("#898989");
  }, [isFocused]);
  return (
    <div style={styleWidth} className="relative">
      <div
        style={{
          left: `${whereSVG === "left" ? "20px" : ""}`,
          right: `${whereSVG === "right" ? "20px" : ""}`,
          paddingTop: "17px",
        }}
        className="absolute"
      >
        {renderChildren(currentColor)}
      </div>
      <input
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles}
        className="rounded-[10px] border-2 border-gray bg-white px-[25px] pb-[18px] pt-[15px] text-[15px] leading-[22px] text-text outline-none placeholder:text-placeholder focus:border-blue-400"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export const TextInput: FC<TextInput> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export const NumberInput: FC<NumberInput> = ({ value, onChange }) => {
  return <input type="number" value={value} onChange={onChange} />;
};

export const NumberWithMaxMinInput: FC<NumberInput> = ({ value, onChange }) => {
  return <input type="number" value={value} onChange={onChange} />;
};

export const DefaultSelectInput: FC<SelectInput> = ({ value, setValue }) => {
  if (value)
    return (
      <Select
        className="rounded-[10px] border-2 border-gray bg-white px-[25px] pb-[18px] pt-[15px] text-[15px] leading-[22px] text-text outline-none placeholder:text-placeholder focus:border-blue-400"
        options={value}
        onChange={(currentValue) => setValue(currentValue?.toString())}
      />
    );
  return <></>;
};

export const NumberSelectInput: FC<SelectInputNumber> = ({
  value,
  setValue,
}) => {
  if (value)
    return (
      <Select
        options={value}
        onChange={(currentValue) => {
          setValue(Number(currentValue?.value));
        }}
      />
    );
  return <></>;
};

interface Input {
  value: string | undefined | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  children?: ReactElement;
  whereSVG?: "right" | "left" | undefined;
  width?: number;
}

export type SelectInput = Modify<
  Input,
  {
    value: { value: string | number; label: string }[] | undefined;
    onChange?: (value: string) => void;
    setValue: Dispatch<SetStateAction<string | undefined>>;
  }
>;

export type SelectInputNumber = Modify<
  SelectInput,
  {
    setValue: Dispatch<SetStateAction<number>>;
  }
>;

export type TextInput = Modify<
  Input,
  {
    value: string | undefined;
  }
>;
export type NumberInput = Modify<
  Input,
  {
    value: number | undefined;
  }
>;
