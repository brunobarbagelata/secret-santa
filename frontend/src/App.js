import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>Working again</h2>
      <form>
        <label for="fname">First name:</label>
        <br></br>
        <input type="text" id="fname" name="fname"></input>
        <br></br>
        <label for="lname">Last name:</label>
        <br></br>
        <input type="text" id="lname" name="lname"></input>
        <br></br>
        <label for="Choose">Choose one:</label>
        <br></br>
        <input type="radio" id="html" name="fav_language" value="HTML"></input>
        <label for="html">HTML</label>
        <br></br>
        <input type="radio" id="css" name="fav_language" value="CSS"></input>
        <label for="css">CSS</label>
        <br></br>
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        ></input>
        <label for="javascript">JavaScript</label>
      </form>
    </div>
  );
}

export default App;
