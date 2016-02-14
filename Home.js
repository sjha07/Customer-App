/**
 * 
 * Developer - Satish Jha
 * Customer App
*/

'use strict'

import React, {
	View,
	Text,
	Component,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';

var navigator;

class Home extends Component {
	render() {
		navigator = this.props.navigator;
		return (
			<View style={styles.container}>
				<View style={styles.topView}>
					<Text style={styles.custHeading}>
						Customer Application
					</Text>
				</View>

				<View style={styles.bottomView}>
					<TouchableHighlight
						underlayColor='#AAEEFF'
						style={styles.touchableStyle}
						onPress={this.showCustomerListPage}>

						<Text style={styles.touchableText}>
							Customer List
						</Text>
					</TouchableHighlight>

					<TouchableOpacity						
						style={styles.touchableStyle}
						onPress={this.showCreateCustomerPage}>
						<Text style={styles.touchableText}> 
							Create Customer
						</Text>
					</TouchableOpacity>

					<TouchableHighlight 
						style={styles.touchableStyle}
						onPress={this.showCreateCustomerPage}>
						<Text style={styles.touchableText}> 
							Edit Customer
						</Text>
					</TouchableHighlight>

					<TouchableHighlight 
						style={styles.touchableStyle}
						onPress={this.showCreateCustomerPage}>
						<Text style={styles.touchableText}> 
							Delete Customer
						</Text>
					</TouchableHighlight>

				</View>

				
			</View>
		);
	}

	showCustomerListPage() {
		navigator.push({
			id: 2
		});

	}

	showCreateCustomerPage() {
		navigator.push({
			id: 3
		});
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40
	},

	topView: {
		flex: 1,
		alignItems: 'center',
	},

	bottomView: {
		flex: 7,
		alignItems: 'stretch',
		//justifyContent: 'center'
	},

	custHeading: {
		fontSize: 24,
		color: '#11AA33'		
	},

	touchableText: {
		margin: 0,
		padding: 0,
		color: '#FFFFFF',
		fontSize: 20,
		alignItems: 'center',
		justifyContent: 'center'	
	},

	touchableStyle: {
		flex: 1,
		backgroundColor: '#48BBEC',
		margin: 5,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	}

});


module.exports = Home;