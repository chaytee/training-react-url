import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりません。</h1>
      <p>404です。</p>
      <Link to="/">トップへ戻る</Link>
    </div>
  );
};
