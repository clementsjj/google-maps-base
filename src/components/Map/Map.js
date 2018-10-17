import React, { Component } from 'react';

export class Map extends Component {

  state = {
      zoom = 14,
      lat = 40.7308,
      lng = -73.9973
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  componentDidMount() {
    this.loadMap();
  }
  loadMap() {
    if (this.props && this.props.google) {
      //google api is available ->
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const center = new maps.LatLng(this.state.lat, this.state.lng);
      const mapConfig = Object.assign({}, {
          center: center,
          zoom: this.state.zoom
      })

      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return <div ref="map">Loading Map...</div>;
  }
}
