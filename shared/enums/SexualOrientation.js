import Enum from '../base/Enum';

/**
 * @name SexualOrientation
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	Heterosexual: {value: 1, label: 'Heterossexual'},
	Homosexual: {value: 2, label: 'Homossexual'},
	Bisexual: {value: 3, label: 'Bissexual'},
	Demisexual: {value: 4, label: 'Demissexual'},
	Asexual: {value: 5, label: 'Assexual'},
});