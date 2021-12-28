import * as React from "react";

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
    <>
      <div>hello,{name}</div>
      <button onClick={onClick}>update</button>
    </>
  );
};

export default About;
