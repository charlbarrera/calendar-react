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
    console.log('response', response);
    const cod = response.cod;
    console.log()
    if ( cod > 300) {
      yield put(setErrorReminderAsync({ type: 'weather', message: response.message }));  
    }
    if (response.cod == 200) {
      const { list } = response;
      const today = moment().day();
      const dayReminder = moment(date).day();
     
      const dayReminderWeather = list[dayReminder - today].weather[0];
    
      console.log('dayReminderWeather', dayReminderWeather);

      yield put(setCityWeatherAsync({
          ...payload,
          weather: dayReminderWeather
      }));
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
