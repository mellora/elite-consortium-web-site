import Head from "next/head";
import Image from "next/image";

import styles from "../styles/what-can-elite-do-for-you.module.css"
import Navbar from "../components/Navbar";

const whatCanEliteDoForYou = () => {
  return (
    <>
      <Head>
        <title>
          What Elite can do in Your DOT Drug & Alcohol Testing Compliance?
        </title>
      </Head>
      <Navbar />
      <div className={"jumbotron text-center " + styles.what_can_elite_do_for_you_banner}>
        <h1>
          What Elite can do in Your DOT Drug & Alcohol Testing Compliance?
        </h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <p>
                Elite Consortium Services can assist employers with all of the
                below required components of a compliant DOT Drug and Alcohol
                Testing program.
              </p>
              <ul>
                <li>Designated Employer Representative (DER)</li>
                <li>Written Policy</li>
                <li>Regulations on file</li>
                <li>Pre-employment Testing</li>
                <li>
                  Random, Post-Accident, Reasonable Suspicion, Return to Duty
                  and Follow-up Testing
                </li>
                <li>Supervisor Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default whatCanEliteDoForYou;
