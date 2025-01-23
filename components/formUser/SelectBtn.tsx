import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FC, ChangeEvent } from "react";

type SelectBtnProps = {
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value?: string;
};

const SelectBtn: FC<SelectBtnProps> = ({
  label,
  name,
  onChange,
  checked,
  value,
}) => {
  return (
    <FormControlLabel
      value={value || label}
      control={<Checkbox checked={checked} onChange={onChange} name={name} />}
      label={label}
    />
  );
};

export default SelectBtn;
