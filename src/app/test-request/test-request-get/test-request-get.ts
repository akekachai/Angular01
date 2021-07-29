export interface Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}


// export interface member {
//     id: number;
//     title: string;
// }
export interface Member {

  names: string;
  password: string;
  referance: string;
}