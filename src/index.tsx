/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import React from "react";
import {PaperProvider} from "react-native-paper";


export default function Main() {
    return (
        <PaperProvider>
            <React.Fragment>
                {Platform.OS === 'web' ? (
                    <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
                ) : null}
                <App />
            </React.Fragment>
        </PaperProvider>
    );
}


AppRegistry.registerComponent("app", () => Main);

// AppRegistry.runApplication("App", {
//     rootTag: document.getElementById("react-root")
// });
