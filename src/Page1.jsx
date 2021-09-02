import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const histry = useHistory();
  const onClickDetailA = () => {
    histry.push("/page1/detailA");
  };

  return (
    <div>
      <h1>ページ1です。</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>Page1DetailA</Link>
      <br />
      <Link to="/page1/detailB">Page1DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
