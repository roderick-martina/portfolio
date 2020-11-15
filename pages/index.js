import Head from 'next/head'

const Home = () => {
  return (
    <section className="container mx-auto font-app">
      <Head>
        <title>Flex Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hau0lug.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
      </Head>
      <div className="flex mt-10 lg:w-full lg:mx-0 sm:w-5/6 sm:mx-auto">
        <h1 className="font-bold text-2xl">Flex.</h1>
      </div>
      <div className="flex w-full">
        <div className="flex flex-wrap w-full mt-32">
          <div className="lg:w-full sm:w-5/6 sm:mx-auto">
            <img src="/waving.gif" alt="waving gif" />
          </div>
          <div className="w-full mt-4">
            <h2 className="lg:w-2/5 lg:mx-0 sm:w-5/6 sm:mx-auto font-bold text-4xl">
              Hoi, mijn naam is Rick. Ik ben een front-end, back-end developer
              en HBO-ICT student.
            </h2>
            <p className="lg:w-3/5 lg:mx-0 sm:w-5/6 sm:mx-auto mt-4 font-medium text-xl">
              Mijn passie ligt bij het ontwikkelen van websites, en mobile
              applicaties. Op dit moment volg ik een HBO-ICT studie aan de
              Haagse hogeschool in Zoetermeer. Naast het studeren ben ik bezig
              met het ontwikkelen van een webapplicatie die sneaker liefhebbers
              het gemakkelijk moet maken hun favoriete schoen te vinden.
            </p>
          </div>
          <button className="mt-4 sm:ml-8 lg:ml-0 font-medium text-xl sm:border-primary text-primary border-b-2  focus:outline-none hover:border-b-2 lg:border-primary pb-1">
            Download CV
          </button>
        </div>
      </div>
      <div className="flex flex-wrap w-full mt-10 ml-0 animated animatedFadeInUp fadeInUp">
        <div className="lg:w-full">
          <h3 className="text-3xl lg:w-4/5 lg:mx-0 sm:w-5/6 sm:mx-auto">
            Portfolio
          </h3>
          <p className="font-medium mt-4 text-xl sm:w-5/6 sm:mx-auto lg:w-4/5 lg:mx-0">
            Mijn portfolio bestaat uit fictieve en non fictieve applicaties die
            uiteindelijk gelanceerd zullen worden. De fictieve applicaties zijn
            gemaakt om de nieuwste technieken te leren toepassen.
          </p>
        </div>
        <div className="w-full mt-10 flex lg:flex-no-wrap sm:flex-wrap">
          <div className="lg:w-1/2 sm:w-5/6 sm:mx-auto   p-8 bg-grey-lightest rounded lg:mr-4">
            <img src="/sneakerapp.png" />
            <p className="font-bold text-xl my-4">Sneakerapp</p>
            <small className="text-grey">Non fictief</small>
            <p className="mt-4 text-grey-darkest font-medium text-xl">
              Ik wilde een keer een sneaker bestellen maar kon hem op geen
              enkele website vinden, na een uur te hebben gegoogeld had ik de
              sneaker uiteindelijk gevonden. De volgende dag bedacht ik me of
              een applicatie kon maken waarbij je de meeste sneaker winkels
              samenbrengt, waardoor je niet uren hoeft te googelen. De
              applicatie back-end wordt gemaakt in laravel en voor de front-end
              zal uiteindelijk gebruik worden gemaakt van Nuxt-js.
            </p>
            <a href="https://www.sneakerapp.nl/" target="_blank">
              <button className="mt-4 mr-4 focus:outline-none text-primary hover:border-b-2 hover:border-primary pb-1">
                <i className="fab fa-chrome mr-2"></i>
                Bekijk website
              </button>
            </a>
          </div>
          <div className="lg:w-1/2 sm:w-5/6 sm:mx-auto  lg:mt-0 sm:mt-10 p-8 bg-grey-lightest rounded lg:mr-4">
            <img src="~/static/healthlab.jpg" />
            <p className="font-bold text-xl my-4">Healthlab</p>
            <small className="text-grey">Non fictief</small>
            <p className="mt-4 text-grey-darkest font-medium text-xl">
              Voor mijn studie heb ik een research minor gevolgd waarbij ik
              onderzoek moest doen op gebied van IT gebruik in de gezondheid
              sector. De Haagse Hogeschool heeft een gezondheid onderzoekslab
              waar studenten en bedrijven worden gemeten genaamd de Healthlab.
              Het probleem wat de product owner ervaarde was dat er geen
              centrale plek was waar zij in één opslag alle data van patiënten
              kon inzien. Hiervoor heb ik webapplicatie gemaakt waarbij docenten
              en studenten data kunnen importeren van twee medische aparaten
              waar zij gebruik van maken. De applicatie back-end is gemaakt in
              Laravel en Front-end met Nuxtjs.
            </p>
            <a href="https://healthlab.netlify.com/" target="_blank">
              <button className="mt-4 mr-4 focus:outline-none text-primary border-b-2 border-transparent hover:border-b-2 hover:border-primary pb-1">
                <i className="fab fa-chrome mr-2"></i>
                Bekijk website
              </button>
            </a>
            <a
              href="https://github.com/roderick-martina/healthlab-api"
              target="_blank"
            >
              <button className="mt-4 focus:outline-none text-primary border-b-2 border-transparent hover:border-b-2 hover:border-primary pb-1">
                <i className="fab fa-github"></i>
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="w-full my-10 flex lg:flex-no-wrap sm:flex-wrap">
          <div className="lg:w-1/2 sm:w-5/6 sm:mx-auto p-8 bg-grey-lightest rounded lg:mr-4">
            <img src="~/static/c2go.jpg" />
            <p className="font-bold text-xl my-4">C2go</p>
            <small className="text-grey">Fictief</small>
            <p className="mt-4 text-grey-darkest font-medium text-xl">
              Na het zien van een fictieve webapplicatie genaamd Comparecrypto
              van Glen Gijsbert, wou ik me zelf uitdagen om een soortgelijke
              applicatie te maken, waarbij een gebruiker één opslag bitcoin
              koersen kan inzien en opzoeken. De webapplicatie is gemaakt met
              Vuejs en maakt gebruik van de cryptocompare.com api.
            </p>
            <a href="https://c2go.netlify.com/" target="_blank">
              <button className="mt-4 mr-4 focus:outline-none text-primary hover:border-b-2 hover:border-primary pb-1">
                <i className="fab fa-chrome mr-2"></i>
                Bekijk website
              </button>
            </a>
            <a
              href="https://github.com/roderick-martina/cryptoapp"
              target="_blank"
            >
              <button className="mt-4 focus:outline-none text-primary border-b-2 border-transparent hover:border-b-2 hover:border-primary pb-1">
                <i className="fab fa-github"></i>
                Github
              </button>
            </a>
          </div>
          <div className="lg:w-1/2 sm:w-5/6 sm:mx-auto bg-transparent rounded lg:mr-4"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
