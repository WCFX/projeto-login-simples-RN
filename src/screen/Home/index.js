import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './style';


const Home = () => {

  const [loading, setLoading ] = useState(false);

  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');

  const [status, setStatus ] = useState('');

  async function handleVerifyLogin(){
    setStatus('');
    setLoading(true);
    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await req.json();

    if(json.status == 'ok'){
      setStatus('Login Efetuado com sucesso !')
    }else {
      setStatus('Os dados de Email e/ou senha estão incorretos!')
    }
    setLoading(false);
  }

  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.areaLogin}>
        <Text style={styles.title}>Faça o seu login</Text>  
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu Email"
          placeholderTextColor="#bbb"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Digite sua Senha"
          placeholderTextColor="#bbb"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleVerifyLogin}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
      </View>

      {loading && 
        <View>
          <ActivityIndicator color="#2ED573" size="large"/>
          <Text style={styles.activityIndicatorText}>Loading ...</Text>
        </View>
      }

      {!loading &&
        <View style={styles.containerMsg}>
          <Text style={styles.msg}>{status}</Text>
        </View>
      }


    </SafeAreaView>
  )
};


export default Home;