// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('brain-game');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greetings;
