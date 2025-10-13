/**
 * Konfigurationsexempel för Byggflöde
 * 
 * INSTRUKTIONER:
 * 1. Kopiera denna fil till config.js
 * 2. Fyll i dina egna värden
 * 3. Lägg ALDRIG till config.js i Git (finns i .gitignore)
 */

const CONFIG = {
  // Din Google Apps Script Web App URL
  // Hittas efter deploy i Apps Script: Deploy → Manage deployments → Web app URL
  API_URL: 'https://script.google.com/macros/s/AKfycbzA151Db9RytanxMcMYy_0EhMHRH3riPDLUZ2OkwIIexBGYjs3aMdiy6vxPGH2nRLs/exec',
  
  // Ditt Google Sheets Spreadsheet ID
  // Hittas i URL:en: https://docs.google.com/spreadsheets/d/[DETTA_ÄR_ID]/edit
  SPREADSHEET_ID: '1T_SXsx3mgvPJIpdQRP3gbfwYRunqkXWgR_I8Dtlq510',
  
  // Admin-inloggning (dessa värden sätts i SETTINGS-flikat i Sheets)
  ADMIN: {
    USERNAME: 'admin',
    PASSWORD_LENGTH: 6,  // Måste vara exakt 6 siffror
    EMAIL: 'admin@byggflode.local'
  },
  
  // Applikationsinställningar
  APP: {
    NAME: 'Byggflöde',
    VERSION: '3.2',
    MAIN_FOLDER_NAME: 'Byggflöde',  // Namn på huvudmapp i Google Drive
    SESSION_DURATION_DAYS: 7,       // Hur länge sessioner är giltiga
    OTP_DURATION_MINUTES: 15        // Hur länge OTP-koder är giltiga
  },
  
  // E-postinställningar
  EMAIL: {
    FROM_NAME: 'Byggflöde',
    SUBJECT_PREFIX: '[Byggflöde]'
  }
};

// Exportera för användning (om du använder moduler)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
