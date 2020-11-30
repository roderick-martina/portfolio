import Head from 'next/head'
import {sneakerapp, foodspot, crypto} from '../content/portfolio'
import {workExperience, education} from '../content/resume'
import Card from '../components/Card'
import Stroke from '../components/Stroke'
import ResumeBlock from '../components/ResumeBlock'
import PortfolioBlock from '../components/PortfolioBlock'

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
      <div className="flex mt-10 px-4 lg:w-full lg:mx-0 sm:px-0 sm:w-5/6 sm:mx-auto">
        <h1 className="font-bold text-2xl">Flex.</h1>
      </div>
      <div className="flex w-full px-4 sm:px-0">
        <div className="flex flex-wrap w-full mt-32">
          <div className="lg:w-full sm:w-5/6 sm:mx-auto">
            <img src="/waving.gif" alt="waving gif" />
          </div>
          <div className="w-full mt-4">
            <h2 className="lg:w-2/5 lg:mx-0 sm:w-5/6 sm:mx-auto font-bold text-4xl text-black">
              Hoi, mijn naam is Rick. Ik ben een full-stack developer en HBO-ICT
              student.
            </h2>
            <p
              className="lg:w-3/5 lg:mx-0 sm:w-5/6 sm:mx-auto mt-4 font-medium text-xl"
              style={{color: '#3f4451'}}
            >
              Mijn passie ligt bij het ontwikkelen van websites, en mobile
              applicaties. Op dit moment volg ik een HBO-ICT studie aan de
              Haagse Hogeschool in Zoetermeer. Naast het studeren ben ik bezig
              met het ontwikkelen van een webapplicatie die sneaker liefhebbers
              het gemakkelijk moet maken hun favoriete schoen te vinden.
            </p>
          </div>
          <a
            href="/cv.pdf"
            download={true}
            className="mt-4 sm:ml-8 lg:ml-0 font-semibold text-xl sm:border-primary border-b-2  focus:outline-none hover:border-b-2 lg:border-primary pb-1"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className={`mt-20 sm:mt-24 px-4 sm:px-0`}>
        <div>
          <h3 className={`text-3xl font-bold leading-none`}>Project</h3>
          <div className="-mt-1">
            <Stroke width="104" color="#D0EAEC" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-10 sm:space-y-0 mt-10">
            <PortfolioBlock item={sneakerapp} color="#D0EAEC" />
          </div>
        </div>
      </div>
      <div className={`mt-20 sm:my-24 px-4 sm:px-0`}>
        <div>
          <h3 className={`text-3xl font-bold leading-none`}>Résumé</h3>
          <div className="-mt-2">
            <Stroke width="116" color="#D7DDFF" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-10 sm:space-y-0 mt-10">
            <ResumeBlock
              title="Werkervaring"
              width="188"
              color="#D0EAEC"
              list={workExperience}
            />
            <ResumeBlock
              title="Opleiding"
              width="140"
              color="#FFE0D7"
              list={education}
            />
          </div>
          <div className={`mt-20 sm:my-24 mb-4`}>
            <div>
              <h3 className={`text-3xl font-bold leading-none`}>
                Vaardigheden
              </h3>
              <div className="-mt-0">
                <Stroke width="196" color="#D0EAEC" />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between space-y-10 sm:space-y-0 mt-10">
                <div className="w-full sm:w-1/3">
                  <h4 className="font-bold text-2xl leading-none">
                    Programeertalen
                  </h4>
                  <ul className="mt-4 space-y-3 text-lg font-medium">
                    <li>
                      <p>PHP</p>
                    </li>
                    <li>
                      <p>C#</p>
                    </li>
                    <li>
                      <p>Javascript (scripttaal)</p>
                    </li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/3">
                  <h4 className="font-bold text-2xl leading-none">
                    Frameworks
                  </h4>
                  <ul className="mt-4 space-y-3 text-lg font-medium">
                    <li>
                      <p>Laravel</p>
                    </li>
                    <li>
                      <p>React</p>
                    </li>
                    <li>
                      <p>Vue.js</p>
                    </li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/3">
                  <h4 className="font-bold text-2xl leading-none">Kennis</h4>
                  <ul className="mt-4 space-y-3 text-lg font-medium">
                    <li>
                      <p>REST</p>
                    </li>
                    <li>
                      <p>Graphql</p>
                    </li>
                    <li>
                      <p>Elasticsearch</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
