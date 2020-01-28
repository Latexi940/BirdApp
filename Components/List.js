import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useState, useEffect} from "react";
import {AsyncStorage} from 'react-native'


const getBirds = () => {
    const [birds, setBirds] = useState([]);

    const getData = async () => {
        try {
            let value = await AsyncStorage.getItem('birdList');
            if (value !== null){
                const resultAsJSON = await AsyncStorage.getItem('birdList');
                const result = JSON.parse(resultAsJSON);
                setBirds(result)
            }
        } catch (e) {
            console.log('Error retrieving data from AsyncStorage: ' + e)
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return birds;
};

const List = () => {
    const birdArray = getBirds();
    return (
        <FlatList
            data={birdArray}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
                return (
                    <View style={styles.listItem}>
                        <Text style={styles.text}>{item.timestamp}</Text>
                        <Text style={styles.text}>{item.coords}</Text>
                        <Text style={styles.text}>{item.rarity}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.text}>{item.notes}</Text>
                    </View>
                )
            }}
        />
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginTop: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#bbbbbb'
    },
    text:{
      marginBottom: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export {List, getBirds};