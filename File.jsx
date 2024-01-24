import React,{useState} from 'react';

const File = () => {
  const [count, setCount] = useState(5)
  const update=()=>{
    setCount(count+1)
  };

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={update}>+</button>
    </div>
  );
};

export default File;