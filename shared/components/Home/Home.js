import React from 'react';
import DiaporamaPeintures from '../DiaporamaPeintures/DiaporamaPeintures';
import './Home.css';

function Home(props) {
  return (
    <div className="site-container">
      <DiaporamaPeintures
        height="375px"
        width="1000px"
        SSRData={props.SSRData}
      />

      <div className="commentaire__wrapper">
        <div className="commentaire__titre">
          <h1>Une brève histoire de l’art occidentale</h1>
        </div>
        <div className="commentaire__contenu">
          <p>
            ANTIQUITÉ GRECQUE – IXe au IVe siècle avant J-C
            <br />
            Les connaissances relatives à cette époque remontent aux environs de
            -800 avant J-C. Cette période pendant laquelle la culture grecque
            domine perdure jusqu’au IVe siècle avant notre ère. Athènes en est
            le centre intellectuel grâce à ses innovations, la qualité de son
            savoir-faire et sa philosophie sur laquelle notre société actuelle
            repose encore (Socrate, Platon, …) Apparaissent les 1ères sculptures
            en pierre. Une architecture symétrique. Des sujets de la vie
            courante avec représentation du mouvement.
            <br />
            <br />
            PÉRIODE HELLÉNISTIQUE – IVe au Ier siècle avant J-C Les conquètes
            d’Alexandre le Grand étend le territoire, ouvrant alors les portes
            aux cultures voisines, notamment celles de la péninsule italienne.
            Cette période se présente comme la transition entre deux sociétés
            antiques ; la société grecque passant peu à peu sous domination
            romaine. Les sculptures deviennent monumentales. Recherche de
            réalisme dans la figure humaine
            <br />
            <br />
            ANTIQUITÉ ROMAINE – – 290 avant J-C à 476
            <br />
            C’est à cette date que Rome devient maître de tout un empire suite à
            une nouvelle victoire dans ses nombreuses guerres de territoires.
            L’empire romain peut alors prospérer tant au niveau commercial que
            politique. Le développement culturel est en plein essor, jusqu’en
            l’an 476, date de l’abdication du dernier empereur romain
            d’occident. La chute de Rome ou plutôt son déclin, trouve sa cause,
            dit-on, dans l’effondrement d’un système impliquant tous les
            éléments d’une société : l’économie, la politique, le commerce et la
            religion. Architecture grandiose à utilité publique et non plus
            uniquement à but religieux, composée d’Arcs et de voutes. Les
            portraits gagnent en réalisme et en détails
            <br />
            <br />
            PÉRIODE PALÉOCHRÉTIENNE – IVe au Xe siècle de notre ère
            <br />
            Le paléochrétien se définit comme étant la transition entre deux
            cultures successives, mélangeant les traditions païennes de l’Empire
            romain et ce nouveau culte monothéiste, la chrétienté. Bien que
            cette période débute dès le IIe siècle, elle trouve son essor en
            l’an 380, date à laquelle Constantin, le premier empereur romain,
            est converti. Premières basiliques à fonction religieuse sur base
            d’architecture romaine. En plan centré (forme de croix grecque
            composée d’une voute) ou en plan basilical (plus allongé), orné de
            mosaïques.
            <br />
            <br />
            L’ART ROMAN – Du Xe au XIIIe siècle
            <br />
            Nous voici à présent à l’ère du Moyen-âge, dominée par la religion
            chrétienne. Grâce à une expension économique, l’art roman s’étend
            bien au delà des frontières d’une région. Il devient le 1er style
            international (européen) Eglises uniquement sur plan basilical.
            Architecture massive et peinte. Peu de lumière à l’intérieur. L’ART
            GOTHIQUE – Du XIIIe au XVe siècle Ce style français, originaire
            d’ïle-de-France, apporte de la lumière à l’intérieur des édifices
            religieux grâce aux innovations architecturales et artisanales.
            Mettant fin peu à peu à l’obscurantisme religieux. L’architecture
            monumentale devient fine et élégante, on l’appelle alors le Gothique
            Flamboyant. Architecture fine et intérieurs lumineux grâce aux arcs
            boutants, voûtes d’ogive et vitraux. En peinture, Giotto apporte à
            nouveau un peu de vie dans ses peintures, par des sujets «
            sentimentaux ».
            <br />
            <br />
            RENAISSANCE – Du XIVe au XVIe siècle
            <br />
            Le terme Renaissance symbolise ce nouvel éveil intellectuel grâce
            aux redécouvertes des connaissances antiques. La philosophie, la
            littérature et la science sont de nouveau mis à l’honneur. l’Homme
            devient le point central de toute pensée – L’Humanisme est né. L’art
            et la science vont fusionner. Florence devient la capitale de cette
            renaissance intellectuelle. Naissance de l’imprimerie. Développement
            des arts par la découverte de la peinture à l’huile et des règles de
            la perspective. Du XVI au XVIIIe siècle
            <br />
            <br />
            MANIÈRISME
            <br />
            La perfection artistique étant considérée comme atteinte, les
            artistes cherchent alors à se démarquer. Plusieurs courants évoluent
            en parallèle. La volonté d’apporter plus de mouvement et d’harmonie
            au sein des sujets amène à créer quelques « manières ». Déformation
            volontaire des sujets et création de la ligne serpentine.
            <br />
            <br />
            CLASSICISME
            <br />
            Courant développé en France dans l’ensemble des arts, y compris
            l’architecture. L’art est intellectualisé. Une recherche de
            perfection esthétique basée sur l’idéal et la raison, inspirée de
            l’Antiquité. Retour des formes classiques de l’Antiquité. Géométrie
            appliquée aux arts et beauté idéalisée.
            <br />
            <br />
            BAROQUE
            <br />
            Courant développé en Italie au sein de tous les arts, y compris
            l’architecture. Le terme est d’origine péjorative signifiant bizarre
            ou grossier. Ce courant met fin à l’humanisme en replaçant l’homme
            dans un questionnement existentiel. Exagération, exubérance et
            surcharge des formes afin d’exprimer les passions intérieures.
            <br />
            <br />
            XVIIIe siècle
            <br />
            ROCOCO
            <br />
            Association de mots entre le style rocaille français et le barroco
            (baroque) italien. L’époque recherche plus de liberté, de légèreté,
            de frivolité, au sein de tous les arts. La décoration,
            l’architecture et la peinture sont mis en scène avec une grande
            fantaisie, comme dans une pièce de théâtre.
            <br />
            <br />
            NÉO-CLASSICISME
            <br />
            Courant qui perdure jusqu’au milieu du XIXe siècle. Il préconise un
            retour à la simplicité et à la vertu (patriotique) de l’antique. Les
            thèmes sont civiques, moralisateurs, voir propagandistes sous
            Napoléon. Orthogonalité des sujets. Le dessin prime sur la couleur
            utilisée localement. Pas de superflu.
            <br />
            <br />
            L’ÉRE DE L’INDUSTRIALISATION – XIXe siècle
            <br />
            Les premiers espaces industriels prennent naissance en
            Grande-Bretagne. Transformant rapidement une société agraire et
            artisanale en une société commerciale et industrielle, notamment via
            le développement ferroviaire. L’ensemble de la société est amenée à
            une idéologie rationnelle, individuelle et matérielle. L’art n’a
            d’autre choix que de se réinventer, on parle alors de révolution
            artistique. Invention de la photographie et des tubes de couleurs.
            Distanciation entre les institutions et les artistes, à la recheche
            à présent de leur « style » propre.
            <br />
            <br />
            ROMANTISME – XIXe siècle
            <br />
            Héritage du baroque et du rococo, les sentiments sont enfin assumés.
            Leur expression prime sur la raison. Chacun à sa manière tente
            d’exprimer le rêve, la folie, la mélancolie, l’amour ou encore le
            doute, la peur et l’angoisse, face à cette nature dominée par la
            mécanique. Pour la 1ère fois, le peintre peint selon son inspiration
            et non plus sur commande, quitte à déplaire il tient à rester libre.
            L’artiste moderne est né, le mythe de l’artiste maudit aussi…
            Déformation volontaire des sujets pour une meilleure expression. La
            matière et les touches vigoureuses s’affranchissent de
            l’enseignement académique.
            <br />
            <br />
            RÉALISME – XIXe siècle
            <br />
            Contrairement au romantisme, ce courant est à la recherche du réel
            par la représentation de la vie quotidienne dans sa brutalité et sa
            véracité. Les sujets sont sociétaux, influencés par le socialisme
            ambiant. Le principe étant que ce qui est vrai est beau. Des
            paysans, des villageois et scènes de vie sont représentés sans
            artifices ni aucune idéalisation.
            <br />
            <br />
            IMPRESSIONNISME – XIXe siècle
            <br />
            L’invention des tubes en étain permettent pour la 1ère fois aux
            artistes de peindre facilement en extérieur. Liés aux nouvelles
            connaissances scientifiques sur les lois de la perception visuelle,
            certains peintres cherchent à représenter le motif selon la lumières
            et ses effets. Ils peignent l’instant avec la couleur comme seul
            outil. Affranchissement envers les règles académiques. Palettes
            colorées, peintures rapides sur le motif. L’impression fugace face
            au motif est plus importante que le sujet lui-même.
            <br />
            <br />
            ART NOUVEAU – Fin XIXe – début XXe siècle
            <br />
            Ce mouvement nait en réaction face à cette industrialisation à
            outrance. Dès lors, l’architecture et la décoration s’inspirent de
            la nature par ses courbures, lignes sinueuses et formes organiques.
            C’est un style fleuri, chargé et coloré. Profitant des avancés
            techniques et industrielles, des innovations et fantaisies voient le
            jour en utilisant le verre, la pierre et le métal. Esthétique
            inspirée par la nature. Art total qui occupe tout le champ créatif.
            <br />
            <br />
            EXPRESSIONNISME – Début XXe siècle
            <br />
            L’Expressionisme est à l’Allemagne ce que l’Impressionisme est à la
            France. Van Gogh a été le précurseur. Ses successeurs ne
            représentent pas le monde, ils l’expriment. Déformer la réalité pour
            mieux susciter une réaction émotionnelle. Mais en cette période
            d’avant-guerre, les images sont torturées, les corps et les
            portraits complètement distordus. Ces œuvres bien souvent
            angoissantes reflètent le pessimisme de l’époque. Le régime Nazi
            condamne ce mouvement en le considérant comme « dégénéré ».
            Distorsion des formes, brutes et torturées.
            <br />
            <br />
            <br />
            FAUVISME – Début XXe siècle
            <br />
            Courant français parallèle à l’Expressionnisme en Allemagne. Les
            couleurs sont ici littéralement libérées, les teintes sont
            éclatantes et la simplification des formes amène aux prémices de
            l’abstraction. Les sujets sont optimistes et pleins de vie. Le terme
            fauve provient de l’aspect vif et spontané, presque sauvage de
            l’emploi de la couleur et du traitement du sujet. Se diffère de la
            douceur de l’Impressionisme. Nombreux aplats de couleurs vives. Le
            dessin disparaît peu à peu au profit de « tâches colorées ». XXe
            siècle.
            <br />
            <br />
            CUBISME
            <br />
            Né à Paris, le cubisme innove radicalement en présentant une
            décomposition du sujet avec disparition totale de la perspective.
            L’objet est représenté simultanément par toutes ses faces sur une
            surface bidimensionnel. Omniprésence des formes géométriques. Aucune
            perspective. Thèmes liés à la modernité.
            <br />
            <br />
            SURRÉALISME
            <br />
            Ce courant explore l’inconscient et les rêves à travers des images
            poétiques et ambiances énigmatiques. Le Moi intérieur est le sujet
            de prédilection suite à la publication des théories de Freud. Sujets
            métaphysiques. Recherche d’une réalité invisible et mystérieuse.
            <br />
            <br />
            DADAÏSME
            <br />
            Remise en cause de toutes les conventions esthétiques et
            idéologiques. Rejet de la raison et de la logique, provocation
            extravagante envers toutes les traditions. Le but est d’amener le
            public à réflechir sur les fondements de la société. Recherche d’une
            grande libérté d’expression en utilisant tout matériaux et tout
            support possible.
            <br />
            <br />
            FUTURISME
            <br />
            Mouvement italien à l’idéologie politique marquée. Apparenté au
            cubisme mais ayant pour but de représenter la décomposition du
            mouvement. Plus un corps bouge vite, plus sa perception devient
            abstraite. Influencé par les machines et la vitesse, aidé par la
            photographie et le cinéma. Décomposition du mouvement par une
            simultanéité des formes, couleurs et lumières.
            <br />
            <br />
            SUPRÉMATISME
            <br />
            Avant-garde russe menée par Malevitch qui nous amène à l’abstraction
            absolue. Les oeuvres sont libérées de toute représentation, devenant
            totalement autonomes et indépendantes par rapport au monde
            extérieur. Les formes et les couleurs sont individualisées et
            existent par elles-memes. Recherche d’équilibre entre les formes
            géométriques et les couleurs pures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
