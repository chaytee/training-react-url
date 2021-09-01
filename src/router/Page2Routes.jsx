import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlPrameter";

{
  /* 配列のため小文字でOK ネストされた部分を繰り返す*/
}
export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
