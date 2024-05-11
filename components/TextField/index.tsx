import { View, StyleSheet, Text, TextInput } from "react-native";

const TextField = ({ label, ...inputProps }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} {...inputProps} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#38434D",
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    color: "#38434D",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#38434D",
    borderRadius: 4,
  },
});

export { TextField };
