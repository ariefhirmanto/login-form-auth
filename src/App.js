import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyD8IeTf7Kk3Me7jfMQkwcjtbw1RkeomhoU',
			authDomain: 'auth-6613f.firebaseapp.com',
			databaseURL: 'https://auth-6613f.firebaseio.com',
			projectId: 'auth-6613f',
			storageBucket: 'auth-6613f.appspot.com',
			messagingSenderId: '178579573995',
			appId: '1:178579573995:web:2ba365895d0ab93b'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
