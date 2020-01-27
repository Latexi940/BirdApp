import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const List = (props) => {
    return (
        <FlatList
            data={props.birdArray}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity>
                        <View style={styles.listItem}>
                            <Text>{item.timestamp}</Text>
                            <Text>{item.rarity}</Text>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    );
};

const styles = StyleSheet.create({
    listItem:{
        marginTop:20,
        padding:5,

    },
    name:{
        fontSize:18
    }
});

export {List};