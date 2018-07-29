import Enum from '../base/Enum';

/**
 * @name SexualOrientation
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	Heterosexual: {value: 1, label: 'heterossexual'},
	Homosexual: {value: 2, label: 'homossexual'},
	Bisexual: {value: 3, label: 'bissexual'},
	Demisexual: {value: 4, label: 'demissexual'},
	Asexual: {value: 5, label: 'assexual'},
});