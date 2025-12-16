# SnappThis, Appearance settings
Een interactieve weergavepagina in de instellingen waarmee de gebruiker het thema van de applicatie kan aanpassen.

Doel van deze sprint: Ontwerp en maak een interactieve website voor een opdrachtgever.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

## Beschrijving
SnappThis is een mobielgerichte applicatie waarin gebruikers foto's delen binnen groepen en daarbij het uiterlijk van de applicatie kunnen aanpassen naar hun interfacevoorkeuren. 

De weergavepagina(_Appearance_) zorgt ervoor dat gebruikers het uiterlijk van de applicatie kunnen aanpassen. De gebruiker kan kiesen tussen _Dark Mode_, _Light Mode_ of _Match System_, waarbij de applicatie automatisch naar de systeeminstellingen van het apparaat van de gebruiker luistert. 

Bij het selecteren van een thema krijgt de gebruiker tekstuele feedback. Na het selecteren van een thema verandert deze feedback, zodat duidelijk wordt dat de gebruiker op de Apply-knop moet klikken op de keuze op te slaan. Pas na het klikken van deze knop hoort de keuze daadwerkelijk toepast te worden.

[Mijn Github Pages Link 🌐
](https://ahlamad.github.io/fix-the-flow-interactive-website/)

## Kenmerken
### HTML
* Semantische opbouw met `<nav>`, `<header>` en `<main>`
* Buttons voor de interactie met svg-iconen
* Toegankelijke labels voor iconen voor de bewegwijzeringen
* Toegankelijke toetsenbordnavigatie

https://github.com/ahlamad/fix-the-flow-interactive-website/blob/33fc915412c57441f86d506b9cc9d69ae885387b/appearance.html#L1-L79

### CSS
* CSS-variabelen uit stylesheet van vorige sprint
* Thema's worden aangeroepen door duidelijke classnamen `dark-mode` en `light-mode` op de `<body>`
* Media query voor _Match System_ met `prefers-color-scheme`
* Toegankelijkheid verbetert door middel van focus- en hover-states

https://github.com/ahlamad/fix-the-flow-interactive-website/blob/33fc915412c57441f86d506b9cc9d69ae885387b/appearance.css#L181-L189

https://github.com/ahlamad/fix-the-flow-interactive-website/blob/33fc915412c57441f86d506b9cc9d69ae885387b/appearance.css#L210-L219

### JavaScript
* EventListener toegevoegd op elke theme-button
* Classes worden dynamisch toegevoegd en verwijderd
* Titel en beschrijcing veranderen met interactie voor duidelijke feedback

https://github.com/ahlamad/fix-the-flow-interactive-website/blob/33fc915412c57441f86d506b9cc9d69ae885387b/appearance.js#L25-L27

#### JavaScript 3 stappenplan
Tijdens deze sprint heb ik het 3 stappenplan toegepast:
1. Selecter element in de DOM
2. Koppel het event
3. Toon de feedback met een CSS clas

## Bronnen
* [UI Events @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
* [Van comment naar code](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/programming-user-interaction.md#van-comments-naar-code)
* [Mental models](https://www.nngroup.com/articles/mental-models/)
* [Jacobs Law](https://lawsofux.com/jakobs-law/)
* [Icons need text labels](https://www.nngroup.com/videos/icon-text-labels/)
* [Prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

