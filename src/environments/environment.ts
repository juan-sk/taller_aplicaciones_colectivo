// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    // inacap.oxux.cl
    login: 'https://inacap.oxus.cl:8444/login ',
    // flota: 'https://www.boredapi.com/api/',

    garita_usuario: 'https://inacap.oxus.cl:8444/garita/usuario',
    garita_colectivo: "https://inacap.oxus.cl:8444/garita/colectivo",
    garita_ubicacion: "https://inacap.oxus.cl:8444/garita/ubicaciones",
    garita_informe: "https://inacap.oxus.cl:8444/garita/informe",
    colectivo: "https://inacap.oxus.cl:8444/colectivo"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
