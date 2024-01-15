import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';


export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('./assets/Frame-6.png')}
      />
      <Text style={styles.title}>Putri Prameistika Azahra</Text>
      <Text style={styles.subTitle}>
        Saya lahir di Banjarnegara. 
        Saya sekolah di SMK Telkom Purwokerto jurusan RPL.
        Saya anak pertama dari tiga bersaudara.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('hlo')}>
        <Text style={styles.textButton}>CONTACT ME</Text>
      </TouchableOpacity>
      <Text style={styles.projectTitle}>My Recent Project</Text>
      
      <Image
        style={styles.projectPic}
        source={require('./assets/porto.jpg')}
      />
          <Text style={styles.projectTitle}>Project Design</Text>
          <Text style={styles.projectDescription}>Desain ini saya buat   menggunakan aplikasi Photoshop sewaktu saya magang 6 bulan pada saat PKL.</Text>
      <Image
        style={styles.projecfoto2}
        source={require('./assets/porto2.jpg')}
        />
         <Text style={styles.projectTitle}>Digital imaging</Text>
          <Text style={styles.projectDescription}>Saya membuat digital imaging ini mengambil ide iklan dari sebuah produk yang saat itu ada di dalam pikiran saya.</Text>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#12486B",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 7
  },
  subTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 10
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 300,
  },
   button: {
    backgroundColor: '#F4F2DE',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
      textButton: {
        fontWeight: 'bold',
        color: '#7D7C7C'
      },
  projectTitle: {
    color: 'white',
    fontSize: 25, 
    fontWeight: 'bold',
    marginTop: 20,
  },
  
   projectPic: {
    width: 300,
    height: 300,
    rectangle: 300,
    marginTop: 20,
    borderRadius: 20,
  },
   projecfoto2: {
    width: 300,
    height: 300,
    rectangle: 300,
    marginTop: 20,
    borderRadius: 20,
   },

   projectDescription: {
     color: 'white'
   }
});