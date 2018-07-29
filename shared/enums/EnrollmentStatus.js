import Enum from '../base/Enum';

/**
 * @name EnrolmentStatus
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	Enrolled: {value: 1, label: 'cursando'},
	Locked: {value: 2, label: 'trancado'},
	Graduated: {value: 3, label: 'cursando'},
});