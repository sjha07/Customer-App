/**
 * 
 * Developer - Satish Jha
 * Customer App
*/

'use strict';

import React, {
	View,
	Text,
	Component,
	ScrollView,
	StyleSheet,
    ListView,
    Image
} from 'react-native';

class Customer extends Component {
	render () {
        var customer = this.props.customer;
		return (

			<View style={{ backgroundColor: '#FFFFFF', flex: 1, flexDirection: 'column', margin: 10 }}>

                <View style={{flex: 1}}>                    

                    <View style={{flexDirection: 'row' }}>
                        <Image source={require('./brad.png')} 
                            style={{width: 56, height: 64 }} />

                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.txtGenral}>
            					<Text style={{fontWeight: '700'}}>
                                    Name: 
                                </Text>
                                {customer.name}
            				</Text>
                            <Text style={styles.txtGenral}>
                                <Text style={{fontWeight: '700'}}> 
                                    Balance: 
                                </Text>
                                {customer.balance}
                            </Text>
                            <Text style={styles.txtGenral}>
                                <Text style={{fontWeight: '700'}}>
                                    Age: 
                                </Text>
                                {customer.age}
                            </Text>
                        </View>
                    </View>
                </View>

                <View>

                    <Text style={[styles.txtAfterImage, {marginTop: 10}]}>
                        <Text style={{fontWeight: '700'}}>
                            Company: 
                        </Text>
                        {customer.company}
                    </Text>
                    <Text style={styles.txtAfterImage}>
                        <Text style={{fontWeight: '700'}}>
                            Email: 
                        </Text>
                        {customer.email}
                    </Text>
                    <Text style={styles.txtAfterImage}>
                        <Text style={{fontWeight: '700'}}>
                            Phone: 
                        </Text>
                        {customer.phone}
                    </Text>
                    <Text style={[styles.txtAfterImage, {borderBottomColor: '#11AA33', borderBottomWidth: 4} ]}>
                        <Text style={{fontWeight: '700'}}>
                            Address: 
                        </Text>
                        {customer.address}
                    </Text>
                </View>
					
			</View>

            
		);
	}

}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

    txtGenral: {
        fontSize: 14,
        color: '#992999',
        margin: 2,
        marginLeft: 20
    },

    txtAfterImage: {
        fontSize: 14,
        color: '#992999',
        margin: 1,
        marginLeft: 0
    },

    txtName: {

    },
    separator: {
        height: 0,
        backgroundColor: '#11AA33'
    }

});


module.exports = Customer;