import Head from "next/head";
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
const Button = styled.a`
  border: 2px solid #088958;
  padding: 0.15em 0.4em;
  margin: 0.3em 0.6em 0.3em 0;
  color: #088958;
  text-decoration: none;
  display: inline-block;
  &:hover {
    border: 2px solid #088958;
    padding: 0.15em 0.4em;
    background-color: #088958;
    color: white;
  }
`;
Button.defaultProps = {
  target: "_blank"
};

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
          React, Next.js, JS, Now, Git, Gitlab, Bootstrap, Material-UI, Formik,
          Styled&nbsp;Components
        </Technologies>
        <p>
          <A href="tel:+420608540464">+420 608 540 464</A>
          <br />
          <A href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</A>
          <br />
          <A href="https://t.me/zuzjes">Telegram</A>
          <br />
          <A href="/resume.pdf">CV</A>, <A href="https://zuzj.es/">zuzj.es</A>{" "}
          (rozcestník)
        </p>
        <p className="row">
          <Button href="https://github.com/zuzjes">Github</Button>
          <Button href="https://www.linkedin.com/in/zuzjes/">Linkedin</Button>
          <Button href="https://twitter.com/zuzjes">Twitter</Button>
          <Button href="https://www.instagram.com/zuzjes/">Instagram</Button>
          <Button href="https://www.facebook.com/zuzka.jeschke">
            Facebook
          </Button>
        </p>
      </Container>

      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
    </>
  );
};
