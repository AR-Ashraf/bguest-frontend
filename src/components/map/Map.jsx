import React from "react";
import GoogleMapReact from "google-map-react";
import { MAP_API } from "../../helpers/Constants";

const Map = ({height, width, lat, lng, markerName}) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng
    },
    zoom: 12
  };

  return (
    <div style={{ height: height, width: width }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <marker
          lat={lat}
          lng={lng}
          text={markerName}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
