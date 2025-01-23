import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Radio } from "@mui/material";
import { FC, ChangeEvent } from "react";

type RadioBtnGroupProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioBtnGroup: FC<RadioBtnGroupProps> = ({ value, onChange }) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        defaultValue="Male"
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Etc" control={<Radio />} label="Etc" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioBtnGroup;
