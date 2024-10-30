# Householding

![image](https://github.com/Byteconjurer/Householding/blob/main/assets/icon.png)

### Beskrivning
Householding är en React Native applikation utvecklad för hushållsmedlemmar att dela och organisera sysslor, samt hålla koll på vem som ansvarar för olika uppgifter. Ett hushåll kan bestå av max åtta personer och man kan vara antingen medlem i hushållet eller ha ägarrättigheter. Som medlem kan du skapa hushåll, gå med i hushåll, utföra sysslor och se statistik. Som ägare kan man även skapa och redigera sysslor och pausa/aktivera en medlem.

Projektet är byggt med React Native och Expo, och innehåller navigeringsstruktur med React Navigation.
Vi använder oss utav Firebase authentication för inlogg och Redux används för att hantera och dela data effektivt mellan komponenter. 

## Bygg och Kör Projektet

### Förutsättningar
Se till att du har följande verktyg installerade:

- Node.js
- Expo CLI
- Git

### Instruktioner för att köra appen lokalt
Klona detta repository:
- `git clone https://github.com/Byteconjurer/Householding.git`

Navigera till projektmappen:
- `cd Householding`

Installera paket:
- `npm install`

Starta appen:
- `npm start`

Använd en simulator för att köra appen. T.ex. Expo Go-appen på din mobil och skanna QR-koden som visas i terminalen eller tryck 'a' för att öppna Expo Go-appen i Android Studio på datorn om du har den installerad.

### Exempel inlogg är: 

För att ha ägarrättigheter:
Användarnamn: mamma@test.se
Lösenord: 123456

För att vara en medlem:
Användarnamn: junior@test.se
Lösenord: 123456

## Projektkrav och Uppfyllda Funktioner

### Krav

Kravlista (4)
- [x] En logga, splashscreen och appikon ska designas och användas. *
- [x] Applikationen ska byggas med RN, Expo & TS. *
- [x] Designen av appen ska utgå ifrån befintliga skisser, undantag kan ges men ska diskuteras
med produktägare, godkännas och dokumenteras. *
- [x] Information ska kommuniceras till och från en server. (VG)

Hushåll (7)
- [X] Ett hushåll ska ha ett namn och en genererad (enkel) kod så andra kan gå med i hushållet,
namnet ska gå att ändra. *
- [X] Alla användare i ett hushåll ska kunna se vilka som tillhör ett hushåll.
- [] En ägare av ett hushåll ska kunna se förfrågningar om att gå med i hushållet.
- [] En ägare ska kunna acceptera eller neka förfrågningar.
- [X] En ägare ska kunna göra andra till ägare.
- [X] En ägare ska kunna pausa en användare och under pausade perioder ska användare inte
tas med i statistiken.
- [X] Om en använder har pausats under en del av en period i statistiken ska graferna
normaliseras.

Konto (5)
- [X] En användare ska kunna registrera och logga in sig. *
- [X] En användare ska kunna skapa ett nytt hushåll. *
- [X] En användare ska kunna gå med i ett hushåll genom att ange hushållets kod. *
- [] När en användare har valt att gå med i ett hushåll behöver en ägare av hushållet först
godkänna användaren.
- [X] En användare ska kunna lämna ett hushåll.

Profil (6)
- [X] En användare ska kunna ange sitt namn. *
- [X] En användare ska kunna välja en avatar (emoji-djur + färg) från en fördefinierad lista. *
- [X] Valda avatarer ska inte kunna väljas av andra användare i hushållet. *
- [] En användare ska kunna ställa in appens utseende (mörkt, ljust, auto).
- [X] Avataren ska användas i appen för att visa vad användaren har gjort. *
- [X] Om en användare tillhör två eller fler hushåll ska denne kunna välja att byta mellan de
olika hushållen.

Sysslor (6)
- [X] En ägare ska kunna lägga till sysslor att göra i hemmet. *
- [X] En syssla ska ha ett namn, en beskrivning (text), hur ofta den ska göras (dagar), och en
vikt som beskriver hur energikrävande den är. *
- [] En användare ska kunna lägga till en ljudinspelning och en bild för att beskriva sysslan
ytterligare.
- [X] En ägare ska kunna redigera en syssla. *
- [] En ägare ska kunna ta bort en syssla.
- [] När en syssla tas bort ska användaren få en varning om att all statistik gällande sysslan
också kommer att tas bort och få valet att arkivera sysslan istället.

Dagsvyn (3)
- [X] Alla sysslor ska listas i en dagsvy och ge en översikt kring vad som behöver göras. *
- [X] Utöver sysslans namn ska även vem/vilka som har gjort sysslan visas, hur många dagar
sedan sysslan gjordes senast samt om den är försenad. *
- [X] När en användare väljer en syssla ska beskrivningen av sysslan visas och det ska även
med ett enkelt tryck gå att markera sysslan som gjord. *

Statistik (6)
- [X] En användare ska kunna se fördelningen av gjorda sysslor mellan användarna i sitt hushåll. *
- [X] Varje statistikvy ska visa den totala fördelningen (inräknat vikterna för sysslorna) samt fördelning av varje enskild syssla. *
- [X] Det ska finnas en statistikvy över ”nuvarande vecka”. *
- [X] Det ska finnas en statistikvy över ”förra vecka”.
- [X] Det ska finnas en statistikvy över ”förra månaden”.
- [X] Om det inte finns statistik för en av vyerna ska den vyn inte visas.

Schemaläggning (3)
- [] En ägare ska kunna tilldela och ta bort sysslor från användare i hushållet.
- [] Användare ska kunna se de tilldelade sysslorna i sitt gränssnitt.
- [] En ägare ska kunna skapa grupper av sysslor som automatiskt tilldelas användarna i hushållet och roteras baserat på ett intervall i dagar.