import axios from 'axios';

const apiKey = 'AIzaSyDY8sthgVWWh6i40sgI6NqPcVt-lAa0HVU';

export const getGeocodeLocation = async (locationName) => {
  try {
    const url = const url = `https:/maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=${apiKey}`;

    const response = await axios.get(url);
    const { results } = response.data;
    if (results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      return { lat, lng };
    }
  } catch (error) {
    console.error('Error fetching geocode location:', error);
  }
  return null;
};
