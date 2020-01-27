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

    console.log("Birds in Async array: " + birds);

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
                        <Text>{item.timestamp}</Text>
                        <Text>{item.rarity}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>{item.notes}</Text>
                    </View>
                )
            }}
        />
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginTop: 20,
        padding: 5,

    },
    name: {
        fontSize: 18
    }
});

export {List, getBirds};