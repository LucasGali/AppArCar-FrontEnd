function cov_1xlgc4hsid() {
  var path = "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\utils\\text.js";
  var hash = "6f1e592c547034a99cb5d53abeacf5ef80348e6c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\utils\\text.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 13
        },
        end: {
          line: 129,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6f1e592c547034a99cb5d53abeacf5ef80348e6c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xlgc4hsid = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1xlgc4hsid();
const text = (cov_1xlgc4hsid().s[0]++, {
  general: {
    name: 'Nombre',
    surname: 'Apellido',
    email: 'Direccion de Email',
    age: 'Edad',
    vehicle: 'Tipo de Vehiculo',
    plate: 'Patente'
  },
  landingPage: {
    title: 'Proyecto Final Tecnicatura en Desarrollo de Software y Control de Calidad',
    subtitle: 'Integrantes: Gonzalo Alvarez Campos, Lourdes Delgado Vitalone, Agustín Fogliatto, Lucas Gali, Ignacio Granero, Rodrigo Rivadeneira, Jacqueline Zelaya',
    sections: {
      section1: {
        title: 'Una nueva forma de estacionar',
        text: '¡RÁPIDO, FÁCIL Y PRÁCTICO DE USAR!'
      },
      section2: {
        title: 'Tecnologias que se usaron',
        text: 'Para realizar este proyecto se utilizaron tecnologias como MongoDB, Express, ReactJs, NodeJs y herramientas de testeo como Mocha y Chai. Se trabajo en gitlab y despues se migro a github. Usamos como hosting netlify para el front end y heroku para el backend. Para la seccion de metrics usamos una libreria llamada Highcharts para generar graficas dinamicas e interactivas!'
      },
      section3: {
        title: 'Proceso',
        text1: 'Este proyecto nació en Desarrollo de Software en el 2019, la primera experiencia fue abordada con un cliente real que detecto un nicho en el mercado no satisfecho. Así nace AppArCar, una solución diseñada para quienes se encuentran expuestos diariamente al caos del Microcentro Tucumano. Buscamos que puedas ahorrar tu tiempo y disfrutarlo en lo que vos quieras. Menos tiempo buscando estacionamiento mas tiempo disfrutando de lo que mas te guste.',
        text2: 'Este proyecto disruptivo promueve la experiencia de introducirse en un mundo laboral desde la simulación de start up que cumple con los objetivos pactados. Esto nos permite colaborar desde diferentes roles en el marco de trabajo scrum de las metodologías ágiles y también el uso de herramientas de gestión. De este modo podemos experimentar e implementar los conocimientos técnicos y soft skills adquiridas durante el desarrollo de siete sprint.'
      }
    }
  },
  home: {
    welcome: 'Bienvenidos a AppArCar',
    table: {
      searchInput: 'Buscar por nombre y/o direccion'
    }
  },
  parkingTable: {
    columns: {
      name: 'Nombre',
      address: 'Direccion',
      attention: 'Horario de Atencion',
      price: 'Precio',
      reserve: 'Reservar',
      cancel: 'Cancelar'
    }
  },
  registrationForm: {
    btn: 'Crear Cuenta',
    password: 'Contraseña',
    confirmPsw: 'Confirmar Contraseña',
    msg: 'Estas a un click de tu reserva',
    error_nodata: "Por favor, completar el formulario",
    error_email: 'El mail ya existe',
    error_confirm: 'La contraseña es distinta a la confirmada'
  },
  signIn: {
    sign: 'Ingresar',
    msg: 'Bienvenido'
  },
  profile: {
    title: 'Perfil',
    vehicleTitle: 'Vehiculo',
    vehiclePlate: 'Patente',
    vehicleType: 'Tipo',
    msg: 'Informacion Personal',
    delete: 'Eliminar cuenta',
    updateError: 'La informacion ingresada no es valida, ingrese informacion valida',
    updateCorrect: 'Informacion del usuario actualizada exitosamente',
    credit: 'Tarjeta',
    number: 'Numero de tarjeta',
    complete_name: 'Nombre',
    expiry: 'Vencimiento',
    valid_until: 'vence',
    cvc: 'CVC',
    company: 'Empresa',
    register: 'Registrar Tarjeta',
    invalid_data: 'Informacion no valida'
  },
  metrics: {
    title: 'Metricas del Proyecto Final',
    subtitle: 'Aqui les mostraremos algunos graficos con datos que se fueron tomando a lo largo del proceso de desarrollo de este proyecto.',
    firstMetric: 'Aqui vamos a tener humo de planning'
  },
  notFound: {
    msg: '404 - Not Found!',
    back: 'Volver',
    redirect: 'Retornando al Inicio'
  },
  navbar: {
    signin: 'Ingresar',
    signup: 'Registrarse',
    app: 'AppArCar',
    back: 'Volver',
    signOff: 'Cerrar Sesion',
    home: 'Inicio',
    profile: 'Perfil',
    metrics: 'Metricas'
  },
  footer: {
    unsta: 'Universidad del Norte Santo Tomas de Aquino - Tucuman, Argentina, 2021 |',
    site: 'apparcar-unsta.netlify.app',
    unstaBtn: '- UNSTA - TDSC',
    gdocBtn: '- G-Doc',
    trelloBtn: '- Trello Board',
    repoBtn: '- Repositorio'
  },
  vehicleOptions: {
    title: 'Elegir tipo de Vehiculo',
    motorbike: 'Moto',
    car: 'Auto',
    truck: 'Camioneta'
  },
  modal: {
    close: 'Cerrar',
    save: 'Guardar Cambios',
    textReserve: 'La reserva fue exitosa',
    textCancel: 'La reserva fue cancelada',
    alert: 'Hubo un error con la reserva o el estacionamiento se quedo sin lugares. Lo sentimos!'
  },
  noParking: {
    text: 'Lo sentimos, pero no hay estacionamientos cerca.'
  }
});
export default text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsidGV4dCIsImdlbmVyYWwiLCJuYW1lIiwic3VybmFtZSIsImVtYWlsIiwiYWdlIiwidmVoaWNsZSIsInBsYXRlIiwibGFuZGluZ1BhZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2VjdGlvbnMiLCJzZWN0aW9uMSIsInNlY3Rpb24yIiwic2VjdGlvbjMiLCJ0ZXh0MSIsInRleHQyIiwiaG9tZSIsIndlbGNvbWUiLCJ0YWJsZSIsInNlYXJjaElucHV0IiwicGFya2luZ1RhYmxlIiwiY29sdW1ucyIsImFkZHJlc3MiLCJhdHRlbnRpb24iLCJwcmljZSIsInJlc2VydmUiLCJjYW5jZWwiLCJyZWdpc3RyYXRpb25Gb3JtIiwiYnRuIiwicGFzc3dvcmQiLCJjb25maXJtUHN3IiwibXNnIiwiZXJyb3Jfbm9kYXRhIiwiZXJyb3JfZW1haWwiLCJlcnJvcl9jb25maXJtIiwic2lnbkluIiwic2lnbiIsInByb2ZpbGUiLCJ2ZWhpY2xlVGl0bGUiLCJ2ZWhpY2xlUGxhdGUiLCJ2ZWhpY2xlVHlwZSIsImRlbGV0ZSIsInVwZGF0ZUVycm9yIiwidXBkYXRlQ29ycmVjdCIsImNyZWRpdCIsIm51bWJlciIsImNvbXBsZXRlX25hbWUiLCJleHBpcnkiLCJ2YWxpZF91bnRpbCIsImN2YyIsImNvbXBhbnkiLCJyZWdpc3RlciIsImludmFsaWRfZGF0YSIsIm1ldHJpY3MiLCJmaXJzdE1ldHJpYyIsIm5vdEZvdW5kIiwiYmFjayIsInJlZGlyZWN0IiwibmF2YmFyIiwic2lnbmluIiwic2lnbnVwIiwiYXBwIiwic2lnbk9mZiIsImZvb3RlciIsInVuc3RhIiwic2l0ZSIsInVuc3RhQnRuIiwiZ2RvY0J0biIsInRyZWxsb0J0biIsInJlcG9CdG4iLCJ2ZWhpY2xlT3B0aW9ucyIsIm1vdG9yYmlrZSIsImNhciIsInRydWNrIiwibW9kYWwiLCJjbG9zZSIsInNhdmUiLCJ0ZXh0UmVzZXJ2ZSIsInRleHRDYW5jZWwiLCJhbGVydCIsIm5vUGFya2luZyJd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LElBQUFBLFdBQVcsRUFBRSx3QkFIUjtBQUlMQyxJQUFBQSxVQUFVLEVBQUUsMEJBSlA7QUFLTEMsSUFBQUEsS0FBSyxFQUNIO0FBTkcsR0FySEk7QUE2SFhDLEVBQUFBLFNBQVMsRUFBRTtBQUNUakYsSUFBQUEsSUFBSSxFQUFFO0FBREc7QUE3SEEsQ0FBSCxDQUFWO0FBa0lBLGVBQWVBLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZXh0ID0ge1xyXG4gIGdlbmVyYWw6IHtcclxuICAgIG5hbWU6ICdOb21icmUnLFxyXG4gICAgc3VybmFtZTogJ0FwZWxsaWRvJyxcclxuICAgIGVtYWlsOiAnRGlyZWNjaW9uIGRlIEVtYWlsJyxcclxuICAgIGFnZTogJ0VkYWQnLFxyXG4gICAgdmVoaWNsZTogJ1RpcG8gZGUgVmVoaWN1bG8nLFxyXG4gICAgcGxhdGU6ICdQYXRlbnRlJyxcclxuICB9LFxyXG4gIGxhbmRpbmdQYWdlOiB7XHJcbiAgICB0aXRsZTpcclxuICAgICAgJ1Byb3llY3RvIEZpbmFsIFRlY25pY2F0dXJhIGVuIERlc2Fycm9sbG8gZGUgU29mdHdhcmUgeSBDb250cm9sIGRlIENhbGlkYWQnLFxyXG4gICAgc3VidGl0bGU6XHJcbiAgICAgICdJbnRlZ3JhbnRlczogR29uemFsbyBBbHZhcmV6IENhbXBvcywgTG91cmRlcyBEZWxnYWRvIFZpdGFsb25lLCBBZ3VzdMOtbiBGb2dsaWF0dG8sIEx1Y2FzIEdhbGksIElnbmFjaW8gR3JhbmVybywgUm9kcmlnbyBSaXZhZGVuZWlyYSwgSmFjcXVlbGluZSBaZWxheWEnLFxyXG4gICAgc2VjdGlvbnM6IHtcclxuICAgICAgc2VjdGlvbjE6IHtcclxuICAgICAgICB0aXRsZTogJ1VuYSBudWV2YSBmb3JtYSBkZSBlc3RhY2lvbmFyJyxcclxuICAgICAgICB0ZXh0OiAnwqFSw4FQSURPLCBGw4FDSUwgWSBQUsOBQ1RJQ08gREUgVVNBUiEnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWN0aW9uMjoge1xyXG4gICAgICAgIHRpdGxlOiAnVGVjbm9sb2dpYXMgcXVlIHNlIHVzYXJvbicsXHJcbiAgICAgICAgdGV4dDogJ1BhcmEgcmVhbGl6YXIgZXN0ZSBwcm95ZWN0byBzZSB1dGlsaXphcm9uIHRlY25vbG9naWFzIGNvbW8gTW9uZ29EQiwgRXhwcmVzcywgUmVhY3RKcywgTm9kZUpzIHkgaGVycmFtaWVudGFzIGRlIHRlc3RlbyBjb21vIE1vY2hhIHkgQ2hhaS4gU2UgdHJhYmFqbyBlbiBnaXRsYWIgeSBkZXNwdWVzIHNlIG1pZ3JvIGEgZ2l0aHViLiBVc2Ftb3MgY29tbyBob3N0aW5nIG5ldGxpZnkgcGFyYSBlbCBmcm9udCBlbmQgeSBoZXJva3UgcGFyYSBlbCBiYWNrZW5kLiBQYXJhIGxhIHNlY2Npb24gZGUgbWV0cmljcyB1c2Ftb3MgdW5hIGxpYnJlcmlhIGxsYW1hZGEgSGlnaGNoYXJ0cyBwYXJhIGdlbmVyYXIgZ3JhZmljYXMgZGluYW1pY2FzIGUgaW50ZXJhY3RpdmFzIScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY3Rpb24zOiB7XHJcbiAgICAgICAgdGl0bGU6ICdQcm9jZXNvJyxcclxuICAgICAgICB0ZXh0MTpcclxuICAgICAgICAgICdFc3RlIHByb3llY3RvIG5hY2nDsyBlbiBEZXNhcnJvbGxvIGRlIFNvZnR3YXJlIGVuIGVsIDIwMTksIGxhIHByaW1lcmEgZXhwZXJpZW5jaWEgZnVlIGFib3JkYWRhIGNvbiB1biBjbGllbnRlIHJlYWwgcXVlIGRldGVjdG8gdW4gbmljaG8gZW4gZWwgbWVyY2FkbyBubyBzYXRpc2ZlY2hvLiBBc8OtIG5hY2UgQXBwQXJDYXIsIHVuYSBzb2x1Y2nDs24gZGlzZcOxYWRhIHBhcmEgcXVpZW5lcyBzZSBlbmN1ZW50cmFuIGV4cHVlc3RvcyBkaWFyaWFtZW50ZSBhbCBjYW9zIGRlbCBNaWNyb2NlbnRybyBUdWN1bWFuby4gQnVzY2Ftb3MgcXVlIHB1ZWRhcyBhaG9ycmFyIHR1IHRpZW1wbyB5IGRpc2ZydXRhcmxvIGVuIGxvIHF1ZSB2b3MgcXVpZXJhcy4gTWVub3MgdGllbXBvIGJ1c2NhbmRvIGVzdGFjaW9uYW1pZW50byBtYXMgdGllbXBvIGRpc2ZydXRhbmRvIGRlIGxvIHF1ZSBtYXMgdGUgZ3VzdGUuJyxcclxuICAgICAgICB0ZXh0MjpcclxuICAgICAgICAgICdFc3RlIHByb3llY3RvIGRpc3J1cHRpdm8gcHJvbXVldmUgbGEgZXhwZXJpZW5jaWEgZGUgaW50cm9kdWNpcnNlIGVuIHVuIG11bmRvIGxhYm9yYWwgZGVzZGUgbGEgc2ltdWxhY2nDs24gZGUgc3RhcnQgdXAgcXVlIGN1bXBsZSBjb24gbG9zIG9iamV0aXZvcyBwYWN0YWRvcy4gRXN0byBub3MgcGVybWl0ZSBjb2xhYm9yYXIgZGVzZGUgZGlmZXJlbnRlcyByb2xlcyBlbiBlbCBtYXJjbyBkZSB0cmFiYWpvIHNjcnVtIGRlIGxhcyBtZXRvZG9sb2fDrWFzIMOhZ2lsZXMgeSB0YW1iacOpbiBlbCB1c28gZGUgaGVycmFtaWVudGFzIGRlIGdlc3Rpw7NuLiBEZSBlc3RlIG1vZG8gcG9kZW1vcyBleHBlcmltZW50YXIgZSBpbXBsZW1lbnRhciBsb3MgY29ub2NpbWllbnRvcyB0w6ljbmljb3MgeSBzb2Z0IHNraWxscyBhZHF1aXJpZGFzIGR1cmFudGUgZWwgZGVzYXJyb2xsbyBkZSBzaWV0ZSBzcHJpbnQuJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBob21lOiB7XHJcbiAgICB3ZWxjb21lOiAnQmllbnZlbmlkb3MgYSBBcHBBckNhcicsXHJcbiAgICB0YWJsZToge1xyXG4gICAgICBzZWFyY2hJbnB1dDogJ0J1c2NhciBwb3Igbm9tYnJlIHkvbyBkaXJlY2Npb24nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhcmtpbmdUYWJsZToge1xyXG4gICAgY29sdW1uczoge1xyXG4gICAgICBuYW1lOiAnTm9tYnJlJyxcclxuICAgICAgYWRkcmVzczogJ0RpcmVjY2lvbicsXHJcbiAgICAgIGF0dGVudGlvbjogJ0hvcmFyaW8gZGUgQXRlbmNpb24nLFxyXG4gICAgICBwcmljZTogJ1ByZWNpbycsXHJcbiAgICAgIHJlc2VydmU6ICdSZXNlcnZhcicsXHJcbiAgICAgIGNhbmNlbDogJ0NhbmNlbGFyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZWdpc3RyYXRpb25Gb3JtOiB7XHJcbiAgICBidG46ICdDcmVhciBDdWVudGEnLFxyXG4gICAgcGFzc3dvcmQ6ICdDb250cmFzZcOxYScsXHJcbiAgICBjb25maXJtUHN3OiAnQ29uZmlybWFyIENvbnRyYXNlw7FhJyxcclxuICAgIG1zZzogJ0VzdGFzIGEgdW4gY2xpY2sgZGUgdHUgcmVzZXJ2YScsXHJcbiAgICBlcnJvcl9ub2RhdGE6IFwiUG9yIGZhdm9yLCBjb21wbGV0YXIgZWwgZm9ybXVsYXJpb1wiLFxyXG4gICAgZXJyb3JfZW1haWw6J0VsIG1haWwgeWEgZXhpc3RlJyxcclxuICAgIGVycm9yX2NvbmZpcm06ICdMYSBjb250cmFzZcOxYSBlcyBkaXN0aW50YSBhIGxhIGNvbmZpcm1hZGEnLFxyXG4gIH0sXHJcbiAgc2lnbkluOiB7XHJcbiAgICBzaWduOiAnSW5ncmVzYXInLFxyXG4gICAgbXNnOiAnQmllbnZlbmlkbycsXHJcbiAgfSxcclxuICBwcm9maWxlOiB7XHJcbiAgICB0aXRsZTogJ1BlcmZpbCcsXHJcbiAgICB2ZWhpY2xlVGl0bGU6ICdWZWhpY3VsbycsXHJcbiAgICB2ZWhpY2xlUGxhdGU6ICdQYXRlbnRlJyxcclxuICAgIHZlaGljbGVUeXBlOiAnVGlwbycsXHJcbiAgICBtc2c6ICdJbmZvcm1hY2lvbiBQZXJzb25hbCcsXHJcbiAgICBkZWxldGU6ICdFbGltaW5hciBjdWVudGEnLFxyXG4gICAgdXBkYXRlRXJyb3I6XHJcbiAgICAgICdMYSBpbmZvcm1hY2lvbiBpbmdyZXNhZGEgbm8gZXMgdmFsaWRhLCBpbmdyZXNlIGluZm9ybWFjaW9uIHZhbGlkYScsXHJcbiAgICB1cGRhdGVDb3JyZWN0OidJbmZvcm1hY2lvbiBkZWwgdXN1YXJpbyBhY3R1YWxpemFkYSBleGl0b3NhbWVudGUnLFxyXG4gICAgY3JlZGl0OiAnVGFyamV0YScsXHJcbiAgICBudW1iZXI6ICdOdW1lcm8gZGUgdGFyamV0YScsXHJcbiAgICBjb21wbGV0ZV9uYW1lOiAnTm9tYnJlJyxcclxuICAgIGV4cGlyeTogJ1ZlbmNpbWllbnRvJyxcclxuICAgIHZhbGlkX3VudGlsOiAndmVuY2UnLFxyXG4gICAgY3ZjOiAnQ1ZDJyxcclxuICAgIGNvbXBhbnk6ICdFbXByZXNhJyxcclxuICAgIHJlZ2lzdGVyOiAnUmVnaXN0cmFyIFRhcmpldGEnLFxyXG4gICAgaW52YWxpZF9kYXRhOiAnSW5mb3JtYWNpb24gbm8gdmFsaWRhJyxcclxuICB9LFxyXG4gIG1ldHJpY3M6IHtcclxuICAgIHRpdGxlOiAnTWV0cmljYXMgZGVsIFByb3llY3RvIEZpbmFsJyxcclxuICAgIHN1YnRpdGxlOlxyXG4gICAgICAnQXF1aSBsZXMgbW9zdHJhcmVtb3MgYWxndW5vcyBncmFmaWNvcyBjb24gZGF0b3MgcXVlIHNlIGZ1ZXJvbiB0b21hbmRvIGEgbG8gbGFyZ28gZGVsIHByb2Nlc28gZGUgZGVzYXJyb2xsbyBkZSBlc3RlIHByb3llY3RvLicsXHJcbiAgICBmaXJzdE1ldHJpYzogJ0FxdWkgdmFtb3MgYSB0ZW5lciBodW1vIGRlIHBsYW5uaW5nJyxcclxuICB9LFxyXG4gIG5vdEZvdW5kOiB7XHJcbiAgICBtc2c6ICc0MDQgLSBOb3QgRm91bmQhJyxcclxuICAgIGJhY2s6ICdWb2x2ZXInLFxyXG4gICAgcmVkaXJlY3Q6ICdSZXRvcm5hbmRvIGFsIEluaWNpbycsXHJcbiAgfSxcclxuICBuYXZiYXI6IHtcclxuICAgIHNpZ25pbjogJ0luZ3Jlc2FyJyxcclxuICAgIHNpZ251cDogJ1JlZ2lzdHJhcnNlJyxcclxuICAgIGFwcDogJ0FwcEFyQ2FyJyxcclxuICAgIGJhY2s6ICdWb2x2ZXInLFxyXG4gICAgc2lnbk9mZjogJ0NlcnJhciBTZXNpb24nLFxyXG4gICAgaG9tZTogJ0luaWNpbycsXHJcbiAgICBwcm9maWxlOiAnUGVyZmlsJyxcclxuICAgIG1ldHJpY3M6ICdNZXRyaWNhcycsXHJcbiAgfSxcclxuICBmb290ZXI6IHtcclxuICAgIHVuc3RhOlxyXG4gICAgICAnVW5pdmVyc2lkYWQgZGVsIE5vcnRlIFNhbnRvIFRvbWFzIGRlIEFxdWlubyAtIFR1Y3VtYW4sIEFyZ2VudGluYSwgMjAyMSB8JyxcclxuICAgIHNpdGU6ICdhcHBhcmNhci11bnN0YS5uZXRsaWZ5LmFwcCcsXHJcbiAgICB1bnN0YUJ0bjogJy0gVU5TVEEgLSBURFNDJyxcclxuICAgIGdkb2NCdG46ICctIEctRG9jJyxcclxuICAgIHRyZWxsb0J0bjogJy0gVHJlbGxvIEJvYXJkJyxcclxuICAgIHJlcG9CdG46ICctIFJlcG9zaXRvcmlvJyxcclxuICB9LFxyXG4gIHZlaGljbGVPcHRpb25zOiB7XHJcbiAgICB0aXRsZTogJ0VsZWdpciB0aXBvIGRlIFZlaGljdWxvJyxcclxuICAgIG1vdG9yYmlrZTogJ01vdG8nLFxyXG4gICAgY2FyOiAnQXV0bycsXHJcbiAgICB0cnVjazogJ0NhbWlvbmV0YScsXHJcbiAgfSxcclxuICBtb2RhbDoge1xyXG4gICAgY2xvc2U6ICdDZXJyYXInLFxyXG4gICAgc2F2ZTogJ0d1YXJkYXIgQ2FtYmlvcycsXHJcbiAgICB0ZXh0UmVzZXJ2ZTogJ0xhIHJlc2VydmEgZnVlIGV4aXRvc2EnLFxyXG4gICAgdGV4dENhbmNlbDogJ0xhIHJlc2VydmEgZnVlIGNhbmNlbGFkYScsXHJcbiAgICBhbGVydDpcclxuICAgICAgJ0h1Ym8gdW4gZXJyb3IgY29uIGxhIHJlc2VydmEgbyBlbCBlc3RhY2lvbmFtaWVudG8gc2UgcXVlZG8gc2luIGx1Z2FyZXMuIExvIHNlbnRpbW9zIScsXHJcbiAgfSxcclxuICBub1Bhcmtpbmc6IHtcclxuICAgIHRleHQ6ICdMbyBzZW50aW1vcywgcGVybyBubyBoYXkgZXN0YWNpb25hbWllbnRvcyBjZXJjYS4nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXh0XHJcbiJdfQ==