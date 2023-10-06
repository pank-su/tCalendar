import React from "react";
import {View, Text, Platform} from "react-native";
import {MD2Colors, PaperProvider, ActivityIndicator} from "react-native-paper";

// Look at public/index.html!

class App extends React.Component {
    render() {
        return (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
        );
    }
}


export default App;
