const express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors')

// var redis = require("redis"),
// client = redis.createClient();
const { promisify } = require("util");

// const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 3040;

app.use(cors())
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get("/jobs", async (req, res) => {
  const jobs = await getAsync('githubJobs');
  console.log(JSON.parse(jobs).length);
  return res.send("jobs");
});
app.put("/api/settings", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  console.log(JSON.parse(jobs).length);
  return res.send("updated successfully");
});

app.get("/api/metrics/dashboard", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  // console.log(JSON.parse(jobs).length);
  req = {
    "totalTopUps" : 1468833400,
    "totalTransfers": 200800,
    "workingCapital" : 1000033,
    "agentSummaries" : [
    {
    "businessName": "business1",
    "email" : "person@email.com" ,
    "totalTopUp" : 14633400, 
    "totalTransfers" : 80000,
    "availableBalance" : 30000 
  },
  {
    "businessName": "business2",
    "email": "person2@email.com",
    "totalTopUp": 100000,
    "totalTransfers": 80000,
    "availableBalance" : 30000 
  },
  {
    "businessName": "business3",
    "email": "person3@email.com",
    "totalTopUp": 100000,
    "totalTransfers": 80000,
    "availableBalance": 30000 
  },
  {
    "businessName": "business4",
    "email": "person2@email.com",
    "totalTopUp": 100000,
    "totalTransfers": 80000,
    "availableBalance" : 30000 
  },
  {
    "businessName": "business5",
    "email": "person3@email.com",
    "totalTopUp": 100000,
    "totalTransfers": 80000,
    "availableBalance": 30000 
  }
    ] }
  return res.send(req);
});

app.post("/api/transactions", async (req, res) => {
  // const { email } = req.query;
  // const jobs = await getAsync('githubJobs');
  let data = [
    {
      stormId: "909921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business4",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "109921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business5",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019 00:00:00",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "119921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business6",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "129921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business7",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "909921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business10",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "109921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business11",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019 00:00:00",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "119921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business12",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "129921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business13",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "909921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business8",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "109921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business9",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019 00:00:00",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "119921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business14",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "129921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business15",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "909921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business19",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "109921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business18",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019 00:00:00",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "119921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business17",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "129921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business16",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "909921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business44",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "109921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business54",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019 00:00:00",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "119921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business64",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019 00:00:00",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "129921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business74",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019",
      amount: 10000,
      status: "top-up"
    }
  ];
  // console.log('req query', req.query);

  return res.send(data);
});

app.get("/api/transactions", async (req, res) => {
  // const { email } = req.query;
  // const jobs = await getAsync('githubJobs');
  let data = [
    {
      stormId: "909921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business1",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "109921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business2",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019",
      amount: 10000,
      status: "top-up"
    },
    {
      stormId: "119921211212",
      email: "person@email.com",
      terminalId: "2323SS1",
      businessName: "business3",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "23234qaswess",
      destinationAccount: "2334323222",
      transactionTime: "23/01/2019",
      amount: 10000,
      status: "credit"
    },
    {
      stormId: "129921211212",
      email: "person@email.com",
      terminalId: "7323SS1",
      businessName: "business4",
      transactionType: "fund",
      ourReference: "sdssdsdssd1223",
      externalReference: "93234qaswess",
      destinationAccount: "0334323222",
      transactionTime: "24/01/2019",
      amount: 10000,
      status: "top-up"
    }
  ];
  // console.log('req query', req.query);

  return res.send(data);
});

app.post('/api/auth', async (req, res) => {
  return res.send({
    "success": true,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9ybUlkIjoiN2MxM2RmODctNThhNC00YjM3LWE3YmYtNzAzNDlmZjlkZWE5IiwidGVybWluYWxJZCI6IjkzNDNTRDMiLCJidXNpbmVzc05hbWUiOiJkYXBzaWRvIiwiaXNNZXJjaGFudCI6ZmFsc2UsImlzQWdlbnQiOnRydWUsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1ODAyMDcxNzUsImV4cCI6MTU4MDIyMTU3NSwiaXNzIjoic3Rvcm06YWNjb3VudCIsInN1YiI6ImF1dGgifQ.nDbeGfRvWvdcaZAPwd7zFxQviDZLIc1SUtfmm7hvlus"
});
});

app.get("/api/agents", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  // console.log(JSON.parse(jobs).length);
  let jobs = [
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "inactive",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      walletBalance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    }
  ];
  // return res.send({"storm_id": "AAds-sdsds-dsdss"})
  res.status(200).json(jobs);
});

app.get("/api/merchants", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  // console.log(JSON.parse(jobs).length);
  let jobs = [
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
     Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "dsds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: {
        availableBalance: 123000000.4,
        ledgerBalance: 1000000000.3
      }
    },
    {
      storm_id: "AAds-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "BCC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      terminalId: "terminal_id",
      status: "active",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    },
    {
      storm_id: "PAC-sdsds-dsdss",
      name: "Business name",
      email: "person@gmail.com",
      phoneNumber: "08092322343",
      status: "active",
      terminalId: "terminal_id",
      Balance: { availableBalance: 123.4, ledgerBalance: 1000.3 }
    }
  ];
  // return res.send({"storm_id": "AAds-sdsds-dsdss"})
  res.status(200).json(jobs);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// THIS API IS STANDING AS PROXY FOR THE CORS ISSUE
