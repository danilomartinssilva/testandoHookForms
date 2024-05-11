import { TextField } from "@/components/TextField";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, View, StyleSheet, Text } from "react-native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import { Container } from './styles';

const EmailScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { handleSetValue } = route.params;
  const [email, setEmail] = React.useState<string>("");

  const schema = Yup.object().shape({
    emailField: Yup.string()
      .required("O campo é requerido")
      .trim()
      .email("Email inválido"),
  });

  type FormData = Yup.InferType<typeof schema>;

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });
  console.log("🚀 ~ errors:", errors);

  const onSubmit = (data: FormData) => {
    handleSetValue("email", data.emailField);

    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextField
            value={value}
            onChangeText={onChange}
            placeholder="Email"
          />
        )}
        name="emailField"
      />
      <Button
        disabled={!!errors.emailField?.message}
        onPress={handleSubmit(onSubmit)}
        title="Continuar"
      />
      <Text>{errors.emailField?.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EmailScreen;
