import Head from "next/head";
import fb from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import fb from "../assets/icons/facebook.svg";
import fb from "../assets/icons/facebook.svg";

export default () => {
  return (
    <>
      <Head>
        <title>ZuzJes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-40 container">
        <h2 className="center">
          <b>Zuzana Jeschke</b>
        </h2>
        <p>
          Jmenuji se Zuzana Jeschke a vždy mě naplňovalo umění a kreativní
          tvorba. Web design spojil koníček a práci v celek, díky čemuž mě baví
          sledovat aktuální trendy a mým cílem je vždy dovést své grafické vize
          k dokonalosti.
        </p>
        <hr />
        <p>HTML 5, Bootstrap, Sass, Jekyll, Git, CSS, základy Pythonu</p>
        <a href="tel:+420608540464">+420 608 540 464</a>
        <br />
        <a href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</a>
        <p class="text-center center row pb-2">
          <a class="pl-3" href="https://twitter.com/zuzjes" target="_blank">
            <img
              src={twitter}
              alt="Twitter"
              class="d-lg-block d-none"
            />
          </a>
          <a
            class="pl-3"
            href="https://www.linkedin.com/in/zuzjes/"
            target="_blank"
          >
            <img
              src="/assets/icons/linkedin.svg"
              alt="Linkedin"
              class="d-lg-block d-none"
            />
            <img src="/assets/icons/linkedin-w.svg" class="d-block d-lg-none" />
          </a>
          <a class="pl-3" href="https://github.com/zuzjes" target="_blank">
            <img
              src="/assets/icons/github.svg"
              alt="Github"
              class="d-lg-block d-none"
            />
            <img src="/assets/icons/github-w.svg" class="d-block d-lg-none" />
          </a>
          <a
            class="pl-3"
            href="https://www.instagram.com/zuzjes/"
            target="_blank"
          >
            <img
              src="/assets/icons/instagram.svg"
              alt="Instagram"
              class="d-lg-block d-none"
            />
            <img
              src="/assets/icons/instagram-w.svg"
              class="d-block d-lg-none"
            />
          </a>
          <a
            class="pl-3"
            href="https://www.facebook.com/zuzka.jeschke"
            target="_blank"
          >
            <img
              src={fb}
              alt="facebook"
              class="d-lg-block d-none"
            />
            <img src="/assets/icons/facebook-w.svg" class="d-block d-lg-none" />
            >
          </a>
        </p>
      </div>
      <style jsx>
        {`
          .center {
            text-align: center;
          }
          .w-40 {
            max-width: 40%;
          }
          .container {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
          }
          h2,
          h3,
          h4,
          p,
          a {
            font-family: "Red Hat Display", sans-serif;
          }
          h3 {
            font-size: 20px;
          }
          p {
            font-size: 18px;
          }
        `}
      </style>
    </>
  );
};
