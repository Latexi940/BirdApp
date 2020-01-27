import React from 'react';

const birdArray = [
    {
        'timestamp': '27.1.2020 14.50',
        'key': '0',
        'name': 'Sparrow',
        'rarity': 'Common',
    },
    {
        'timestamp': '27.1.2020 14.50',
        'key': '1',
        'name': 'Mockingjay',
        'rarity': 'Rare',
    },
    {
        'timestamp': '27.1.2020 14.50',
        'key': '2',
        'name': 'Whistling Dabblejacker',
        'rarity': 'Extremely rare',
    },
];

const insertToBirdArray = (name, rarity) => {
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
    console.log('Date is ' + date +" and time is " + time);

    const key = birdArray.length.toString();
    const bird = {timestamp, key, name, rarity};
    birdArray.push(bird);
}

export {birdArray, insertToBirdArray};