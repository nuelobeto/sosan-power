import { Button } from "native-base";

const Btn = ({ text, onPress }) => {
  return (
    <Button shadow={2} size={"md"} w={"100%"} h={"45px"} onPress={onPress}>
      {text}
    </Button>
  );
};

export default Btn;
