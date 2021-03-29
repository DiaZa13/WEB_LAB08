import shuffle from 'lodash.shuffle';
const CARDS_NUMBER = 24;
import Icons from './icons.json'
export default () =>{
    const icons = Icons;
    let cards = [];
    let test = [];
    while(cards.length < CARDS_NUMBER){
        const index = Math.floor(Math.random() * icons.length);
        if(test.indexOf(index) == -1){
            const card = {
                iconClass: icons[index].classIcon,
                iconName: icons[index].name,
                guessed: false
            };
            cards.push(card);
            cards.push({...card});
            test.push(index);
        }

    }

    return shuffle(cards);
}
