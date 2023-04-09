import './Main.css';
// import contenImg from '../../images/content-img.svg';
import Pokemon from '../Pokemon/Pokemon';
import CardList from '../CardList/CardList';

function Main() {
    return (
        <main className="content">
            <Pokemon/>
            <CardList/>
        </main>
    )
}

export default Main;