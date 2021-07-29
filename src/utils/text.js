const text = {
  general: {
    name: 'Nombre',
    surname: 'Apellido',
    email: 'Dirección de Email',
    age: 'Edad',
    vehicle: 'Tipo de Vehículo',
    plate: 'Patente',
  },
  landingPage: {
    title:
      'Proyecto Final Tecnicatura Universitaria en Desarrollo de Software y Control de Calidad',
    subtitle:
      'Integrantes: Gonzalo Alvarez Campos, Jacqueline Zelaya, Lourdes Delgado Vitalone, Lucas Gali, Agustín Fogliatto, Rodrigo Rivadeneira',
    sections: {
      section1: {
        title: 'Una nueva forma de estacionar',
        text: '¡RÁPIDO, FÁCIL Y PRÁCTICO DE USAR!',
      },
      section2: {
        title: 'Tecnologías que se implementaron',
        text: 'Para realizar este proyecto se utilizaron tecnologías como MongoDB, Express, ReactJs, NodeJs y herramientas de testeo como Mocha y Chai. Se trabajo en gitlab y despues se migro a github. Usamos como hosting netlify para el front end y heroku para el backend. Para la seccion de metrics usamos una libreria llamada Highcharts para generar graficas dinamicas e interactivas!',
      },
      section3: {
        title: 'Proceso',
        text1:
          'Este proyecto nació en Desarrollo de Software en el 2019, la primera experiencia fue abordada con un cliente real que detecto un nicho en el mercado no satisfecho. Así nace AppArCar, una solución diseñada para quienes se encuentran expuestos diariamente al caos del Microcentro Tucumano. Buscamos que puedas ahorrar tu tiempo y disfrutarlo en lo que vos quieras. Menos tiempo buscando estacionamiento mas tiempo disfrutando de lo que mas te guste.',
        text2:
          'Este proyecto disruptivo promueve la experiencia de introducirse en un mundo laboral desde la simulación de start up que cumple con los objetivos pactados. Esto nos permite colaborar desde diferentes roles en el marco de trabajo scrum de las metodologías ágiles y también el uso de herramientas de gestión. De este modo podemos experimentar e implementar los conocimientos técnicos y soft skills adquiridas durante el desarrollo de siete sprint.',
      },
    },
  },
  home: {
    welcome: 'Bienvenidos a AppArCar',
    table: {
      searchInput: 'Buscar por nombre y/o dirección',
    },
  },
  parkingTable: {
    columns: {
      name: 'Nombre',
      address: 'Dirección',
      attention: 'Horario de Atención',
      price: 'Precio',
      reserve: 'Reservar',
      cancel: 'Cancelar',
    },
  },
  registrationForm: {
    btn: 'Crear Cuenta',
    password: 'Contraseña',
    confirmPsw: 'Confirmar Contraseña',
    msg: 'Estás a un click de tu reserva',
    error_nodata: "Por favor, completar el formulario",
    error_email:'El mail ya existe',
    error_confirm: 'La contraseña es distinta a la confirmada',
  },
  signIn: {
    sign: 'Ingresar',
    msg: 'Bienvenido',
  },
  profile: {
    title: 'Perfil',
    vehicleTitle: 'Vehículo',
    vehiclePlate: 'Patente',
    vehicleType: 'Tipo',
    msg: 'Información Personal',
    delete: 'Eliminar cuenta',
    updateError:
      'La información ingresada no es válida, ingrese datos válidos',
    updateCorrect:'Información del usuario actualizada exitosamente',
    credit: 'Tarjeta',
    number: 'Número de tarjeta',
    complete_name: 'Nombre',
    expiry: 'Vencimiento',
    valid_until: 'vence',
    cvc: 'CVC',
    company: 'Empresa',
    register: 'Registrar Tarjeta',
    invalid_data: 'Información no válida',
  },
  metrics: {
    title: 'Métricas del Proyecto Final',
    subtitle:
      'En esta sección encontrarás información del progreso de nuestro proyecto.'
  },
  notFound: {
    msg: '404 - Not Found!',
    back: 'Volver',
    redirect: 'Retornando al Inicio',
  },
  navbar: {
    signin: 'Ingresar',
    signup: 'Registrarse',
    app: 'AppArCar',
    back: 'Volver',
    signOff: 'Cerrar Sesión',
    home: 'Inicio',
    profile: 'Perfil',
    metrics: 'Métricas',
  },
  footer: {
    unsta:
      'Universidad del Norte Santo Tomás de Aquíno - Tucumán, Argentina, 2021 |',
    site: 'apparcar-unsta.netlify.app',
    unstaBtn: '- UNSTA - TDSC',
    gdocBtn: '- G-Doc',
    trelloBtn: '- Trello Board',
    repoBtn: '- Repositorio',
  },
  vehicleOptions: {
    title: 'Elegir tipo de Vehículo',
    motorbike: 'Moto',
    car: 'Auto',
    truck: 'Camioneta',
  },
  modal: {
    close: 'Cerrar',
    save: 'Guardar Cambios',
    textReserve: 'La reserva fue exitosa',
    textCancel: 'La reserva fue cancelada',
    alert:
      'Hubo un error con la reserva o el estacionamiento se quedo sin lugares. Lo sentimos!',
  },
  noParking: {
    text: 'Lo sentimos, pero no hay estacionamientos cerca.',
  },
};

export default text
