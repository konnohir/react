import { useState } from "react";
import { useParams } from "react-router-dom";
export default function About(props) {
  let { id } = useParams();
  const [id2, setId] = useState('');
  return (
    <div>
      About Page {id && "#"}{id}
          <input value={id2} onChange={(event) => setId(event.target.value)} />
          {id2}
    </div>
  )
};