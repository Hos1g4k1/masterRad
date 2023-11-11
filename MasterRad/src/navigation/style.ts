import {StyleSheet} from "react-native";
import {colors} from "../theme/colors";

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.lightGray,
    },
    headerRightContainerStyle: { paddingRight: 8 },
    headerLeftContainerStyle: { paddingLeft: 8 },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default styles;
