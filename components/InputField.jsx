import { Input, Icon, Pressable } from "native-base";

const InputField = ({ placeholder, rightIcon, leftIcon, type, onPress }) => {
  return (
    <Input
      w={"100%"}
      h={"45px"}
      fontSize={15}
      type={type}
      placeholder={placeholder}
      InputLeftElement={
        leftIcon ? (
          <Icon as={leftIcon} size={5} ml="2" color="muted.400" />
        ) : null
      }
      InputRightElement={
        rightIcon ? (
          <Pressable onPress={onPress}>
            <Icon as={rightIcon} size={5} mr="2" color="muted.400" />
          </Pressable>
        ) : null
      }
    />
  );
};

export default InputField;
