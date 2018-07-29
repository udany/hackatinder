import Enum from '../base/Enum';

/**
 * @name Campus
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	CCET: {value: 1, label: 'CCET'},
	CCHS: {value: 2, label: 'CCHS'},
	CCJP: {value: 3, label: 'CCJP'},
	CCBS: {value: 4, label: 'CCBS'},
	CLA: {value: 5, label: 'CLA'},
});