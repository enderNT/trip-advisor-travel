import axios from 'axios'

export const getPlacesData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
					tr_latitude: ne.lat,
				},
				headers: {
					'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
					'X-RapidAPI-Key':
						import.meta.env.VITE_TRAVEL_ADVISOR_API,
				},
			}
		)

		return data
	} catch (error) {
		console.error(error)
	}
}

export const getWeatherData = async (lat, lng) => {
	try {
		if (lat && lng) {
			const { data } = await axios.get(
				`https://community-open-weather-map.p.rapidapi.com/find`,
				{
					params: { lat, lon: lng },
					headers: {
						'X-RapidAPI-Host':
							'community-open-weather-map.p.rapidapi.com',
						'X-RapidAPI-Key':
							import.meta.env.VITE_WEATHER_API,
					},
				}
			)
		}

        return data
	} catch (error) {
        console.error(error)
    }
}
