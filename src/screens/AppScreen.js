import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { recepiesActions } from '../store'

import Navigation from '../components/Navigation';
import LoadingScreen from './LoadingScreen';

const AppScreen = ({ recepies, setData, addRecepie }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            let items = [];
            items = await recepies;
            console.log("Data: ", items)
            setIsLoading(false);
            setData(items)
        };
        getData();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            {/* {!isLoading ? (
                <>
                    <LoadingScreen />

                </>
            ) : ( */}
            <Navigation />
            {/* )} */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapState = state => ({
    recepies: state.recepies,
});

const mapDispatch = (dispatch) => ({
    setData: data => dispatch(recepiesActions.setData(data)),
    addRecepie: data => dispatch(recepiesActions.addRecepie(data))
})

export default connect(mapState, mapDispatch)(AppScreen)