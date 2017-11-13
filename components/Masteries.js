import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import styles from '../StyleSheet';

class Masteries extends Component {
    render() {
        const masteries = this.props.masteries;
        console.log(masteries[0].image.slice(1),'~~~')
        return (
            <ScrollView >
                {masteries.map(char => (
                    <View key={char.id} style={styles.squares}>
                        <Button onPress={() => { Actions.SingleChamp({}) }}>
                            <Text>{char.name}</Text>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={
                                    require(`../public/images/domination/8128.png`)
                                } />
                        </Button>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const mapProps = state => ({
    masteries: state.masteries,
});

export default connect(mapProps, {})(Masteries);


//require(`../public/images${char.image.slice(1)}`)
