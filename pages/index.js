import Head from "next/head";

import styles from "../styles/index.module.css"
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Elite Consortium Services</title>
      </Head>
      <Navbar />
      <div className={"jumbotron text-center " + styles.index_banner}>
        <h1>Elite Consortium Services</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <p>
                Elite Consortium Services is a full service facility, located at
                1200 S Van Buren in the Greenview office, Elk City OK. Elite has
                very competitive prices and can help you with any or all of your
                drug testing needs. We have 3 DOT trained urine collectors and
                Breath Alcohol Technicians on staff. Elite is open 8 am to 5 pm
                Monday to Friday and a collector is available after hours 7 days
                a week to take care of those unexpected events! Call us today to
                set up an account at 405-872-6721.
              </p>
              <p>
                Do you need to enroll in a DOT drug testing consortium that will
                get you in and keep you in compliance with the Federal drug &
                alcohol testing regulations? Are you an owner or manager of a
                company that wants to have a drug and alcohol random program for
                the employees? We are here for you! We are serving Southwestern
                Oklahoma and parts of Texas. If you are in the Elk City area we
                can do the collections in house or we can set up a collection
                site near you. Call us today to set up an account at
                405-872-6721.
              </p>
              <p>This facility is Form Fox Enabled</p>
              <p>Go to the Contact Us page to find a map to our office.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
