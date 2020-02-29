export const schema ={
    "loan_type": {
      "type": "SCHEMA",
      "title": {
        "type": "string",
        "num": "1"
      },
      "image": {
        "type": "image_type",
        "num": "1"
      },
      "Borrower Location": {
        "type": "address_type",
        "num": "1"
      },
      "Applicant Details": {
        "type": "loan_applicant_type",
        "num": "1"
      },
      "Loan Terms": {
        "type": "loan_terms_type",
        "num": "1"
      },
      "Repayment Schedule": {
        "type": "repayment_type",
        "num": "1+"
      }
    },
    "address_type": {
      "type": "SCHEMA",
      "lat": {
        "type": "float",
        "num": "1"
      },
      "lng": {
        "type": "float",
        "num": "1"
      },
      "address": {
        "type": "string",
        "num": "1"
      }
    },
    "image_type": {
      "type": "SCHEMA",
      "url": {
        "type": "string",
        "num": "1"
      },
      "label": {
        "type": "string",
        "num": "1"
      }
    },
    "repayment_type": {
      "type": "SCHEMA",
      "Date": {
        "type": "string",
        "num": "1"
      },
      "Amount": {
        "type": "int",
        "num": "1"
      }
    },
    "loan_terms_type": {
      "type": "SCHEMA",
      "Duration": {
        "type": "string",
        "num": "1"
      },
      "Interest Rate": {
        "type": "string",
        "num": "1"
      },
      "Loan Amount": {
        "type": "int",
        "num": "1"
      },
      "Loan Product": {
        "type": "string",
        "num": "1"
      }
    },
    "loan_applicant_type": {
      "type": "SCHEMA",
      "Name": {
        "type": "string",
        "num": "1"
      },
      "Date of Birth": {
        "type": "string",
        "num": "1"
      },
      "Phone Number": {
        "type": "string",
        "num": "1+"
      },
      "Marital Status": {
        "type": "string",
        "num": "1"
      },
      "No of Dependents": {
        "type": "int",
        "num": "1"
      }
    }
  }