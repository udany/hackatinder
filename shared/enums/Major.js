import Enum from '../base/Enum';

/**
 * @name Major
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	InformationSystems: {value: 1, label: 'Sistemas de Informação'},
	BiologicSciences: {value: 2, label: 'Ciências Biológicas'},
	SocialService: {value: 3, label: 'Serviço Social'},
});