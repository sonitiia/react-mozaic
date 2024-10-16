import React from "react";
import { Company } from "../types";

interface CompanyDataProps {
  company: Company;
}

const CompanyInfo: React.FC<CompanyDataProps> = ({ company }) => {
  return (
    <div className="overflow-y-scroll flex flex-col gap-3 my-3 h-full">
      <p>
        <strong>Ticker:</strong> {company.ticker}
      </p>
      <p>
        <strong>Name:</strong> {company.name}
      </p>
      <p>
        <strong>Legal Name:</strong> {company.legal_name}
      </p>
      <p>
        <strong>Stock Exchange:</strong> {company.stock_exchange}
      </p>
      <p>
        <strong>Short Description:</strong> {company.short_description}
      </p>
      <p>
        <strong>Long Description:</strong> {company.long_description}
      </p>
      <p>
        <strong>Webs:</strong>{" "}
        <a href={`https://${company.company_url}`}>{company.company_url}</a>
      </p>
      <p className="mb-5">
        <strong>Business Address:</strong> {company.business_address}
      </p>
      <p>
        <strong>Business Phone:</strong> {company.business_phone_no}
      </p>
      <p>
        <strong>Entity legal form:</strong> {company.entity_legal_form}
      </p>
      <p>
        <strong>Latest Filing Date:</strong> {company.latest_filing_date}
      </p>
      <p>
        <strong>Employees:</strong> {company.employees}
      </p>
      <p>
        <strong>Sector:</strong> {company.sector}
      </p>
      <p>
        <strong>Industry Category:</strong> {company.industry_category}
      </p>
      <p>
        <strong>Industry Group:</strong> {company.industry_group}
      </p>

      <p>
        <strong>First Stock Price Date:</strong>{" "}
        {company.first_stock_price_date}
      </p>
      <p>
        <strong>Last Stock Price Date:</strong> {company.last_stock_price_date}
      </p>
      <p>
        <strong>Legacy Sector:</strong> {company.legacy_sector}
      </p>
      <p>
        <strong>Legacy Industry Category:</strong>{" "}
        {company.legacy_industry_category}
      </p>
      <p>
        <strong>Legacy Industry Group:</strong> {company.legacy_industry_group}
      </p>
    </div>
  );
};

export default CompanyInfo;
