import { Router } from 'preact-router';
import './style';

import Header from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Projects from './routes/projects';
    import Pinger from 'async!./routes/projects/pinger';
    import Ciphers from './routes/projects/ciphers'; // cant async an object!!
    import PoemWrapper from 'async!./routes/projects/poems';
    import CirclesCreator from 'async!./routes/projects/wallpapers/circles';
    import EmbedCreator from 'async!./routes/projects/embedCreator';
    import EmbedBrowser from 'async!./routes/projects/embedBrowser';
    import Disclaimer from 'async!./routes/disclaimer';
    import SubSolver from 'async!./routes/projects/subsolver';
import Portfolio from "./routes/portfolio";
import DocWrapper from "./routes/docs";
import Error from './routes/error';


const App = () => (
    <div id="app">
        <Header />
        <Router>
            <Home path="/" />
            <Projects path="/projects/" />
                <Pinger path="/projects/mcserverping" />
                <Ciphers.Weezd path='/projects/0090C4/' />
                <Ciphers.Bipher path='/projects/bipher/' />                    
                <Ciphers.CaesarVariation path='/projects/caesarVariation/' />
                <Ciphers.CRC path='/projects/continuousRegisterCipher/' />
                <Ciphers.HashKeyCipher path='/projects/hashKeyCipher/' />
                <Ciphers.KCRC path='/projects/keyedCRC/' />
                <Ciphers.HKCRCR path='/projects/hCRCRework/' />
                <Ciphers.Weezd2 path='/projects/K0090C4/' />
                <Ciphers.Keysmash path='/projects/keysmashCipher/' />
                <PoemWrapper path='/projects/poetry/' />
                <CirclesCreator path='/projects/wallpapers/circles/' />
                <CirclesCreator path='/projects/backgroundcreator' />
                <EmbedCreator path='/projects/embedCreator' />
                <EmbedBrowser path='/projects/embedBrowser' />
                <SubSolver path='/projects/subSolver' />
            <Portfolio path="/portfolio/" />
            <DocWrapper path="/docs/" />
            <Disclaimer path="/disclaimer/" />

            <Error default />
        </Router>
    </div>
);

export default App;
