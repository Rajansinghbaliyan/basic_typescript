import { User } from "./User";

const user = new User();

console.log(user);
new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: { lat: user.location.lat, lng: user.location.lng },
});
