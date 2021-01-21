const assets = {
  background: {
    img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/background.webp",
    alt: "Background image"
  },
  navbar: {
    logo: {
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/logo-gaiden.svg",
      alt: "logo Gaiden"
    },
    viewcode: {
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/social-github.svg",
      alt: "view code icon"
    }
  },
  hero: {
    img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/main/photo.png",
    alt: "photo jose padron"
  },
  stack: [
    {
      name: "React",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-react.svg",
      p: "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
      link: "https://reactjs.org/",
    },
    {
      name: "JavaScript",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-js.svg",
      p: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-html.svg",
      p: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. ",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-css.svg",
      p: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Node.JS",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-node.svg",
      p: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
      link: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-expressjs.svg",
      p: "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
      link: "https://expressjs.com/",
    },
    {
      name: "WebPack",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-webpack.svg",
      p: "webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules.",
      link: "https://webpack.js.org/",
    },
    {
      name: "Redux",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-redux.svg",
      p: "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
      link: "https://redux.js.org/",
    },
    {
      name: "GitHub",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-github.svg",
      p: "Git is a distributed version-control system for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows",
      link: "https://github.com/",
    },
    {
      name: "Sass",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-sass.svg",
      p: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax', uses a syntax similar to Haml.",
      link: "https://sass-lang.com/",
    },
    {
      name: "Bootstrap",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-bootstrap.svg",
      p: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      link: "https://getbootstrap.com/",
    },
    {
      name: "Jest",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-jest.svg",
      p: "Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js and Svelte.",
      link: "https://jestjs.io/",
    },
    {
      name: "Firebase",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-firebase.svg",
      p: "Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.",
      link: "https://firebase.google.com/",
    },
    {
      name: "Adobe XD",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-adobexd.svg",
      p: "Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc. It is available for macOS and Windows, although there are versions for iOS and Android to help preview the result of work directly on mobile devices.",
      link: "https://www.adobe.com/products/xd.html",
    },
    {
      name: "Next.js",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-nextjs.svg",
      p: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
      link: "https://nextjs.org/",
    }
  ],
  designs: [
    // {
    //   name: "Infographic Data Science",
    //   img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/Cover%20Data%20Science.png",
    //   link: ""
    // },
    {
      name: "OG Mi camino a Platzi",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/OG%20Mi%20caminoa%20Platzi.png",
      link: ""
    },
    {
      name: "OG IBM + Platzi",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/IBM%20%2B%20Platzi%20%E2%80%93%201.png",
      link: ""
    },
    {
      name: "OG #100DaysOfEnglish",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/OG%20%23100DaysOfEnglish.png",
      link: ""
    },    {
      name: "OG Apple Event September",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/Apple%20terra.png",
      link: ""
    },
    {
      name: "OG Future Gaming",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/Gaming%20Futuro.png",
      link: ""
    },
    {
      name: "OG Android Clean Architecture",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/Clean%20architecture%20OG.png",
      link: ""
    },
    {
      name: "OG Bitcoin Instagram",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/Push%20criptomonedas%20telegram.png",
      link: ""
    },
    {
      name: "OG Fin De Año",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/Fin%20de%20a%C3%B1o%20%E2%80%93%201.png",
      link: ""
    },    {
      name: "Meetup Red Hat Openshift",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/OG%20IBM%20Kubernetes%201.png",
      link: ""
    },
    {
      name: "OG Usuarios",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/OG%20Usuarios.png",
      link: ""
    },
    {
      name: "OG Tecnica correta para programar",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/OG%20%C2%BFUso%20la%20t%C3%A9cnica%20correcta%20para%20aprender%20a%20programar.png",
      link: ""
    },
    {
      name: "Meetup Women At Platzi",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/Women%20At%20Platzi%20%E2%80%93%202.png",
      link: ""
    },
    {
      name: "OG Lenguaje de programacion favorito",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/encuesta.png",
      link: ""
    },
    // {
    //   name: "Infographic Video Game",
    //   img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/designs/Infografia%20Videojuegos.png",
    //   link: ""
    // }
  ],
  uxix: [
    {
      name: "UI Design Jose Padron",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/UI/portfolio-gaiden.png",
      link: ""
    },
    {
      name: "UI Design Jhonny Ordoñez",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/UI/Cover.png",
      link: ""
    },
    {
      name: "UI Design Sebastian Aldana",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/UI/portfolio-sebastian.png",
      link: ""
    },
    {
      name: "UI MGV Gaming",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/UI/MGV%20Gaming.png",
      link: ""
    },
    {
      name: "UI Design Andy Cruz",
      img: "https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/UI/portfolio-andy.png",
      link: ""
    },
  ],
  footer: [
    {
      name: "Facebook",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/social-facebook.svg",
      link: "https://www.facebook.com/padronjosef/",
    },
    {
      name: "LinkedIn",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/social-linkedin.svg",
      link: "https://www.linkedin.com/in/padronjosef/",
    },
    {
      name: "Twitter",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/social-twitter.svg",
      link: "https://twitter.com/padronjosef",
    },
    {
      name: "GitHub",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/social-github.svg",
      link: "https://github.com/padronjosef",
    }
    ,
    {
      name: "Behance",
      img: "https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/social-behance.svg",
      link: "https://www.behance.net/josepadron",
    }
  ]
}

export default assets