import { useState } from "react";

function TestFn() {
  const [name, setName] = useState(""); // 입력된 이름을 저장할 상태

  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    console.log("제출된 이름:", name);
    alert(`제출 완료: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // 입력할 때 상태 업데이트
        />
      </label>
      <input type="submit" value="제출" />
    </form>
  );
}

export default TestFn;
