import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import styles from './style';


const Home = () => {

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Olá Mundo de Merda !</Text>
    </SafeAreaView>
  )
};


export default Home;