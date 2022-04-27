import Head from "next/head";
import Image from "next/image";

const whoNeedsAConsortium = () => {
  return (
    <>
      <Head>
        <title>Who Needs a Drug Testing Consortium</title>
      </Head>
      <div className="jumbotron text-center who_needs_a_consortium_banner">
        <h1>Who Needs a Drug Testing Consortium</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2>DOT Required Random Testing -- Are you in Compliance?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>Owner-Operators</h5>
              <p>
                For owner-operators two important steps must be taken to comply
                with the DOT FMCSA regulations for drug and alcohol testing:
              </p>
              <ol>
                <li>
                  A pre-Employment test drug test with a negative result must be
                  completed before operating a DOT covered commercial motor
                  vehicle (CMV).
                </li>
                <li>
                  You must enroll into a random testing consortium.
                  Owner-operators are not permitted to manage random testing
                  themselves.
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>NON-DOT Employers</h5>
              <p>
                Although not required by regulation, many non-DOT or
                non-regulated employers often conduct random drug and alcohol
                testing. These non-DOT programs can be customized and managed by
                Elite Consortium Services with drug and alcohol testing
                available in all areas of the United States.
              </p>
              <p>
                Why conduct random drug testing? What&apos;s the best tool
                employers have for deterring drug and alcohol use in the
                workplace? Random Testing. Here are just a few of the reasons
                why:
              </p>
              <ul>
                <li>Saves lives and prevents injuries.</li>
                <li>
                  Helps employers identify workers with substance abuse issues
                  and facilitate their treatment.
                </li>
                <li>
                  Allows employees to easily say no to illegal drug use.
                  &quot;No, thanks. They drug test at work.&quot;
                </li>
                <li>Reduces employer liability.</li>
                <li>It is a fair way of testing</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                In most states random testing of DOT regulated employees and
                safety sensitive employees is legal and a sound business
                practice. In some states, there may be some prohibitions against
                random testing of non-safety sensitive employees. Compliance
                experts at US Drug Test Centers can assist with the legality of
                random drug and alcohol testing in your state.
              </p>
              <p>
                Random testing is performed on an unannounced, unpredictable
                basis on employees whose identifying information (e.g., social
                security number or employee number) has been placed in a testing
                pool from which a scientifically arbitrary selection is made.
                This selection is usually computer generated to ensure that it
                is indeed random and that each person in the workforce
                population has an equal chance of being selected for testing,
                regardless of whether that person was recently tested or not.
                Because this type of testing has no advance notice, it serves as
                a deterrent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default whoNeedsAConsortium;
