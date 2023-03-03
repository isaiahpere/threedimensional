import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  // ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-6000.0, -52.0, 0],
        center: [7, -5],
        scale: 1300,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2c065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-115.22693, 36.14325]}
        dx={-140}
        dy={-10}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Las Vegas, NV"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
