export const navStyle: React.CSSProperties = {
  height: "10vh",
  width: "100%",
  background: "#3e0c6e",
  fontSize: "20px",
  color: "#FFFFFF",
  borderBottom: "3px solid #240345",
  display: "flex",
  position: "fixed",
  justifyContent: "space-between",
  zIndex: 7
};

export const ulStyle: React.CSSProperties = {
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
  transform: "translateY(40vh) !important"
};

export const ulSmallStyle: React.CSSProperties = {
  ...ulStyle,
  display: "block",
  position: "absolute",
  top: "10vh",
  backgroundColor: "#3e0c6e",
  width: "55%",
  height: "100vh",
  opacity: "0.8",
  zIndex: 6,
  borderBottom: "3px solid #240345",
  transform: "translateX(0) !important",
  transition: "transform 0.5s ease-in"
};

export const ulLoginStyle: React.CSSProperties = {
  ...ulStyle,
  marginRight: "15px"
};

export const ulLogInSmallStyle: React.CSSProperties = {
  ...ulStyle,
  display: "block",
  position: "absolute",
  top: "50vh",
  zIndex: 6,
  transform: "translateX(0) !important",
  transition: "transform 0.5s ease-in"
};

export const flexboxContainerStyle: React.CSSProperties = {
  display: "flex",
  marginRight: "5vw"
};

export const logoStyle: React.CSSProperties = {
  maxHeight: "9vh",
  zIndex: 8
};

export const divStyle: React.CSSProperties = {
  height: "10vh"
};

export const menuButtonStyle: React.CSSProperties = {
  cursor: "pointer",
  position: "absolute",
  zIndex: 10,
  top: "20px",
  right: "20px",
  display: "none"
};

export const menuButtonVisible: React.CSSProperties = {
  ...menuButtonStyle,
  display: "block"
};
