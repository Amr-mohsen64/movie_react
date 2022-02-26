
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from "axios";
import { useRoute } from "@react-navigation/native";

function Details() {
    const route = useRoute()
    const [i, setMovies] = useState({});
    useEffect(() => {

        axios
            // .get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=9f88bf74a43bfc37f66724aa8369bbe1`)
            //get an error 
            .get(`https://api.themoviedb.org/3/movie/634649?api_key=9f88bf74a43bfc37f66724aa8369bbe1`)
            .then((res) => setMovies(res.data))
            .catch((err) => console.log(err));
    }, []);


    return (
        
            <View style={styles.movies}>

                <Image source={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} style={{ width: 300, height: 600, borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                <Text style={styles.size}>{i.title}</Text>
                <Text style={styles.size}>{i.release_date}</Text>
                <Text style={styles.size}>{i.original_title}</Text>
                {/* <Text>{route.params.id}</Text> */}
        </View>
    )


}
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
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
        marginTop: 15,
        borderRadius: 10,
        borderColor: 'red',
        alignItems: 'center',
    }
    ,
    size: {
        fontWeight: "900"
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
export default Details;


