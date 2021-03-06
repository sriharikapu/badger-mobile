import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import { ThemeColors } from '../styles/Colors';

const { height, width } = Dimensions.get('window');
interface Style {
	modalOuterContainer: ViewStyle;
	modalInnerContainer: ViewStyle;
	flexRight: ViewStyle;
	flexLeft: ViewStyle;
	divider: ViewStyle;
	button: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	modalOuterContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: height * 0.2,
		backgroundColor: ThemeColors.blue,
		marginHorizontal: width * 0.05
	},
	modalInnerContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: width * 0.8,
		height: height * 0.6,
		paddingBottom: 20
	},
	flexRight: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	flexLeft: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	divider: {
		width: '70%',
		height: 1,
		backgroundColor: ThemeColors.blue_medium
	},
	button: {
		width: '100%',
		justifyContent: 'center',
		marginTop: 20
	}
});

export default styles;
