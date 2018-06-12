import { addParagraph } from './helpers';
import SuperPerson from './person';


const solo = new SuperPerson('Solo','Chewwwwwwwwy');
addParagraph(solo.talk('Come watch my movie!'));

addParagraph( solo.saySuperpower() );