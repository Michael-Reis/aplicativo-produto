import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ff5b00',
    },
    divlogo: {
      width: '100%',
      height: '20%',
      backgroundColor: '#ff5b00',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardlogin: {
      backgroundColor: 'white',
      height: '80%',
      width: '100%',
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 2,
      borderColor: 'white'
    },
    formContainer: {
      height: '90%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      alignSelf: 'flex-start',
      marginLeft: '11%',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '80%',
      marginBottom: 10,
      paddingLeft: 10,
      borderRadius: 10
    },
    inputPassword: {
      borderColor: 'gray',
      width: '80%',
      paddingLeft: 10,
      height: '100%'
    },
    passwordInputContainer: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '80%',
      marginBottom: 20,
      paddingLeft: 10,
      borderRadius: 10,
      position: 'relative',
      width: '80%',
    },
    eyeIcon: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    buttonContainer: {
      width: '80%',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#ff5b00',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
    },
    buttonText: {
      color: 'white',
    },
    logo: {
      width: '30%',
      height: undefined,
      aspectRatio: 1,
      resizeMode: 'contain'
    },
    error: {
      marginBottom: 30,
      backgroundColor: '#63b0b5',
      width: '80%',
      borderRadius: 10,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  