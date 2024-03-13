import {defaultTheme} from "../styles/themes/default.ts";
import 'styled-components';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
