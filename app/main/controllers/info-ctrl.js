'use strict';
angular.module('main')
  .controller('InfoCtrl', function ($scope, $state, $window) {

    $scope.index = $state.params.index;
    $scope.title = $state.params.title;

    $scope.infos = [
      {
        title: 'Gesundheit',
        subtitle: 'Gießen und Umgebung',
        imageUrl: 'main/assets/images/hospital.png',
        category: [
          {
            group: 'Wichtige Nummern',
            items: [
              {
                spec: 'Nummer',
                title: 'Feuerwehr und Rettungsdienst',
                location: '',
                tel: '112',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Polizei',
                location: '',
                tel: '110',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Giftnotruf',
                location: '',
                tel: '0613119240',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Notruf für vergewaltigte und belästigte Mädchen und Frauen',
                location: '',
                tel: '064173343',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Notruf für Schwangere und Mütter mit Neugeborenen in Not',
                location: '',
                tel: '08004560789',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Testanruf',
                location: '',
                tel: '064113097275',
                url: ''
              }
            ]
          },
          {
            group: 'Kliniken',
            items: [
              {
                spec: 'Klinik',
                title: 'Evangelisches Krankenhaus',
                location: 'Paul-Zipp-Straße 171, 35398 Giessen',
                tel: '064196060',
                url: 'http://ekm-gi.de'
              },
              {
                spec: 'Klinik',
                title: 'St. Josefs Krankenhaus / Balserische Stiftung',
                location: 'Wilhelmstraße 7, 35392 Giessen',
                tel: '064170020  (Standort St. Josefs Krankenhaus),  064179520 (Standort Balserische Stiftung)',
                url: 'http://jok-gi.de'
              },
              {
                spec: 'Klinik',
                title: 'Uniklinik Giessen und Marburg',
                location: 'Rudolf-Buchheim-Straße 8, 35394 Giessen',
                tel: '06419850',
                url: 'http://ukgm.de'
              },
              {
                spec: 'Klinik',
                title: 'Vitos Klinik für Psychiatrie und Psychotherapie Gießen (KPP)',
                location: 'Licher Straße 106, 35394 Giessen',
                tel: '06414030',
                url: 'http://vitos-giessen-marburg.de'
              }
            ]
          }
        ],
        show: false
      },
      {
        title: 'Behörden',
        subtitle: 'Gießen',
        imageUrl: 'main/assets/images/bank.png',
        category: [
          {
            group: 'Rathäuser',
            items: [
              {
                spec: '',
                title: 'Rathaus Gießen',
                location: 'Berliner Platz 1, 35390 Gießen',
                tel: '06413060',
                url: 'https://giessen.de'
              },
              {
                spec: '',
                title: 'Stadtbüro Wetzlar',
                location: 'Ernst-Leitz-Straße 30 , 35578 Wetzlar',
                tel: '06441990',
                url: 'http://wetzlar.de'
              },
              {
                spec: '',
                title: 'Stadtbüro Marburg',
                location: 'Frauenbergstraße 35, 35039 Marburg',
                tel: '064212011801',
                url: 'https://marburg.de'
              }
            ]
          },
          {
            group: 'Kreisausschüsse',
            items: [{
              spec: '',
              title: 'Landkreis Gießen',
              location: 'Riversplatz 1-9, 35394 Gießen',
              tel: '064193900',
              url: 'https://lkgi.de'
            }
            ]
          }
        ],
        show: false
      },
      {
        title: 'Links',
        subtitle: 'Gießen',
        imageUrl: 'main/assets/images/cursor.png',
        category: [
          {
            group: 'Gesundheit',
            items: [
              {
                lang: 'DE',
                title: 'Medizinische Versorgung',
                url: 'http://lkgi.de/images/formulare_downloads/Gesundheit_Soziales_Integration/Fluechtlinge_Asylbewerber/Flyer_medzinische_Versorgung_deutsch.pdf'
              },
              {
                lang: 'EN',
                title: 'Health care',
                url: 'https://www.lkgi.de/images/formulare_downloads/Gesundheit_Soziales_Integration/Fluechtlinge_Asylbewerber/Flyer_medzinische_Versorgung_englisch.pdf'
              },
              {
                lang: 'FR',
                title: 'Health care (French)',
                url: 'https://www.lkgi.de/images/formulare_downloads/Gesundheit_Soziales_Integration/Fluechtlinge_Asylbewerber/Flyer_medzinische_Versorgung_franzoesisch.pdf'
              },
              {
                lang: 'TR',
                title: 'Health care (Turkish)',
                url: 'https://www.lkgi.de/images/formulare_downloads/Gesundheit_Soziales_Integration/Fluechtlinge_Asylbewerber/Flyer_medzinische_Versorgung_tuerkisch.pdf'
              },
              {
                lang: 'AR',
                title: 'Health care (Arabic)',
                url: 'https://www.lkgi.de/images/formulare_downloads/Gesundheit_Soziales_Integration/Fluechtlinge_Asylbewerber/Flyer_medzinische_Versorgung_arabisch.pdf'
              },
              {
                lang: 'FA',
                title: 'Health care (Farsi)',
                url: 'https://www.lkgi.de/images/formulare_downloads/Gesundheit_Soziales_Integration/Fluechtlinge_Asylbewerber/Flyer_medzinische_Versorgung_farsi.pdf'
              }
            ]
          },
          {
            group: 'Asylverfahren',
            items: [
              {
              lang: '',
              title: 'Asylinformationen',
              url: 'https://lkgi.de'
            }
            ]
          }
        ],
        show: false
      }
    ];

    /**
     *
     * @param link
     */
    $scope.openLink = function (link) {
      if (link) {
        $window.open(link, '_system');
      }
    };

    /**
     *
     * @param number
     */
    $scope.openCall = function (number) {
      // window.plugins.CallNumber.callNumber()
      //   .onSuccess(function () {
      //     //console.log('success');
      //   })
      //   .onError(function () {
      //     //todo: toastr ausgabe
      //     //console.log('error');
      //   }, number, true);
      window.plugins.CallNumber.callNumber(function(){
        //success logic goes here
      }, function(){
        //error logic goes here
      }, number);
    };

    /**
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      group.show = !group.show;
    };
    $scope.isGroupShown = function (group) {
      return group.show;
    };
  });
