//day
import { ReactComponent as Thunderstormsdayrain } from "../svg/thunderstorms-day-rain.svg";
import { ReactComponent as Thunderstormsdayovercastrain } from "../svg/thunderstorms-day-overcast-rain.svg";
import { ReactComponent as Thunderstormsday } from "../svg/thunderstorms-day.svg";
import { ReactComponent as Partlycloudydaydrizzle } from "../svg/partly-cloudy-day-drizzle.svg";
import { ReactComponent as Overcastdaydrizzle } from "../svg/overcast-day-drizzle.svg";
import { ReactComponent as Partlycloudydayrain } from "../svg/partly-cloudy-day-rain.svg";
import { ReactComponent as Overcastdayrain } from "../svg/overcast-day-rain.svg";
import { ReactComponent as Partlycloudydaysnow } from "../svg/partly-cloudy-day-snow.svg";
import { ReactComponent as Overcastdaysnow } from "../svg/overcast-day-snow.svg";
import { ReactComponent as Partlycloudydaysleet } from "../svg/partly-cloudy-day-sleet.svg";
import { ReactComponent as Overcastdaysleet } from "../svg/overcast-day-sleet.svg";
import { ReactComponent as Partlycloudydaysmoke } from "../svg/partly-cloudy-day-smoke.svg";
import { ReactComponent as Hazeday } from "../svg/haze-day.svg";
import { ReactComponent as Dustday } from "../svg/dust-day.svg";
import { ReactComponent as Fogday } from "../svg/fog-day.svg";
import { ReactComponent as Clearday } from "../svg/clear-day.svg";
import { ReactComponent as Partlycloudyday } from "../svg/partly-cloudy-day.svg";
import { ReactComponent as Overcastday } from "../svg/overcast-day.svg";
//night
import { ReactComponent as Thunderstormsnightrain } from "../svg/thunderstorms-night-rain.svg";
import { ReactComponent as Thunderstormsnightovercastrain } from "../svg/thunderstorms-night-overcast-rain.svg";
import { ReactComponent as Thunderstormsnight } from "../svg/thunderstorms-night.svg";
import { ReactComponent as Partlycloudynightdrizzle } from "../svg/partly-cloudy-night-drizzle.svg";
import { ReactComponent as Overcastnightdrizzle } from "../svg/overcast-night-drizzle.svg";
import { ReactComponent as Partlycloudynightrain } from "../svg/partly-cloudy-night-rain.svg";
import { ReactComponent as Overcastnightrain } from "../svg/overcast-night-rain.svg";
import { ReactComponent as Partlycloudynightsnow } from "../svg/partly-cloudy-night-snow.svg";
import { ReactComponent as Overcastnightsnow } from "../svg/overcast-night-snow.svg";
import { ReactComponent as Partlycloudynightsleet } from "../svg/partly-cloudy-night-sleet.svg";
import { ReactComponent as Overcastnightsleet } from "../svg/overcast-night-sleet.svg";
import { ReactComponent as Partlycloudynightsmoke } from "../svg/partly-cloudy-night-smoke.svg";
import { ReactComponent as Hazenight } from "../svg/haze-night.svg";
import { ReactComponent as Dustnight } from "../svg/dust-night.svg";
import { ReactComponent as Fognight } from "../svg/fog-night.svg";
import { ReactComponent as Clearnight } from "../svg/clear-night.svg";
import { ReactComponent as Partlycloudynight } from "../svg/partly-cloudy-night.svg";
import { ReactComponent as Overcastnight } from "../svg/overcast-night.svg";
//generic
import { ReactComponent as Thunderstorms } from "../svg/thunderstorms.svg";
import { ReactComponent as Thunderstormsovercast } from "../svg/thunderstorms-overcast.svg";
import { ReactComponent as Drizzle } from "../svg/drizzle.svg";
import { ReactComponent as Overcastdrizzle } from "../svg/overcast-drizzle.svg";
import { ReactComponent as Overcastrain } from "../svg/overcast-rain.svg";
import { ReactComponent as Sleet } from "../svg/sleet.svg";
import { ReactComponent as Overcastsnow } from "../svg/overcast-snow.svg";
import { ReactComponent as Mist } from "../svg/mist.svg";
import { ReactComponent as Overcastsmoke } from "../svg/overcast-smoke.svg";
import { ReactComponent as Wind } from "../svg/wind.svg";
import { ReactComponent as Tornado } from "../svg/tornado.svg";

const openWeatherMap = {
  day: {
    200: <Thunderstormsdayrain />,
    201: <Thunderstormsdayrain />,
    202: <Thunderstormsdayovercastrain />,
    210: <Thunderstormsday />,
    211: <Thunderstorms />,
    212: <Thunderstormsovercast />,
    221: <Thunderstormsovercast />,
    230: <Thunderstormsdayrain />,
    231: <Thunderstormsdayrain />,
    232: <Thunderstormsdayrain />,
    300: <Partlycloudydaydrizzle />,
    301: <Partlycloudydaydrizzle />,
    302: <Overcastdaydrizzle />,
    310: <Overcastdaydrizzle />,
    311: <Drizzle />,
    312: <Overcastdrizzle />,
    313: <Overcastdrizzle />,
    314: <Overcastrain />,
    321: <Overcastrain />,
    500: <Partlycloudydayrain />,
    501: <Partlycloudydayrain />,
    502: <Overcastdayrain />,
    503: <Overcastdayrain />,
    504: <Overcastrain />,
    511: <Sleet />,
    520: <Partlycloudydayrain />,
    521: <Partlycloudydayrain />,
    522: <Overcastdayrain />,
    531: <Overcastdayrain />,
    600: <Partlycloudydaysnow />,
    601: <Partlycloudydaysnow />,
    602: <Overcastdaysnow />,
    611: <Partlycloudydaysleet />,
    612: <Partlycloudydaysleet />,
    613: <Overcastdaysleet />,
    615: <Partlycloudydaysleet />,
    616: <Partlycloudydaysleet />,
    620: <Partlycloudydaysnow />,
    621: <Partlycloudydaysnow />,
    622: <Overcastsnow />,
    701: <Mist />,
    711: <Partlycloudydaysmoke />,
    721: <Hazeday />,
    731: <Dustday />,
    741: <Fogday />,
    751: <Dustday />,
    761: <Dustday />,
    762: <Overcastsmoke />,
    771: <Wind />,
    781: <Tornado />,
    800: <Clearday />,
    801: <Partlycloudyday />,
    802: <Partlycloudyday />,
    803: <Overcastday />,
    804: <Overcastday />,
  },
  night: {
    200: <Thunderstormsnightrain />,
    201: <Thunderstormsnightrain />,
    202: <Thunderstormsnightovercastrain />,
    210: <Thunderstormsnight />,
    211: <Thunderstorms />,
    212: <Thunderstormsovercast />,
    221: <Thunderstormsovercast />,
    230: <Thunderstormsnightrain />,
    231: <Thunderstormsnightrain />,
    232: <Thunderstormsnightrain />,
    300: <Partlycloudynightdrizzle />,
    301: <Partlycloudynightdrizzle />,
    302: <Overcastnightdrizzle />,
    310: <Overcastnightdrizzle />,
    311: <Drizzle />,
    312: <Overcastdrizzle />,
    313: <Overcastdrizzle />,
    314: <Overcastrain />,
    321: <Overcastrain />,
    500: <Partlycloudynightrain />,
    501: <Partlycloudynightrain />,
    502: <Overcastnightrain />,
    503: <Overcastnightrain />,
    504: <Overcastrain />,
    511: <Sleet />,
    520: <Partlycloudynightrain />,
    521: <Partlycloudynightrain />,
    522: <Overcastnightrain />,
    531: <Overcastnightrain />,
    600: <Partlycloudynightsnow />,
    601: <Partlycloudynightsnow />,
    602: <Overcastnightsnow />,
    611: <Partlycloudynightsleet />,
    612: <Partlycloudynightsleet />,
    613: <Overcastnightsleet />,
    615: <Partlycloudynightsleet />,
    616: <Partlycloudynightsleet />,
    620: <Partlycloudynightsnow />,
    621: <Partlycloudynightsnow />,
    622: <Overcastsnow />,
    701: <Mist />,
    711: <Partlycloudynightsmoke />,
    721: <Hazenight />,
    731: <Dustnight />,
    741: <Fognight />,
    751: <Dustnight />,
    761: <Dustnight />,
    762: <Overcastsmoke />,
    771: <Wind />,
    781: <Tornado />,
    800: <Clearnight />,
    801: <Partlycloudynight />,
    802: <Partlycloudynight />,
    803: <Overcastnight />,
    804: <Overcastnight />,
  },
};

export { openWeatherMap };
