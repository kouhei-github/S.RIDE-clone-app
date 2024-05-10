import Fetch from "./fetch";

// サーバサイド（Server Components / Route Handlers）からのリクエスト用
export const API = new Fetch(process.env.NEXT_PUBLIC_API_URL);
// クライアントサイド（Client Components）からのリクエスト用
export const BFF = new Fetch();
