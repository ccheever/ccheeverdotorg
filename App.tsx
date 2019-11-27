import React from "react";
import { Text, View, Linking } from "react-native";

let Anchor = (props_, context) => {
  let props = {
    style: {
      color: "#000033",
      fontSize: 20,
      lineHeight: 30,
      textDecorationLine: 'underline',
      ...props_.style
    },
    ...props_
  };

  let _handlePress = () => {
    Linking.openURL(props.href);
    if (typeof props.onPress == "function") {
      props.onPress();
    }
  };
  return <Text {...props} onPress={_handlePress}></Text>;
};

export default () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      margin: 15
    }}
  >
    <Anchor href="https://expo.io">Expo</Anchor>
    <Anchor href="https://castle.games">Castle</Anchor>
    <Anchor href="https://twitter.com/ccheever">Twitter</Anchor>
    <Anchor href="https://github.com/ccheever">Github</Anchor>
  </View>
);
