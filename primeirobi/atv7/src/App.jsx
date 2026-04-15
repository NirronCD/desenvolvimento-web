import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Article } from './components/Article.jsx';
import { Footer } from './components/Footer';
import './style.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <Sidebar />

            <main id="main">
                <Article
                    title="Counter-Strike 2 Update"
                    author="Equipe de Desenvolvimento CS2"
                    date="February 23, 2026"
                >
                    <p>[ MISC ]</p>
                    <ul>
                        <li>Mitigated a performance issue that primarily affected Windows 10 users with recent Intel CPUs.</li>
                        <li>Fixed a case where the Delete Item inventory option wasn't working.</li>
                        <li>Fixed a case of visual corruption using iron sights on AMD GPUs.</li>
                        <li>Expanding list of console variables addons are allowed to change.</li>
                    </ul>
                    <p>[ MAPS ]</p>
                    <p>Overpass</p>
                    <ul>
                        <li>Fixed the Party balloons.</li>
                    </ul>
                    <figure className="flexcenter">
                        <img src="../public/cs2.jpg" alt="Imagem cs2" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                        <figcaption>CS2</figcaption>
                    </figure>
                </Article>

                <Article
                    title="The Fourth Season"
                    author="Valve"
                    date="21 de Janeiro de 2026"
                >
                    <p><strong>[ Competitivo Especial ]</strong></p>
                    <ul>
                        <li>Início da Quarta Temporada Especial.</li>
                        <li>Adição do mapa Anubis ao Grupo da Campanha Ativa.</li>
                        <li>Remoção do mapa Train do Grupo da Campanha Ativa.</li>
                    </ul>
                    <p><strong>[ Jogabilidade ]</strong></p>
                    <ul>
                        <li>Realização de pequenos ajustes às armas MP7 e MP5-SD: Leve aumento do dano, leve redução da redução de dano por distância, redução do preço em $100.</li>
                        <li>Alterações nas mecânicas de pulo: Agora, o tempo de aterrissagem é calculado com precisão entre tiques.</li>
                    </ul>
                </Article>
                <Article
                    title="Medalha de Serviço de 2026"
                    author="Equipe CS2"
                    date="01 de Janeiro de 2026"
                >
                    <p>A partir de 1º de janeiro de 2026, a nova Medalha de Serviço estará disponível dentro do jogo.</p>
                    <p>Alcance a 40ª patente (General Global) para zerar o seu progresso e ganhar (ou aprimorar) a sua Medalha de Serviço de 2026.</p>
                    <p>Boa sorte e divirta-se!</p>
                </Article>

            </main>

            <Footer />
        </div>
    );
}

export default App;