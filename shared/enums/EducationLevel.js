import Enum from '../base/Enum';

/**
 * @name EducationLevel
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	Undergrad: {value: 1, label: 'graduação'},
	Postgraduate: {value: 2, label: 'pós-graduação'},
	Doctorate: {value: 3, label: 'doutourado'},
});