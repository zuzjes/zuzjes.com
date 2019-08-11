import Head from "next/head";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import resume from "../assets/icons/resume.svg";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default () => {
  return (
    <>
      <Head>
        <title>Zuzka Jeschke - zuzjes.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-45 container">
        <h1>
          <b>Zuzka Jeschke</b>
        </h1>
        <p>
          Jsem velký nadšenec do hor, lezení a do{" "}
          <a href="https://www.instagram.com/jsemnela/" target="_blank">Nely</a>.
        </p>
        <p>
          Věnuji se převážně <b>frontendu</b>, jednou chci být hustá programátorka.
          Proto se teď snažím do sebe nasát co nejvíce znalostí a zkušeností.
          Baví mě dělat věci efektivně a smysluplně. I když jsem trochu
          introvert, práce v týmu je moje věc!
        </p>
        <p>HTML, Bootstrap, Sass, React, Next.js, Now, Git</p>
        <p><a href="tel:+420608540464">+420 608 540 464</a> 
         (<a href="https://t.me/zuzjes">Telegram</a>)<br/>
        <a href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</a></p>
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
          <a
            href="../static/resume-zuzana-jeschke.pdf"
            className="padd-5"
            target="_blank"
          >
            <img src={resume} alt="CV-pdf" height="60" />
          </a>
        </p>
      </div>
      <style jsx>
        {`
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
          h1 {
            font-size: 3em;
          }
          p,
          a {
            font-size: 30px;
          }
          a {
            color: #ff5296;
          }
          ::selection {
            background: #88b9a5; /* WebKit/Blink Browsers */
          }
          ::-moz-selection {
            background: #88b9a5; /* Gecko Browsers */
          }
        `}
      </style>
      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1"/>
    </>
  );
};

