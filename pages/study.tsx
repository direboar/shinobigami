import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";

const About = (): JSX.Element => {
  const [name, setName] = React.useState("world");

  //eventの型について
  //@see https://awesome-linus.com/2020/09/02/react-typescript-click-event/
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (name === "world") {
      setName("世界");
    } else {
      setName("world");
    }
  };

  return (
    <Paper>
        <Typography variant="body1">
            hello,{name}
        </Typography>
        <Button variant="contained" onClick={onClick}>update</Button>
    </Paper>
  );
};

export default About;
