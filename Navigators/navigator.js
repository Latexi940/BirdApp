import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from "../Views/Home";
import {BirdForm} from "../Views/BirdForm"


const Navigator = createSwitchNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerMode: 'none',
            },
        },
        Form: {
            screen: BirdForm,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(Navigator);
