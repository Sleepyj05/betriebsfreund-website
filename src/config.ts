/**
 * ZENTRALE KONFIGURATION
 * ======================
 * Alles, was Sie später ändern wollen (Name, Telefon, Preise, Fristen, Texte), steht NUR hier.
 * Nach einer Änderung: speichern, committen und pushen – Netlify baut die Seite automatisch neu.
 *
 * Stellen mit [ECKIGEN KLAMMERN] sind Platzhalter, die Sie selbst ausfüllen müssen.
 */

export const produkt = {
  /** Produktname (Platzhalter) – erscheint im Logo, in Titeln und Texten */
  name: "Schichtklar",
  /** Untertitel für Titel-Tag und Suchmaschinen */
  titel: "Dienstplan-App für jeden Betrieb | Schichtklar Köln",
  /** Beschreibung für Google und Link-Vorschauen (max. 155 Zeichen) */
  beschreibung:
    "Dienstplan-App für Gastro, Handel und mehr: Krankmeldung, Schichttausch und Ersatz ohne Telefonkette. Gründerpreis im Dezember. Persönliche Einrichtung in Köln.",
};

export const seite = {
  /** Endgültige Adresse der Website (ohne Schrägstrich am Ende). Auch in astro.config.mjs anpassen! */
  url: "https://schichtklar.de",
  sprache: "de",
};

export const kontakt = {
  vorname: "Daniel",
  /** Telefon, so wie es angezeigt wird (Platzhalter aus dem Flyer) */
  telefon: "0221 123 456 78",
  /** WhatsApp-Nummer nur mit Ziffern, mit Ländervorwahl ohne + und ohne Null (49 = Deutschland) */
  whatsapp: "4922112345678",
  whatsappText: "Hallo Daniel, ich interessiere mich für Schichtklar.",
  email: "kontakt@schichtklar.de", // [BITTE AUSFÜLLEN] echte E-Mail-Adresse
  zeiten: "Mo–Fr, 9–16 Uhr",
  ort: "Köln",
  /** Vollständige Anschrift (für Impressum und Footer) – Platzhalter aus dem Flyer */
  anschrift: "Musterstraße 12, 50667 Köln",
  /** Zusage nach dem Formular */
  antwortFrist: "innerhalb von 24 Stunden (Mo–Fr)",
};

/** Link zum Demo-Modus der App. Leer lassen, solange es ihn nicht gibt → Button führt dann zum Formular. */
export const demoUrl = ""; // z. B. "https://app.schichtklar.de" ([BITTE AUSFÜLLEN])

export const preise = {
  /** Aktionspreis. Nach "bis" blendet sich das Angebot automatisch aus (echter Countdown, kein Neustart). */
  gruender: {
    betrag: "5,55 €",
    zeitraum: "Dezember",
    etikett: "Gründerpreis · nur bis 31.12.",
    /** Ende des Angebots in deutscher Zeit. Dezember = Winterzeit = +01:00 */
    bis: "2026-12-31T23:59:59+01:00",
    kurzDatum: "31.12.",
  },
  /** Regulärer Preis nach dem Gründerpreis */
  regulaer: { betrag: "49 €", zusatz: "pro Monat · monatlich kündbar" },
  /**
   * Späterer Neukundenpreis (vorbereitet, noch NICHT sichtbar).
   * Ab dem Startdatum zeigt die Seite automatisch diesen Preis statt des regulären.
   * Zum Aktivieren: "aktiv" auf true setzen.
   */
  neukunde: { aktiv: false, betrag: "59 €", ab: "2027-02-01T00:00:00+01:00" },
  /** Obergrenze Mitarbeiter im Preis. null = keine Grenze nennen. [BITTE FESTLEGEN] */
  maxMitarbeiter: null as number | null,
  /** "kleinunternehmer" → „Gemäß § 19 UStG …“, "mwst" → „Alle Preise zzgl. MwSt.“ */
  steuer: "kleinunternehmer" as "kleinunternehmer" | "mwst",
};

export const steuerHinweis = {
  kleinunternehmer: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.",
  mwst: "Alle Preise zzgl. MwSt.",
};

/**
 * Kundenstimmen (Phase 2). Solange die Liste leer ist, wird der Bereich NICHT angezeigt.
 * Bitte nur echte, freigegebene Zitate eintragen.
 */
export const kundenstimmen: { text: string; name: string; betrieb: string }[] = [];

/** Rechtlicher Platzhalter-Hinweis, der auf den Rechtsseiten erscheint */
export const rechtHinweis = "[BITTE AUSFÜLLEN / RECHTLICH PRÜFEN LASSEN]";

/** Netlify Analytics (serverseitig, ohne Cookies). Standardmäßig AUS – wird in Netlify selbst aktiviert, nicht hier. */
export const analytics = { netlify: false };

/* ---------- Abgeleitete Werte (nicht ändern) ---------- */
export const telHref = "tel:+49" + kontakt.telefon.replace(/\D/g, "").replace(/^0/, "");
export const whatsappHref = `https://wa.me/${kontakt.whatsapp}?text=${encodeURIComponent(kontakt.whatsappText)}`;
export const mailHref = `mailto:${kontakt.email}`;
export const demoLink = demoUrl || "/#kontakt";
export const demoLinkExtern = Boolean(demoUrl);

/** Ist der Gründerpreis zum Zeitpunkt des Seitenbaus noch gültig? (Der Browser prüft zusätzlich live.) */
export const gruenderAktivBeimBau = Date.now() < Date.parse(preise.gruender.bis);
