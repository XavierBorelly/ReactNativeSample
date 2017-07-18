import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
} from 'react-native';

import { Sentry, SentrySeverity } from 'react-native-sentry';

import Info from '../components/Info';

import { GREETINGS_SCENE_NAME } from '../screens/GreetingsScreen';
import { JSX_SCENE_NAME } from '../screens/JsxScreen';
import { STATE_SCENE_NAME } from '../screens/StateScreen';

Sentry.config("https://08180bf23feb44c784e9fd627203146e:290c924ddf1d4ea8b64bb6e13f3b3b41@sentry.io/192720", {
  deactivateStacktraceMerging: true,
  disableNativeIntegration: false
}).install();


Sentry.setTagsContext({
  "environment": "production",
  "react": true
});

Sentry.setUserContext({
  email: "borelly.xavier@gmail.com",
  userID: "12341",
  username: "borelly",
  extra: {
    "is_admin": false
  }
});

export const HOME_SCENE_NAME = 'HOME_SCENE';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
  }

  navigateToGreetings() {
    Sentry.captureMessage("NavigateToGreetings", {
      level: SentrySeverity.Info,
    });
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    Sentry.captureMessage("NavigateToJsx", {
      level: SentrySeverity.Info,
    });
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    Sentry.captureMessage("NavigateToState", {
      level: SentrySeverity.Info,
    });
    this.navigate(STATE_SCENE_NAME);
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={this.navigateToJsx}
            title="Jsx"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToState}
            title="State"
          />
        </View><View style={styles.margin}>
        <Button
          onPress={() => {
            Sentry.nativeCrash();
          }}
          title="Native Crash"
        />
      </View>

        <View style={styles.margin}>
          <Button
            onPress={() => {
              console.log('FIX SENTRY ERROR');
            }}
            title="Throw error"
          />
        </View>
      </ScrollView>
    );
  }
}


HomeScreen.defaultProps = {
  navigation: null,
};
HomeScreen.propTypes = {
  navigation: PropTypes.element,
};