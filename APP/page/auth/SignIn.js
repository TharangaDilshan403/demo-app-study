import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar,useWindowDimensions} from 'react-native'

export default function SignIn() {
    const { styles } = useStyle();
  return (
    <SafeAreaView>
        <StatusBar style="auto" />
        <View style={styles.header}>
        <Text style={styles.signInText}>SignIn</Text>
        </View>
    </SafeAreaView>
  )
}

const useStyle = () => {
    const dimensions = useWindowDimensions();

    const styles = StyleSheet.create({
            header: {
                marginTop: dimensions.height*0.2
            },
            signInText: {
                fontSize: 30,
                fontFamily: 'Montserrat-Thin'
            },
    })

    return { styles }
}
