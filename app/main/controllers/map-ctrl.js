'use strict';
angular.module('main')
  .controller('MapCtrl', function ($scope, $ionicSideMenuDelegate) {

    $ionicSideMenuDelegate.canDragContent(false);

    /**
     *
     * @type {{defaultIcon: {iconUrl: string, iconSize: number[]}, authIcon: {iconUrl: string, iconSize: number[]}, policeIcon: {iconUrl: string, iconSize: number[]}, hospitalIcon: {iconUrl: string, iconSize: number[]}}}
     */
    /*var localIcons = {
      defaultIcon: {
        iconUrl: 'main/assets/images/svgs/marker-15.svg',
        iconSize: [38, 95]
      },
      authIcon: {
        iconUrl: 'main/assets/images/svgs/town-hall-15.svg',
        iconSize: [38, 95]
      },
      policeIcon: {
        iconUrl: 'main/assets/images/svgs/police-15.svg',
        iconSize: [38, 95]
      },
      hospitalIcon: {
        iconUrl: 'main/assets/images/svgs/hospital-15.svg',
        iconSize: [38, 95]
      }
    };*/

    /**
     *
     */
    angular.extend($scope, {
      centerGiessen: {
        lat: 50.583732,
        lng: 8.678344,
        zoom: 13
      },
      defaults: {
        tileLayer: 'main/assets/images/mapTiles/{z}/{x}/{y}.png',
        maxZoom: 15,
        minZoom: 12,
        tileLayerOptions: {
          attribution: '© Mobile Atlas Creator © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      },
      markers: {
        rathaus: {
          lat: 50.58395531171265,
          lng: 8.679912686347961,
          message: 'Rathaus Giessen',
          focus: true,
          draggable: false
        },
        polizeiGi: {
          lat: 50.58432998347547,
          lng: 8.680889010429382,
          message: 'Polizei Giessen Mitte',
          focus: true,
          draggable: false
        },
        polizeiPraes: {
          lat: 50.5704367,
          lng: 8.6841344,
          message: 'Polizeipräsidium Mittelhessen',
          focus: true,
          draggable: false
        },
        uniKlinik: {
          lat: 50.57527571694196,
          lng: 8.666152954101562,
          message: 'Uniklinikum Giessen(UKGM)',
          focus: true,
          draggable: false
        },
        stJosefKlinik: {
          lat: 50.579302321268386,
          lng: 8.668395280838013,
          message: 'St. Josefs Krankenhaus',
          focus: true,
          draggable: false
        },
        evKrankGi: {
          lat: 50.5906146,
          lng: 8.6493979,
          message: 'Evangelisches Krankenhaus Giessen',
          focus: true,
          draggable: false
        },
        landkreisGi: {
          lat: 50.5755086,
          lng: 8.7078234,
          message: 'Landkreis Giessen',
          focus: true,
          draggable: false
        },
        heae: {
          lat: 50.578131,
          lng: 8.6576524,
          message: 'Hessische Erstaufnahmeeinrichtung für Flüchtlinge Giessen(HEAE)',
          focus: true,
          draggable: false
        },
        bahnhofGi: {
          lat: 50.5806117,
          lng: 8.6623546,
          message: 'Bahnhof Giessen',
          focus: true,
          draggable: false
        }
      }
    });

    /*$scope.markerCluster = L.markerClusterGroup();

     for (var i = 0; i <$scope.markers.length; ++i){
     var popup = $scope.markers[i].message +
     '</br><b>Lat: </b>' + $scope.markers[i].lat +
     '</br><b>Lng: </b>' + $scope.markers[i].lng;

     var m = L.marker([$scope.markers[i].lat, $scope.markers[i].lng], {icon: $scope.markers[i].icon}).bindPopup(popup);

     $scope.markerCluster.addLayer(m);
     }

     $scope.centerGiessen.addLayer($scope.markerCluster);

     //leafletData.getMap().addLayer($scope.markerCluster);

     .then(function (map) {
     map.attributionControl.setPrefix('<a href='#' onClick='window.open(\'http://leafletjs.com\',\'_system\');return false;'>Leaflet</a>');
     $http.get('scripts/controllers/map.geojson').success(function (data) {
     L.geoJson(data, {
     invert:true
     }).addTo(map);
     });
     });*/
  });
