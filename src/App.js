import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card
} from '@aws-amplify/ui-react';

function App({signOut}) {
  return (
    <View className='App'>
      <Card>
        <Image src= {logo} alt='logo' className='App-logo'/>
        <Heading level={1}>We now have auth!!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator (App);