import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.3em;
    background: white;
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  ::selection {
  background: #25e8da; 
  }
  p {
    line-height: 30px;
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
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  color:white;
`;

const Background = styled.span`
  background-color: #19a89e;
  border-radius: 12px;
  padding: 15px 8px;
`;

const Content = styled.div`
  margin: 40px 0 20px 0;
`;

const A = styled.a`
  color: #19a89e;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.a`
  border: 2px solid #ade0dd;
  border-radius: 12px;
  padding: .15em .4em .23em .4em;
  color: #53ada7;
  text-decoration: none;
  display: inline-block;
  &:hover {
    border: 2px solid #ade0dd;
    background-color: #ade0dd;
    color: white;
  }
`;

Button.defaultProps = {
  target: "_blank"
};

export default () => (
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
      <Header>
        <Background> Zuzka Jeschke </Background>
      </Header>
      <Content>
        <A href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</A><br/><br/>
        <A href="https://t.me/zuzjes">Telegram</A><br/>
        <A href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</A>
        <br /><br />
        <A href="https://zuzj.es/">zuzj.es</A>
          <br />
        <A href="/resume.pdf">CV</A>
      </Content>
      <Content className="text-center">
        <Button style={{marginRight: "10px"}} href="https://github.com/zuzjes">Github</Button>
        <Button style={{marginRight: "10px"}} href="https://www.linkedin.com/in/zuzjes/">Linkedin</Button>
        <Button style={{marginRight: "10px"}} href="https://twitter.com/zuzjes">Twitter</Button>
        <Button style={{marginRight: "10px"}} href="https://www.instagram.com/zuzjes/">Instagram</Button>
        <Button href="https://www.facebook.com/zuzka.jeschke">Facebook</Button>
      </Content>
    </Container>

    <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
    <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
  </>
);

