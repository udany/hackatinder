import Enum from '../base/Enum';

/**
 * @name EnrolmentStatus
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	Enrolled: {value: 1, label: 'Cursando'},
	Locked: {value: 2, label: 'Trancado'},
	Graduated: {value: 3, label: 'Formado'},
});