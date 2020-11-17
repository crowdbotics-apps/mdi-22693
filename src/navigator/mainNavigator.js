import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem174771Navigator from '../features/Additem174771/navigator';
import Maps174767Navigator from '../features/Maps174767/navigator';
import UserProfile174763Navigator from '../features/UserProfile174763/navigator';
import BlankScreen0174740Navigator from '../features/BlankScreen0174740/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem174771: { screen: Additem174771Navigator },
Maps174767: { screen: Maps174767Navigator },
UserProfile174763: { screen: UserProfile174763Navigator },
BlankScreen0174740: { screen: BlankScreen0174740Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
