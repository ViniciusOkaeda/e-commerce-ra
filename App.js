import * as React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/Screens/Home/home';
import ProfileScreen from './src/Screens/Profile/profile';
import CategoryScreen from './src/Screens/Category/category';
import FavoriteScreen from './src/Screens/Favorite/favorite';
import ProductScreen from './src/Screens/Product/product';
import ProductsByCategory from './src/Screens/Category/Products/products';



import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();
const FavoriteStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#628DB4' }}>


        <Tab.Screen name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        >
          {() => (
            <HomeStack.Navigator
              screenOptions={{
              headerStyle: { backgroundColor: '#628DB4' }, // Cor de fundo da barra superior das telas de navegação
              headerTintColor: '#fff', // Cor do texto da barra superior
            }}
            >
              <HomeStack.Screen name="Home" component={HomeScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Category"
          options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="category" size={24} color={color} />
            ),
          }}
        >
          {() => (
            <CategoryStack.Navigator               
              screenOptions={{
              headerStyle: { backgroundColor: '#628DB4' }, // Cor de fundo da barra superior das telas de navegação
              headerTintColor: '#fff', // Cor do texto da barra superior
            }}>
              <CategoryStack.Screen name="Category" component={CategoryScreen} />
              <CategoryStack.Screen name="ProductsByCategory" component={ProductsByCategory}           
              options={({ route }) => ({
              
              //headerBackVisible: false, // Oculta o botão de voltar
              headerBackTitleVisible: false, // Oculta o texto do botão de voltar
          })} />
            </CategoryStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Favorite"
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="heart" color={color} size={18} />
            ),
          }}
        >
          {() => (
            <FavoriteStack.Navigator
              screenOptions={{
              headerStyle: { backgroundColor: '#628DB4' }, // Cor de fundo da barra superior das telas de navegação
              headerTintColor: '#fff', // Cor do texto da barra superior
            }}
            >
              <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
            </FavoriteStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-sharp" size={24} color={color} />
            ),
          }}
        >
          {() => (
            <ProfileStack.Navigator
              screenOptions={{
              headerStyle: { backgroundColor: '#628DB4' }, // Cor de fundo da barra superior das telas de navegação
              headerTintColor: '#fff', // Cor do texto da barra superior
            }}
            >
              <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
              />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>



      </Tab.Navigator>
    </NavigationContainer>
  );
}
