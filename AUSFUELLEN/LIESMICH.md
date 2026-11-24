# Das müssen Sie noch ausfüllen

Alles an einem Ort. Haken setzen, wenn erledigt. Danach neu bauen lassen (Änderung speichern, committen, pushen; Netlify macht den Rest).

## 1. Ordner „AUSFUELLEN“ (einfach Dateien ablegen / Text ändern)
- [ ] `av-vertrag/` – Ihren geprüften AV-Vertrag als PDF

## 2. Datei `src/config.ts` (Telefon, Preise, Texte)
- [ ] `kontakt.telefon` – echte Telefonnummer 
- [ ] `kontakt.whatsapp` – WhatsApp-Nummer nur Ziffern, z. B. 491701234567
- [ ] `kontakt.email` – echte E-Mail-Adresse
- [ ] `kontakt.anschrift` – echte Anschrift
- [ ] `demoUrl` – Adresse des Demo-Modus der App (sonst führt der Knopf zum Formular)
- [ ] `preise.maxMitarbeiter` – Obergrenze oder leer lassen (`null`)
- [ ] `preise.pakete[1].leistungen` – Was genau steckt im Paket **Plus**? Nur eintragen, was Sie halten können
- [ ] `weitereLeistungen` – Was bieten Sie neben dem Dienstplan wirklich an (KI, Optimierung)? Drei Karten
- [ ] `seite.url` und in `astro.config.mjs` die Domain (jetzt betriebsfreund.de)

## 3. Rechtsseiten (`src/pages/`)
- [ ] `impressum.astro` – Name, Anschrift, Steuerangaben
- [ ] `datenschutz.astro` – von Anwalt/Datenschutzbeauftragtem prüfen lassen
- [ ] `agb.astro` – AGB schreiben lassen
Gelbe Felder mit „[…]“ sind Platzhalter. Erst wenn alles ausgefüllt ist, die Seite öffentlich machen.

## 4. Mit [PRÜFEN] markierte Antworten in `src/components/Faq.astro`
- [ ] Vertrag rechtlich geprüft?
- [ ] „Meist am selben Tag startklar“ – stimmt das?
- [ ] Obergrenze Mitarbeiter
- [ ] Leistungen von Plus

## 5. Zum Schluss
- [ ] Domain bei einem Anbieter registrieren und in Netlify verbinden
- [ ] Netlify → Forms: E-Mail-Benachrichtigung für neue Anfragen einschalten
- [ ] Testanfrage über das Formular senden
- [ ] QR-Code auf dem Flyer zeigt auf `https://betriebsfreund.de/demo`
