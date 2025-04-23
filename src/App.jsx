import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("toDo");
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]); //state값을 업데이트하는 방법
  };
  const onClick = () => {};
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos: {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          htmlFor="addBtn"
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="whrite please"
        ></input>
        <button id="addBtn" onClick={onClick}>
          Add To Do
        </button>
        <br />
        {/* <textarea disabled>{toDos}</textarea> */}
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li id={index}>{item}</li>
      ))}
    </div>
  );
  // const [counter, setCounter] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const [showing, setShowing] = useState(false);

  // const onClick = () => setCounter((prev) => prev + 1);
  // const onChange = (event) => {
  //   setKeyword(event.target.value);
  // };
  // const onShowing = () => {
  //   setShowing((value) => !value);
  // };
  // useEffect(() => {
  //   console.log("CALL THE API...");
  // }, []);
  // useEffect(() => {
  //   if (keyword != "" && keyword.length > 5) console.log("Search for", keyword);
  // }, [keyword]);
  // return (
  //   <div>
  //     <input
  //       type="text"
  //       placeholder="Search hear..."
  //       onChange={onChange}
  //       value={keyword}
  //     />
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>Click me!</button>
  //     {showing ? <Hello /> : null}
  //     <button onClick={onShowing}>{showing ? "Hide" : "Show"}</button>
  //   </div>
  // );
  // function Hello() {
  //   function byFn() {
  //     console.log("bye :(");
  //   }
  //   function hiFn() {
  //     console.log("hi :)");
  //     return byFn;
  //   }
  //   useEffect(hiFn, []);
  //   return <h1>hello!</h1>;
  // //   useEffect(() => {
  // //     console.log("hi :)");
  // //     return () => {
  // //       console.log("bye :(");
  // //     };
  // //   }, []);
  // //   return <h1>hello@</h1>;
  // }
}

export default App;
