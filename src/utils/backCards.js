import shuffle from 'lodash.shuffle';
const CARDS_NUMBER = 20;
import Icons from './icons.json'
export default () =>{
    const icons = Icons;
    let cards = [];
    while(cards.length <CARDS_NUMBER){
        const index = Math.floor(Math.random() * icons.length);
        const card = {
            iconClass: icons[index].classIcon,
            iconName: icons[index].name,
            guess: false
        };
        cards.push(card);
        cards.push({...card});
    }

    return shuffle(cards);
}