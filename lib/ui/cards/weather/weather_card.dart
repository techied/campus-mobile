import 'package:campus_mobile_experimental/core/constants/app_constants.dart';
import 'package:campus_mobile_experimental/core/data_providers/cards_data_provider.dart';
import 'package:campus_mobile_experimental/core/data_providers/weather_data_provider.dart';
import 'package:campus_mobile_experimental/core/models/weather_model.dart';
import 'package:campus_mobile_experimental/ui/reusable_widgets/card_container.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:provider/provider.dart';

const String cardId = 'weather';
const String WEATHER_ICON_BASE_URL =
    'https://s3-us-west-2.amazonaws.com/ucsd-its-wts/images/v1/weather-icons/';

class WeatherCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CardContainer(
      active: Provider.of<CardsDataProvider>(context).cardStates[cardId],
      hide: () => Provider.of<CardsDataProvider>(context, listen: false)
          .toggleCard(cardId),
      reload: () => Provider.of<WeatherDataProvider>(context, listen: false)
          .fetchWeather(),
      isLoading: Provider.of<WeatherDataProvider>(context).isLoading,
      titleText: CardTitleConstants.titleMap[cardId],
      errorText: Provider.of<WeatherDataProvider>(context).error,
      child: () => buildCardContent(
          Provider.of<WeatherDataProvider>(context).weatherModel),
//      actionButtons: [buildActionButton(context)],
    );
  }

  String getDayOfWeek(int epoch) {
    // Monday == 1
    DateTime dt = new DateTime.fromMillisecondsSinceEpoch(epoch * 1000);

    switch (dt.weekday) {
      case 1:
        return 'MON';
        break;
      case 2:
        return 'TUE';
        break;
      case 3:
        return 'WED';
        break;
      case 4:
        return 'THU';
        break;
      case 5:
        return 'FRI';
        break;
      case 6:
        return 'SAT';
        break;
      case 7:
        return 'SUN';
        break;
      default:
        return '';
    }
  }

  Widget buildCardContent(WeatherModel data) {
    return ListView(
        shrinkWrap: true,
        physics: NeverScrollableScrollPhysics(),
        children: <Widget>[
          buildCurrentWeather(data.currentWeather),
          buildWeeklyForecast(data.weeklyForecast),
        ]);
  }

  Widget buildWeeklyForecast(WeeklyForecast weeklyForecast) {
    return Container(
      margin: EdgeInsets.only(bottom: 15.0),
      child: Row(
        children: <Widget>[
          buildDailyForecast(weeklyForecast.data[0]),
          buildDailyForecast(weeklyForecast.data[1]),
          buildDailyForecast(weeklyForecast.data[2]),
          buildDailyForecast(weeklyForecast.data[3]),
          buildDailyForecast(weeklyForecast.data[4]),
        ],
      ),
    );
  }

  Widget buildDailyForecast(Forecast data) {
    return Container(
      child: Expanded(
        child: Column(
          children: <Widget>[
            Text(getDayOfWeek(data.time)),
            Image.network(WEATHER_ICON_BASE_URL + data.icon + '.png', width: 35, height: 35,),
            Text(data.temperatureHigh.round().toString() + '\u00B0'),
            Text(data.temperatureLow.round().toString() + '\u00B0'),
          ],
        ),
      ),
    );
  }

  Widget buildCurrentWeather(Weather data) {
    return Container(
        child: Row(
        children: <Widget>[
          Image.network(WEATHER_ICON_BASE_URL + data.icon + '.png', width: 110, height: 110,),
          Expanded(
            child: ListTile(
              title: Text(
                (data.temperature).round().toString() + '\u00B0' + ' in San Diego',
                textAlign: TextAlign.start,
              ),
              subtitle: Text(
                data.summary,
                textAlign: TextAlign.start,
              ),
            ),
          ),
        ],
      ),
    );
  }

  /// disabled surf report view
//  Widget buildActionButton(BuildContext context) {
//    return FlatButton(
//      child: Text(
//        'Surf Report',
//      ),
//      onPressed: () {
//        Navigator.pushNamed(
//          context,
//          RoutePaths.SurfView,
//        );
//      },
//    );
//  }
}
