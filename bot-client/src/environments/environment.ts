// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  dialogflow: {
    eventsBot: '2b9f1b0e56254f71971f06bb4db5986c'
  },
  google: {
    eventsBot: 'AIzaSyD58SIp-bmdg2tys7ilDI6e0uZIzmkTRoM'
  }
};