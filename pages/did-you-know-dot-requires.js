import Head from "next/head";
import Image from "next/image";

const didYouKnowDotRequires = () => {
  return (
    <>
      <Head>
        <title>Did you know DOT requires...</title>
      </Head>
      <div className="jumbotron text-center did_you_know_dot_requires_banner">
        <h1>Did you know DOT requires...</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2>
                The following is a brief summary of the Department of
                Transportation and the Federal Highway Administration drug and
                alcohol testing requirements.
              </h2>
              <p>
                For detailed information refer to Title 49 Code of Federal
                Regulations or the Federal Motor Carrier Safety Regulations
                under the section numbers provided.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Who must be tested?</h3>
              <h4>(382.103)</h4>
              <p>
                Each driver who operates a commercial vehicle in interstate or
                intrastate commerce that is required to have a CDL.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Implementation Dates</h3>
              <h4>(382.115)</h4>
              <p>
                As of January 1, 1996 all interstate and intrastate motor
                carriers are required to have a drug and alcohol testing program
                that conforms to the DOT regulations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Testing for what?</h3>
              <h4>(382.107 and 40.21)</h4>
              <div>
                <p>
                  As specified by the DOT, the company must test only for
                  alcohol and the following five drugs:
                </p>
                <ul>
                  <li>marijuana</li>
                  <li>cocaine</li>
                  <li>opiates</li>
                  <li>amphetamines</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>What tests are required?</h3>
              <h4>(Part 382, Subpart C)</h4>
              <div className="row">
                <div className="col">
                  <h5>Pre-employment (382.301)</h5>
                  <div>
                    <p>
                      The company must require a driver applicant the company
                      intends to hire or use to be tested for drug use as a
                      pre-qualification condition. The company may not first use
                      the driver until a verified negative drug test result is
                      obtained.
                    </p>
                    <p>
                      Pre-employment testing is not required if, under the
                      regulations, a driver applicant has participated in a drug
                      testing program within the previous 30 days and was either
                      tested for drugs within the past 6 months or participated
                      in a random drug testing program for the previous 12
                      months.
                    </p>
                    <p>
                      The company must ensure that no prior employer has records
                      of a violation of the drug use or alcohol misuse rules
                      within the previous 6 months.
                    </p>
                    <p>
                      The company may use a driver who is not tested under its
                      program if the company assures that the driver
                      participates in a testing program which meets the DOT
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5>Post accident (382.303)</h5>
                  <div>
                    <p>
                      DOT rules require that any driver involved in an accident
                      that results in a death or citation for a moving violation
                      must submit to a test for the presence of drugs and
                      alcohol.
                    </p>
                    <dl>
                      <dt>What is an accident?</dt>
                      <dd>
                        - an occurrence involving a commercial vehicle operating
                        on a public road which results in a fatality, an injury
                        requiring immediate treatment away from the scene or
                        disabling damage requiring one or more vehicles to be
                        towed.
                      </dd>
                    </dl>
                    <p>
                      This table notes when a post-accident test is required to
                      be conducted. Table from 382.303(a)(3)
                    </p>
                    <p>
                      <Image
                        src="/post-accident_test_table.jpg"
                        width={614}
                        height={246}
                        alt="Post-accident test requirements."
                        className="table"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5>Random Testing (382.305)</h5>
                  <div>
                    <p>
                      DOT regulations mandate that the company establish a
                      random drug and alcohol testing program. The rate for drug
                      testing must be 50% and the rate for alcohol testing must
                      be 10%, based on the average number of driver positions.
                    </p>
                    <p>
                      Selection must be made by a scientifically valid method
                      and testing must be spread reasonably throughout the
                      calendar year. If the company conducts testing through a
                      consortium, the number of drivers to be tested may be
                      calculated based on the total number of drivers covered by
                      the consortium.
                    </p>
                    <p>
                      Random alcohol testing shall only be conducted on a driver
                      while on duty, just before driving or just after driving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5>Reasonable suspicion (382.307 and 382.603)</h5>
                  <div>
                    <p>
                      The company may require a driver to submit to a drug or
                      alcohol test when reasonable suspicion exists that the
                      driver has violated the drug use or alcohol misuse
                      prohibitions contained in the regulations. The
                      determination must be based on specific, contemporaneous,
                      articulable observations concerning the appearance,
                      behavior, speech or body odors of the driver.
                    </p>
                    <p>
                      The company official who makes the determination that
                      reasonable suspicion exists must receive at least 60
                      minutes of training on drug use and at least an additional
                      60 minutes of training on alcohol misuse. The person who
                      determines that reasonable suspicion exists must not
                      conduct an alcohol test.
                    </p>
                    <p>
                      Alcohol testing for reasonable suspicion is authorized
                      only if the observations are made and the test conducted
                      while the driver is on duty, just before driving or just
                      after driving.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5>Referral, evaluation and treatment (382.605)</h5>
                  <div>
                    <p>
                      Each driver who has engaged in conduct prohibited by
                      subpart B of this part shall be advised by the employer of
                      the resources available to the driver in evaluating and
                      resolving problems associated with the misuse of alcohol
                      and use of controlled substance, including the names,
                      addresses, and telephone numbers of substance abuse
                      professionals and counseling and treatment programs.
                    </p>
                    <p>
                      Each driver who engages in conduct prohibited by subpart B
                      of this part shall be evaluated by a substance abuse
                      professional who shall determine what assistance, if any,
                      the employee needs in resolving problems associated with
                      alcohol misuse and/or controlled substances use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5>Return-to-duty (382.309)</h5>
                  <div>
                    <p>
                      Each employer shall ensure that before a driver returns to
                      duty requiring the performance of a safety-sensitive
                      function after engaging in conduct prohibited by subpart B
                      of this part concerning alcohol, the driver shall undergo
                      a return-to-duty alcohol test with a result indicating an
                      alcohol
                    </p>
                    <p>
                      Each employer shall ensure that before a driver
                      return-to-duty requiring the performance of a
                      safety-sensitive function after engaging in conduct
                      prohibited by subpart B of this part concerning controlled
                      substances, the driver shall undergo a return-to-duty
                      controlled substance test with a result indicating a
                      verified negative result for controlled substance use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5>Follow-up (382.311 and 382.605)</h5>
                  <div>
                    <p>
                      The company must advise any driver who has violated the
                      drug use or alcohol misuse regulations of the resources
                      available in evaluating and resolving problems associated
                      with the conduct. Each driver who has engaged in
                      prohibited conduct must be evaluated by a substance abuse
                      professional. If it is determined that assistance is
                      needed, follow-up testing may be required.
                    </p>
                    <p>
                      Testing must be unannounced and consist of at least 6
                      tests in the first 12 months following the driver’s return
                      to duty. In no case shall the testing exceed 60 months.
                    </p>
                    <p>
                      Follow-up alcohol testing shall only be conducted on a
                      driver while on duty, just before a safety sensitive
                      function or just after a safety sensitive function.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Collection/test site</h3>
              <h4>(40.25 and 40.57)</h4>
              <div>
                <p>
                  The company’s program must designate one or more collection
                  sites where drivers may provide a urine specimen for drug
                  testing purposes. Each site must have all necessary personnel,
                  materials, equipment, facilities and supervision to provide
                  for privacy and the collection, security, temporary storage
                  and shipping of urine specimens to a certified drug testing
                  laboratory.
                </p>
                <p>
                  The company’s program must provide a location with all the
                  necessary equipment, personnel and materials for alcohol
                  testing and that is sufficient to prevent unauthorized persons
                  from seeing or hearing test results.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>What are certified testing laboratories?</h3>
              <h4>(40.3 and 40.39)</h4>
              <div>
                <p>
                  The company may only use laboratories certified by the U.S.
                  Department of Health and Human Services to test urine
                  specimens. Certified labs will conduct an initial test using
                  immunoassay. All specimens identified as positive on the
                  initial test will be confirmed using gas chromatography/mass
                  spectrometry procedures.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>What is an MRO? (Medical Review Officer)</h3>
              <h4>(40.3 and 40.33)</h4>
              <div>
                <p>
                  An MRO is a licensed doctor of medicine or osteopathy having
                  expertise in drug abuse disorders. The company/consortium must
                  designate one of these doctors as the M3edical Review Officer.
                  The MRO’s primary function is to review, interpret and report
                  test results of drivers and driver applicants. Negative test
                  results would be reported to the company or management
                  official designated to receive those results. In the even to
                  positive test results, the MRO would contact the driver to
                  determine if a legitimate explanation for the positive test
                  exists.
                </p>
                <p>
                  If, in the MRO’s judgment, no reasonable explanation exists
                  for a positive test, those results would be passed on to the
                  designated company official.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>What is a BAT? (Breath Alcohol Technican)</h3>
              <h4>(40.3 and 40.51)</h4>
              <div>
                <p>
                  A BAT instructs and assists the driver in the breath testing
                  process, operates the evidential breath testing device, and
                  interprets and reports results to the designated company
                  official. The Breath Alcohol Technician must be trained to
                  proficiency in accordance with the DOT model course.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>What are split samples?</h3>
              <h4>(40.25)</h4>
              <div>
                <p>
                  Urine specimens must be divided into two samples, a primary
                  and a split specimen, before being sent to a certified lab for
                  testing. If the test result of the primary specimen confirms
                  the presence of one or more prohibited drugs, the MRO must
                  notify the driver that he/she has 72 hours to request a test
                  of the split sample. If such request is received the MRO will
                  notify the lab to send the split specimen to a different
                  certified lab for analysis.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Handling test results</h3>
              <h4>
                (382.401, 382.405, 382.407, 40.33, 40.63, 40.65 and 40.81)
              </h4>
              <div>
                <p>
                  For drug testing, the MRO will report to the designated
                  company official in a confidential manner if a particular test
                  is negative or verified positive. In the event a result is
                  positive, the MRO will first attempt to contact the driver
                  directly to discuss possible alternative medical explanations
                  prior to making a final decision to verify the result.
                </p>
                <p>
                  For alcohol testing, the BAT will report the result to the
                  designated company official in a confidential manner.
                </p>
                <p>
                  The company must maintain all test records in a secure
                  location with controlled access.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Notification Requirements</h3>
              <h4>(382.411)</h4>
              <div>
                <p>
                  The company must tell a driver applicant the results of
                  pre-employment drug and alcohol tests if the applicant
                  requests the results within 60 calendar days of being notified
                  that he/she will not be hired.
                </p>
                <p>
                  The company must notify a driver of random, reasonable
                  suspicion and post accident results, and the drug(s)
                  identified if the results are verified positive.
                </p>
                <p>
                  If an MRO is unable to contact a driver to discuss a positive
                  result, the designated company official must make a reasonable
                  attempt to notify the driver that he/she should contact the
                  MRO within 24 hours. Once a driver has been notified, the
                  company must immediately inform the MRO.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>If a Driver Refuses a Test</h3>
              <h4>(382.107, 382.211, 382.507 and 40.67)</h4>
              <div>
                <p>
                  The company must not allow any driver who refuses to submit to
                  the required tests to operate a commercial vehicle. Any driver
                  who refuses to submit to a post accident test after a fatal
                  accident will be disqualified for a period of one year.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Record-Keeping Requirements</h3>
              <h4>(382.401 and 382.403)</h4>
              <div>
                <p>
                  The company must keep individual negative test results for a
                  minimum of 12 months. Records related to the collection
                  process and training must be kept for at least 2 years. All
                  other records in the company’s possession relating to the
                  administration and results of the drivers drug and alcohol
                  testing program must be maintained for five years. The MRO
                  shall be the sole custodian of all individual drug test
                  results and must maintain those results for five years.
                </p>
                <p>
                  The company must maintain, on a calendar year basis, a summary
                  of those records related to the administration and results of
                  the company drug testing program.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Training for Supervisors</h3>
              <h4>(382.603)</h4>
              <div>
                <p>
                  Each employer shall ensure that all persons designated to
                  supervise drivers receive at least 60 minutes of training on
                  alcohol misuse and receive at least an additional 60 minutes
                  of training on controlled substances use. The training will be
                  used by the supervisors to determine whether reasonable
                  suspicion exists to require a driver to undergo testing under
                  382.307. The training shall include the physical, behavioral,
                  speech, and performance indicators of probable alcohol misuse
                  and use of controlled substances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default didYouKnowDotRequires;
