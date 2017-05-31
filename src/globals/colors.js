import shader from 'shader';

function colorBrightandDark(color) {
  return {
    default: color,
    brighter: shader(color, 0.3),
    darker: shader(color, -0.2)
  };
}

export const
  primary = colorBrightandDark('#34495E'),
  //primaryDarker = '#2C3E50',
  secondary = colorBrightandDark('#1ABC9C'),
  //secondaryDarker = '#16A085',
  font = '#02222B',
  white = colorBrightandDark('#FFFFFF'),
  lightGray = colorBrightandDark('#EEEEEE'),
  green = colorBrightandDark('#53DF83'),
  navy = colorBrightandDark('#074354'),
  orange = colorBrightandDark('#F69C00'),
  yellow = colorBrightandDark('#F5C700'),
  red = colorBrightandDark('#EF4836'),
  blue = colorBrightandDark('#47D2E9'),
  gray = colorBrightandDark('#bdc3c7');