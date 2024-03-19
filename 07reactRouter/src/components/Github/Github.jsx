import { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/SameerVohra")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <h2 className="bg-black text-white text-center text-2xl">
        GITHUB: {data.followers}
      </h2>
      <img src={data.avatar_url} alt="git image" width={150} />
    </>
  );
}
