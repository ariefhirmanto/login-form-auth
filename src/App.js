import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loggedIn: null,
		};
	}

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
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Card >
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()} >
							Log Out
							</Button>
						</CardSection>
					</Card>
				);
			case false:	
				return (
					<LoginForm />
				);
			default:
				return (
				<View style={styles.dropdownContent}>
					<Spinner size="large" style={styles.dropdownContent} />
				</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	dropdownContent: {
		marginTop: 20
	}
};

export default App;
