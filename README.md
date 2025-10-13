# byggportalen
# 🏗️ Byggflöde

En plattform för att dela projektuppdateringar och bilder i realtid mellan byggföretag och kunder.

## Funktioner

- ✅ Admin- och kundinloggning (OTP via e-post för kunder)
- ✅ Projekthantering med steg/faser
- ✅ Bilduppladdning med automatisk organisering i Google Drive
- ✅ Realtidsflöde med kommentarer och reaktioner
- ✅ Automatisk e-postnotifikation vid nya inlägg
- ✅ Responsiv design för mobil och desktop

## Teknisk stack

**Frontend:**
- React 18
- Tailwind CSS
- Vanilla JavaScript (ingen build-process)

**Backend:**
- Google Apps Script
- Google Sheets (databas)
- Google Drive (fillagring)

## Installation

### 1. Skapa Google Sheets-databas

1. Skapa ett nytt Google Sheets-dokument
2. Kopiera Spreadsheet ID från URL:en (del mellan `/d/` och `/edit`)

### 2. Sätt upp Apps Script

1. Öppna Google Sheets → Extensions → Apps Script
2. Kopiera innehållet från `backend/Code.gs`
3. Uppdatera `CONFIG.SPREADSHEET_ID` med ditt Spreadsheet ID
4. Aktivera **Advanced Drive Service**:
   - Klicka på + bredvid "Services"
   - Välj "Drive API" → Add
5. Kör funktionen `SETUP_ensureAllSheets()` från editorn
6. Deploy → New deployment:
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
7. Kopiera Web App URL

### 3. Konfigurera frontend

1. Öppna `frontend/index.html`
2. Uppdatera `API_URL` (rad ~27) med din Web App URL
3. Öppna filen i en webbläsare eller hosta på en webbserver

### 4. Konfigurera admin-inloggning

I Google Sheets, gå till fliken `SETTINGS`:

| key | value |
|-----|-------|
| ADMIN_USERNAME | admin |
| ADMIN_PASSWORD_6 | 123456 |
| ADMIN_EMAIL | admin@byggflode.local |

⚠️ **VIKTIGT:** Ändra dessa värden till säkra alternativ!

## Användning

### Admin

1. Logga in med användarnamn och lösenord
2. Skapa konton för kunder (använd deras riktiga e-postadresser)
3. Skapa projekt med steg/faser
4. Bjud in kunder till projekt
5. Posta uppdateringar med bilder

### Kund

1. Logga in med e-post
2. Ta emot engångskod via e-post
3. Visa projektframsteg och flöde
4. Kommentera och gilla inlägg

## Projektstruktur

```
byggflode/
├── backend/
│   └── Code.gs           # Google Apps Script backend
├── frontend/
│   └── index.html        # React-app (single file)
├── README.md
└── .gitignore
```

## Säkerhet

- ⚠️ Lägg ALDRIG till riktiga lösenord i koden
- ⚠️ Dela INTE din Spreadsheet ID eller Web App URL publikt
- ✅ Använd miljövariabler för känslig data i produktion
- ✅ Aktivera 2FA på ditt Google-konto

## Databasschema

### ACCOUNTS
Användarkonten (både admin och kunder)

### PROJECTS
Projekten med metadata och mappstruktur

### PROJECT_STEPS
Steg/faser för varje projekt

### MEMBERS
Kopplingen mellan projekt och användare

### POSTS
Inlägg i projektflödet

### IMAGE_METADATA
Metadata för uppladdade bilder

### COMMENTS & REACTIONS
Interaktioner på inlägg

### SESSIONS & OTP
Autentiseringsdata

### SETTINGS
Konfiguration (admin-inloggning)

## Licens

MIT License - använd fritt för privata och kommersiella projekt

## Bidrag

Pull requests är välkomna! För större ändringar, öppna först ett issue för att diskutera vad du vill ändra.

## Support

Vid problem eller frågor, öppna ett issue på GitHub.

---

Utvecklad med ❤️ för byggbranschen
