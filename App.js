import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Nunito_400Regular,Nunito_600SemiBold,Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Poppins_400Regular,Poppins_600SemiBold,Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular,Archivo_600SemiBold,Archivo_700Bold} from '@expo-google-fonts/archivo';

import Home from './src/screen/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <>
      <Home />
      <StatusBar barStyle="light-content" backgroundColor="#111" />
    </>
  );
}
