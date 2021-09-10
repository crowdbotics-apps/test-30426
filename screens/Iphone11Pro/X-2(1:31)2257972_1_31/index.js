import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_32} />
      <View style={styles.View_1_33}>
        <Text style={styles.Text_1_33}>Opps</Text>
      </View>
      <View style={styles.View_1_34} />
      <TouchableOpacity
        style={styles.TouchableOpacity_1_35}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_2"))
        }
      >
        <View style={styles.View_I1_35_1_3} />
        <View style={styles.View_I1_35_1_4}>
          <Text style={styles.Text_I1_35_1_4}>Go back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_1_36}>
        <Text style={styles.Text_1_36}>Can’t do it</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_32: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.601092896174864%"),
    backgroundColor: "rgba(197, 65, 200, 1)"
  },
  View_1_33: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("33.060109289617486%"),
    justifyContent: "flex-start"
  },
  Text_1_33: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_34: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55.46448087431693%"),
    minHeight: hp("55.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.46448087431693%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_1_35: {
    width: wp("70.13333333333334%"),
    minWidth: wp("70.13333333333334%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("90.1639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_35_1_3: {
    flexGrow: 1,
    width: wp("70.13333333333334%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(197, 65, 200, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_I1_35_1_4: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.33333333333333%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_I1_35_1_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_36: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("44.53551912568306%"),
    justifyContent: "flex-start"
  },
  Text_1_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
