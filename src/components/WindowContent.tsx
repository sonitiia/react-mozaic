import React, { useEffect, useState } from "react";
import { fetchCompanies, fetchCompanyInfo } from "../services/apiService";
import CompanyInfo from "./CompanyInfo";
import { Company } from "../types";

const WindowContent: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [companyData, setCompanyData] = useState<Company>();

  useEffect(() => {
    const getCompanies = async () => {
      const response = await fetchCompanies();
      setCompanies(response);
    };
    getCompanies();
  }, []);

  useEffect(() => {
    if (selectedCompany) {
      const getCompanyInfo = async () => {
        const response = await fetchCompanyInfo(selectedCompany);
        setCompanyData(response[0]);
      };
      getCompanyInfo();
    }
  }, [selectedCompany]);

  return (
    <div className="h-full p-4">
      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        className="p-2"
      >
        <option value="">Select a company</option>
        {companies.map((company) => (
          <option key={company.id} value={company.ticker}>
            {company.ticker}
          </option>
        ))}
      </select>

      {selectedCompany && companyData && <CompanyInfo company={companyData} />}
    </div>
  );
};

export default WindowContent;
