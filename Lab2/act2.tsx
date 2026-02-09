import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView 
  style={styles.container}
  contentContainerStyle={{ paddingBottom: 40 }}
  showsVerticalScrollIndicator={true}
>

      
      {/* Profile Image */}
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
        style={styles.image}
      />

      {/* Basic Text */}
      <Text style={styles.name}>Abhay M Biju</Text>
      <Text style={styles.role}>BCA Student</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.text}>
          Passionate learner interested in AI, mobile app development and data science.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Skills</Text>
        <Text style={styles.text}>• Python</Text>
        <Text style={styles.text}>• React Native</Text>
        <Text style={styles.text}>• Machine Learning</Text>
        <Text style={styles.text}>• Data Analysis</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Education</Text>
        <Text style={styles.text}>BCA (Hons)</Text>
        <Text style={styles.text}>RV University</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert("Contact", "Email: abhaymbijubca24@rvu.edu.in")}
      >
        <Text style={styles.buttonText}>Contact Me</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]}
        onPress={() => Alert.alert("Projects", "Resume App, Student Portal, ML Project")}
      >
        <Text style={styles.buttonText}>View Projects</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6ff',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 3,
  },
  button: {
    backgroundColor: '#4b7bec',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: '#20bf6b',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

