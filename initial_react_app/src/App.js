import logo from "./logo.svg";
import "./App.css";
import Button from "./ComonComponents/Button/Button";

function App() {
  let x = 11;
  return (
    <>
      <Button
        text="+"
        clickHandler={() => {
          console.log("+ clicked");
        }}
      ></Button>
      <Button
        text="-"
        clickHandler={() => {
          console.log("- clicked");
        }}
      ></Button>
    </>
  );
}

export default App;

//  <Button
//    text="-"
//    clickHandler={() => {
//      console.log("- clicked");
//    }}
//  ></Button>;

// new Button({
//   text: "-",
//   clickHandler: () => {
//     console.log("- clicked");
//   },
// });
