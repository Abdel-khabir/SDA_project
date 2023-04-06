import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import Button from '../../../components/Button';
import { styles } from './styles';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Stay <Text style={[styles.title, styles.innerTitle]}> Alerte</Text></Text>
                <Text style={styles.title}>Stay <Text style={[styles.title, styles.innerTitle]}> Alive !</Text></Text>
            </View>

            <Button title="Sign Up" />

            <Pressable hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default React.memo(Splash);