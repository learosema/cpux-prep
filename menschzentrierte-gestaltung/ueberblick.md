# Der Menschzentrierte Gestaltungsprozess im Überblick

Wir wollen zuverlässig ein gebrauchstaugliches interaktives System mit guter UX gestalten.
Dazu bedarf es bestimmte Aktivitäten im Entwicklungsprojekt.

Diese sind als menschzentrierte Gestaltungsaktivitäten in DIN EN ISO 9241-210 benannt.

Das folgende Flowchart zeigt die fünf Aktivitäten in der richtigen Reihenfolge:

```mermaid
flowchart TD
    A(Menschzentrierte Gestaltung planen)
    A-->B(Nutzungskontext verstehen)
    subgraph Gestaltungsprozess
    B-->C(Nutzungsanforderungen festlegen)
    C-->D(Lösungen gestalten, die Nutzungsanforderungen erfüllen\*)
    D-->E(Gestaltungslösungen gegen Nutzungsanforderungen evaluieren\*)
    E-->F(Iterieren bei Bedarf)
    F-->B
    F-->C
    F-->D
    G(\* befolgt Gestaltungsregeln und Aufgabenmodell)
    end
```

## HCD Deliverables

Nachfolgend ein Überblick, welche HCD-Deliverables vorrangig für das
"Engineering" (Input für Spezifikation und Erstellung) von Gestaltungslösungen
genutzt werden und welche typisch für die Kommunikation von Erkenntnissen
und Ergebnissen im Projektteam und mit Stakeholdern verwendet werden.

```mermaid
mindmap
    Planung
        Eng_Planung[Für das Engineering]
            Menschzentrierte Aktivitäten im Projektplan
            Menschzentrierte Qualitätsziele
```

```mermaid
mindmap
    Nutzungskontext
        Nutzungskontextbeschreibung
            Eng_Nutzungskontext[Für das Engineering]
                Benutzergruppenprofile
                Aufgabenmodelle des gegenwärtigen Nutzungskontextes
                Ist-Szenarien
            Com_Nutzungskontext[Für die Kommunikation]
                Personas
                User Journey Maps des gegenwärtigen Nutzungskontextes
```

```mermaid
mindmap
    Nutzungsanforderungen
        Eng_Anforderungen[Für das Engineering]
            Erfordernisse
            Nutzungsanforderungen
```

```mermaid
mindmap
    Lösungen
        Eng_Lösungen[Für das Engineering]
            Nutzungsszenarien
            Aufgabenmodelle für die Gestaltung
            Informationsarchitektur
            Navigationsstruktur
            Styleguide
            Wireframes
            Low-Fidelity-Prototypen
            High-Fidelity-Prototypen
        Com_Lösungen[Für die Kommunikation]
            Storyboards
            User Journey Maps unter Berücksichtigung des interaktiven Systems
```

```mermaid
mindmap
    Evaluation
        Eng_Evaluation[Für das Engineering]
            Usability-Evaluierungsbericht
```
