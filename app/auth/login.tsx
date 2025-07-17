import Checkbox from 'expo-checkbox';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';




export default function Login() {
  const [remember, setRemember] = React.useState(false);

  return (
    <ImageBackground
      source={require('../../assets/images/plucking.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 80 }}>
          <Text style={styles.title}>Welcome Back to PluckMate</Text>
          <Text style={styles.subtitle}>
            Log in to access your bookings and exclusive experiences.
          </Text>
        </View>

        <Text style={{ color: 'white', marginBottom: 5 , fontFamily: 'poppins' }}>Email</Text>
        <TextInput placeholder="Email" placeholderTextColor="#ccc" style={styles.input} />

        <Text style={{ color: 'white', marginBottom: 5, fontFamily: 'poppins' }}>Password</Text>
        <TextInput placeholder="Password" placeholderTextColor="#ccc" style={styles.input} secureTextEntry />

        <View style={styles.row}>
          <View style={styles.rememberContainer}>
            <Checkbox value={remember} onValueChange={setRemember} />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <Text style={styles.forgot}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    marginBottom: 130,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'poppins-bold',
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'poppins',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontFamily: 'poppins',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: 'white',
    marginLeft: 8,
    fontFamily: 'poppins',
  },
  forgot: {
    color: 'white',
    textDecorationLine: 'underline',
    fontFamily: 'poppins',
  },
  button: {
    backgroundColor: '#B38A5C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'poppins-bold',
  },
});
