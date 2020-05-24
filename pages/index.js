import Head from "next/head";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import resume from "../assets/icons/resume.svg";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.5em;
  }
`;
const Container = styled.div`
  padding: 0 2em;
  font-family: "IBM Plex Sans", sans-serif;
  max-width: 800px;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`;
const Header = styled.h1`
  font-size: 2.8em;
  margin-block-end: 0.2em;
`;
const Technologies = styled.b`
  font-size: 1.7em;
`;
const A = styled.a`
  color: #088958;
`;
const Icon = styled.a`
  padding: 0.25em;
  @media (min-width: 600px) {
    &:first-child {
      padding-left: 0;
    }
  }
`;

export default () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Zuzka Jeschke - zuzjes.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header>Zuzka Jeschke</Header>
        <p>
          Jsem velký nadšenec do hor, lezení,{" "}
          <A href="https://www.instagram.com/jsemnela/">Nely</A> (muj pes) a
          svých kytek.
        </p>
        <p>
          Věnuji se <b>frontendu</b>, jednou chci být hustá programátorka. Proto
          se teď snažím do sebe nasát co nejvíce znalostí a zkušeností. Baví mě
          dělat věci efektivně a smysluplně. I když jsem trochu introvert, po
          osmělení se umím bavit, práce v týmu je moje věc!
        </p>
        <Technologies>
          React, Next.js, JS, Now, Git, Gitlab, Bootstrap, Styled Components
        </Technologies>
        <p>
          <A href="tel:+420608540464">+420 608 540 464</A>
          <br />
          <A href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</A>
          <br />
          <A href="https://t.me/zuzjes">Telegram</A>
          <br />
          <A href="/resume.pdf">CV</A>, <A href="https://zuzj.es/">zuzj.es</A> (rozcestník)
        </p>
        <p className="row">
          <Icon href="https://twitter.com/zuzjes">
            <img src={twitter} alt="Twitter" />
          </Icon>
          <Icon href="https://www.linkedin.com/in/zuzjes/">
            <img src={linkedin} alt="Linkedin" />
          </Icon>
          <Icon href="https://github.com/zuzjes">
            <img src={github} alt="Github" />
          </Icon>
          <Icon href="https://www.instagram.com/zuzjes/">
            <img src={instagram} alt="Instagram" />
          </Icon>
          <Icon href="https://www.facebook.com/zuzka.jeschke">
            <img src={facebook} alt="facebook" />
          </Icon>

        </p>
      </Container>

      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
    </>
  );
};
