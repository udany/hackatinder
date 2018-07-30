import Enum from '../base/Enum';

/**
 * @name Campus
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	CCET: {value: 1, label: 'CCET'},
	CCHS: {value: 2, label: 'CCHS'},
	CLA:  {value: 3, label: 'CLA'},
	CCJP: {value: 4, label: 'CCJP'},
	CCBS: {value: 5, label: 'CCBS'},
});