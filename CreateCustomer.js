/**
 * 
 * Developer - Satish Jha
 * Customer App
*/

'use strict';

import React, {
	View,
	Text,
	TextInput,
	Component,
	StyleSheet,
	TouchableHighlight

} from 'react-native';
var navigator;


class CreateCustomer extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''			
		};	  	
	}

	render () {
		navigator=this.props.navigator;
		return (

			<View style={styles.container}>
				<View style={{marginTop: 25, padding: 10, backgroundColor: '#EEEEEE', 
					flexDirection: 'row', alignItems: 'center'}}>
					<Text style={{marginRight: 20, color: '#1122AA'}} onPress={this.goToHomePage}>
						Home
					</Text>
					<Text style={{ color: '#1122AA' }} onPress={this.goToHomePage}>
						Search
					</Text>

				</View>

				<View style={{ alignItems: 'center' }}>
					<Text style={styles.custHeading}>
						Create Customer
					</Text>
				</View>

				<View style={{flex: 1, margin: 25 }}>
					<View style={{ margin: 5 }} >
						<TextInput style={{borderColor: 'gray', height: 50, 
							borderWidth: 1, borderRadius: 5 }}
							placeholder='Name' placeholderTextColor='#999999' /> 
					</View>
					<View style={{ margin: 5 }} >
						<TextInput style={{ borderColor: 'gray', height: 50,
							borderWidth: 1, borderRadius: 5 }}
							placeholder='Email' placeholderTextColor='#999999' /> 
					</View>
					<View style={{ margin: 5 }} >
						<TextInput style={[{ height: 50,
							borderWidth: 1, borderRadius: 5 }, this.phoneColor() ]}
							placeholder='Phone' placeholderTextColor='#999999'
							onChangeText={(text) => {
								console.log(text);
								this.setState({text});
							}}
    						value={this.state.text} /> 
					</View>

					<View style={{ flex: 1}}>
						<TouchableHighlight 
							underlayColor='#55CC77' 
							style={styles.touchableStyle}>						
							<Text style={styles.touchableText}> 
								Save
							</Text>
						</TouchableHighlight>
					</View>

				</View>

			</View>
		);
	}

	phoneColor() {
		console.log("Method : " + this.state.text);
		console.log(parseInt(this.state.text));
		console.log(this.state.text);
		if(this.state.text != "Phone" && this.state.text != '' && this.state.text != 'undefined') {
			if(parseInt(this.state.text) != NaN && parseInt(this.state.text) == this.state.text
				&& this.state.text.length <= 10) {
				return {
					borderColor: 'gray',
					color: '#333333',
					borderWidth: 1, 
					borderRadius: 5

				}
			}
			
			return {
				borderColor: '#AA1111',
				color: '#FF2211',
				borderWidth: 2
			}
		}
		

		return {
			borderColor: 'gray'
		}
	}

	goToHomePage() {
		navigator.pop();
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 0
		//alignItems: 'center',
		//justifyContent: 'center'
	},

	custHeading: {
        fontSize: 24,
        color: '#11AA33',
        alignItems: 'center',
        marginBottom: -20,
        padding: 0
    },

    buttonText: {
		fontSize: 32,
		color: '#FFF',
		alignSelf: 'center'

	},
	button: {
		backgroundColor: '#48BBEC',
		alignSelf: 'center',
		marginTop: 30,
		justifyContent: 'center',
		borderRadius: 5,
		padding: 10,
		height: 40
	},

	touchableText: {
		margin: 5,
		padding: 5,
		color: '#FFFFFF',
		fontSize: 20,
		justifyContent: 'center',
		marginTop: 10
	},

	touchableStyle: {
		backgroundColor: '#48BBEC',
		margin: 5,
		borderRadius: 10,
		alignItems: 'center'
	}

});

module.exports = CreateCustomer;
