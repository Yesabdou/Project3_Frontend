import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navigation from "../../components/Navigation";
const Handi = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="page">
        <div className="comprendreHandicape"></div>
        <header>
          <h1 data-aos="zoom-in" className="page-titlendre">
            Comprendre le handicap
          </h1>
          <nav
            aria-label="Sommaire de la page"
            className="sommaire tinytoc tiny_toc"
          >
            <ul>
              <li className="puce-orange">
                <a href="#definition-du-handicap"> Définition du handicap </a>
              </li>

              <li className="puce-orange">
                <a href="#quelques-chiffres-cles"> Quelques chiffres clés </a>
              </li>
              <li className="puce-orange">
                <a href="#types-de-handicap"> Types de handicap </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className=" police">
          <div className="">
            <h2 id="definition-du-handicap">D&eacute;finition du handicap</h2>
            <p>
              D&eacute;finir le handicap est complexe car il existe plusieurs
              d&eacute;finitions. Cependant, la loi du 11 f&eacute;vrier 2005 en
              donne une d&eacute;finition officielle.
            </p>
            <h3>D&eacute;finition l&eacute;gale</h3>
            <p>
              La loi du 11 f&eacute;vrier 2005, portant sur
              l&rsquo;&eacute;galit&eacute; des droits et des chances, la
              participation et la citoyennet&eacute; des personnes
              handicap&eacute;es (article 114) donne la d&eacute;finition du
              handicap suivante :
            </p>
            <blockquote>
              <p>
                Constitue un handicap, au sens de la pr&eacute;sente loi, toute
                limitation d&rsquo;activit&eacute; ou restriction de
                participation &agrave; la vie en soci&eacute;t&eacute; subie
                dans son environnement par une personne en raison d&rsquo;une
                alt&eacute;ration substantielle, durable ou d&eacute;finitive
                d&rsquo;une ou plusieurs fonctions physiques, sensorielles,
                mentales, cognitives ou psychiques, d&rsquo;un polyhandicap ou
                d&rsquo;un trouble de sant&eacute; invalidant
              </p>
            </blockquote>
            <h3>
              D&eacute;finition de l&rsquo;Organisation Mondiale de la
              Sant&eacute; (OMS)
            </h3>
            <p className="quote">
              &laquo; Est handicap&eacute;e toute personne dont
              l&rsquo;int&eacute;grit&eacute; physique ou mentale est
              passag&egrave;rement ou d&eacute;finitivement diminu&eacute;e,
              soit cong&eacute;nitalement, soit sous l&rsquo;effet de
              l&rsquo;&acirc;ge ou d&rsquo;un accident, en sorte que son
              autonomie, son aptitude &agrave; fr&eacute;quenter
              l&rsquo;&eacute;cole ou &agrave; occuper un emploi s&rsquo;en
              trouvent compromises. &raquo;
            </p>
            <h3>
              D&eacute;finition de la Convention des Nations Unies relative aux
              droits des personnes handicap&eacute;es
            </h3>

            <p className="quote">
              &laquo; Par personnes handicap&eacute;es on entend des personnes
              qui pr&eacute;sentent des incapacit&eacute;s physiques, mentales,
              intellectuelles ou sensorielles durables dont l&rsquo;interaction
              avec diverses barri&egrave;res peut faire obstacle &agrave; leur
              pleine et effective participation &agrave; la
              soci&eacute;t&eacute; sur la base de l&rsquo;&eacute;galit&eacute;
              avec les autres. &raquo;
            </p>
            <hr />
          </div>
          <div>
            <div className="incrusteVideo">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/A3_vUWG28sU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Xw1ANtJJkHg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <h2 id="quelques-chiffres-cles">Quelques chiffres cl&eacute;s</h2>

            <figure
              id="attachment_1429"
              aria-describedby="caption-attachment-1429"
              className="wp-caption alignleft"
            >
              <img
                loading="lazy"
                className="chiffresClefs"
                src=" https://handicap.paris.fr/documents/2018/05/handicap-1.jpg  "
                alt="le handicap c'est quoi ? Quelques chiffres"
              />

              <figcaption
                id="caption-attachment-1429"
                className="wp-caption-text"
              >
                Source : Minist&egrave;re de l&rsquo;Education Nationale, de
                l&rsquo;Enseignement sup&eacute;rieur et de la Recherche &ndash;
                novembre 2015
              </figcaption>
            </figure>
            <p>
              <strong> 4,6 millions </strong>
              <br />
              C&rsquo;est le nombre de personnes qui pr&eacute;sentent une forme
              de handicap, chez les personnes de 20 &agrave; 59 ans vivant
              &agrave; domicile, soit 14 % de cette population.
              <br />
              <em>
                Source : Enqu&ecirc;te Handicap-Sant&eacute; 2008-2009, volet
                m&eacute;nages, INSEE. <br />
              </em>
              <br />
            </p>
            <p>
              <strong> 2,7 millions </strong>
              <br />
              C&rsquo;est le nombre de personnes en &acirc;ge de travailler (de
              15 &agrave; 64 ans) qui d&eacute;clarent &ecirc;tre
              b&eacute;n&eacute;ficiaires de la reconnaissance administrative
              d&rsquo;un handicap ou d&rsquo;une perte d&rsquo;autonomie.
              <br />
              <em>
                {" "}
                Source : INSEE, Enqu&ecirc;te emploi 2015; traitement DARES.{" "}
              </em>
            </p>
            <p>
              <strong> 43 % </strong>
              <br />
              C&rsquo;est le pourcentage de personnes actives parmi les
              personnes b&eacute;n&eacute;ficiaires d&rsquo;une reconnaissance
              administrative du handicap :
              <br />
              35 % sont en emploi et 8 % sont au ch&ocirc;mage.
              <br />
              <em>
                Source : INSEE, Enqu&ecirc;te emploi 2015, traitement DARES.{" "}
              </em>
            </p>

            <hr />
          </div>
          <div>
            <h2 id="types-de-handicap">Types de handicap</h2>

            <p>
              La loi du 11 f&eacute;vrier 2005 reconna&icirc;t diff&eacute;rents
              types de handicap dont le handicap moteur, sensoriel (auditif et
              visuel), mental, cognitif et psychique.
            </p>

            <h3>
              <img
                loading="lazy"
                className="flotImg"
                src="https://handicap.paris.fr/documents/2018/06/handicap-moteur.png"
                alt="logo handicap moteur"
                width="54"
                height="52"
              />
              Handicap moteur
            </h3>
            <p>
              Le handicap moteur est caract&eacute;ris&eacute; par la limitation
              de certaines fonctions physiques d&rsquo;un individu. Il recouvre
              l&rsquo;ensemble des troubles (troubles de la
              dext&eacute;rit&eacute;, paralysie, &hellip;) pouvant
              entra&icirc;ner une atteinte partielle ou totale de la
              motricit&eacute;, notamment des membres sup&eacute;rieurs et/ou
              inf&eacute;rieurs (difficult&eacute;s pour se d&eacute;placer,
              conserver ou changer une position, prendre et manipuler, effectuer
              certains gestes). Il peut survenir &agrave; la suite d&rsquo;un
              accident, d&rsquo;une maladie ou de complications
              g&eacute;n&eacute;tiques.
            </p>
            <h3>Handicap sensoriel</h3>

            <p>
              La d&eacute;ficience visuelle et la d&eacute;ficience auditive
              sont les deux formes de handicap sensoriel.
            </p>

            <p>
              <strong>
                <img
                  loading="lazy"
                  className="flotImg"
                  src="https://handicap.paris.fr/documents/2018/06/handicap-auditif.png"
                  alt="logo handicap auditif"
                  width="53"
                  height="53"
                />
                Handicap auditif
              </strong>
            </p>

            <p>
              On estime &agrave; environ 5 millions le nombre de personnes ayant
              des&nbsp;difficult&eacute;s d&rsquo;audition en France.
            </p>

            <p>
              Les&nbsp;personnes peuvent &ecirc;tre sourdes de naissance ou
              devenues sourdes. Il existe diff&eacute;rents&nbsp; types de
              surdit&eacute;(s) : surdit&eacute; l&eacute;g&egrave;re, moyenne,
              s&eacute;v&egrave;re et profonde.
            </p>

            <p>Il existe diff&eacute;rents moyens de communication&nbsp;:</p>

            <p>
              <strong>
                <span className="titre-no"> 1 </span>
                &nbsp;la Langue des Signes Fran&ccedil;aise (
                <span
                  className="glossaryLink"
                  aria-describedby="tt"
                  data-cmtooltip="&lt;div className=glossaryItemTitle&gt;LSF&lt;/div&gt;&lt;div className=glossaryItemBody&gt;Langue des Signes Fran&ccedil;aise &lt;/div&gt;"
                  data-gt-translate-attributes='[{"attribute":"data-cmtooltip", "format":"html"}]'
                >
                  LSF
                </span>
                )
              </strong>
            </p>

            <p>
              La loi du 11 f&eacute;vrier 2005 reconna&icirc;t la LSF comme une
              langue &agrave; part enti&egrave;re. Il s&rsquo;agit de la langue
              visuelle utilis&eacute;e par les personnes sourdes et
              malentendantes pour s&rsquo;exprimer. Elle poss&egrave;de son
              propre vocabulaire, sa propre syntaxe et sa propre grammaire.
            </p>

            <p>
              La LSF est porteuse d&rsquo;une histoire et d&rsquo;une culture.
            </p>

            <p>
              Chaque signe est constitu&eacute; de 5
              &eacute;l&eacute;ments&nbsp;: la configuration (position des mains
              et des doigts), l&rsquo;emplacement des mains en fonction du reste
              du corps, le mouvement effectu&eacute;, l&rsquo;orientation de la
              paume et l&rsquo;expression du visage.
            </p>

            <p>
              <img
                loading="lazy"
                className="alignleft wp-image-1964"
                src="https://handicap.paris.fr/documents/2018/06/Alphabet-LSF-338x470.gif"
                alt="Alphabet LLangue des signes fran&ccedil;aise"
                width="238"
                height="331"
                srcSet="
          https://handicap.paris.fr/documents/2018/06/Alphabet-LSF-338x470.gif 338w,
          https://handicap.paris.fr/documents/2018/06/Alphabet-LSF-72x100.gif   72w,
          https://handicap.paris.fr/documents/2018/06/Alphabet-LSF-188x262.gif 188w,
          https://handicap.paris.fr/documents/2018/06/Alphabet-LSF-253x352.gif 253w
        "
                sizes="(max-width: 238px) 100vw, 238px"
              />
            </p>

            <p>&nbsp;</p>

            <p>
              <img
                loading="lazy"
                className="alignleft wp-image-1965"
                src="https://handicap.paris.fr/documents/2018/06/bONJOUR-EN-lsf.jpg"
                alt="Signe bonjour en LSF"
                width="375"
                height="265"
                srcSet="
          https://handicap.paris.fr/documents/2018/06/bONJOUR-EN-lsf.jpg         448w,
          https://handicap.paris.fr/documents/2018/06/bONJOUR-EN-lsf-141x100.jpg 141w,
          https://handicap.paris.fr/documents/2018/06/bONJOUR-EN-lsf-350x248.jpg 350w
        "
                sizes="(max-width: 375px) 100vw, 375px"
              />
            </p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <p>
              Il existe des interpr&egrave;tes en LSF qui traduisent et
              interpr&egrave;tent la parole du fran&ccedil;ais en LSF et
              vice-versa. Cela permet aux personnes sourdes et entendantes de
              communiquer et &eacute;changer.
            </p>

            <p>
              <a
                href="http://www.annuaire-interpretes-lsf.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultez l&rsquo;annuaire des interpr&egrave;tes en LSF
              </a>
            </p>

            <p>
              <strong>
                <span className="titre-no"> 2 </span>
                &nbsp;la lecture labiale&nbsp;
              </strong>
            </p>

            <p>
              La lecture labiale ou lecture sur les l&egrave;vres, consiste
              &agrave; d&eacute;crypter sur les l&egrave;vres de
              l&rsquo;interlocuteur les mots qu&rsquo;il prononce.
            </p>

            <p>
              On peut lire sur les l&egrave;vres mais c&rsquo;est difficile car
              certains sons se ressemblent, et d&rsquo;autres ne se voient pas.
              Par exemple, en fran&ccedil;ais, lorsqu&rsquo;on prononce pain ou
              main, on peut lire sur les l&egrave;vres le m&ecirc;me mouvement
              que lorsqu&rsquo; on dit bain.
            </p>

            <p>
              Quand on est en face d&rsquo;une personne sourde, Il est important
              d&rsquo;articuler normalement et de parler doucement.
            </p>

            <p>
              La lecture labiale ne permet de d&eacute;chiffrer qu&rsquo;environ
              30 % du discours prononc&eacute; par le locuteur.
            </p>

            <p>
              <strong>
                <span className="titre-no"> 3 </span>
                &nbsp;le Langage Parl&eacute; Compl&eacute;t&eacute; (
                <span
                  className="glossaryLink"
                  aria-describedby="tt"
                  data-cmtooltip="&lt;div className=glossaryItemTitle&gt;LPC&lt;/div&gt;&lt;div className=glossaryItemBody&gt;Langage parl&eacute; compl&eacute;t&eacute;&lt;/div&gt;"
                  data-gt-translate-attributes='[{"attribute":"data-cmtooltip", "format":"html"}]'
                >
                  LPC
                </span>
                )&nbsp;
              </strong>
            </p>

            <p>
              Le LPC est une technique d&rsquo;aide &agrave; la lecture sur les
              l&egrave;vres. Les sons du langage sont associ&eacute;s &agrave;
              des gestes de la main, effectu&eacute;s pr&egrave;s du visage.
            </p>

            <p>
              <strong>
                <span className="titre-no"> 4 </span>
                &nbsp;l&rsquo;&eacute;crit
              </strong>
            </p>

            <p>
              Les nouvelles technologiques telles que le portable,
              l&rsquo;Internet, les messageries &eacute;lectroniques, la webcam
              permettent aux personnes sourdes et malentendantes de communiquer
              plus facilement. Exemple&nbsp;: les personnes sourdes peuvent
              fixer un rendez-vous &agrave; la derni&egrave;re minute comme les
              entendants.
            </p>

            <p>
              <strong> Liens Internet et informations pratiques&nbsp;: </strong>
            </p>

            <ul>
              <li>
                <a
                  href="http://www.surdi.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centre national d&rsquo;information sur la surdit&eacute;
                </a>
              </li>

              <li>
                &Eacute;missions t&eacute;l&eacute;vis&eacute;es&nbsp;: journaux
                avec interpr&eacute;tariat en LSF,
                <a
                  href="https://www.france.tv/france-5/l-oeil-et-la-main/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &eacute;mission l&rsquo;&oelig;il et la main
                </a>
              </li>

              <li>
                <a
                  href="http://www.fnsf.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  F&eacute;d&eacute;ration Nationale des sourds
                </a>
              </li>

              <li>
                <a
                  href="http://www.sourds.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portail d&rsquo;informations sur les sourds
                </a>
              </li>

              <li>
                Application de traduction LSF pour le
                t&eacute;l&eacute;phone&nbsp; :
                <a
                  href="http://www.elix-lsf.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elix
                </a>
              </li>
            </ul>

            <p>
              <strong>
                <img
                  loading="lazy"
                  className="flotImg"
                  src="https://handicap.paris.fr/documents/2018/06/handicap-visuel.png"
                  alt="logo handicap visuel"
                  width="55"
                  height="52"
                />
                Handicap visuel
              </strong>
            </p>

            <p>
              On estime &agrave; 1&nbsp;700&nbsp;000 le nombre des
              d&eacute;ficients visuels en France. Pour le grand public, le
              d&eacute;ficient visuel s&rsquo;assimile souvent &agrave; une
              personne totalement aveugle. Mais dans les faits, la
              d&eacute;ficience visuelle est multiforme.
            </p>

            <p>
              On peut classNameer les personnes handicap&eacute;es visuelles en
              4 groupes en fonction de la s&eacute;v&eacute;rit&eacute; de leur
              d&eacute;ficience visuelle :
              <br />
              &ndash; les aveugles (61 000, soit 3,5% des d&eacute;ficients
              visuels) : vision nulle
              <br />
              &ndash; les malvoyants profonds (14 6000, soit 8,5% des
              d&eacute;ficients visuels) : vision r&eacute;siduelle
              limit&eacute;e &agrave; la distinction de silhouettes
              <br />
              &ndash; les malvoyants moyens (93 2000, soit 55 % des
              d&eacute;ficients visuels) : incapacit&eacute; visuelle
              s&eacute;v&egrave;re en vision de loin (incapacit&eacute; totale
              ou beaucoup de difficult&eacute;s &agrave; reconna&icirc;tre un
              visage &agrave; quatre m&egrave;tres) ou en vision de pr&egrave;s
              (incapacit&eacute; totale ou beaucoup de difficult&eacute;s
              &agrave; lire et &eacute;crire)
              <br />
              &ndash; les malvoyants l&eacute;gers (un peu plus de 560 000, soit
              33 % des d&eacute;ficients visuels) : pas
              d&rsquo;incapacit&eacute;s visuelles s&eacute;v&egrave;res en
              vision de loin ou de pr&egrave;s.
            </p>

            <p>
              Les r&eacute;percussions fonctionnelles de la d&eacute;ficience
              visuelle sont variables d&rsquo;une personne &agrave;
              l&rsquo;autre et d&eacute;pendent de nombreux facteurs&nbsp;:
              champ de vision central ou p&eacute;riph&eacute;rique,
              circonstances de la d&eacute;ficience (de naissance ou plus
              tardive, par exemple &agrave; la suite d&rsquo;un accident ou
              d&rsquo;une maladie), la luminosit&eacute;, la perception des
              couleurs et des contrastes.
            </p>

            <ul>
              <li>
                <strong>
                  Comment compenser la d&eacute;ficience visuelle&nbsp;?
                </strong>
              </li>
            </ul>

            <p>
              Le handicap visuel peut &ecirc;tre compens&eacute; par le recours
              &agrave; d&rsquo;autres sens : l&rsquo;ou&iuml;e, l&rsquo;odorat
              ou le toucher mais aussi la m&eacute;moire, des aides techniques
              et des trucs et astuces qui varient d&rsquo;une personne &agrave;
              l&rsquo;autre.
            </p>

            <p>
              Les aides techniques s&rsquo;av&egrave;rent indispensables dans la
              vie quotidienne.
              <br />
              Une bonne ma&icirc;trise du maniement de la canne blanche est une
              source non n&eacute;gligeable pour acqu&eacute;rir de
              l&rsquo;autonomie dans les d&eacute;placements.
            </p>

            <p>
              Des boutiques sp&eacute;cialis&eacute;es vendent des objets de la
              vie quotidienne adapt&eacute;s, tactiles ou sonores.
            </p>

            <p>
              Il existe d&eacute;sormais entre autres des
              t&eacute;l&eacute;-agrandisseurs, des ordinateurs &agrave;
              synth&egrave;se vocale ou &eacute;quip&eacute;s de plages braille,
              des scanners permettant d&rsquo;avoir acc&egrave;s aux documents
              imprim&eacute;s, des portables sonoris&eacute;s. Internet permet
              de t&eacute;l&eacute;charger &agrave; distance des livres audio.
              L&rsquo;audiodescription (une voix d&eacute;crit les jeux de
              sc&egrave;ne, les d&eacute;cors et les costumes durant les moments
              de silence) facilite la compr&eacute;hension des films, des
              pi&egrave;ces de th&eacute;&acirc;tre, des op&eacute;ras, dans les
              mus&eacute;es, des guides audio expliquent les &oelig;uvres
              d&rsquo;art, dont il existe des reproductions qu&rsquo;on peut
              toucher.
            </p>

            <h3>
              <img
                loading="lazy"
                className="flotImg"
                src="https://handicap.paris.fr/documents/2018/06/handicap-mental.png"
                alt="logo handicap mental"
                width="53"
                height="53"
              />
              Handicap mental
            </h3>

            <p>
              Le handicap mental regroupe &agrave; la fois la d&eacute;ficience
              mentale qui en est la cause et ses cons&eacute;quences dans la vie
              de la personne atteinte. Celle-ci rencontre des difficult&eacute;s
              de conceptualisation, de r&eacute;flexion, de d&eacute;cision et
              de communication.
            </p>

            <h3>
              <img
                loading="lazy"
                className="flotImg"
                src="https://handicap.paris.fr/documents/2018/06/handicap-cognitif.png"
                alt="logo handicap cognitif"
                width="52"
                height="51"
              />
              Handicap cognitif
            </h3>

            <p>
              Les fonctions cognitives repr&eacute;sentent tous les processus
              c&eacute;r&eacute;braux par lesquels l&rsquo;&ecirc;tre humain
              acquiert l&rsquo;information, la traite, la manipule, la
              communique, et s&rsquo;en sert pour agir. Elles incluent la
              perception, l&rsquo;attention, la m&eacute;moire, les fonctions
              ex&eacute;cutives, le langage oral, le langage &eacute;crit, le
              calcul, la repr&eacute;sentation dans l&rsquo;espace et le temps,
              le geste, le raisonnement, les &eacute;motions, la capacit&eacute;
              &agrave; se conna&icirc;tre, &agrave; interagir avec autrui.
            </p>

            <p>
              On appelle trouble cognitif, toute alt&eacute;ration
              substantielle, durable ou d&eacute;finitive d&rsquo;une ou
              plusieurs fonctions cognitives r&eacute;sultant d&rsquo;un
              dysfonctionnement c&eacute;r&eacute;bral, quelle qu&rsquo;en soit
              la cause.
            </p>

            <h3>
              <img
                loading="lazy"
                className="flotImg"
                src="https://handicap.paris.fr/documents/2018/06/handicap-psychique.png"
                alt="logo handicap psychique"
                width="54"
                height="54"
              />
              Handicap psychique
            </h3>

            <p>
              Le handicap psychique regroupe un ensemble de pathologies touchant
              le psychisme. Les psychoses, la d&eacute;pression, les
              n&eacute;vroses et les d&eacute;pendances sont qualifi&eacute;es
              de handicaps psychiques. Celui-ci entra&icirc;ne une
              d&eacute;pendance envers autrui, avec une perte d&rsquo;autonomie,
              des probl&egrave;mes relationnels, des troubles de
              l&rsquo;attention, des obsessions et des compulsions. Le handicap
              psychique est g&eacute;n&eacute;ralement chronique et
              emp&ecirc;che la personne malade de mener une vie ordinaire, sans
              am&eacute;nagement particulier.
            </p>
            <h3>Maladies invalidantes</h3>
            <p>
              Il s&rsquo;agit de troubles de la sant&eacute; invalidant pouvant
              atteindre les organes internes vitaux (c&oelig;ur, poumons,
              reins&hellip;). Ce sont des maladies organiques comme :
              l&rsquo;insuffisance respiratoire (mucoviscidose&hellip;.),
              l&rsquo;insuffisance cardiaque, r&eacute;nale, immunitaire
              (sida&hellip;), les cancers, certaines maladies rhumato&iuml;des,
              des troubles musculo-squelettiques (douleurs
              articulaires&hellip;). Ces maladies peuvent &ecirc;tre
              momentan&eacute;es, permanentes ou &eacute;volutives. Ces
              d&eacute;ficiences constituent souvent un handicap non visible.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Handi;
