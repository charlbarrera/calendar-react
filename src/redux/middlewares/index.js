import { all, takeEvery, call, put } from 'redux-saga/effects'
import { WeatherService } from '../../reminders/servicies/weather';
import { GET_CITY_WEATHER } from '../constants';
import moment from 'moment';
import { setCityWeatherAsync, setErrorReminderAsync } from '../actions/reminders';

function * watchCityWeather () {
  yield takeEvery(GET_CITY_WEATHER, cityWeather);
}

function * cityWeather ({ payload }) {
  try {
    const weatherService = new WeatherService();
    const { city, date } = payload;
    const response = yield call(weatherService.getWeatherByCity, city);
    const cod = response.cod;
    if ( cod > 300 && cod < 500) {
      yield put(setErrorReminderAsync({ type: 'weather', message: response.message }));  
    }
    if (response.cod == 200) {
      const { list } = response;
      const today = moment().format('DD');
      const currentMonth = moment().format('MM');
      const monthReminder = moment(date).format('MM');
      const dayReminder = moment(date).format('DD');
      const difference = dayReminder - today;
      if(dayReminder < today || difference > 16 || (currentMonth !== monthReminder)) {
         yield put(setErrorReminderAsync({type: 'weather', message: 'Date must be between today and the next 16 days to display weather'}))
      } else {
        const dayReminderWeather = list[difference].weather[0];
  
        yield put(setCityWeatherAsync({
            ...payload,
            weather: dayReminderWeather
        }));
      }
     
    }
  } catch (error) {
    console.log('error', error)
  }
}

export default function * rootSaga () {
  yield all([
    watchCityWeather()
  ])
}
