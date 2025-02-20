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

<div class="grid">
<div class="card"><div markdown="1">

### Planung

Für das Engineering:

- Menschzentrierte Aktivitäten im Projektplan
- Menschzentrierte Qualitätsziele

</div></div>
<div class="card"><div markdown="1">

### Nutzungskontext
        
- Nutzungskontextbeschreibung (Oberbegriff)

Für das Engineering:

- Benutzergruppenprofile
- Aufgabenmodelle des gegenwärtigen Nutzungskontextes
- Ist-Szenarien

Für die Kommunikation an Stakeholder:

- Personas
- User Journey Maps des gegenwärtigen Nutzungskontextes

</div></div>
<div class="card"><div markdown="1">

### Nutzungsanforderungen

Für das Engineering:

- Erfordernisse
- Nutzungsanforderungen

</div></div>
<div class="card"><div markdown="1">

### Lösungen

Für das Engineering:

- Nutzungsszenarien
- Aufgabenmodelle für die Gestaltung
- Informationsarchitektur
- Navigationsstruktur
- Styleguide
- Wireframes
- Low-Fidelity-Prototypen
- High-Fidelity-Prototypen

Für die Kommunikation an Stakeholder:

- Storyboards
- User Journey Maps unter Berücksichtigung des interaktiven Systems

</div></div>
<div class="card"><div markdown="1">

### Evaluation

Für das Engineering:

- Usability-Evaluierungsbericht

</div></div>
</div>
