import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../StyleSheet';

export default class Precision extends Component {
    constructor(props) {
        super(props);
    }
    // filter for keystone, greater rune , rune
    render() {
        const toFilter = this.props.passed
        const keystone = toFilter.filter(cat => cat.type === 'keystone');
        const gRune = toFilter.filter(cat => cat.type === 'greater rune');
        const lRune = toFilter.filter(cat => cat.type === 'rune');
        return (
            <ScrollView>
              <View style={{ backgroundColor: 'black' }}>
                <View style={{ alignItems: 'center', margin: 20 }}>
                    <Text style={styles.header}>Keystone</Text>
                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/presstheattack.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{keystone[0].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[0].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/lethaltempo.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{keystone[1].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[1].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/fleetfootwork.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{keystone[2].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[2].description}</Text>

                    <Text style={styles.header}>Greater Runes</Text>
                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/overheal.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{gRune[0].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[0].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/Triumph.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{gRune[1].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[1].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/pom.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{gRune[2].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[2].description}</Text>

                    <Text style={styles.header}>Runes</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/legendalac.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[0].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[0].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/legendten.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[1].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[1].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/legendblood.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[2].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[2].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/coup.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[3].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[0].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/cutdown.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[4].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[1].description}</Text>

                    <Image style={{ width: 100, height: 100 }} source={require(`../images/precision/laststand.png`)}/>
                    <Text style={{ color: 'red', fontSize: 20 }}>{lRune[5].name}</Text>
                    <Text style={{ color: 'grey' }}>{keystone[2].description}</Text>
                </View>
              </View>
            </ScrollView>
        );
    }
}