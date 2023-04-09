import {getKeyValue, TOKEN_DICTIONARY} from './storage.service.js'
import axios from 'axios'

const getWeather = async () => {
	const token = await getKeyValue(TOKEN_DICTIONARY.token)
	const city = await getKeyValue(TOKEN_DICTIONARY.city)
	if (!token) {
		throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
	}
	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city, 
			appid: token,
			lang: 'ru', 
			units: 'metric'
		}
	}); 
	return data;
	

}

export { getWeather }