export default () => {
  return (
    <>
      <div className="center w-40 container">
        <h2>Zuzana Jeschke</h2>
        <h3>O mně</h3>
        <p>
          Jmenuji se Zuzana Jeschke a vždy mě naplňovalo umění a kreativní
          tvorba. Web design spojil koníček a práci v celek, díky čemuž mě baví
          sledovat aktuální trendy a mým cílem je vždy dovést své grafické vize
          k dokonalosti.
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
        `}
      </style>
    </>
  );
};
