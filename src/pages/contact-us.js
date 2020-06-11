import React from "react"
import Layout from "../components/layout";
import "../css/main.css";
import ContactUsHeader from "../components/ContactUsHeader";
import TextWith2Btn from "../components/TextWith2Btn";
import JsonData from "../content/Contact-details.json";
import Data from "../content/Address-details.json";
import ColumnComponent from "../components/ColumnComponent";
const ContactUs = () => (

   <Layout>
       <ContactUsHeader/>
       <TextWith2Btn/>
       <ColumnComponent data={JsonData}/>
       <ColumnComponent data={Data}/>
   </Layout>

    )

export default ContactUs