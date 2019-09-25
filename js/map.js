var map = new L.map('mapid').setView([-10, -80], 3);

var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data � <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 12, attribution: osmAttrib});		

map.addLayer(osm);

var LeafIcon = L.Icon.extend({
options: {iconSize:     [10, 10]}
});

var mapmarker = new LeafIcon({iconUrl: 'images/marker.gif'});
L.marker([14.08331,-84.4994],{icon: mapmarker}).addTo(map).bindPopup("<b>Bosawas_Cola_Blanca_2012</b></br>Individual: 2</br>Stations: 9");
L.marker([14.24795,-84.92125],{icon: mapmarker}).addTo(map).bindPopup("<b>Bosawas_Kipla_Sait_Tasbaika_2007</b></br>Individual: 4</br>Stations: 33");
L.marker([14.24795,-84.92125],{icon: mapmarker}).addTo(map).bindPopup("<b>Bosawas_Kipla_Sait_Tasbaika_2011</b></br>Individual: 9</br>Stations: 28");
L.marker([14.23456,-85.04516],{icon: mapmarker}).addTo(map).bindPopup("<b>Bosawas_Mayangna_Sauni_Bu_2006</b></br>Individual: 4</br>Stations: 27");
L.marker([13.71022,-85.03109],{icon: mapmarker}).addTo(map).bindPopup("<b>Bosawas_Saslaya_2016</b></br>Individual: 3</br>Stations: 20");
L.marker([-12.43,-70.21],{icon: mapmarker}).addTo(map).bindPopup("<b>CM2 2010</b></br>Individual: 12</br>Stations: 30");
L.marker([14.50199,-85.08508],{icon: mapmarker}).addTo(map).bindPopup("<b>Darwing_Project_Nicaragua_2017</b></br>Individual: 4</br>Stations: 15");
L.marker([5.21083,-52.81416],{icon: mapmarker}).addTo(map).bindPopup("<b>Dispositif Jaguar</b></br>Individual: 19</br>Stations: 30");
L.marker([5.21083,-52.81416],{icon: mapmarker}).addTo(map).bindPopup("<b>Dispositif Jaguar</b></br>Individual: 19</br>Stations: 30");
L.marker([-11.48,-69.84],{icon: mapmarker}).addTo(map).bindPopup("<b>Espinoza 2009</b></br>Individual: 29</br>Stations: 38");
L.marker([-11.46,-69.7],{icon: mapmarker}).addTo(map).bindPopup("<b>Espinoza 2014</b></br>Individual: 43</br>Stations: 89");
L.marker([-25.760693,-54.267902],{icon: mapmarker}).addTo(map).bindPopup("<b>Green Corridor I</b></br>Individual: 12</br>Stations: 80");
L.marker([-25.760693,-54.267902],{icon: mapmarker}).addTo(map).bindPopup("<b>Green Corridor II</b></br>Individual: 30</br>Stations: 117");
L.marker([-25.810921,-54.299419],{icon: mapmarker}).addTo(map).bindPopup("<b>Iguaz�-Urugua-�</b></br>Individual: 14</br>Stations: 46");
L.marker([10.94477,-84.27161],{icon: mapmarker}).addTo(map).bindPopup("<b>Indio-Ma�z_2009</b></br>Individual: 7</br>Stations: 29");
L.marker([-1.70639,-76.00833],{icon: mapmarker}).addTo(map).bindPopup("<b>Keweriono</b></br>Individual: 9</br>Stations: 23");
L.marker([-1.01361,-77.12417],{icon: mapmarker}).addTo(map).bindPopup("<b>Lorocachi</b></br>Individual: 15</br>Stations: 26");
L.marker([-12.54,-70.06],{icon: mapmarker}).addTo(map).bindPopup("<b>Los Amigos 2005</b></br>Individual: 10</br>Stations: 24");
L.marker([-12.54,-70.06],{icon: mapmarker}).addTo(map).bindPopup("<b>Los Amigos 2006</b></br>Individual: 10</br>Stations: 40");
L.marker([-12.54,-70.06],{icon: mapmarker}).addTo(map).bindPopup("<b>Los Amigos 2007</b></br>Individual: 11</br>Stations: 40");
L.marker([-0.66972,-76.44694],{icon: mapmarker}).addTo(map).bindPopup("<b>Maxus Road</b></br>Individual: 3</br>Stations: 26");
L.marker([13.86138,-84.15171],{icon: mapmarker}).addTo(map).bindPopup("<b>RACN_Layasiksa2_ 2012</b></br>Individual: 2</br>Stations: 10");
L.marker([11.48001,-83.9475],{icon: mapmarker}).addTo(map).bindPopup("<b>RACS_PuntaGorda_2013</b></br>Individual: 1</br>Stations: 23");
L.marker([11.54984,-84.00357],{icon: mapmarker}).addTo(map).bindPopup("<b>RACS_Punta_Gorda_2014</b></br>Individual: 2</br>Stations: 33");
L.marker([16.111147,-90.952026],{icon: mapmarker}).addTo(map).bindPopup("<b>Selva Lacandona long-term monitoring program</b></br>Individual: 10</br>Stations: 33");
L.marker([18.2,-90.0],{icon: mapmarker}).addTo(map).bindPopup("<b>Silvituc_2018</b></br>Individual: 21</br>Stations: 69");
L.marker([-12.99,-69.46],{icon: mapmarker}).addTo(map).bindPopup("<b>Tambopata 2007</b></br>Individual: 7</br>Stations: 43");
L.marker([-0.70972,-76.00194],{icon: mapmarker}).addTo(map).bindPopup("<b>Tiputini</b></br>Individual: 6</br>Stations: 25");
L.marker([-5.737748863,-54.11150159],{icon: mapmarker}).addTo(map).bindPopup("<b>cenap_monitora_eetm</b></br>Individual: 3</br>Stations: 58");
L.marker([-3.644943151,-46.69123525],{icon: mapmarker}).addTo(map).bindPopup("<b>cenap_monitora_gurupi</b></br>Individual: 4</br>Stations: 60");
L.marker([-8.68957,-42.58463],{icon: mapmarker}).addTo(map).bindPopup("<b>cenap_pnsc_tetrapack</b></br>Individual: 25</br>Stations: 60");
