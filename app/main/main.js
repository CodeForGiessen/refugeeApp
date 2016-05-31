'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ngCookies',
  'pascalprecht.translate',
  'leaflet-directive',
  'toastr'
])
.config(function ($stateProvider, $urlRouterProvider, $translateProvider, toastrConfig) {

  // ROUTING with ui.router
  //$urlRouterProvider.otherwise('/main/dashboard');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.dashboard', {
        url: '/dashboard',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/dashboard.html',
            controller: 'DashCtrl as ctrl'
          }
        }
      })
      .state('main.about', {
        url: '/about',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/about.html',
            controller: 'AboutCtrl as ctrl'
          }
        }
      })
      .state('main.guideline', {
        url: '/guideline',
        cache: false,
        views: {
          'pageContent': {
            templateUrl: 'main/templates/guideline.html',
            controller: 'GuidelineCtrl as ctrl'
          }
        }
      })
    .state('main.guideline-detail', {
      url: '/guideline/detail',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/guideline-detail.html',
          controller: 'GuidelineCtrl as ctrl'
        }
      },
      params: {
        idx: -1,
        title: 'noTitle'
      }
    })
    .state('main.info', {
      url: '/info',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/info.html',
          controller: 'InfoCtrl as ctrl'
        }
      }
    })
    .state('main.info-detail', {
      url: '/info/detail',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/info-detail.html',
          controller: 'InfoCtrl as ctrl'
        }
      },
      params: {
        index: -1
      }
    })
    .state('main.map', {
      url: '/map',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/map.html',
          controller: 'MapCtrl as ctrl'
        }
      }
    })
    .state('main.lang', {
      url: '/lang',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/lang-modal.html',
          controller: 'LanguageCtrl as ctrl'
        }
      }
    })
    .state('main.start', {
      url: '/start',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/start.html',
          controller: 'DashCtrl as ctrl'
        }
      }
    });

  $urlRouterProvider.otherwise(function ($injector) {
    var $state = $injector.get('$state');

    var defaultState = window.localStorage.getItem('defaultState') || 'main.start';
    $state.go(defaultState);
  });

  //german translation
  $translateProvider.translations('de_DE', {
    LANG_DE: 'Deutsch',
    LANG_EN: 'English',
    LANG_TR: 'Türkçe',
    LANG_AR: 'العربية',
    LANG_FR: 'français',
    LANG_AF: 'فارسی',
    CHANGELANG_TITLE: 'Sprache ändern',
    DASH_TITLE: 'Übersicht',
    GUIDE_TITLE: 'Verhaltensregeln',
    MAP_TITLE: 'Karte',
    INFO_TITLE: 'Informationen',
    ABOUT_TITLE: 'Über',
    WELCOME_TITLE: 'Herzlich willkommen in Gießen',
    DOWN_CONTENT_TITLE: 'Neue Inhalte herunterladen',
    DOWN_CONTENT_TEXT: 'Keine Verbindung zum WIFI-Netz. Wollen sie neue Inhalte trotzdem laden?',
    CANCEL_BUTTON: 'Abbrechen',
    OK_BUTTON: 'OK',
    FEEDBACK_CARD_TITLE: 'Feedback',
    FEEDBACK_CARD_BUTTON: 'Abschicken',
    FEEDBACK_CARD_NAME: 'Vorname',
    FEEDBACK_CARD_LASTNAME: 'Name',
    FEEDBACK_CARD_MESSAGE_PLACEHOLDER: 'Geben sie hier ihre Nachricht ein...',
    DEVELOPER_CARD_TITLE: 'Entwickler',
    LICENSE_CARD_TITLE: 'Lizenz',
    CHANGE_LANG_INFO: 'Wenn sie die Sprache ändern wird der gesamte Inhalt neu heruntergeladen.'
  });

  //english translation
  $translateProvider.translations('en_US', {
    LANG_DE: 'Deutsch',
    LANG_EN: 'English',
    LANG_TR: 'Türkçe',
    LANG_AR: 'العربية',
    LANG_FR: 'français',
    LANG_AF: 'فارسی',
    CHANGELANG_TITLE: 'Change language',
    DASH_TITLE: 'Dashboard',
    GUIDE_TITLE: 'Guidelines',
    MAP_TITLE: 'Map',
    INFO_TITLE: 'Information',
    ABOUT_TITLE: 'About',
    WELCOME_TITLE: 'Welcome to Gießen',
    DOWN_CONTENT_TITLE: 'Download new Content',
    DOWN_CONTENT_TEXT: 'No WiFi-Signal! Are you sure to load new content?',
    CANCEL_BUTTON: 'Cancel',
    OK_BUTTON: 'OK',
    FEEDBACK_CARD_TITLE: 'Feedback',
    FEEDBACK_CARD_BUTTON: 'Submit',
    FEEDBACK_CARD_NAME: 'First Name',
    FEEDBACK_CARD_LASTNAME: 'Last Name',
    FEEDBACK_CARD_MESSAGE_PLACEHOLDER: 'Your message here...',
    DEVELOPER_CARD_TITLE: 'Developer',
    LICENSE_CARD_TITLE: 'License',
    CHANGE_LANG_INFO: 'Please notice! When you change the language then it will downloads new content.'
  });

  //turkish translation
  $translateProvider.translations('tr_TR', {
    LANG_DE: 'Deutsch',
    LANG_EN: 'English',
    LANG_TR: 'Türkçe',
    LANG_AR: 'العربية',
    LANG_FR: 'français',
    LANG_AF: 'فارسی',
    CHANGELANG_TITLE: 'dili değiştir',
    DASH_TITLE: 'Özet',
    GUIDE_TITLE: 'davranış kuralları',
    MAP_TITLE: 'harita',
    INFO_TITLE: 'resmi daire',
    ABOUT_TITLE: 'hakkında',
    WELCOME_TITLE: 'Gießen`e Hoş geldiniz!',
    DOWN_CONTENT_TITLE: 'yeni içindekileri indir',
    DOWN_CONTENT_TEXT: 'WIFI`ye bağlantı kurulamadı. Yinede yeni çindekileri indirmek isdiyormusunuz?',
    CANCEL_BUTTON: 'iplat',
    OK_BUTTON: 'OK',
    FEEDBACK_CARD_TITLE: 'geri bildirim',
    FEEDBACK_CARD_BUTTON: 'göndermek',
    FEEDBACK_CARD_NAME: 'adınız',
    FEEDBACK_CARD_LASTNAME: 'soyadınız ',
    FEEDBACK_CARD_MESSAGE_PLACEHOLDER: 'mesajınızı buraya yazın...',
    DEVELOPER_CARD_TITLE: 'geliştirici',
    LICENSE_CARD_TITLE: 'lisans'
  });

  //arabic translation
  $translateProvider.translations('ar_SY', {
    LANG_DE: 'Deutsch',
    LANG_EN: 'English',
    LANG_TR: 'Türkçe',
    LANG_AR: 'العربية',
    LANG_FR: 'français',
    LANG_AF: 'فارسی'
  });

  //french translation
  $translateProvider.translations('fr_FR', {
    LANG_DE: 'Deutsch',
    LANG_EN: 'English',
    LANG_TR: 'Türkçe',
    LANG_AR: 'العربية',
    LANG_FR: 'français',
    LANG_AF: 'فارسی'
  });

  //farsi translation
  $translateProvider.translations('fa_AF', {
    LANG_DE: 'Deutsch',
    LANG_EN: 'English',
    LANG_TR: 'Türkçe',
    LANG_AR: 'العربية',
    LANG_FR: 'français',
    LANG_AF: 'فارسی'
  });

  //set preferred language for translation
  $translateProvider.preferredLanguage('en_US');
  //set fallback language for translation
  $translateProvider.fallbackLanguage('en_US');
  //use local storage to store the selected language
  $translateProvider.useLocalStorage();

  angular.extend(toastrConfig, {
    autoDismiss: true,
    containerId: 'toast-container',
    newestOnTop: true,
    positionClass: 'toast-bottom-center',
    target: 'body'
  });
});
