import { Dimensions, Platform } from 'react-native'
import { isIphoneX } from '../utils/common'

const {width, height} = Dimensions.get('window')

function getIOSPaddingTop () {
  return isIphoneX() ? 35 : 20
}

function getIOSHeaderHeight () {
  return isIphoneX() ? 80 : 60
}

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 16,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? getIOSHeaderHeight() : 54,
  navBarPaddingTop: (Platform.OS === 'ios') ? getIOSPaddingTop() : 0,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics

