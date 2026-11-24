# Schichtklar – Website

Eigenständige Marketing-Website (Astro, statisch). Die Dienstplan-App liegt in einem anderen Repository und wird hier nicht verändert.

## Texte, Preise, Kontakt ändern

Alles Änderbare steht in **`src/config.ts`**: Produktname, Telefon, WhatsApp, E-Mail, Anschrift, Gründerpreis (Betrag, Enddatum), späterer Neukundenpreis, Steuerhinweis (Kleinunternehmer oder MwSt.), Link zum Demo-Modus.
Nach dem Speichern: committen und pushen, Netlify baut die Seite automatisch neu.

Beim Domain-Wechsel zusätzlich anpassen: `site` in `astro.config.mjs`, `seite.url` in `src/config.ts`, die Sitemap-Zeile in `public/robots.txt`.

## Befehle

```
npm install        # einmalig
npm run dev        # lokale Vorschau auf http://localhost:4321
npm run build      # fertige Seite im Ordner dist/
```

## Veröffentlichen (Netlify)

1. Repo auf GitHub anlegen und pushen.
2. Netlify → „Add new site“ → „Import from Git“ → dieses Repo wählen. Build-Befehl `npm run build`, Ordner `dist` (steht schon in `netlify.toml`).
3. Netlify → Forms: Nach dem ersten Deploy erscheint das Formular „demo-anfrage“. Dort E-Mail-Benachrichtigung für neue Anfragen einrichten.
4. Eigene Domain: Netlify → Domain management → „Add a domain“.

## Aufbau

- `src/components/` – Hero, Handy-Mockup, Schritte, Preise (mit Countdown), Kontakt, Kopf, Fuß
- `src/pages/` – Startseite, `/demo` (Ziel des Flyer-QR-Codes), `/danke`, Rechtsseiten, 404
- `src/styles/global.css` – Farben und Maße als Tokens (wie der Flyer)
- Kein Tracking, keine Fremdserver: Schrift „Inter“ wird selbst ausgeliefert.

## Hinweise

- Rechtsseiten (Impressum, Datenschutz, AGB, AV-Vertrag) sind **Vorlagen mit Platzhaltern** und müssen vor dem Livegang ausgefüllt und geprüft werden.
- Der Countdown rechnet gegen das feste Datum in der Config. Danach zeigt die Seite automatisch den regulären Preis.
- Das Personenbild ist KI-generiert; der Hinweis steht sichtbar am Bild und im Footer.

## Name und Marke

- **Ablaufklar** ist die Dach-Marke (Dienstplan, KI, Optimierung). **Schichtklar** bleibt der Name der Dienstplan-App (steht so auf dem Flyer). Beides in `src/config.ts` (`marke`, `produkt`).
- Vorschaubild für WhatsApp/Google: `public/og.png`, erzeugt aus `tools/og.html` (mit Chrome: `chrome --headless --window-size=1200,630 --screenshot=public/og.png tools/og.html`).
- Über-mich-Foto: Platzhalter in `src/components/About.astro`, Texte in [ECKIGEN KLAMMERN] selbst ausfüllen.
- Kundenstimmen: `kundenstimmen` in `src/config.ts` füllen, dann erscheint der Bereich automatisch.
