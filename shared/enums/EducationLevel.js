import Enum from '../base/Enum';

/**
 * @name EducationLevel
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	Undergrad: {value: 1, label: 'Graduação'},
	Postgraduate: {value: 2, label: 'Pós-graduação'},
	Doctorate: {value: 3, label: 'Doutourado'},
});