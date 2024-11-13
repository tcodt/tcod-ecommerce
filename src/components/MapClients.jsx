import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themesAnimated from "@amcharts/amcharts5/themes/Animated";
import worldLow from "@amcharts/amcharts5-geodata/worldLow";

const MapClients = () => {
  useEffect(() => {
    // Create root element
    const root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themesAnimated.new(root)]);

    // Create the chart
    const chart = root.container.children.push(am5map.MapChart.new(root, {}));

    // Create polygon series (for map background)
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: worldLow,
        exclude: ["AQ"],
      })
    );

    // Create point series (for data points)
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        calculateAggregates: true,
        polygonIdField: "id",
      })
    );

    // Define data with coordinates
    const data = [
      {
        id: "IR",
        name: "Iran",
        value: 23000,
        latitude: 38.89511,
        longitude: -77.03637,
      },
      {
        id: "US",
        name: "United States",
        value: 100,
        latitude: 38.89511,
        longitude: -77.03637,
      },
      {
        id: "GB",
        name: "United Kingdom",
        value: 1200,
        latitude: 51.509865,
        longitude: -0.118092,
      },
      {
        id: "CN",
        name: "China",
        value: 4500,
        latitude: 39.9042,
        longitude: 116.4074,
      },
      {
        id: "IN",
        name: "India",
        value: 3000,
        latitude: 28.6139,
        longitude: 77.209,
      },
      {
        id: "AU",
        name: "Australia",
        value: 11000,
        latitude: -33.8688,
        longitude: 151.2093,
      },
      {
        id: "CA",
        name: "Canada",
        value: 323,
        latitude: 45.4215,
        longitude: -75.6972,
      },
      {
        id: "BR",
        name: "Brazil",
        value: 456,
        latitude: -15.7801,
        longitude: -47.9292,
      },
      {
        id: "ZA",
        name: "South Africa",
        value: 56,
        latitude: -25.7479,
        longitude: 28.2293,
      },
    ];

    // Add data to point series
    pointSeries.data.setAll(data);

    // Create circle template for data points
    pointSeries.bullets.push((root, series, dataItem) => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          fill: am5.color("#eab308"),
          tooltipText: "{name}: [bold]{value}[/]",
        }),
      });
    });

    // Clean up on component unmount
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        id="chartdiv"
        className="w-4/5 h-[500px] border-2 border-purple-500 rounded"
      ></div>
    </div>
  );
};

export default MapClients;
