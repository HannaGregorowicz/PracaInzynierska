import React from "react";

const infoPanelStyle: React.CSSProperties = {
  padding: "30px"
};

const ulStyle: React.CSSProperties = {
  padding: "0 30px",
  marginTop: "30px",
  listStyleType: "circle"
};

const LoginInfo = () => {
  return (
    <div style={infoPanelStyle}>
      <h3 className="center">Dlaczego warto założyć konto?</h3>
      <h4 className="center">Jako zalogowany użytkownik możesz:</h4>
      <ul style={ulStyle}>
        <li>Zapisywać się na zajęcia przez stronę</li>
        <li>Zapisywać się jednorazowo na zajęcia</li>
        <li>Wypisywać się z zajęć przez panel</li>
        <li>Zgłaszać nieobecności online</li>
        <li>Wyświetlać swoje zajęcia w postaci personalizowanego grafiku</li>
      </ul>
    </div>
  );
};

export default LoginInfo;
