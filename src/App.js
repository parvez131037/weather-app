import React, { useEffect, useState } from "react";
import { GiModernCity } from "react-icons/gi";
import {FaTemperatureLow,FaTemperatureHigh, FaCompressAlt} from "react-icons/fa";
import { ImSun } from "react-icons/im"
import { TiWeatherCloudy } from "react-icons/ti"
import {WiHumidity} from "react-icons/wi"

const App = () => {
  const [search, setSearch] = useState("Delhi");
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=be4fc06ce51545dfb509fbaf92048b51&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <div className="bg-slate-100 md:max-w-[600px] mx-auto min:h-screen mt-10 shadow-lg shadow-slate-300">
        <div className="md:max-w-[500px] mx-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Enter City Name To Search"
            className="w-full mt-10 border rounded-md shadow-md p-2 border-gray-300 outline-none text-gray-500"
          />
        </div>

        <div>
          <div className="flex justify-center items-center my-[50px] p-4">
            <span className="text-5xl mr-5 text-teal-600">
              <GiModernCity />
            </span>
            <h1 className="text-4xl font-semibold text-blue-900 uppercase">
              {search}
            </h1>
          </div>

          {!city ? (
            <h1 className="text-centre font-medium text-xl">No data</h1>
          ) : (
            <>
              <div class="relative mx-auto">
                <table class="w-full text-sm text-left">
                  <tbody className="">
                    <tr class="bg-white border-b">
                      <th
                        scope="row"
                        class="px-20 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Climate
                      </th>
                      <td><p className="inline-block text-3xl text-sky-400"><TiWeatherCloudy/></p></td>
                      <td class="px-6 py-4">
                        {!city.weather ? (
                          <p className="text-red-500">NO DATA FOUND</p>
                        ) : (
                          <p>{city.weather[0].description}</p>
                        )}
                      </td>
                    </tr>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="px-20 py-4 font-medium text-gray-900"
                      >
                        Temprature
                      </th>
                      <td><p className="inline-block text-2xl text-yellow-400"><ImSun/></p></td>
                      <td class="px-6 py-4">
                        {!city.main ? null : <p>{city.main.temp}°C</p>}
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <th
                        scope="row"
                        class="px-20 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Min Temperature 
                      </th>
                      <td>
                      <p className="inline-block text-2xl text-green-400"><FaTemperatureLow/></p>
                      </td>
                      <td class="px-6 py-4">
                        {!city.main ? null : <p>{city.main.temp_min}°C</p>}
                      </td>
                    </tr>
                  </tbody>
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-20 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Max Temperature
                    </th>
                    <td><p className="inline-block text-2xl text-orange-600"><FaTemperatureHigh/></p></td>
                    <td class="px-6 py-4">
                      {!city.main ? null : <p>{city.main.temp_max}°C</p>}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-20 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Humidity
                    </th>
                    <td><p className="inline-block text-4xl text-violet-500"><WiHumidity/></p></td>
                    <td class="px-6 py-4">
                      {!city.main ? null : <p>{city.main.humidity}</p>}
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-20 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Pressure
                    </th>
                    <td><p className="inline-block text-2xl text-red-500"><FaCompressAlt/></p></td>
                    <td class="px-6 py-4">
                      {!city.main ? null : <p>{city.main.pressure}</p>}
                    </td>
                  </tr>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
