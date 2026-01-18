# Interaktionsprinzipien

Interaktionsprinzipien sind allgemeine Ziele für die Gestaltung von nützlichen
und gebrauchstauglichen Benutzer-System-Interaktionen.

Quelle:
[CPUX-F Curriculum](https://www.uxqb.org/public/documents/CPUX-F_DE_Curriculum-und-Glossar.pdf) S.47 ff.

Die 7 Interaktionsprinzipien werden in der DIN 9241-110 festgelegt und sind
relevant für die CPUX-F-Prüfung.

## 1. Aufgabenangemessenheit

> Die Bedienfunktionen und die Benutzer-System-Interaktionen basieren auf den
> charakteristischen Eigenschaften der Aufgabe (und nicht auf der zur
> Erfüllung der Aufgabe gewählten Technologie).

- unterstützte Aufgaben sind bekannt
- können rasch erlernt werden
- Auswahlmöglichkeiten werden geboten

## 2. Selbstbeschreibungsfähigkeit

> Wo immer erforderlich für den Benutzer, bietet das interaktive System
> angemessene Information an, die die Möglichkeiten des Systems und
> seine Nutzung unmittelbar offensichtlich machen, ohne dass hierzu
> unnötige Benutzer-System-Interaktionen erforderlich werden.

- alle wichtigen Informationen sind vorhanden
- Informationen sind verständlich
- Systemstatus ist jederzeit erkennbar
- eine klare [Affordance](affordance.md) trägt zur Selbstbeschreibungsfähigkeit bei
- Klare Anweisungen, wie das System benutzt werden kann
- Klare Anweisungen, wie das System _nicht_ benutzt werden kann

## 3. Erwartungskonformität

> Das Verhalten des interaktiven Systems ist vorhersehbar, basierend auf dem
> Nutzungskontext und allgemein anerkannten Konventionen in diesem Kontext.

- System verhält sich erwartungsgemäß
- Elemente sind konsistent ([Konsistenz](konsistenz.md) ist ein Aspekt der Erwartungskonformität)
- Veränderungen im Status sind nachvollziehbar
- Einhalten von [Styleguides](styleguide.md)
- Die Sprache der Nutzer*innen sprechen. Wenn Fachbegriffe notwendig sind, diese
  erklären, beispielsweise mit einem Tooltip.

## 4. Erlernbarkeit

> Das interaktive System unterstützt die Entdeckung seiner Möglichkeiten
> und deren Verwendung, erlaubt das Ausprobieren des interaktiven
> Systems, minimiert den Lernaufwand und bietet Unterstützung,
> wenn Lernen erforderlich ist.

- Bedienfunktionen sind leicht erlernbar
- Bedienfunktionen können gefahrlos ausprobiert werden
- Anwendung wird unterstützt

## 5. Steuerbarkeit

> Das interaktive System ermöglicht es dem Benutzer, die Kontrolle über
> die Benutzungsschnittstelle und die Interaktionen zu behalten,
> einschließlich der Geschwindigkeit, Abfolge
> und Individualisierung der Benutzer-System-Interaktion

- Prozess kann jederzeit unterbrochen werden
- Keine Überraschungen, z.B. Video startet nicht automatisch,
  Ton ist standardmäßig stummgeschaltet
- System unterstützt flexible Arbeitsweisen, z.B. Online-Fragebogen, wo
  Fragen übersprungen und später vervollständigt werden können.
- System erlaubt individuelle Einstellungen

## 6. Robustheit gegen Fehler

> Das interaktive System unterstützt den Benutzer beim Vermeiden von
> Fehlern, toleriert Benutzungsfehler im Falle von erkennbaren Fehlern und
> unterstützt den Benutzer bei der Fehlerbehebung.

- Vermeiden von Fehlern:
  - Beispiel: Datumseingabe erlaubt mehrere Formate, Auswahldialog für das Datum.
- Fehlertoleranz (und Möglichkeit zur Selbstkorrektur)
  - Undo-Funktion im Grafikprogramm;
  - Papierkorb ermöglicht Wiederherstellung gelöschter Dateien
- Fehlerbehebung
  - Unterstützung bei der Fehlerbehebung,
    z.B. wenn Buchung am Tag X nicht möglich, Alternativvorschlag machen
  - Präzise sein: "Passwort muss mindestens eine Ziffer enthalten" statt
    "Es ist ein Fehler aufgetreten"

## 7. Benutzer*innen-Bindung

> Das interaktive System stellt Funktionen und Informationen auf einladende und
> motivierende Weise dar und fördert so eine kontinuierliche Interaktion mit
> dem System

- Benutzerbindung kann zu einer positiven User Experience führen
- Übermäßige Benutzerbindung ("dark Patterns") kann zu einer
  negativen User Experience führen.
- Benutzerbindung muss auf ethische Weise erfolgen.
- Einhaltung der anderen sechs Interaktionsprinzipien ist eine wichtige
  Voraussetzung
- Nutzung ist motivierend
- Vertrauen wird aufgebaut
- Feedbacks können innerhalb des Systems platziert werden
