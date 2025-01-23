import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SelectBtn from "./SelectBtn";

type SelectGroupProps = {
  setHobbies: (field: string) => void;
  hobbies: {
    game: boolean;
    music: boolean;
    craft: boolean;
    reading: boolean;
  };
};

const SelectGroup: React.FC<SelectGroupProps> = ({ setHobbies, hobbies }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Hobby</FormLabel>
      <FormGroup aria-label="Hobby" row>
        <SelectBtn
          name="game"
          label="Game"
          onChange={() => setHobbies("game")}
          checked={hobbies.game}
        />
        <SelectBtn
          name="music"
          label="Music"
          onChange={() => setHobbies("music")}
          checked={hobbies.music}
        />
        <SelectBtn
          name="craft"
          label="Craft"
          onChange={() => setHobbies("craft")}
          checked={hobbies.craft}
        />
        <SelectBtn
          name="reading"
          label="Reading"
          onChange={() => setHobbies("reading")}
          checked={hobbies.reading}
        />
      </FormGroup>
    </FormControl>
  );
};

export default SelectGroup;
