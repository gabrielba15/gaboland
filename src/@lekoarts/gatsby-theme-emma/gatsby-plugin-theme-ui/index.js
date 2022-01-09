import './styles/fonts.css';
import { merge } from 'theme-ui';
import { tailwind } from '@theme-ui/presets';
// Theme Config!
import {
	fonts,
	/*	fontSizes,*/
	fontWeights,
	lineHeights,
	colors,
	styles,
	layout,
	buttons,
} from './styles/index';

export default merge(tailwind, {
	fonts,
	/*fontSizes,*/
	fontWeights,
	lineHeights,
	colors,
	styles,
	layout,
	buttons,
	initialColorModeName: 'light',
	config: {
		useCustomProperties: true,
	},
});