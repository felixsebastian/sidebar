import "./styles.css";

const SidebarLayout = ({ left, right }) => (
  <div
    style={{ display: "flex", height: "calc(100vh - 100px)", width: "100vw" }}
  >
    <div
      style={{
        flexBasis: 200,
        flexGrow: 0,
        background: "white",
        overflowY: "auto"
      }}
    >
      {left}
    </div>
    <div style={{ flexGrow: 1, background: "green", overflowY: "auto" }}>
      {right}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="App">
      <div style={{ background: "blue", height: 100 }} />
      <SidebarLayout
        left={<p>hi from left</p>}
        right={<p style={{ height: 3000 }}>hi from right</p>}
      />
    </div>
  );
}
