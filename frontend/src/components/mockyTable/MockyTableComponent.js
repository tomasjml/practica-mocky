import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

const MockyTableComponent = ({ t }) => {
  const codeTest = "{ test: 1 }";
  return (
    <>
      <div className="card m-5 p-4">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="card-title text-center">
                <h4>{t("manageMocks")}</h4>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <table className="table table-striped table-bordered text-center">
                <thead className="table-dark border-light">
                  <tr>
                    <th scope="col">{t("tableHeaderName")}</th>
                    <th scope="col">{t("tableHeaderDescription")}</th>
                    <th scope="col">{t("tableHeaderDate")}</th>
                    <th scope="col">{t("tableHeaderAction")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">e4398d99-fcc0-42f1-879b-b545cc840be6</th>
                    <td>
                      <span className="badge bg-black">200</span>&nbsp;
                      <span className="badge bg-info">application/json</span>
                      &nbsp;<span className="badge bg-warning">UTF-8</span>
                      <br />
                      <span className="badge text-black">NO CONTENT</span>
                    </td>
                    <td>
                      <span>
                        Created on
                        <br />
                        <time
                          dateTime="1633925428469"
                          title="2021-10-11T00:10:28-04:00"
                        >
                          2021-10-11 00:10
                        </time>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-chevron-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">e4398d99-fcc0-42f1-879b-b545cc840be6</th>
                    <td>
                      <span className="badge bg-black">200</span>&nbsp;
                      <span className="badge bg-info">application/json</span>
                      &nbsp;<span className="badge bg-warning">UTF-8</span>
                      <br />
                      <span className="badge text-black">NO CONTENT</span>
                      <pre>
                        <code className="d-inline-block">{codeTest}</code>
                      </pre>
                    </td>
                    <td>
                      <span>
                        Created on
                        <br />
                        <time
                          dateTime="1633925428469"
                          title="2021-10-11T00:10:28-04:00"
                        >
                          2021-10-11 00:10
                        </time>
                      </span>
                    </td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="alert alert-primary" role="alert">
                {t("tableAlertStorage")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MockyTableComponent.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(MockyTableComponent);
