import Button from "@mui/material/Button";

type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
};

const CustomButton: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  href,
}) => {
  return (
    <Button variant="contained" type={type} onClick={onClick} href={href}>
      {label}
    </Button>
  );
};

export default CustomButton;
