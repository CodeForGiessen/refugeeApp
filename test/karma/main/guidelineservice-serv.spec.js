'use strict';

describe('module: main, service: Guidelineservice', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Guidelineservice;
  beforeEach(inject(function (_Guidelineservice_) {
    Guidelineservice = _Guidelineservice_;
  }));

  it('should do something', function () {
    expect(!!Guidelineservice).toBe(true);
  });

  describe('testing localstorage functions', function () {
    it('should get the right language key', function () {
      var langkey = 'en_US';
      localStorage.setItem('NG_TRANSLATE_LANG_KEY', langkey);
      expect(Guidelineservice.getLangKey()).toEqual(langkey);
    });

    it('should get all categories', function () {
      var cats = '[{"_id":"5734507b131442de700f31cf","text":{"de_DE":"Öffentliches Leben","en_US":"public live"},"__v":0},{"_id":"5734efb09bb97bd7e9ead7fb","text":{"de_DE":"Persönliche Freiheiten","en_US":"personal freedom"},"__v":0},{"_id":"573db72c99a511a359cef52d","text":{"de_DE":"Gleichberechtigung"},"__v":0},{"_id":"57485ba0ba370ec8064476dd","text":{"de_DE":"Umweltfreundlichkeit und Hygiene"},"__v":0},{"_id":"574aaa499d4ba9c906572c2b","text":{"de_DE":"Essen und Trinken"},"__v":0},{"_id":"574aaa649d4ba9c906572c2c","text":{"de_DE":"Formalitäten"},"__v":0},{"_id":"574aaa6e9d4ba9c906572c2d","text":{"de_DE":"Notfälle"},"__v":0}]';
      localStorage.setItem('categories', JSON.stringify(cats));
      expect(Guidelineservice.findAllCategories()).toEqual(cats);
    });

    it('should get all guidelines', function () {
      var guidelines = 	'[{"_id":"573450e8131442de700f31d0","category":"5734507b131442de700f31cf","__v":0,"langs":["de_DE","en_US"],"guidelines":[{"_id":"573450e8131442de700f31d1","published":true,"text":"In Deutschland wird Lächeln nicht gleich direkt als Flirten angesehen. Manche Leute Lächeln einfach nur, weil sie freundlich sind.","motd_flag":true,"lang":"de_DE","metadata":{"date":"2016-05-12T09:46:16.889Z","author":{"username":"kd","userId":"574170da39d8aeae7856b750"}}}]},{"_id":"57345191131442de700f31d2","category":"5734507b131442de700f31cf","__v":0,"langs":["de_DE","en_US"],"guidelines":[{"text":"Laute Gespräche in der Öffentlichkeit (besonders im Zug oder im Bus) werden als sehr unhöflich angesehen. Zudem ist telefonieren im Bus untersagt. Man sollte daher eher im normalen/leisen Ton sprechen.","lang":"de_DE","published":true,"_id":"57345191131442de700f31d3","metadata":{"date":"2016-05-12T09:49:05.357Z","author":{"userId":"57344ffa131442de700f31ce","username":"fkolb"}}}]},{"_id":"5734519e131442de700f31d5","category":"5734507b131442de700f31cf","__v":0,"langs":["de_DE","en_US"],"guidelines":[{"text":"In Deutschland ist Privatsphäre sehr wichtig. Es kommt durchaus vor das man Stundenlang neben jemanden im Zug oder Bus sitzt und außer „Guten Tag“ und „Auf Wiedersehen“ nichts weiter gesagt wird.","lang":"de_DE","published":true,"_id":"5734519e131442de700f31d6","metadata":{"date":"2016-05-12T09:49:18.667Z","author":{"userId":"57344ffa131442de700f31ce","username":"fkolb"}}}]},{"_id":"573451a9131442de700f31d7","category":"5734507b131442de700f31cf","__v":0,"langs":["de_DE"],"guidelines":[{"text":"„Guten Tag“ und „Auf Wiedersehen“ sind bei uns in Deutschland sehr höfliche Umgangsformen. Dazu gehört auch das wichtige Wort „Danke“.","lang":"de_DE","published":true,"_id":"573451a9131442de700f31d8","metadata":{"date":"2016-05-12T09:49:29.430Z","author":{"username":"jschmitt","userId":"5734519b131442de700f31d4"}}}]},{"_id":"573451ba131442de700f31d9","category":"5734507b131442de700f31cf","__v":0,"langs":["de_DE"],"guidelines":[{"_id":"573451ba131442de700f31da","published":true,"lang":"de_DE","text":"Da uns in Deutschland die Privatsphäre sehr wichtig ist, zieht man sich gerne zurück. Dazu schließt man die Haustür oder die Bürotür. Man sollte dann vor dem Eintreten anklopfen oder klingeln.","metadata":{"date":"2016-05-12T09:49:46.596Z","author":{"username":"fkolb","userId":"57344ffa131442de700f31ce"}}}]},{"_id":"573451e0131442de700f31df","category":"5734507b131442de700f31cf","__v":0,"langs":["de_DE","en_US"],"guidelines":[{"text":"Es wird als unhöflich angesehen, wenn man in der Öffentlichkeit (hauptsächlich Zug oder Bus) laute Gespräche oder laute Telefonate führt. Man spricht oder telefoniert leise, damit man andere Menschen nicht stört.","lang":"de_DE","published":true,"_id":"573451e0131442de700f31e0","metadata":{"date":"2016-05-12T09:50:24.303Z","author":{"userId":"57344ffa131442de700f31ce","username":"fkolb"}}}]},{"_id":"5734efe59bb97bd7e9ead7fc","category":"5734efb09bb97bd7e9ead7fb","__v":0,"langs":["de_DE","en_US"],"guidelines":[{"lang":"de_DE","text":"Minderheiten, egal ob ethnisch oder aufgrund der sexuellen Orientierung, dürfen sich frei ausleben, solange sie damit nicht andere Leute in ihrer Freiheit begrenzen.","published":true,"_id":"5734efe59bb97bd7e9ead7fd","metadata":{"date":"2016-05-12T21:04:37.052Z","author":{"userId":"57344ffa131442de700f31ce","username":"fkolb"}}}]},{"_id":"5735b90c5ef85fe40619e7e4","category":"5734efb09bb97bd7e9ead7fb","__v":0,"langs":["de_DE","en_US"],"guidelines":[{"_id":"5735b90c5ef85fe40619e7e5","published":true,"text":"Jeder darf seine Meinung frei äußern.","lang":"de_DE","metadata":{"date":"2016-05-13T11:22:52.613Z","author":{"username":"fkolb","userId":"57344ffa131442de700f31ce"}}}]},{"_id":"57416c8639d8aeae7856b74c","category":"573db72c99a511a359cef52d","__v":0,"langs":["de_DE"],"guidelines":[{"_id":"57416c8639d8aeae7856b74d","published":true,"text":"Jeder Mensch hat in Deutschland die gleichen Rechte und Pflichten.","lang":"de_DE","metadata":{"date":"2016-05-22T08:23:34.250Z","author":{"username":"fkolb","userId":"57344ffa131442de700f31ce"}}}]},{"_id":"57416cc039d8aeae7856b74e","category":"573db72c99a511a359cef52d","__v":0,"langs":["de_DE"],"guidelines":[{"_id":"57416cc039d8aeae7856b74f","published":true,"text":"Männer und Frauen sind gleichgestellt. Belästigung von mitmenschen, egal ob männlich oder weiblich sind nicht erlaubt.","lang":"de_DE","metadata":{"date":"2016-05-22T08:24:32.836Z","author":{"username":"fkolb","userId":"57344ffa131442de700f31ce"}}}]}]';
      localStorage.setItem('guidelines_en_US', JSON.stringify(guidelines));
      expect(Guidelineservice.findAllGuidelines()).toEqual(guidelines);
    });
    //it('should get all guidelines by cat ID');

    it('should get motd', function () {
      var motd = '{"title": "Persönliche Freiheiten", "text": "In Deutschland wird Lächeln nicht gleich direkt als Flirten angesehen. Manche Leute Lächeln einfach nur, weil sie freundlich sind."}';
      localStorage.setItem('motd', JSON.stringify(motd));
      expect(Guidelineservice.findMotd()).toEqual(motd);
    });
  });

});
