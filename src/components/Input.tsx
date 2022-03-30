import React from "react";

type Props = {
  inputValue: string;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <input
      type="text"
      value={props.inputValue}
      onChange={props.onValueChange}
    />
  );
};

export default Input;
