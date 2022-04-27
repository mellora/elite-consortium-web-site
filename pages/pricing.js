import Head from "next/head";
import Image from "next/image";

import styles from "../styles/pricing.module.css";
import Navbar from "../components/Navbar";

const pricing = () => {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Navbar />
      <div className={"jumbotron text-center " + styles.pricing_banner}>
        <h1>Pricing</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <table name="non_member_pricing" className="table">
                <thead>
                  <tr className="row">
                    <th className="col">Non-Consortium Member Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {% for non_mem in non_member %} */}
                  <tr className="row">
                    <td className="col">{/* {{ non_mem.service_name }} */}</td>
                    <td className="col">{/* ${{ non_mem.price }} */}</td>
                  </tr>

                  {/* {% if non_mem.extra_cost != 0 %} */}
                  <tr className="row">
                    <td className="col">
                      {/* {{ non_mem.extra_cost_text }} */}
                    </td>
                    <td className="col">{/* {{ non_mem.extra_cost }} */}</td>
                  </tr>
                  {/* {% endif %} */}
                  {/* {% endfor %} */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <table name="member_pricing" className="table">
                    <thead>
                      <tr className="row">
                        <th className="col">Consortium Member Pricing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {% for mem in member %} */}
                      <tr className="row">
                        <td className="col">{/* {{ mem.service_name }} */}</td>
                        <td className="col">
                          {/* {% if mem.min_price == mem.max_price %} */}
                          {/* ${{ mem.min_price }} */}
                          {/* {% else %} */}
                          {/* ${{ mem.min_price }}-${{ mem.max_price }} */}
                          {/* {% endif %} */}
                        </td>
                      </tr>
                      {/* {% if mem.extra_cost != 0 %} */}
                      <tr className="row">
                        <td className="col">
                          {/* {{ mem.extra_cost_text }} */}
                        </td>
                        <td className="col">{/* ${{ mem.extra_cost }} */}</td>
                      </tr>
                      {/* {% endif %} */}
                      {/* {% endfor %} */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <table name="third_party_fees" className="table">
                    <thead>
                      <tr className="row">
                        <th className="col">
                          Third Party Program Support Fees
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {% for fee in third_party %} */}
                      <tr className="row">
                        <td className="col">{/* {{ fee.service }} */}</td>
                        <td className="col">{/* {{ fee.charge_rate }} */}</td>
                        <td className="col">{/* {{ fee.driver_num }} */}</td>
                        <td className="col">{/* ${{ fee.price }} */}</td>
                      </tr>
                      {/* {% endfor %} */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3>DER Services include:</h3>
                  <p>
                    Being on call to handle any issues with the lab, Out of temp
                    Sample, Shy Bladder, Being the contact for the MRO, handling
                    setting up all drug testing done at other facilities.
                  </p>
                  <p>
                    * This price is for Elite to go into the program and take
                    care of setting up all the drug testing information and
                    inputting all of the initial driver drug testing
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pricing;
