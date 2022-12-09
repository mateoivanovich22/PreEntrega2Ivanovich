alert(
  "ESTA ES UNA PAGINA DE COTIZACIONES DE VEHICULOS, USTED PODRA ASEGURAR LA CANTIDAD DE VEHICULOS QUE QUIERA, SOLO ASEGURAMOS AUTOS, MOTOS O BICIS"
);

let vehiculoAsociado = [
  {
    tipo: "bici",
    precio: 2000,
    cantidad: 0,
  },
  {
    tipo: "moto",
    precio: 7000,
    cantidad: 0,
  },
  {
    tipo: "auto",
    precio: 10000,
    cantidad: 0,
  },
];

let precioMensualVehiculos = 0;

const pagoMensual = () => {
  let cantidadDeVehiculos = prompt("Cuantos vehiculos queres asegurar?");
  for (let i = 0; i < cantidadDeVehiculos; i++) {
    let vehiculo = prompt(
      `Tu vehiculo ${i + 1} es un auto, una bici o una moto?`
    );
    vehiculo.toLowerCase();

    if (vehiculo == vehiculoAsociado[0].tipo) {
      precioMensualVehiculos = precioMensualVehiculos + vehiculoAsociado[0].precio;
      vehiculoAsociado[0].cantidad++;
    } else if (vehiculo == vehiculoAsociado[1].tipo) {
      precioMensualVehiculos = precioMensualVehiculos + vehiculoAsociado[1].precio;
      vehiculoAsociado[1].cantidad++;
    } else if (vehiculo == vehiculoAsociado[2].tipo) {
      precioMensualVehiculos = precioMensualVehiculos + vehiculoAsociado[2 ].precio;
      vehiculoAsociado[2].cantidad++;
    }
  }

  return precioMensualVehiculos;
};

const escribirEnHtml = () => {
  const vehiculosHtml = document.getElementById("VehiculosJs");

  let texto = `Cantidad de ${vehiculoAsociado[0].tipo}: ${
    vehiculoAsociado[0].cantidad
  } a ${
    vehiculoAsociado[0].precio * vehiculoAsociado[0].cantidad
  }$\nCantidad de ${vehiculoAsociado[1].tipo}: ${
    vehiculoAsociado[1].cantidad
  } a ${
    vehiculoAsociado[1].precio * vehiculoAsociado[1].cantidad
  }$\nCantidad de ${vehiculoAsociado[2].tipo}: ${
    vehiculoAsociado[2].cantidad
  } a ${vehiculoAsociado[2].precio * vehiculoAsociado[2].cantidad}$`;

  vehiculosHtml.innerText = texto;

  const precioHtml = document.getElementById("textoJavaScript");
  let texto2 = `El abono mensual que tenes que abonar es de: ${precioMensualVehiculos}$`;
  precioHtml.innerText = texto2;

  //No lo logre hacer con un ciclo FOR haciendo un texto general recorriendo el array "vehiculoAsociado"
};

const asociarse = () => {
  let precio = pagoMensual();
  let preguntaAsociarse = prompt(
    `El valor total que debes abonar mensualmente es de ${precio} pesos\nDesea asociarse con nuestra empresa de seguros?\n(si o no)`
  );

  let seAsocio = false;

  if (preguntaAsociarse == "si") {
    seAsocio = true;
    escribirEnHtml();
  }

  return seAsocio;
};

const cotizadorDeSeguros = () => {
  let seAsocio = asociarse();
  if (seAsocio == true) {
    alert(
      "Gracias por asociarte, a continuacion usted podra confirmar los metodos de pago en la pagina web."
    );
  } else {
    alert("Que tenga un buen dia!");
  }
};

console.log(cotizadorDeSeguros());

console.log("---------------");

vehiculoAsociado.forEach((vehiculoAsociado) => {
  console.log(vehiculoAsociado);
});
