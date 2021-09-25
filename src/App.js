import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';

function App() {
  return (
    <div className="App">
    <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;


/* 
1.npm = Node package manager.
2.cli = command line interface.
3.component theke component e data pathassi unidirectionally upor theke niche.
4.props gula unidirectional data pathay.props er component ke set kora jabena egula only read only.
5.webpack,babel,settings
6.useState er state immutable etake chailei directly change korte aprbo na.
7.setState eta asynchronous
8.useEffect hosse jotobar UI change hobe totabar useEffect ta call korbe jodi empty array na dei . ekbar e jodi chai load hok tahole empty array dite hobe
useEffect er empty array ta hosse dependency injection ba dependency list .

9. difference between props and state
=>props read only .child component e ja e pathaina kno props hishebe pathaite hobe must.
=>states change korar jonno e banano hoise.
10. useState ,useEffect egulare hook bole.react er kono ekta jinish er shathe kichu connect kortesi state change korar jonno eta hosse hook.

11.React is a javascript library for building user interfaces.
12.Anguler ekta javascript framework 
13. How react work?
=> React application nije nijei ekta virtual dom ready kore tar ekta copy nijr kache rakhe .Tarpore jodi konokichu update hoy ba change hoy ba modify hoy tahole shey shetar jonno ekta dom banay and ager dom er shathe compare kore dekhe difference ta ki or kon jaygay change ta ashche. Oikhane shey kichu technique apply kore. oi tecknique er karone shey onk druto kaaj korte pare main dom er kase haat na diye.tarpor shey identify kore fele tar kase ekta diff algorithom ache.Jeta quickly differenciate kore bole dite pare only ei part ta ba only ei part ta te change ashche .Then oi part tuku ke shey main dom er moddhe niye ney.
14.component lifecycle
*/