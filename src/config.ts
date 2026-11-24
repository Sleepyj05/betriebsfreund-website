/**
 * ZENTRALE KONFIGURATION
 * ======================
 * Alles, was Sie später ändern wollen (Name, Telefon, Preise, Fristen, Texte), steht NUR hier.
 * Nach einer Änderung: speichern, committen und pushen – Netlify baut die Seite automatisch neu.
 *
 * Stellen mit [ECKIGEN KLAMMERN] sind Platzhalter, die Sie selbst ausfüllen müssen.
 */

/** MARKE (Dach): der Name der Firma/Website. Der Freund des Betriebs: hilft bei Dienstplan, KI und Optimierung. */
export const marke = {
  name: "Betriebsfreund",
  slogan: "Der Freund Ihres Betriebs. Dienstplan, KI und Optimierung aus Köln.",
};

/** PRODUKT: die Dienstplan-App. Heißt weiter "Schichtklar" (steht so auf dem Flyer). */
export const produkt = {
  name: "Schichtklar",
  /** Titel-Tag der Startseite */
  titel: "Betriebsfreund Köln | Dienstplan, KI und Optimierung für Betriebe",
  /** Beschreibung für Google und Link-Vorschauen (max. 155 Zeichen) */
  beschreibung:
    "Betriebsfreund aus Köln: Dienstplan-App Schichtklar, KI im Alltag und einfachere Abläufe für Gastro, Handel und Dienstleister. Persönlich, verständlich.",
};

export const seite = {
  /** Endgültige Adresse der Website (ohne Schrägstrich am Ende). Auch in astro.config.mjs anpassen! */
  url: "https://betriebsfreund.de",
  sprache: "de",
};

export const kontakt = {
  vorname: "Daniel",
  /** Telefon, so wie es angezeigt wird (Platzhalter aus dem Flyer) */
  telefon: "0221 123 456 78",
  /** WhatsApp-Nummer nur mit Ziffern, mit Ländervorwahl ohne + und ohne Null (49 = Deutschland) */
  whatsapp: "4922112345678",
  whatsappText: "Hallo Daniel, ich interessiere mich für Betriebsfreund.",
  email: "kontakt@betriebsfreund.de", // [BITTE AUSFÜLLEN] echte E-Mail-Adresse
  zeiten: "Mo–Fr, 9–16 Uhr",
  ort: "Köln",
  /** Vollständige Anschrift (für Impressum und Footer) – Platzhalter aus dem Flyer */
  anschrift: "Musterstraße 12, 50667 Köln",
  /** Zusage nach dem Formular */
  antwortFrist: "innerhalb von 24 Stunden (Mo–Fr)",
};

/** Link zum Demo-Modus der App. Leer lassen, solange es ihn nicht gibt → Button führt dann zum Formular. */
export const demoUrl = ""; // z. B. "https://app.betriebsfreund.de" ([BITTE AUSFÜLLEN])

export const preise = {
  /** Aktion für ALLE Pakete. Nach "bis" blendet sich das Angebot automatisch aus (echter Countdown, kein Neustart). */
  gruender: {
    zeitraum: "Dezember",
    etikett: "Gründerpreis · nur bis 31.12.",
    /** Ende des Angebots in deutscher Zeit. Dezember = Winterzeit = +01:00 */
    bis: "2026-12-31T23:59:59+01:00",
    kurzDatum: "31.12.",
  },
  /**
   * Die Pakete. Reihenfolge = Reihenfolge auf der Seite.
   * - gruender: Preis im Aktionszeitraum, regulaer: Preis danach.
   * - neukunde: späterer Preis ab Startdatum (vorbereitet; null = nicht benutzen).
   * - leistungen: die Häkchen-Liste. [BITTE PRÜFEN] Nur Zusagen eintragen, die Sie sicher halten können.
   */
  pakete: [
    {
      id: "basis",
      name: "Basis",
      untertitel: "Der Dienstplan für Ihren Betrieb",
      gruender: "5,55 €",
      regulaer: "49 €",
      neukunde: { betrag: "59 €", ab: "2027-02-01T00:00:00+01:00", aktiv: false },
      hervorgehoben: false,
      leistungen: [
        "Alle Funktionen der App",
        "Alle Mitarbeiter Ihres Betriebs",
        "Persönliche Einrichtung durch mich",
        "Support per Telefon und WhatsApp",
        "Daten in Deutschland (Frankfurt)",
      ],
    },
    {
      id: "plus",
      name: "Plus",
      untertitel: "Dienstplan und Hilfe, damit der Betrieb leichter läuft",
      gruender: "11,11 €",
      regulaer: "89 €",
      neukunde: { betrag: "", ab: "", aktiv: false },
      hervorgehoben: true,
      /** Entwurf: "Alles aus Basis" kommt automatisch dazu. [BITTE PRÜFEN] */
      leistungen: [
        "Monatliches Gespräch (30 Min.): Was läuft gut, was lässt sich vereinfachen?",
        "Hilfe beim Einsatz von KI im Alltag (z. B. Texte, Aushänge, Auswertungen)",
        "Persönlich eingerichtete Vorlagen für Schichten und Bereiche",
        "Bevorzugter Support: Antwort am selben Werktag",
        "Neue Wünsche zuerst: Sie sagen mir, was fehlt",
      ],
    },
  ],
  /** Zusatz hinter dem Preis */
  zusatz: "pro Monat · monatlich kündbar",
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

/**
 * RECHNER "Was kostet Sie der Dienstplan heute?" – Annahmen und Formel (grobe Schätzung, bewusst vorsichtig):
 *
 *   Stunden pro Monat = (Mitarbeiter × planMinProMitarbeiterWoche / 60
 *                       + AusfälleProWoche × minProAusfall / 60) × wochenProMonat
 *   Kosten pro Monat  = Stunden pro Monat × Stundensatz
 *
 * Beispiel (Standardwerte): 10 Mitarbeiter, 3 Ausfälle/Woche → (10×12/60 + 3×30/60) × 4,33 ≈ 15 Std. ≈ 380 €
 */
export const rechner = {
  /** Minuten pro Mitarbeiter und Woche für Plan erstellen, anpassen, verteilen und Rückfragen */
  planMinProMitarbeiterWoche: 12,
  /** Minuten pro Ausfall oder Tausch (Anrufe, Nachrichten, Abstimmen, Plan ändern) */
  minProAusfall: 30,
  wochenProMonat: 4.33,
  /** Vorgeschlagener Stundensatz des Chefs in € */
  stundensatz: 25,
  standardMitarbeiter: 10,
  standardAusfaelle: 3,
};

/**
 * Weitere Leistungen neben dem Dienstplan (Bereich "Mehr als Dienstplan").
 * [BITTE PRÜFEN] Das ist ein Entwurf – bitte nur eintragen, was Sie wirklich anbieten wollen.
 */
export const weitereLeistungen = [
  { titel: "Abläufe aufräumen", text: "Wir schauen gemeinsam, wo im Alltag Zeit versickert: doppelte Listen, Zettel, endlose Nachrichten. Dann machen wir es einfacher." },
  { titel: "KI im Alltag", text: "Texte, Anfragen und Auswertungen schneller erledigen, mit KI-Werkzeugen, die zu Ihrem Betrieb passen. Verständlich erklärt und datensparsam." },
  { titel: "Zahlen statt Bauchgefühl", text: "Einfache Auswertungen: Wo laufen Stunden auf, wann ist viel los, was lohnt sich? Klar dargestellt, ohne Datenfriedhof." },
];

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
