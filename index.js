const books = require('./books');

console.log(`
****************************************************************************************************
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
..-%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%=....=%%%%%%#+..
..:*%%%%#-+##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=:#%%%%%%%*#%%%%%%%%%%%%%%%###%%%%:.+%%%=....-#%%%%#-:..
::-*#*#%#-=+++#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-:=-=#%%%%*+===-::**%%%%%%%*+++=-=..=***-::::-***#%#--::
:.:**+*%#-=+**#%%%%%%%%%%%%%%%%%%%%%%%%%%%%#:==--#%%#:*+++=:::**%%%%%%%*++++++:.=***-....-*++#%#-:.:
..:**=*%#-=+++---=%%%%%%%%%%%%%%%%%%%%%%%%%+:#=--+***:*+---:..**%%%%%%%*+++--=..=***-....-#*=*%#-:..
..:**=*##-=**+--:-%%%%%%%%%%%%%%%%%%%%%%%%%--%=--+***:*+---:..**%%%%%%%*+++---..=***-....-#*-*%#-:..
..:*#+*##-=***---=%==++=-=====*+======++=%*.+%=--+**+:*+---:..==+==#%%%*+++---..=***-....-#*+*##-:..
..:*#***#-+***-::-%==+==-----=++----==+==%+:*%=--+***:*+---:..**===*%%%*++++++:.=***-....-##**##-:..
..:*#***#-+***--:-%%%:..+.........=....=%%=-%%=--+***:++---:..++*-==%%%*+++===:.=+++-....-##***#-:..
..:*#***#-+***:-:-%%%:..+.........=....-%%:+%%=--+***:++---:..**%===#%%*+++---..=+++-....-##***#-:..
..:*%*+*#-+***----*==-------------------**:#%%=--+***:++---:.:**%+==*%%*++=---..=+++-....-##*+**-:..
..:*%*+**-+***:--=+-=-------------------*:-%%%=--+***:++---:.:**%+==+%%*++=---..=+++-....-#%*+**-:..
::-*%*+**-+***-::=*++++++++++***********#-+%%%=--+***:++===:::**%#===#%*++++++:.=+++-::::-#%*+**--::
::-*%#*+*-=**+-::=*+++++++++++***********:*%%%=--+***:++-=-:.:**%%=--#%***=---..=+++-::::-#%****--::
****************************************************************************************************
####################################################################################################
  `);
/**
 * @import von books
 * @function returnValues übergibt Objekte mit der .map() Funktion und gibt die entsprechenden Daten in einem neuen Array aus
 * @function returnValuesSorted das neue Array wird hier sortiert, im Fall von:
 *  if wird die Eingabe auf einen string überprüft und in alphabetischer Reihenfolge zurück gegeben
 * else if wird auf eine Nummer geprüft und der Ternary gibt an in welcher Reihenfolge die Zahlen ausgegeben werden
 * else deckt alle anderen Fälle ab für den Fall das die Bibilothek erweitert wird
 * */

function returnValues(key) {
  const values = books.map((book, i) => {
    return book[key];
  });
  // wenn es autor:innen sind als Einzigesartiges if und alle anderen nur Values ausgeben else
  const uniques = [];
  values.forEach((value) => {
    if (!uniques.includes(value)) uniques.push(value);
  });
  return key === 'author' ? uniques : values;
}
function returnValuesSorted(key, order = 'asc') {
  if (typeof books[0][key] === 'string') {
    return returnValues(key).sort();
  } else if (typeof books[0][key] === 'number') {
    return returnValues(key).sort((a, b) => (order === 'asc' ? a - b : b - a));
  }
  return returnValues(key);
}
// gibt nur die Titel in alphabetischer Reihenfolge zurück
// console.log(`\n${'-'.repeat(10)}Titel${'-'.repeat(10)}`);
// console.log(returnValuesSorted('title'));
// gibt nur die Autor:innen in alphabetischer Reihenfolge zurück
// console.log(`\n${'-'.repeat(10)}Autor:innen${'-'.repeat(10)}`);
// console.log(returnValuesSorted('author'));
// // gibt nur die Preise in nummerischer Reihenfolge zurück (vom kleinsten zu Größten)
// console.log(`\n${'-'.repeat(10)}Preise${'-'.repeat(10)}`);
// console.log(returnValuesSorted('price'));
// // gibt nur das Erscheinungsjahr in nummerischer Reihenfolge zurück (vom Neusten zum Ältesten)
// console.log(`\n${'-'.repeat(10)}Erscheinungsjahr${'-'.repeat(10)}`);
// console.log(returnValuesSorted('publicationYear', 'desc'));

/**
 * @description Absatz für die .filter() Funktion für den:
 * - Titel
 * - Autor:innen
 * - Genre
 * - ISBN - Nummer
 * - Titelart
 * - Buchart
 * @function search benötigt zwei Parameter key -> ist der key aus Books und value -> die Daten aus Books
 */

function search(key, value) {
  let found = books.filter((book) => {
    if (typeof books[0][key] === 'string') {
      return book.hasOwnProperty(key) && book[key].includes(value);
    } else if (typeof books[0][key] === 'number') {
      return key !== 'price' ? book[key] === value : book[key] <= value;
    }
  });
  return found;
}

//gibt alle Titel mit dem Suchbegriff wieder als Objekt
//console.log(`\n${'-'.repeat(10)}Titel${'-'.repeat(10)}`);
// console.log(search('title', 'Harry Potter'));
// //gibt alle Autor:innen mit dem geswünschten Suchparameter wieder als Objekt
// console.log(`\n${'-'.repeat(10)}Autor:innen${'-'.repeat(10)}`);
// console.log(search('author', 'Ben'));
// //gibt jedes Buch mit dem Genre wieder
// console.log(`\n${'-'.repeat(10)}Genre${'-'.repeat(10)}`);
// console.log(search('genre', 'Lektüre'));
// //gibt genau das Buch mit dieser Nummer zurück
// console.log(`\n${'-'.repeat(10)}ISBN-Nummer${'-'.repeat(10)}`);
// console.log(search('isbnNumber', 9783453422322));
// //gibt jedes Buch mit der Titelart wieder
// console.log(`\n${'-'.repeat(10)}Titelart${'-'.repeat(10)}`);
// console.log(search('titleType', 'Einzelband'));
// //gibt jedes Buch mit der Buchart wieder
// console.log(`\n${'-'.repeat(10)}Buchart${'-'.repeat(10)}`);
// console.log(search('bookType', 'Hardcover'));

// console.log(`\n${'-'.repeat(10)}Preisvergleich${'-'.repeat(10)}`);
// console.log(search('price', 10));
/**
 * @description Vorrang geganger Code und Lösungsansätze
 */
// class Search {
//   constructor() {}
//   /**
//    * @function searchAuthor sucht und gibt den gesuchte Autor:inn mit samt dem Objekt aus
//    * @description
//    * bei autor:innen .includes()
//    */
//   searchAuthors(author) {
//     const foundAuthors = books.filter((book) => {
//       return book.author.includes(author);
//     });
//     return foundAuthors;
//   }
//   /**
//    * @function searchTitel sucht und gibt die gesuchten Titel mit samt dem Objekt aus
//    * @description  bei Titeln .includes()
//    */
//   searchTitle(title) {
//     const foundTitles = books.filter((book) => {
//       return book.title.includes(title);
//     });
//     return foundTitles;
//   }
//   /**
//    * @function searchIsbnNumbers sucht die ISBN - Nummer
//    * @description  bei ISBN ===, Hinweise number ohne Bindestriche nur Zahlen,.replace(-),.replaceAll('-', '') */
//   searchIsbnNumbers(isbnNumber) {
//     const foundIsbnNumbers = books.filter((book) => {
//       return book.isbnNumber === isbnNumber; //.replaceAll(' - ', '');
//     });
//     return foundIsbnNumbers;
//   }
// }
// /**
//  * @description iniziert die mit der Variablen searchFunction die class Search, muss über dem console.log() stehen, aber nach der class
//  */
// const searchFunctions = new Search();

// //console.log(searchFunctions.searchAuthors('Ben'));
// //console.log(searchFunctions.searchTitle('Harry Potter'));
// //console.log(searchFunctions.searchIsbnNumbers(9783423284127));

// /**
//  * @description Funktionen für die alpabetische Reihenfolge der Titel
//  */

// // function sortTitle(title) {
// //   let newTitle = [];
// //   for (let i = 0; i < books.length; i++) {
// //     newTitle.push(books[i].title);
// //   }
// //   return newTitle;
// // }

// // let result = [];
// // result = sortTitle(books.title).sort();

// //result = console.log(result);

console.log(`
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+---=#%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%*-#%%%%%%*=#%%%%%%%*#%%%%%%%%%%%%%%%%%%%%+..%%%%%%%%%%%:....=#%%%%*-#%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%*-+++*%%%=-###%%%%%**%%%%%%##%%%%%#***##%+..%%%%%%%#***:.::.=#%%%%*-+++*%%%%%%%%%%
%%%%%%%%%%%%%%%+:-:-+++*%%%-:=--*%%%+*+==-:-:++%%%%%#+++===-..%%%*---****::::.=*+*#%*-+++*%%%%%%%%%%
%%%%%%%%%%%%%%%+..:-+++*%%#:*=--*###:*+-=-:..*+%%%%%#++*+++-..%%%+--=****:....=#++#%*-++++=-=#%%%%%%
%%%%%%%%%%%%%%%+..:-+++*%%+:%=--+***:*+---:..*+%%%%%#++*---:.:%%%=--+#***:....=#*=*%*-+++=--.+%%%%%%
%%%%%%%%%%%%%%%+..:-+***%%:=%=--+***:*+---:..*+%%%%%#*+*---:.:%%#---*#***:....=#*=*%*-+**=-:-*%%%%%%
%%%%%%%%%%%%%%%+..:-***#%*:*%=--+***:*+---:..**===#%#*++===-.:%%+--=%#***:....=#***#*-***+:::+%%%%%%
#############%%+..:-***#%+.#%=--+***:++---:..***==+%#*+*+++-.:%%---+%*+++:....=##**#*-***+-::+######
:::::::::::::=%+..:-***#%--%%=--+***:++---:..*+#===%#*++---:.:%*---#%*+++:....=##**#*-***=:-:-::::::
-------------*%+..:-***#%-+%%=--+***:++---:..*+%===*#*++---:.:%+--=%%*+++:....=##*+**-***+-::=------
************#%%+..:-***#+-%%%=--+***:++---:..*+%+==+#*++---:.:%=--+%%*+++:....=##*+**-***=...+******
++++++++++++*##+..:-***#:=%%%=--+***:++---:..*+%*===**++===-.:#---#%%*+++:::::=##*=**-***=-::*++++++
-===-==------==+--:-****:+%%%=--+***:++++=:-:*+%%===**++=++-.:+-==%%%*+++:::::=#%*=*+-+**=-:.==-----
+++++++++++++++*--=+***+=*###+++****=+++++=--**##*+++***+++=-=+++*###****=----+##****+***+===*++++++
****************************************************************************************************
####################################################################################################
  `);
