angular.module('palConsumo', [])
  .controller('ConfController', function() {
    var conf = this;
    conf.datos = {
      direccion: 'XYZ',
      numero: 456,
      apto: '15',
      residentes: 4,
      metros: '120',
    }
  })
  .controller('CompareController', function() {
    var compare = this;
    compare.datos = {
      consumoAgua: 3900,
    }
  });
