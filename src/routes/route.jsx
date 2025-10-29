import { Routes, Route } from "react-router-dom";
import { DarkMediumBlog } from "../blog/DarkMedium";
import { MarketPriceBlog } from "../blog/MarketPrices";
import App from "../App";


export function AllRoute() {

  return (
    <>
      <Routes>
        <Route path='/DarkMediumBlog' element={<DarkMediumBlog />} />
        <Route path='/MarketPriceBlog' element={<MarketPriceBlog />} />
      </Routes>
    </>
  )
}
