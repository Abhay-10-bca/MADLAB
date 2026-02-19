import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Import students from JSON file
import students from "./data.json"; // make sure your JSON file is in the same folder

// Student card component
const StudentCard = ({ student }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{student.name}</Text>
      <Text style={styles.details}>Grade: {student.grade}</Text>
      <Text style={styles.details}>Section: {student.section}</Text>
      <Text style={styles.details}>ID: {student.id}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Directory</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <StudentCard student={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
});
