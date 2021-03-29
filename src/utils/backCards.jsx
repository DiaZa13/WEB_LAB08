import shuffle from 'lodash.shuffle';
import Icons from './icons.json';

const CARDS_NUMBER = 24;
export default () => {
  const icons = Icons;
  const cards = [];
  const test = [];
  while (cards.length < CARDS_NUMBER) {
    const index = Math.floor(Math.random() * icons.length);
    if (test.indexOf(index) === -1) {
      const card = {
        iconClass: icons[index].classIcon,
        iconName: icons[index].name,
        isComparing: false,
      };
      cards.push(card);
      cards.push({ ...card });
      test.push(index);
    }
  }

  return shuffle(cards);
};
