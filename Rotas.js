import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./Login"
import { Cadastro } from './Cadastro'
import { Cadastro2 } from './Cadastro2'
import { Home } from './Home'

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Cadastro' component={Cadastro} />
                <Stack.Screen name='Cadastro2' component={Cadastro2} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}