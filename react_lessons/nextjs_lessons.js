// LESSON 1.1 - INTRO 
// next is a react frontend development web framework that enables functionality such as server side rendeing and static site generation
// next js allows the first page load to be rendered by the server, which is great for seo and performance 
// for easy page routing, api routes, out of the box ts and sass, static site generation, easy deployment 

// LESSON 1.2 - GETTING SETUP WITH CREATE-NEXT-APP
// step 1: npx create-next-app name-of-file --use-npm // this would install react, react-dom and next 

// LESSON 1.3 - FILES AND FOLDERS 
// step 1: npm run dev -> will

/*
pages -> api -> this is where js file of each page is from 
*/

// LESSON 1.4 - PAGES AND ROUTING - i noticed it's not a single page application anymore 
// creating a new page at the pages -> api -> then you can access it /name | e.g. create about.js, now you can access it with localhost:3000/about
// each page has its own page and not every page is rendered in a single page just like in default react app 

// LESSON 1.5 - HEAD - equivalent of head in html5, where you put title, meta, link css, default react-app doesn't have this i think
// inside index.js 
import Head from "next/head" // add this to use head 

export default function Home() {
    return (
        <div>
            <Head>
                <title>Webdev news</title>
                <meta name="keywords" content="web
                development, programming" />
            </Head>

            <h1> Welcome to next</h1>
        </div>
    )
}

// LESSON 1.6 - LAYOUTS AND CSS MODULES 
// create componnent directory for each component that is not the page 
// naming convention is first letter uppercase for components and lowercase for pages 
// in styles directory create a Layout.module.css 

// inside components -> layout.js 
import styles from "../styles/Layout.module.css"

const Layout = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children} {/* insert component here */}
            </main>
        </div>
    )
}

export default Layout 

// inside app.js 
import Layout from "../components/Layout" // import this layout so we could use its styles 
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    return 
        <Layout>
            <Component {...pageProps} /> {/* imagine this is the children from layout.js /*}
        </Layout>
}

export default MyApp 

// LESSON 1.7 - NAV COMPONENT AND LINK 
// create a Nav.module.css

// inside Nav.js 
import navStyles from "../styles/Nav.module.css"
import Link from "next/link" // yeah we dont use anchor tag in react we use link 

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

// inside layout.js 
import Nav from "./Nav"; // importing nav 
import styles from "../styles/Layout.module.css"

const Layout = () => {
    return (
        <>
            <Nav /> {/* adding nav into the layout since this would be default at all pages */}
            <div className={styles.container}>
                <main className={styles.main}>
                    {children} {/* insert component here */}
                </main>
            </div>
        </>
    )
}

// LESSON 1.8-1.9 - CREATE A HEADER AND STYLED JSX
// create a Header.module.css
// components -> Header.js 

// inside Header.js 
import headerStyles from "../styles/Header.module.css"

const Header = () => {
    return (
        <>
            <h1 className="title">
                <span>WebDev</span> News 
            </h1>
            <style jsx> {/* styled jsx is like an inline css */}
                {`
                    .title {
                        color:red;
                    }
                `}
            </style>
        </>
    )
}

// inside layout 
import Nav from "./Nav"; // importing nav 
import Header from "./Header"
import styles from "../styles/Layout.module.css"

const Layout = () => {
    return (
        <>
            <Nav /> {/* adding nav into the layout since this would be default at all pages */}
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header /> {/* adding header */}
                    {children} {/* insert component here */}
                </main>
            </div>
        </>
    )
}

// conditional jsx styles 
const Header = () => {
    const x = 5
    return (
        <>
            <h1 className="headerStyles.title"> {/* to use jsx styles just use title, to use the css module we use headerStyles.title */}
                <span>WebDev</span> News 
            </h1>
            <style jsx> {/* styled jsx is like an inline css */}
                {`
                    .title {
                        color: ${ x > 3 ? red : blue}; /* just add dollar sign and brackets to use js inside styled jsx */
                    }
                `}
            </style>
        </>
    )
}

// LESSON 1.10 - CUSTOM DOCUMENT 
// to create custom document, create a file _document.js
// run npm dev again | there would be internal server error, to fix it delete the _document.js or paste the code from https://nextjs.org/docs/advanced-features/custom-document

// inside _document.js 
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en"> {/* look we have modified the attribute of html, this wouldnt be possible without creating custom document */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

// LESSON 1.11 - DATA FETCHING - ssr and csr could be determined with how they fetch data or render pages. we could have hybrid where fetching data is csr and rendering pages is ssr 
/*  3 ways to fetch data 
getstaticprops() - fetch data at build time 
getserversideprops() - fetch data on every request
getstaticpaths() -  dynamically generate paths based on the data we're fetching 
*/

// LESSON 1.12-1.13 - GETSTATICPROPS() AND SHOWING DATA - use this if data required to render the page is available at build time ahead of a user's request
// inside index.js 
import Head from "next/head" // add this to use head 
import ArticleList from "../components/ArticleList"

export default function Home({articles}) {
    console.log(articles)
    return (
        <div>
            <Head>
                <title>Webdev news</title>
                <meta name="keywords" content="web
                development, programming" />
            </Head>
            <ArticleList articles = {articles}/>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
    const articles = await res.json();

    return {
        props: {
            articles 
        }
    }
}

// under component create file ArticleList.js 
import articleStyles from "../styles/Article.module.css"
import ArticleItem from "./ArticleItem"

const ArticleList = ({article}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(article => (
                <ArticleItem article={article}/>
            ))}
        </div>
    )
}

export default ArticleList 

// create a file ArticleItem.js 
import Link from "next/link"
import articleStyles from "../styles/Article.module.css"

const ArticleItem = ({article}) => {
    return (
        <Link href="/article/[id]" as = {`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &arr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
   )
}

export default ArticleItem 

// LESSON 1.14-15 - NESTED ROUTING AND GETSERVERSIDEPROPS()
// go to pages create article directory -> create folder [id] -> create file index.js 
// inside index.js of article folder 
import {useRouter} from "next/router"

const article = () => {
    const router = useRouter();
    const {id} = router.query 

    return <div> This is article{id}</div>
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
        
        }
    }
}
export default article;


// LESSON 1.16 - GET STATIC PATHS 

// LESSON 1.17 - EXPORT A STATIC WEBSITE 

// LESSON 1.18 - API ROUTES 

// LESSON 1.19 - USING THE API DATA 

// LESSON 1.20 - CUSTOM META COMPONENT 





// LESSON X.1 - SERVER SIDE RENDERING VS CLIENT SIDE RENDERING VS STATIC SITE GENERATION (PRE RENDERING)
/*
no pre-rendering (plain react.js app) - initial load (app is not rendered) -> hydration (react components are initialized and app becomes interactive)
pre-rendering(using next.js) - initial load (pre-rendered html is displayed) -> hydration (react components are initialized and app becomes interactive)

static site generation - html is generated at build time and is reused for each request | builds the app for production -> html is generated -> reused for each request
static site generation with data - for pages that can only be generated after fetching external data at build time | builds the app for production -> fetches external data -> html can only be generated after fetching data 


client side rendering(csr)
    - this is what the modern frameworks like react,angular,vue are doing
    - javascript controls what is displayed on the page, instead of loading all the web content using the html docu, a js file is included to handle the dynamic architecture of the website loading
    - user sends request to access the content -> server serves up the static files (css and html) to the client's browser -> client's browser will download the html then js, these html filed links the js -> after browser dl js, content is dynamically generated on the clients browser -> web content becomes visible as the client navigates and interact with the website (because again, js is already loaded)
    - initial load is slow since browser is dl the js, after initial load it would be fast, only having to make api calls to get the content dynamically
    - bad for seo since search engine robots crawl an html file page first, but remember that everything is rendered in js first before html so engine robots might miss this.
server side rendering(ssr)
    - user makes request to the server -> server processes the html,css and js and delivers a fully populated page to the user's browser 
    - every client's request to the page the rendering process repeats.
    - old school way without any frameworks, just using vanilla js ewww - each page has its own html file in which we request everytime we visit thus makign it slow
    - best for seo since everything has html file at initial
static site generation(pre rendering)
    - ultra fast, content of website is generated as html files ahead of time, kind of like making them server side but better
    - it doesn't have to do any processing, it doesn't have to generate any html like in server side, it just serves it 
    - only good if the webpage has no backend 
    - data may be old, to update it you have to build the application again, altho this could be mitigated by employing the concept of incremental static regeneration (isr) by next.js this way you can get the latest data without having to rebuild your application fully
*/

// LESSON X.2 - NEXT.JS VS GATSBY.JS 
/*
gatsby.js - building a static website where the content doesn't change too often | static websites has its own html pages, each page represents a physical webpage just like in the old days, static websites are also the ones that doesn't have too much of clickable elements
next.js - if it is a complicated site that interacts with a server a lot 