import {registerSheet} from 'react-native-actions-sheet';
import ExampleSheet from "./(tabs)/cardsDependencies/CardSheet";
 
registerSheet('CardSheet', ExampleSheet);
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
// declare module 'react-native-actions-sheet' {
//   interface Sheets {
//     'CardSheet': SheetDefinition;
//   }
// }
 
// export {};