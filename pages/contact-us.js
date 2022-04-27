import Head from "next/head";
import Image from "next/image";

const contactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="jumbotron text-center contact_us_banner">
        <h1>Contact Us</h1>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <dl>
              <dt>
                <h3>Call</h3>
              </dt>
              <dd>
                Elite Consortium Services at 405-872-6721 (Local cell phone
                number)
              </dd>
              <dt>
                <h3>Mail</h3>
              </dt>
              <dd>Elite Consortium Services</dd>
              <dd>P.O. Box 2233</dd>
              <dd>Elk City, OK 73648</dd>
              <dt>
                <h3>E-mail</h3>
              </dt>
              <dd>admin@eliteservicesus.com</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactUs;
