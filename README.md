# Projekt Bibliothek

## Idee

Eine Bibliothek aus bereits gelesen Büchern aus meinem privat Bestand.

## Vorüberlegungen

### 1. Wie viele Bücher brauche ich?

#### 1.1. Welcher Datentype ist das?

- Classe und/Objekt
- Arrays
- Strings
- Nummern

#### 1.2. Welche Daten brauche ich?

Alles zusammen ist ein Objekt:

- Titel = title (string)
- Autor:in = author (string)
- ISBN-Nummer = isbnnumber (number)
- Preis = price (number)
- Erscheinungsjahr = publicationYear (number)
- Verlag = publisher (string)
- Seitenzahl = pages (number)
- Genre = genre (string)
- Titelart: Einzelband, Dilogie, Trilogie oder Reihe = titleType (string)
- Buchart: Taschenbuch uä. = bookType (string)

_Sprache wird außer Acht gelassen, da der allergrößte Teil deutschsprachig ist_

#### 1.3. Nice to have

ein Buch grafisch darstellt. (✔)
mit 
https://www.asciiart.eu/image-to-ascii grafisch umgesetzt und innerhalb eines consol.log() wiedergeben 
![Bildschirmfoto vom 2024-07-11 12-09-05](https://github.com/Maja2111/JS-Project/assets/150914026/11eda0b2-f03e-49e0-ad6f-8ada05204044)


## Umsetzung

### 2. Welche Funktionen soll die Bibliothek haben?

In folgender Reihenfolge soll die Bibliothek Daten aufrufen können:

#### 2.1. Sortierung

- **Titel** -> gibt nur die Titel in alphabetischer Reihenfolge zurück (✔)
- **Autor:innen** -> gibt nur die Autor:innen in alphabetischer Reihenfolge zurück (✔)
- **Preise** -> gibt nur die Preise in nummerischer Reihenfolge zurück (vom kleinsten zu Größten) (✔)
- **Erscheinungsjahr** -> gibt nur das Erscheinungsjahr in nummerischer Reihenfolge zurück (vom Neusten zum Ältesten) (✔)

#### 2.2. Suchfunktion für

- **Titel** -> gibt alle Titel mit dem Suchbegriff wieder als Objekt (✔)
- **Autor:innen** -> gibt alle Autor:innen mit dem geswünschten Suchparameter wieder als Objekt (✔)
- **Genre** -> gibt jedes Buch mit dem Genre wieder (✔)
- **ISBN - Nummer** -> gibt genau das Buch mit dieser Nummer zurück (✔)
- **Titelart** -> gibt jedes Buch mit der Titelart wieder (✔)
- **Buchart** -> gibt jedes Buch mit der Buchart wieder (✔)

## Nach der Testung

### 3. Nachbearbeitung

debugging:

- Autor:innen gruppieren (✔)
- ISBN-Nummer geht nicht in der Filter Funktion (✔)

Es benötigt noch eine Funktion auf einen Vergleich mit Buch und Preis.

- .filter()
  if Bedingung auf den Preis
  ternery (✔)



   ________  ________  ________   ___  __    _______                ___ 
|\   ___ \|\   __  \|\   ___  \|\  \|\  \ |\  ___ \              /  /|
\ \  \_|\ \ \  \|\  \ \  \\ \  \ \  \/  /|\ \   __/|            /  // 
 \ \  \ \\ \ \   __  \ \  \\ \  \ \   ___  \ \  \_|/__         /  //  
  \ \  \_\\ \ \  \ \  \ \  \\ \  \ \  \\ \  \ \  \_|\ \       /  //   
   \ \_______\ \__\ \__\ \__\\ \__\ \__\\ \__\ \_______\     /_ //    
    \|_______|\|__|\|__|\|__| \|__|\|__| \|__|\|_______|    |__|/     
                                                                      
                                                                      
                                                                      
 _________  ___  ___  ________  ________   ___  __                    
|\___   ___\\  \|\  \|\   __  \|\   ___  \|\  \|\  \                  
\|___ \  \_\ \  \\\  \ \  \|\  \ \  \\ \  \ \  \/  /|_                
     \ \  \ \ \   __  \ \   __  \ \  \\ \  \ \   ___  \               
      \ \  \ \ \  \ \  \ \  \ \  \ \  \\ \  \ \  \\ \  \              
       \ \__\ \ \__\ \__\ \__\ \__\ \__\\ \__\ \__\\ \__\             
        \|__|  \|__|\|__|\|__|\|__|\|__| \|__|\|__| \|__|             
                                                                      
                                                                      
                                                                      
  ___    ___ ________  ___  ___  ___                                  
 |\  \  /  /|\   __  \|\  \|\  \|\  \                                 
 \ \  \/  / | \  \|\  \ \  \\\  \ \  \                                
  \ \    / / \ \  \\\  \ \  \\\  \ \  \                               
   \/  /  /   \ \  \\\  \ \  \\\  \ \__\                              
 __/  / /      \ \_______\ \_______\|__|                              
|\___/ /        \|_______|\|_______|   ___                            
\|___|/                               |\__\                           
                                      \|__|   
