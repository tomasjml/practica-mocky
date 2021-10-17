import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Mocky",
      anyRequest: "Any mock you need",
      designMocks: "Design your mock",
      manageMocks: "Manage my mocks",
      newMock: "New Mock",
      formHTTPStatus: "HTTP Status",
      formHTTPStatusHelp: "We'll never share your email with anyone else.",
      formContentType: "Response Content Type",
      formContentTypeHelp:
        "The Content-Type header that will be sent with the response.",
      formCharset: "Charset",
      formCharsetHelp: "The Charset used to encode/decode your payload.",
      formHeaders: "HTTP Headers",
      formHeadersHelp:
        "Customize the HTTP headers sent in the response. Define the headers as a JSON object.",
      formResponseBody: "HTTP Response Body",
      formSubmit: "Generate my HTTP Response",
      tableHeaderName: "Name",
      tableHeaderDescription: "Description",
      tableHeaderDate: "Date",
      tableHeaderAction: "Action",
      tableAlertStorage: "Warning: These data are stored on our service!",
      noMatchStatus: "Error: 404 Not Found",
      noMatchForRoute: "No match for route",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a Mocky",
      anyRequest: "Cualquier mock que necesites",
      designMocks: "Diseña tu mock",
      manageMocks: "Manejar mis mocks",
      newMock: "Nuevo Mock",
      formHTTPStatus: "Estatus HTTP",
      formHTTPStatusHelp:
        "Nunca compartiremos su correo electrónico con nadie más.",
      formContentType: "Tipo de Contenido de Respuesta",
      formContentTypeHelp:
        "El encabezado Content-Type que se enviará con la respuesta.",
      formCharset: "Juego de caracteres",
      formCharsetHelp:
        "El juego de caracteres utilizado para codificar / decodificar su carga útil.",
      formHeaders: "Encabezados HTTP",
      formHeadersHelp:
        "Personalice los encabezados HTTP enviados en la respuesta. Defina los encabezados como un objeto JSON.",
      formResponseBody: "Cuerpo de Respuesta HTTP",
      formSubmit: "Generar mi respuesta HTTP",
      tableHeaderName: "Nombre",
      tableHeaderDescription: "Descripción",
      tableHeaderDate: "Fecha",
      tableHeaderAction: "Acciones",
      tableAlertStorage: "Alerta: Esta data es guardada en nuestro servicio!",
      noMatchStatus: "Error: 404 No Encontrada",
      noMatchForRoute: "No pareo para ruta",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
