window.onload = () => {
  const ironhackBER = {
    lat: 52.505439, 
    lng: 13.372941
  };
  
  const markers = []
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBER
  });

  let center = {
    lat: undefined,
    lng: undefined
  }; 
};
