import type { NextPage } from "next";
import { styled } from "../styles";

const Button = styled("button", {
  fontSize: "1rem",
  backgroundColor: "$green300",
  border: "none",
});

const Home: NextPage = () => {
  return (
    <div>
      Home
      <Button>Aqui eu apareço</Button>
    </div>
  );
};

export default Home;
