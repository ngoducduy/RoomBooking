import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.dark,
  fontSize: 15,
}
export const presets = {
  default: BASE,

  bold: { ...BASE, fontWeight: "bold" } as TextStyle,

  italic: { ...BASE, fontStyle: 'italic' } as TextStyle,

  header: { ...BASE, fontSize: 24, fontWeight: "bold" } as TextStyle,
  
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,

  button: { ...BASE, fontWeight: "bold", fontSize: 18, color: color.white } as TextStyle,
  
  radioButton: { ...BASE, fontSize: 18, color: color.dark } as TextStyle,
}

export type TextPresets = keyof typeof presets
