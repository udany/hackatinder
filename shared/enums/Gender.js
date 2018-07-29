import Enum from '../base/Enum';

/**
 * @name Gender
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	Male: {value: 1, label: 'masculino'},
	Female: {value: 2, label: 'feminino'},
	Other: {value: 4, label: 'outro'},
});