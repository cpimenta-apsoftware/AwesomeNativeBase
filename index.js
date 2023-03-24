/**
 * @format
 */

// import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Navigation } from "react-native-navigation";

// const app = 
Navigation.registerComponent(appName, () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: appName
            }
          }
        ]
      }
    }
  });
});

// AppRegistry.registerComponent(appName, () => app);