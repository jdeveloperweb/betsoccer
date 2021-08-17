import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Pages/Layouts/Login';
import Index from './Pages/Layouts/Index';
import Register from './Pages/Layouts/Register';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Index" component={Index} />
                <AppStack.Screen name="Register" component={Register} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;