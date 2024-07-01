# GQL_Projects - Deníček

__Tomáš Kyseľ,__ 
__Jakub Vágner,__ 
__Lukáš Zdražílek,__ 
________________________________________________________________________

Dokumentace dle standardu JSDOC k vytvořeným a upraveným komponentám dostupná zde: https://github.com/LukasZdrazilek/GQL_Projects/blob/main/docs/index.html

<div style="display: flex;">
  <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.qkme.me%2FDT1.jpg&f=1&nofb=1&ipt=29524da4934a16ecce3113def5671ffa17ed0ca2f03b1ec6272343a198b6d0cb&ipo=images" style="width: 30%">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDcXYPtOVAAAoOKa.jpg&f=1&nofb=1&ipt=0fc47f721244bc99d0a6437e702c8b96f4e700beec4126987c92975e234f23e9&ipo=images" style="width: 30%">
</div>

## Aktuální úkoly

- [x] Zprovoznění publish package
- [x] Vytvořit ProjectPage.jsx - reálná první stránka Projects, url funguje - src/Pages/ProjectPage.jsx
- [x] Vytvořit FetchProjectByIdAsyncAction.js - obsahuje seznam tříd, které budeme v Projects používat + jejich položky - src/Queries/FetchProjectByIdAsyncAction.js
- [x] Vytvořit několik karet (souborů) v src/Components/Projects ...
- [x] Přidat projectby(id?, name?) do src/Queries/queries.json
- [x] Skúsiť vytvoriť funkcie na vkladanie floatov/dátumov
- [x] Vytvoření dropdown menu v project view
- [x] Seřazování u milníků a financí a projektů
- [x] Zobrazení předchozího a následujícího milníku u milestones view
- [x] Úprava data u milestones
- [x] Úprava násled. a předchoz. milníku u milestones edit viz MilestoneLinkAdd query
- [x] Dodělat view u finances a milestones
- [x] Vytvořeny queries na vytváření projektů, financí a milníků
- [x] Roztřídit queries do složek podle zaměření (Project/, Finance/, Milestone/, ...)
- [x] Pridať vytváranie projektov, financií a milestones
- [x] touch some grass
- [x] ProjectEditPage sautomatizovať queri na dropboxi
- [x] Přidání milestone a finance view page
- [x] Přidání odkazu do dropdownu
- [x] Odstranit pravý MediumCard
- [x] Udělat JSDOC komentáře
- [x] Přidat index.js do všech komponent (export *)
- [x] Sjednotit ProjectPage a ProjectEditPage - Large cards
- [x] ProjectViewPage vizializace týmu/groupy
- [x] Problém s Gantt - import stylů (hopefully working)
- [x] Milestones edit chyba v češtině - Label
- [x] Odstranit Projekty a vše spojené ze zobrazení, nechat pouze kompnenty "for future use"
- [ ] Přidání Editovat milníky a finance do ProjectLink
- [ ] Odstranit MilestoneCreateLink a FinanceCreateLink
- [ ] Upravení labelu MediumTableCards na "*Milníky/Finance* pro *Projekt [Projectlink]*"

________________________________________________________________________

## Harmonogram skupinové práce pro Projects část IS


__20.3.2024__ první schůze/stretnutie => Vytvoření repositáře, deníčku a harmonogramu

__21.3.2024__ druhá schůze/stretnutie => Analýza kódu

__25.3.2024__ zveřejnění harmonogramu / inicializace deníčku, sdílení repositáře

__27.3.2024__ třetí schůze/stretnutie => Seznámení se s knihovnami/knižnicami

__28.3.2024__ čtvrtá schůze/stretnutie => Propojení s ostatními komponenty IS

__3.4.2024__ pátá schůze/stretnutie => Získání parametrů pro Projects

__4.4.2024__ šestá schůze/stretnutie => ***Test lokálního dema projects page => proběhlo úspěšně***

__10.4.2024__ sedmá schůze/stretnutie => Přidání finances a milestones, zprovoznění je do stejného stavu jako projects (zatím bez dat)

__11.4.2024__ osmá schůze/stretnutie => Přivítání Jakuba Vágnera v týmu

__15.4.2024__ první projektový den => dopadol úspešne, nevyhodili nás, zvládli sme to, nájdené nedostatky v backende, chýbajúca funkcia na dátum a floatové dátové tipy

<br />

__17.4.2024__ devátá schůze/stretnutie => Tvorba vizuálu webu

_18.4.2024_ desátá schůze/stretnutie => Vytvoření FetchProjectsByAsincAction

_24.4.2024_ jedenáctá schůze/stretnutie => Vytvoření funkce na vkládání čísel (float)

_25.4.2024_ dvanáctá schůze/stretnutie => Vytvoření funkce na vkládání datumů

_1.5.2024_ třináctá schůze/stretnutie => Automatizace type query v dropdown editu

_2.5.2024_ čtrnáctá schůze/stretnutie => Implementace dropdown menu na view/edit u finance a milestones

__10.5.2024__ druhý projektový den => úspěšné odprezentování současných edit-card všech komponent

<br />

__15.5.2024__ sedmnáctá schůze/stretnutie => Přidání page na zobrazení všech projektů

__16.5.2024__ osmnáctá schůze/stretnutie => Update finance a milestone link na novou URL strukturu

__21.5.2024__ devatenáctá schůze/stretnutie =>Práce na milestone next a previous funkci #1

__22.5.2024__ dvacátá schůze/stretnutie => Práce na milestone next a previous funkci #2

__24.5.2024__ dvacátá-první schůze/stretnutie => Přidání funkce na sort tabulek dle datumu/názvu

__25.5.2024__ dvacátá-druhá schůze/stretnutie => Práce na interaktivní tabulce milestone next a previous

__26.5.2024__ dvacátá-třetá schůze/stretnutie => Vytvoření Ganttova diagramu na zobrazení milníků 

__27.5.2024__ dvacátá-čtvrtá schůze/stretnutie => Práce na JSDOC komentářách #1

__29.5.2024__ dvacátá-pátá schůze/stretnutie => Dokončení JSDOC komentářů #2 a vygenerování dokumentace

__3.6.2024__ třetí projektový den - uzavření projektu
