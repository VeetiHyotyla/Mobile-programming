export const getGeocodeLocation = async (locationName) => {
  const API_KEY = 'AIzaSyDY8sthgVWWh6i40sgI6NqPcVt-lAa0HVU';
  const url = `https:/maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      console.log('Geocode error: ', data.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching geocode data:', error);
    return null;
  }
};
