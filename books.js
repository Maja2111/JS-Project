/**
 * @import books zu index.js
 */

const books = [
  /**
   * @description 1.Fourth Wings
   */
  {
    title: 'Fourth Wings - Flammengeküsst',
    author: 'Rebecca Yarros',
    isbnNumber: 9783423284127,
    price: 28,
    publicationYear: 2023,
    publisher: 'dtv',
    pages: 768,
    genre: 'Fantasie',
    titleType: 'Pentalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 2.Iron Flames
   */
  {
    title: 'Iron Flame - Flammengeküsst',
    author: 'Rebecca Yarros',
    isbnNumber: 9783423283939,
    price: 28,
    publicationYear: 2023,
    publisher: 'dtv',
    pages: 960,
    genre: 'Fantasie',
    titleType: 'Pentalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 3.Die Flüsse von London
   */
  {
    title: 'Die Flüsse von London - Peter Grant Story Band 1',
    author: 'Ben Aaronovitch',
    isbnNumber: 9783423213417,
    price: 12,
    publicationYear: 2012,
    publisher: 'dtv',
    pages: 480,
    genre: 'Fantasie',
    titleType: 'Ennealogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 4.Der Mond über Soho
   */
  {
    title: 'Der schwarze Mond über Soho - Peter Grant Story Band 2',
    author: 'Ben Aaronovitch',
    isbnNumber: 9783423213806,
    price: 11.95,
    publicationYear: 2012,
    publisher: 'dtv',
    pages: 416,
    genre: 'Fantasie',
    titleType: 'Ennealogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 5.Die schlafenden Geister
   */
  {
    title:
      'Die schlafenden Geister des Lake Superior - Kimberley Reynolds Story',
    author: 'Ben Aaronovitch',
    isbnNumber: 9783423218771,
    price: 11.95,
    publicationYear: 2023,
    publisher: 'dtv',
    pages: 240,
    genre: 'Fantasie',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 6.Rubinrot
   */
  {
    title: 'Rubinrot - Liebe geht durch alle Zeiten Bd. 1',
    author: 'Kerstin Gier',
    isbnNumber: 9783401506005,
    price: 17,
    publicationYear: 2009,
    publisher: 'Arena',
    pages: 352,
    genre: 'Zeitreiseliebesroman',
    titleType: 'Trilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 7.Saphierblau
   */
  {
    title: 'Saphirblau - Liebe geht durch alle Zeiten Band 2',
    author: 'Kerstin Gier',
    isbnNumber: 9783401506012,
    price: 18,
    publicationYear: 2010,
    publisher: 'Arena',
    pages: 400,
    genre: 'Zeitreiseliebesroman',
    titleType: 'Trilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 8.Smaragdgrün
   */
  {
    title: 'Smaragdgrün - Liebe geht durch alle Zeiten Band 3',
    author: 'Kerstin Gier',
    isbnNumber: 9783401063485,
    price: 22,
    publicationYear: 2010,
    publisher: 'Arena',
    pages: 400,
    genre: 'Zeitreiseliebesroman',
    titleType: 'Trilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 9.Love Recipes Band 1
   */
  {
    title: 'Love Recipes – Verführung à la carte',
    author: 'Kate Meader',
    isbnNumber: 9783492995702,
    price: 9.99,
    publicationYear: 2020,
    publisher: 'Piper',
    pages: 464,
    genre: 'Young Adult Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 10.Love Recipes Band 2
   */
  {
    title: 'Love Recipes - Süßes Verlangen',
    author: 'Kate Meader',
    isbnNumber: 9783492995719,
    price: 9.99,
    publicationYear: 2020,
    publisher: 'Piper',
    pages: 464,
    genre: 'Young Adult Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 11.Love Recipes Band 3
   */
  {
    title: 'Love Recipes - Happy Hour fürs Herz',
    author: 'Kate Meader',
    isbnNumber: 9783492995726,
    price: 9.99,
    publicationYear: 2020,
    publisher: 'Piper',
    pages: 400,
    genre: 'Young Adult Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 12.Die Liebenden von Leningrad
   */
  {
    title: 'Die Liebenden von Leningrad',
    author: 'Paullina Simons',
    isbnNumber: 9783453422322,
    price: 12,
    publicationYear: 2018,
    publisher: 'Heyne',
    pages: 752,
    genre: 'Kriegsroman',
    titleType: 'Dilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 13.Illuminati
   */
  {
    title: 'Illuminati',
    author: 'Dan Brown',
    isbnNumber: 9783404148660,
    price: 14,
    publicationYear: 2003,
    publisher: 'Lübbe',
    pages: 736,
    genre: 'Thriller',
    titleType: 'Pentalogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 14.Sakrileg
   */
  {
    title: 'Sakrileg',
    author: 'Dan Brown',
    isbnNumber: 9783404154852,
    price: 14,
    publicationYear: 2003,
    publisher: 'Lübbe',
    pages: 624,
    genre: 'Thriller',
    titleType: 'Pentalogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 15.Cupido
   */
  {
    title: 'Cupido',
    author: 'Jilliane Hoffman',
    isbnNumber: 9783499239663,
    price: 14,
    publicationYear: 2005,
    publisher: 'Rowohlt Taschenbuch',
    pages: 480,
    genre: 'Thriller',
    titleType: 'Triologie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 20.Disney Villains 1
   */
  {
    title: 'Die Schönste im ganzen Land',
    author: 'Serena Valentino',
    isbnNumber: 9783551319708,
    price: 7.99,
    publicationYear: 2021,
    publisher: 'Carlsen',
    pages: 272,
    genre: 'Märchen',
    titleType: 'Reihe',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 21.Disney Villains 2
   */
  {
    title: 'Das Biest in ihm',
    author: 'Serena Valentino',
    isbnNumber: 9783551319692,
    price: 7.99,
    publicationYear: 2021,
    publisher: 'Carlsen',
    pages: 224,
    genre: 'Märchen',
    titleType: 'Reihe',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 22.Harry Potter 1
   */
  {
    title: 'Harry Potter und der Stein der Weisen',
    author: 'J.K.Rowling',
    isbnNumber: 9783551557414,
    price: 18,
    publicationYear: 1997,
    publisher: 'Carlsen',
    pages: 336,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 23.Harry Potter 2
   */
  {
    title: 'Harry Potter und die Kammer des Schreckens',
    author: 'J.K.Rowling',
    isbnNumber: 9783551557421,
    price: 18,
    publicationYear: 1998,
    publisher: 'Carlsen',
    pages: 352,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 24.Harry Potter 3
   */
  {
    title: 'Harry Potter und der Gefangene von Askaban',
    author: 'J.K.Rowling',
    isbnNumber: 9783551557438,
    price: 20,
    publicationYear: 1999,
    publisher: 'Carlsen',
    pages: 448,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 25.Harry Potter 4
   */
  {
    title: 'Harry Potter und der Feuerkelch',
    author: 'J.K.Rowling',
    isbnNumber: 9783551557445,
    price: 27,
    publicationYear: 2000,
    publisher: 'Carlsen',
    pages: 704,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 26.Harry Potter 5
   */
  {
    title: 'Harry Potter und der Orden des Phönix',
    author: 'J.K.Rowling',
    isbnNumber: 9783551557452,
    price: 30,
    publicationYear: 2003,
    publisher: 'Carlsen',
    pages: 960,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },

  /**
   * @description 27.Harry Potter 6
   */
  {
    title: 'Harry Potter und der Halbblutprinz',
    author: 'J.K.Rowling',
    isbnNumber: 9783551557452,
    price: 26,
    publicationYear: 2005,
    publisher: 'Carlsen',
    pages: 640,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 28.Harry Potter 7
   */
  {
    title: 'Harry Potter und die Heiligtümer des Todes',
    author: 'J.K.Rowling',
    isbnNumber: 9783551557476,
    price: 28,
    publicationYear: 2007,
    publisher: 'Carlsen',
    pages: 752,
    genre: 'Fantasie',
    titleType: 'Heptalogie',
    bookType: 'Hardcover',
  },
  /**
   * @description 29.Warum Menschen töten
   */
  {
    title: 'Warum Menschen töten - Eine Polizeipsychologin ermittelt',
    author: 'Claudia Brockmann',
    isbnNumber: 9783843705547,
    price: 7.99,
    publicationYear: 2013,
    publisher: 'Ullstein Verlag',
    pages: 208,
    genre: 'Bericht',
    titleType: 'Einzelband',
    bookType: 'eBook',
  },
  /**
   * @description 30.Dunbridge Academy 1
   */
  {
    title: 'Dunbridge Academy - Anywhere',
    author: 'Sarah Sprinz',
    isbnNumber: 9783736316553,
    price: 14,
    publicationYear: 2022,
    publisher: 'LYX',
    pages: 464,
    genre: 'Young Adult',
    titleType: 'Trilogie',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 31.Tycoon
   */
  {
    title: 'Tycoon - Dein Herz so nah',
    author: 'Katy Evans',
    isbnNumber: 9783736308541,
    price: 9.99,
    publicationYear: 2019,
    publisher: 'LYX',
    pages: 297,
    genre: 'Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 32.Mogul
   */
  {
    title: 'Mogul -  Wenn du mich berührst',
    author: 'Katy Evans',
    isbnNumber: 9783736310186,
    price: 9.99,
    publicationYear: 2019,
    publisher: 'LYX',
    pages: 281,
    genre: 'Roman',
    titleType: 'Trilogie',
    bookType: 'eBook',
  },
  /**
   * @description 33.Gone Girl
   */
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    isbnNumber: 9783596188789,
    price: 10.99,
    publicationYear: 2014,
    publisher: 'Fischer Taschenbuch Verlag',
    pages: 592,
    genre: 'Thriller',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 34.Die Physiker
   */
  {
    title: 'Die Physiker',
    author: 'Friedrich Dürrenmatt',
    isbnNumber: 9783596188789,
    price: 9,
    publicationYear: 1988,
    publisher: 'Diogenes',
    pages: 96,
    genre: 'Lektüre',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
  /**
   * @description 35.Die neuen Leiden des jungen W.
   */
  {
    title: 'Die neuen Leiden des jungen W.',
    author: 'Ulrich Plenzdorf',
    isbnNumber: 9783518368008,
    price: 6,
    publicationYear: 1976,
    publisher: 'Suhrkamp',
    pages: 160,
    genre: 'Lektüre',
    titleType: 'Einzelband',
    bookType: 'Taschenbuch',
  },
];

module.exports = books;
