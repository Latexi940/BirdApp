import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {birdArray} from "../Content/ListOfBirds";
import {List} from "../Components/List"


const Home = (props) => {
    const openForm = () =>{
        console.log('Opening form');
        props.navigation.navigate('Form')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>These are the birds you have found!</Text>
            <List birdArray={birdArray}/>
            <Button style={styles.button}
                    title={'ADD'}
                    onPress={openForm}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:25,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        margin:20,
        fontSize:20
    },
    button: {
        width: 50,
        height:50,
        borderRadius: 50,
        marginBottom: 30,
    }
});

export default Home;