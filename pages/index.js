import Head from "next/head";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import resume from "../assets/icons/resume.svg";

export default () => {
  return (
    <>
      <Head>
        <title>ZuzJes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-45 container">
        <h2 className="center">
          <b>Zuzka Jeschke</b>
        </h2>
        <p>
          Jsem velký nadšenec do hor, lezení a svého psa -{" "}
          <a href="https://www.instagram.com/jsemnela/">Nely</a>.
        </p>
        <p>
          Věnuji se převážne frontendu, jednou chci být hustá programátorka.
          Proto se teď snažím do sebe nasát co nejvíce znalostí a zkušeností.
          Bavi mě dělat věci efektivně a smysluplně. I když jsem trochu
          introvert práce v týmu je moje věc!
        </p>

        <hr />
        <p>HTML, Bootstrap, Sass, React, Next.js, Now, Git</p>
        <a href="tel:+420608540464">+420 608 540 464</a>
        <br />
        <a href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</a>
        <p className="crow">
          <a
            href="https://twitter.com/zuzjes"
            className="padd-5"
            target="_blank"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/zuzjes/"
            className="padd-5"
            target="_blank"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/zuzjes"
            className="padd-5"
            target="_blank"
          >
            <img src={github} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/zuzjes/"
            className="padd-5"
            target="_blank"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/zuzka.jeschke"
            className="padd-5"
            target="_blank"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/resume.pdf" className="padd-5" target="_blank">
            <img src={resume} alt="CV-pdf" height="60" />
          </a>
        </p>
      </div>
      <style jsx>
        {`
          .center {
            text-align: center;
          }
          .w-45 {
            max-width: 45%;
          }
          .padd-5 {
            padding: 5px;
          }
          .container {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            font-family: "Cutive Mono", monospace;
            max-width: 768px;
          }
          h2 {
            font-size: 28px;
          }
          h3 {
            font-size: 26px;
          }
          p,
          a {
            font-size: 22px;
          }
          a {
            color: #ff5296;
          }
          hr {
            height: 1px;
            color: black;
            background-color: black;
            border: none;
          }
          ::selection {
            background: #88b9a5; /* WebKit/Blink Browsers */
          }
          ::-moz-selection {
            background: #88b9a5; /* Gecko Browsers */
          }
        `}
      </style>
    </>
  );
};
