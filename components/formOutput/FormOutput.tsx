import React from "react";
import {
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type UserProps = {
  no?: string;
  name?: string;
  lastname?: string;
  email?: string;
  gender?: string;
  hobby?: string;
  status?: string;
  note?: string;
  confirmPDPA: boolean;
  hobbies: string[];
};

type FormOutputProps = {
  users: UserProps[];
  setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>;
};

const FormOutput: React.FC<FormOutputProps> = ({ users, setUsers }) => {
  const handleDelete = (index: number) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <Box>
      {users.map((user, index) => (
        <Box
          key={index}
          sx={{
            mt: 3,
            p: 2,
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">USER {index + 1}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton
                onClick={() => handleDelete(index)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Name: {user.name ? `${user.name} ${user.lastname}` : "-"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Email: {user.email || "-"}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Gender: {user.gender || "-"}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Hobby: {user.hobbies.length ? user.hobbies.join(", ") : "-"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Status: {user.status || "-"}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Note: {user.note || "-"}</Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                disabled
                control={<Checkbox checked={user.confirmPDPA} />}
                label="Confirm PDPA"
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default FormOutput;
