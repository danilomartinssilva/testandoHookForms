import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useForm } from "react-hook-form";

// import { Container } from './styles';
interface IFormInput {
  email: String;
  password: String;
}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { register, handleSubmit, setValue } = useForm<IFormInput>({
    mode: "onChange",
  });
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  const handleSetValue = (key: string, value: string) => {
    console.log("🚀 ~ handleSetValue ~ value:", value);
    setValue(key as keyof IFormInput, value);
  };

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Email", {
            handleSetValue,
          })
        }
      >
        <Text>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Password</Text>
      </TouchableOpacity>

      <View>
        <Text>Home</Text>
      </View>

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
