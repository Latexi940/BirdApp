import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from "react-native";
import {insertToBirdArray} from "../Content/ListOfBirds";
import RadioForm from 'react-native-simple-radio-button';

let radio_props = [
    {label: 'Uncommon', value: 'Uncommon'},
    {label: 'Rare', value: 'Rare'},
    {label: 'Extremely Rare', value: 'Extremely Rare'}
];

const BirdForm = (props) => {

    const [name, setName] = useState("");
    const [rarity, setRarity] = useState("");
    const [notes, setNotes] = useState("");

    const BackToHome = () => {
        console.log('Opening home');
        props.navigation.navigate('Home')

    };

    const AddBird = () => {
        console.log('Adding new observation');
        insertToBirdArray(name, rarity, notes);
        BackToHome();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add new observation</Text>
            <View>
                <Text>Bird name:</Text>
                <TextInput style={styles.textInput}
                           placeholder='Name of the species'
                           onChangeText={(name) => setName(name)}
                />
                <Text>Rarity:</Text>

                <RadioForm style={styles.radioForm}
                           radio_props={radio_props}
                           initial={''}
                           onPress={(value) => {
                               setRarity(value)
                           }}
                />

                <Text>Additional notes:</Text>
                <TextInput style={styles.textInput}
                           placeholder='Notes'
                           onChangeText={(notes) => setNotes(notes)}
                />

                <Button style={styles.button}
                        title="ADD"
                        onPress={AddBird}
                />
                <Button style={styles.button}
                        title="DISCARD"
                        onPress={BackToHome}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        margin:20,
        fontSize:20
    },
    textInput:{
        padding: 5
    },
    radioForm: {
        padding: 10
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 5,
    }
});

export {BirdForm}