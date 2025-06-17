import {registerSheet} from 'react-native-actions-sheet';
// import CardSheet from "../cardsDependencies/CardSheet";
import CardSheet from './CardSheet';
 
registerSheet('CardSheet', CardSheet);
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
// declare module 'react-native-actions-sheet' {
//   interface Sheets {
//     'CardSheet': SheetDefinition;
//   }
// }
 
// export {};