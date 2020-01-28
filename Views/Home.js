import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {List} from "../Components/List"


const Home = (props) => {
    const openForm = () => {
        console.log('Opening form');
        props.navigation.navigate('Form')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bird log</Text>
            <View style={styles.list}>
                <List/>
            </View>
            <View style={styles.button}>
                <Button
                    color={'#0daad1'}
                    title={'ADD BIRD'}
                    onPress={openForm}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: '#d1fff8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        margin: 20,
        fontSize: 20
    },
    list: {
        width: 250,
        alignItems: 'center',
        flex: 8,
        marginBottom:20
    },
    button: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 50,
        margin: 15,
    }
});

export default Home;