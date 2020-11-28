//API Key 9004b4b735351afc586781e759cdd9d9
//API key uo226650 07b6411b853066034815f4b565dd1922

// Obtener un archivo JSON con lo datos meteorológicos de 3 ciudades de la ruta

/**
 * Encapsula los métodos en un objeto Meteo
 */
class Meteo {
  constructor(ciudad) {
    this.apikey = "07b6411b853066034815f4b565dd1922";
    this.ciudad = ciudad;
    this.codigoPais = "ES";
    this.unidades = "&units=metric";
    this.idioma = "&lang=es";
    this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
    this.correcto = "¡Todo correcto! JSON recibido de <a href='https://openweathermap.org'>OpenWeatherMap</a>"

  }
  procesaJSON() {
    $.ajax({
      dataType: "json",
      url: this.url,
      method: 'GET',
      success: function (datos) {

        //Procesamiento de los datos contenidos en JSON

        var stringDatos = "<h2>" + datos.name + "</h2>";
        stringDatos += "<ul><li>Latitud: " + datos.coord.lat + " grados</li>";
        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
        stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
        stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
        stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>";
        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li>";
        stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt * 1000).toLocaleTimeString() + "</li>";
        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt * 1000).toLocaleDateString() + "</li>";
        stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
        stringDatos += "<img src= '" +
          "https://openweathermap.org/img/wn/" + datos.weather[0].icon + "@2x.png '"
          + "alt='Icono " + datos.weather[0].description + "' width='300' height='300'/>";
        stringDatos += "<p>País: " + datos.sys.country + "</p>";
          $("div").html(stringDatos); 
      },
      error: function () {
        $("div").html("<h2>¡Tenemos problemas! No puedo obtener JSON de <a href='https://openweathermap.org'>OpenWeatherMap</a></h2>");
      }
    });
  }


  verJSON() {
    this.procesaJSON();
  }
}

var meteoOviedo = new Meteo("Oviedo");
var meteoSalas = new Meteo("Salas");
var meteoGrado = new Meteo("Grado");