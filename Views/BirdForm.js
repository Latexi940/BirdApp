import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from "react-native";
import {insertToBirdArray} from "../Content/ListOfBirds";
import RadioForm from 'react-native-simple-radio-button';
import {PermissionsAndroid} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

let radio_props = [
    {label: 'Uncommon', value: 'Uncommon'},
    {label: 'Rare', value: 'Rare'},
    {label: 'Extremely Rare', value: 'Extremely Rare'}
];

const BirdForm = (props) => {

        const [name, setName] = useState("");
        const [rarity, setRarity] = useState("");
        const [notes, setNotes] = useState("");

        const getLocation = async () => {
            const {status} = await Permissions.askAsync(
                Permissions.LOCATION)
            ;
            if (status === 'granted') {
                return await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            } else {
                console.log('No permission to location')
            }
        };

        const BackToHome = () => {
            console.log('Opening home');
            props.navigation.navigate('Home')
        };

        const AddBird = async () => {
            const response = await getLocation();
            const location = response.coords;
            const coords = "La: " + location.latitude.toFixed(5)
                + ", Lo:" +location.longitude.toFixed(5);

            console.log('Adding new observation');
            insertToBirdArray(name, rarity, notes, coords);
            BackToHome();
        };

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Add new observation</Text>
                <View style={styles.form}>
                    <Text style={styles.text}>Name:</Text>
                    <TextInput style={styles.textInput}
                               placeholder='Name of the species'
                               onChangeText={(name) => setName(name)}
                    />
                    <Text style={styles.text}>Rarity:</Text>

                    <RadioForm style={styles.radioForm}
                               radio_props={radio_props}
                               initial={''}
                               onPress={(value) => {
                                   setRarity(value)
                               }}
                    />

                    <Text style={styles.text}>Additional notes:</Text>
                    <TextInput style={styles.textInput}
                               multiline={true}
                               placeholder='Notes'
                               onChangeText={(notes) => setNotes(notes)}
                    />

                    <View style={styles.button}>
                        <Button
                            color={'#0daad1'}
                            title="ADD"
                            onPress={AddBird}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            color={'#0daad1'}
                            title="DISCARD"
                            onPress={BackToHome}
                        />
                    </View>
                </View>
            </View>
        )
    }
;

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: '#d1fff8',
        alignItems: 'center',
    },
    form: {
        width: 200,
        alignItems: 'center'
    },
    header: {
        margin: 20,
        fontSize: 23
    },
    textInput: {
        margin: 5,
        marginBottom: 15,
        padding: 20,
        width: 200,
        borderWidth: 1,
        borderColor: '#bbbbbb'
    },
    radioForm: {
        marginBottom: 15
    },
    button: {
        width: 150,
        margin: 5,
    }
});

export {BirdForm}