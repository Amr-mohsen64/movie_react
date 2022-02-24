import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image,FlatList } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-native';
import { useNavigation } from '@react-navigation/native';
export default function Header() {
  // const [text, setText] = useState('')
  
  let [pages, setP] = useState(1)
  const [myMovies, setMovies] = useState([]);
  axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=9f88bf74a43bfc37f66724aa8369bbe1&page=${pages}`)
    .then((res) => setMovies(res.data.results))
    .catch((err) => console.log(err));

  //pagination
  const navigation=useNavigation()
  function gotToDetails(id){
    navigation.navigate("Details",{
      id:id
    })
    
  }
  function nextPage() {
    if (pages < 20) { setP(++pages) }
  }
  function backPage() {
    if (pages > 1) { setP(--pages) }
  }
  // const hanlde = (text) => {
  //   setText(text)
  // }

  // const clearText = () => {
  //   setText('')
  //   console.log(myMovies)
  // }
  // const nextPhoto = (id) => {
  //   console.log(id)
  // }
  return (

    <View style={styles.container} >
      <View style={styles.header}>Movie List</View>
      <FlatList
      data={myMovies}
      renderItem={({item})=>(
        <View style={styles.movies}>
          <Image source={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} style={{ width: 220, height: 400, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            />
            <Text style={styles.size}>{item.title}</Text>
            <Text style={styles.size}>{item.release_date}</Text>
            <Button title='Details' onPress={() => {
              gotToDetails(item.id)
            }} style={{ marginBottom: 20 }} />
          </View>
        
      )}
      numColumns={2}
      />
     
       <View style={styles.buttonStyle}>
        <Button
          title={"Next"}
          style={styles.buttonStyle}
          onPress={() => {

            nextPage()
          }}
          color="green"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title={"Back"}
          onPress={() => {
            backPage()
          }}
          color="red"
        />
      </View>
      {/* <View >
        {myMovies.map(i => {
          return (<View style={styles.movies} key={i.id}

          >
            <Image source={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} style={{ width: 300, height: 600, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            />
            <Text style={styles.size}>{i.title}</Text>
            <Text style={styles.size}>{i.release_date}</Text>
            <Button title='Details' onPress={() => {
              gotToDetails(i.id)
            }} style={{ marginBottom: 20 }} />
          </View>)
        })}
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title={"Next"}
          style={styles.buttonStyle}
          onPress={() => {

            nextPage()
          }}
          color="green"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title={"Back"}
          onPress={() => {
            backPage()
          }}
          color="red"
        />
      </View> */}
    </View>



    // <View>
    //   {myMovies.map(i => {
    //     <View>
    //       <Text>{i.title}</Text>
    //       <Text>{i.release_date}</Text>
    //     </View>

    //   })}
    // </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'grey',
fontSize:40,
fontWeight:20,
    height: 50,
    width: 300,
    marginBottom: 10,
    borderColor: 'red',
    borderRadius: 10

  },
  input: {
    borderRadius: 10,
    marginBottom: 10
  },
  movies: {
    marginEnd:10,
    marginStart:15,
    marginTop: 15,
    borderRadius: 10,
    borderColor: 'red',
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
  ,
  size: {
    fontWeight: 1000
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 10,


  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5
  }
});

