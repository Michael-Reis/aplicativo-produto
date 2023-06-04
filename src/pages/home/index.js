import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth';

import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { styles } from './estilo.js';


export default function Home({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErro] = useState(false);
  const { FazerLogin } = useContext(AuthContext);


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const HandleSubmit = (e) => {
    if (!email || !password) {
      setErro('Preencha todos os campos');
      return;
    }
    setErro(false);

    FazerLogin();  
    // navigation.navigate('Indicadores');
  };


  return (
    <View style={styles.container}>
      <View style={styles.divlogo}>
        <Image source={require('../../../assets/logo-orit.png')} style={styles.logo} />
      </View>

      <View style={styles.cardlogin}>


        <View style={styles.formContainer}>

          {error && <View style={styles.error}><Text style={{ color: 'white' }}>{error}</Text></View>}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />


          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput style={styles.inputPassword} secureTextEntry={!showPassword}  value={password} onChangeText={setPassword} />
            <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPassword}>
              <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#878787" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buttonContainer} onPress={HandleSubmit}>
            <Text style={styles.buttonText}>ACESSAR</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
}
