import React from 'react';
import {AsyncStorage} from 'react-native'
import {getBirds} from "../Components/List";

let birdArray = [];

const insertToBirdArray = async (name, rarity, notes) => {

    const date = (
            new Date().getDate()) + "."
            + ((new Date().getMonth() + 1) + "."
            + (new Date().getFullYear())
        );
    const time = (
            new Date().getHours()) + ":"
            + (new Date().getMinutes()
        );
    const timestamp = date + " " + time;
    const bird = {timestamp, name, rarity, notes};
    birdArray.push(bird);
    try{
        await AsyncStorage.setItem('birdList', JSON.stringify(birdArray));
        console.log('Added new bird with timestamp: ' + timestamp);
        console.log("Bird's name is " + name + ' and it is ' + rarity );
    }catch(e){
        console.log('Could not save to AsyncStorage:' + e)
    }
};

export {insertToBirdArray};