import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
    width: '100%',
  },
  areaLogin:{
    marginVertical: 40,
    width: '75%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input:{
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 18,
    fontFamily: 'Archivo_400Regular',
  },
  button: {
    borderWidth: 1,
    borderRadius: 3,
    height: 40,
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#5ea676',

  },
  buttonText:{
    fontSize: 20,
    letterSpacing: 1,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
  },
  containerMsg: {
    marginTop: 50,
    alignSelf: 'center',
    maxWidth: 300,
    textAlign: 'center',
  },
  msg: {
    fontSize: 22,
  },
  activityIndicatorText: {
    fontSize: 22,
  }
  
});


export default style;