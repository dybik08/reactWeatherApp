import React from 'react';
import Chart from './chart';

const pickedCitiesChart = (props) => {
    const weather = props.weather;
    const pickedCities = props.pickedCities;


    if(weather.length == 0){
        return (
        <tr>
            <td> "Loading..." </td>
        </tr>
        );
    }

        let pickedCitiesTemps;
        const pickedWeathers = weather.filter((w) => pickedCities.includes(w.city.name));

        pickedCitiesTemps = pickedWeathers.map(weather => weather.list.map(temp => temp.main.temp));
//        console.log("pickedCitiesTemps: ", pickedCitiesTemps)

        const result = pickedCitiesTemps.reduce((a, b, index, self) => {
            const keys = Object.keys(a);
            if (keys.length == 0) {
                return b;
            }

            let c = [];
            keys.map((key) => {
                c[key] = a[key] + b[key]
                if (index + 1 === self.length) {
                    c[key] = c[key] / self.length;
                }
            });
            return c
        }, [])
    console.log('result', result)
    return (
    <tr className="col-md-12">
        <td className="col-md-6">
            <Chart data={result} color='green' units='Average temperature for next 5 days for picked cities'/>
        </td>
    </tr>
    );

}

export default pickedCitiesChart;


