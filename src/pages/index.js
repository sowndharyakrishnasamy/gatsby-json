import React from "react"

import Layout from "../components/layout"
import HomeHeader from "../components/HomeHeader";
import TextWithBtn from "../components/TextWithBtn";
import IconColumn from "../components/IconColumn";
import BgColumnComponent from "../components/BgColumnComponent";
import Blog from "../components/Blog";
import HomeFooterBanner from "../components/HomeFooterBanner";

const IndexPage = () => (
  <Layout>
    <HomeHeader/>
    <TextWithBtn/>
    <IconColumn/>
    <BgColumnComponent/>
    <Blog/>
    <HomeFooterBanner/>
  </Layout>
)

export default IndexPage
