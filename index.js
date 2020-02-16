const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// var redis = require("redis"),
// client = redis.createClient();
const { promisify } = require("util");

// const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 3040;

app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/jobs", async (req, res) => {
  const jobs = await getAsync("githubJobs");
  console.log(JSON.parse(jobs).length);
  return res.send("jobs");
});
app.put("/api/settings", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  console.log(JSON.parse(jobs).length);
  return res.send("updated successfully");
});

app.put("/api/agents/:stormId", async (req, res) => {
  console.log("req agent terminla", req.body);
  return res.send(req.body);
});

app.put("/api/merchants/:stormId", async (req, res) => {
  console.log("req merchant terminla", req.body);
  return res.send(req.body);
});

app.get("/api/metrics/dashboardf", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  // console.log(JSON.parse(jobs).length);
  req = {
    totalTopUps: 1468833400,
    totalTransfers: 200800,
    workingCapital: 1000033,
    agentSummaries: [
      {
        businessName: "business1",
        email: "person@email.com",
        totalTopUp: 14633400,
        totalTransfers: 80000,
        availableBalance: 30000
      },
      {
        businessName: "business2",
        email: "person2@email.com",
        totalTopUp: 100000,
        totalTransfers: 80000,
        availableBalance: 30000
      },
      {
        businessName: "business3",
        email: "person3@email.com",
        totalTopUp: 100000,
        totalTransfers: 80000,
        availableBalance: 30000
      },
      {
        businessName: "business4",
        email: "person2@email.com",
        totalTopUp: 100000,
        totalTransfers: 80000,
        availableBalance: 30000
      },
      {
        businessName: "business5",
        email: "person3@email.com",
        totalTopUp: 100000,
        totalTransfers: 80000,
        availableBalance: 30000
      }
    ]
  };
  return res.send(req);
});

app.get("/api/products", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  // console.log(JSON.parse(jobs).length);
  req = [
    {
      id: 1,
      name: "Ugu - Veg",
      price: "200.00",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      category_id: 1,
      image: {},
      description: "Fresh Vegetables from the farms of dainty farmers!",
      quantity: 300,
      quantity_limit: 5,
      createdAt: "2020-01-30T08:47:49.000Z",
      updatedAt: "2020-01-30T08:54:06.000Z"
    },
    {
      id: 2,
      name: "Leaf - Water",
      price: "200.00",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      category_id: 1,
      image: {},
      description: "Fresh Vegetables from the farms of dainty farmers!",
      quantity: 300,
      quantity_limit: 5,
      createdAt: "2020-01-30T08:47:49.000Z",
      updatedAt: "2020-01-30T08:54:06.000Z"
    },
    {
      id: 3,
      name: "Banana - Smoothie",
      price: "200.00",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      category_id: 1,
      image: {},
      description: "Fresh Vegetables from the farms of dainty farmers!",
      quantity: 300,
      quantity_limit: 5,
      createdAt: "2020-01-30T08:47:49.000Z",
      updatedAt: "2020-01-30T08:54:06.000Z"
    },

    {
      id: 4,
      name: "Ice - Cream",
      price: "200.00",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      category_id: 1,
      image: {},
      description: "Fresh Vegetables from the farms of dainty farmers!",
      quantity: 300,
      quantity_limit: 5,
      createdAt: "2020-01-30T08:47:49.000Z",
      updatedAt: "2020-01-30T08:54:06.000Z"
    },
    {
      id: 5,
      name: "Milk - Ice",
      price: "200.00",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      category_id: 1,
      image: {},
      description: "Fresh Vegetables from the farms of dainty farmers!",
      quantity: 300,
      quantity_limit: 5,
      createdAt: "2020-01-30T08:47:49.000Z",
      updatedAt: "2020-01-30T08:54:06.000Z"
    },
    {
      id: 6,
      name: "Quinone",
      price: "200.00",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      category_id: 1,
      image: {},
      description: "Fresh Vegetables from the farms of dainty farmers!",
      quantity: 300,
      quantity_limit: 5,
      createdAt: "2020-01-30T08:47:49.000Z",
      updatedAt: "2020-01-30T08:54:06.000Z"
    }
  ];
  return res.send(req);
});

app.get("/api/categories", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  // console.log(JSON.parse(jobs).length);
  req = [
    {
      id: 43,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 43,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 43,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 43,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 4,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 43,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 5,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 43,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 43,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 43,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 8,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 43,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 13,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 67,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 12,
      name: "Walkers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Moonshot",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 12,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 12,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 12,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 12,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 12,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 12,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 12,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 12,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 12,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 19,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 19,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 19,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 22,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 19,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 19,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 19,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 19,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 19,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 19,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 11,
      name: "Twekers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Moonshot",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 11,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 11,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 12,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 11,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 11,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 11,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 11,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 11,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 11,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 21,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 21,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 21,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 22,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 21,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 21,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 21,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 21,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 21,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 21,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 1,
      name: "Grocery",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Showlaz",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 1,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 31,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 1,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 1,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 1,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 1,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 1,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 1,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 33,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 33,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 33,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 27,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 33,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 33,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 33,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 33,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 33,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 33,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 34,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 34,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 34,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 92,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 34,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 34,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 34,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 34,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 34,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 34,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },

    {
      id: 2,
      name: "Electronics",
      merchant_id: "Ab06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Lukas Josh",
      createdAt: "2020-03-29T15:13:17.000Z",
      updatedAt: "2020-03-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Headphones",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 2,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Mouse",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 2,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Rubber - Grip",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 2,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 4,
          name: "Tablet",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 2,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 5,
          name: "Top - Mic",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 2,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Bluetooth",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 2,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Switcher",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 2,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 3,
      name: "House Appliances",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "AkoniMayowaEndeavour",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Keypad - Dresser",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 3,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Fan",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 3,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Sift - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 3,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 4,
          name: "Mop",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 3,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 5,
          name: "Table - Cloth",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 3,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Pot - Shaker",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 3,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Sheet",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 3,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    }
  ];
  return res.send(req);
});

app.post("/api/transactionsh", async (req, res) => {
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
    },
    {
      id: 13,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 13,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
    {
      id: 13,
      name: "Bookers",
      merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
      business_name: "Thehawk",
      createdAt: "2020-01-29T15:13:17.000Z",
      updatedAt: "2020-01-29T15:13:17.000Z",
      products: [
        {
          id: 1,
          name: "Spinnach Efo",
          price: "70.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Ugu - Veg",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 2,
          name: "Leaf - Water",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 3,
          name: "Banana - Smoothie",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },

        {
          id: 4,
          name: "Ice - Cream",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 5,
          name: "Milk - Ice",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 6,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        },
        {
          id: 7,
          name: "Quinone",
          price: "200.00",
          merchant_id: "ef06b7b7-0060-4609-a9a3-e2021b6e394a",
          category_id: 13,
          image: {},
          description: "Fresh Vegetables from the farms of dainty farmers!",
          quantity: 300,
          quantity_limit: 5,
          createdAt: "2020-01-30T08:47:49.000Z",
          updatedAt: "2020-01-30T08:54:06.000Z"
        }
      ]
    },
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

app.post("/api/auth", async (req, res) => {
  // console.log(req.body);
  if (req.body.username == "obijoyce@gmail.com") {
    return res.send({
      success: true,
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9ybUlkIjoiYTZlOTBmYjUtNDZhYS0xMWVhLWIxOTYtNDQwMzJjODhiNGI4IiwidGVybWluYWxJZCI6IjIwNThHVzUzIiwiYnVzaW5lc3NOYW1lIjoiZGFwb0B3ZWJtYWxsbmcuY29tIiwiaXNNZXJjaGFudCI6dHJ1ZSwiaXNBZ2VudCI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwicm9sZXMiOlsiYWRtaW4iLCJhZ2VudCIsIm1lcmNoYW50Il0sImlhdCI6MTU4MTY4NjMyOSwiZXhwIjoxNTgxNzAwNzI5LCJpc3MiOiJzdG9ybTphY2NvdW50Iiwic3ViIjoiYXV0aCJ9.n1KrbuP_R-sBn2BZ7Li0mRrHeFYzzFAcbVkbjSVhm0A"
         // "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9ybUlkIjoiYTZlOTBmYjUtNDZhYS0xMWVhLWIxOTYtNDQwMzJjODhiNGI4IiwidGVybWluYWxJZCI6IjIwNThHVzUzIiwiYnVzaW5lc3NOYW1lIjoiZGFwb0B3ZWJtYWxsbmcuY29tIiwiaXNNZXJjaGFudCI6dHJ1ZSwiaXNBZ2VudCI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgwOTAyNjg5LCJleHAiOjE1ODA5MTcwODksImlzcyI6InN0b3JtOmFjY291bnQiLCJzdWIiOiJhdXRoIn0.v_XbBHcUIRFpFvsUPX7eq6obKRhm2n20lbdeUY_TtZE"
    });
  } else {
    return res.send({
      success: false
    });
  }
});

app.get("/api/agents", async (req, res) => {
  // const jobs = await getAsync('githubJobs');
  // console.log(JSON.parse(jobs).length);
  let jobs = [
    {
      stormId: "a6e914a9-46aa-11ea-b196-44032c88b4b8",
      terminalId: "Electronics",
      businessName: "braineazy@gmail.com",
      username: "braineazy@gmail.com",
      phoneNumber: "07069160424",
      bankName: "FIRSTBANK",
      bankAccountNumber: "3073757776",
      bvnNumber: "22185947653",
      activated: true
    },
    {
      stormId: "a6e92923-46aa-11ea-b196-44032c88b4b8",
      terminalId: "Kitchen-wares",
      businessName: "christyadakah@gmail.com",
      username: "christyadakah@gmail.com",
      phoneNumber: "08038222710",
      bankName: "Access Bank plc",
      bankAccountNumber: "0012733884",
      bvnNumber: "22262955270",
      activated: true
    },
    {
      stormId: "a6e90fb5-46aa-11ea-b196-44032c88b4b8",
      terminalId: "Electronics",
      businessName: "dapo@webmallng.com",
      username: "dapo@webmallng.com",
      phoneNumber: "08064932359",
      bankName: "Zenith International Bank Limited",
      bankAccountNumber: "2085118006",
      bvnNumber: "22222222222",
      activated: true
    },
    {
      stormId: "a6e92ff7-46aa-11ea-b196-44032c88b4b8",
      terminalId: "Utensils",
      businessName: "dappyspecial125@gmail.com",
      username: "dappyspecial125@gmail.com",
      phoneNumber: "08034252234",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0042421879",
      bvnNumber: "22369441955",
      activated: true
    },
    {
      stormId: "a6e92bec-46aa-11ea-b196-44032c88b4b8",
      terminalId: "Electronics",
      businessName: "dessyoz@hotmail.com",
      username: "dessyoz@hotmail.com",
      phoneNumber: "09011858661",
      bankName: "Union Bank",
      bankAccountNumber: "0122516307",
      bvnNumber: "22268494638",
      activated: false
    },
    {
      stormId: "a6e92625-46aa-11ea-b196-44032c88b4b8",
      terminalId: "Utensils",
      businessName: "doyinsolaajala@gmail.com",
      username: "doyinsolaajala@gmail.com",
      phoneNumber: "09092163847",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0122565011",
      bvnNumber: "22157727436",
      activated: true
    },
    {
      stormId: "a6e91363-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2214RSTB",
      businessName: "edeworhipraise@gmail.com",
      username: "edeworhipraise@gmail.com",
      phoneNumber: "08147668819",
      bankName: "United Bank for Africa Plc",
      bankAccountNumber: "2057060086",
      bvnNumber: "22238515730",
      activated: true
    },
    {
      stormId: "a6e915ff-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "emogheneanthony111@gmail.com",
      username: "emogheneanthony111@gmail.com",
      phoneNumber: "09058304465",
      bankName: "Zenith International Bank Limited",
      bankAccountNumber: "2176286075",
      bvnNumber: "22192507527",
      activated: true
    },
    {
      stormId: "a6e910d1-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "funtolash@gmail.com",
      username: "funtolash@gmail.com",
      phoneNumber: "08057323452",
      bankName: "Zenith International Bank Limited",
      bankAccountNumber: "0123456789",
      bvnNumber: "12345678901",
      activated: true
    },
    {
      stormId: "a6e911e4-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "hubert273kg@gmail.com",
      username: "hubert273kg@gmail.com",
      phoneNumber: "07060618076",
      bankName: "Union Bank",
      bankAccountNumber: "0122516307",
      bvnNumber: "22268494638",
      activated: false
    },
    {
      stormId: "a6e90c71-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2058GW60",
      businessName: "kunbi7@gmail.com",
      username: "kunbi7@gmail.com",
      phoneNumber: "08024582888",
      bankName: "Zenith International Bank Limited",
      bankAccountNumber: "2081327223",
      bvnNumber: "22255121585",
      activated: true
    },
    {
      stormId: "a6e90d94-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2081327223",
      businessName: "kunbi7@live.co.uk",
      username: "kunbi7@live.co.uk",
      phoneNumber: "08098884588",
      bankName: "Zenith International Bank Limited",
      bankAccountNumber: "2081327223",
      bvnNumber: "22255121585",
      activated: false
    },
    {
      stormId: "a6e91f88-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2214SLJ0",
      businessName: "lifegrowth111@gmail.com",
      username: "lifegrowth111@gmail.com",
      phoneNumber: "08036465464",
      bankName: "Zenith International Bank Limited",
      bankAccountNumber: "2176286075",
      bvnNumber: "22192507527",
      activated: true
    },
    {
      stormId: "a6e92d34-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2214K9VI",
      businessName: "michfad1@yahoo.com",
      username: "michfad1@yahoo.com",
      phoneNumber: "08032257239",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0049105134",
      bvnNumber: "22356932868",
      activated: true
    },
    {
      stormId: "a6e91cb1-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2058GW",
      businessName: "michfad3@gmail.com",
      username: "michfad3@gmail.com",
      phoneNumber: "08066275603",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0049105134",
      bvnNumber: "22356932868",
      activated: true
    },
    {
      stormId: "a6e90eac-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2058GW85",
      businessName: "mikeadeboye12@gmail.com",
      username: "mikeadeboye12@gmail.com",
      phoneNumber: "08067834525",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0231474547",
      bvnNumber: "22411939467",
      activated: true
    },
    {
      stormId: "a6e9219b-46aa-11ea-b196-44032c88b4b8",
      terminalId: "22140G2Q",
      businessName: "odunfemxputer@gmail.com",
      username: "odunfemxputer@gmail.com",
      phoneNumber: "08137966394",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0257616369",
      bvnNumber: "22166762435",
      activated: true
    },
    {
      stormId: "a6e9173b-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2214I96P",
      businessName: "okeowoebenezerayo@gmail.com",
      username: "okeowoebenezerayo@gmail.com",
      phoneNumber: "07082455565",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0115778019",
      bvnNumber: "22146461835",
      activated: true
    },
    {
      stormId: "a6e91e14-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "olajumokealice009@gmail.com",
      username: "olajumokealice009@gmail.com",
      phoneNumber: "08188978948",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0171095280",
      bvnNumber: "22364664775",
      activated: true
    },
    {
      stormId: "a6e90b42-46aa-11ea-b196-44032c88b4b8",
      terminalId: "22143DHH",
      businessName: "olamide@webmall.ng",
      username: "olamide@webmall.ng",
      phoneNumber: "08031558017",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0046617500",
      bvnNumber: "22148044315",
      activated: true
    },
    {
      stormId: "a6e927b3-46aa-11ea-b196-44032c88b4b8",
      terminalId: "22146BV3",
      businessName: "oluwafemifaroun@gmail.com",
      username: "oluwafemifaroun@gmail.com",
      phoneNumber: "07036441683",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0048993460",
      bvnNumber: "22219578862",
      activated: true
    },
    {
      stormId: "a6e92a92-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "papyrandom@gmail.com",
      username: "papyrandom@gmail.com",
      phoneNumber: "+2349033802322",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0174208704",
      bvnNumber: "22359304480",
      activated: true
    },
    {
      stormId: "a6e9316e-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "peacekunde@gmail.com",
      username: "peacekunde@gmail.com",
      phoneNumber: "07037998600",
      bankName: "Zenith International Bank Limited",
      bankAccountNumber: "1013923551",
      bvnNumber: "22314495912",
      activated: true
    },
    {
      stormId: "a6e92e9a-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "skinnymic1212@gmail.com",
      username: "skinnymic1212@gmail.com",
      phoneNumber: "08173716402",
      bankName: "Access Bank plc",
      bankAccountNumber: "0719471937",
      bvnNumber: "22145123458",
      activated: false
    },
    {
      stormId: "a6e919ee-46aa-11ea-b196-44032c88b4b8",
      terminalId: "22140CX5",
      businessName: "thermodynamics2018@gmail.com",
      username: "thermodynamics2018@gmail.com",
      phoneNumber: "08029427080",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0229974424",
      bvnNumber: "22146461835",
      activated: true
    },
    {
      stormId: "a6e91883-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "thermodynamicsplus@gmail.com",
      username: "thermodynamicsplus@gmail.com",
      phoneNumber: "08136919140",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0229974424",
      bvnNumber: "22146461835",
      activated: false
    },
    {
      stormId: "a6e908a0-46aa-11ea-b196-44032c88b4b8",
      terminalId: "0000000",
      businessName: "victor@netplusadvisory.com",
      username: "victor@netplusadvisory.com",
      phoneNumber: "08064367123",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0001122410",
      bvnNumber: "12435678946",
      activated: true
    },
    {
      stormId: "a6e9016d-46aa-11ea-b196-44032c88b4b8",
      terminalId: "8888888",
      businessName: "victorsylva@gmail.com",
      username: "victorsylva@gmail.com",
      phoneNumber: "08064367122",
      bankName: "Guaranty Trust Bank PLC",
      bankAccountNumber: "0001122418",
      bvnNumber: "0048754615",
      activated: true
    },
    {
      stormId: "a6e91b36-46aa-11ea-b196-44032c88b4b8",
      terminalId: "221497XH",
      businessName: "yetundespecial@yahoo.com",
      username: "yetundespecial@yahoo.com",
      phoneNumber: "08134157878",
      bankName: "Sterling Bank",
      bankAccountNumber: "0067290784",
      bvnNumber: "22300334456",
      activated: true
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
      stormId: "a6ea961d-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "abc@gmail.com",
      username: "abc@gmail.com",
      phoneNumber: "8827519680",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: false
    },
    {
      stormId: "a6ea98be-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2058GW65",
      businessName: "boye@netplusadvisory.com",
      username: "boye@netplusadvisory.com",
      phoneNumber: "08089319370",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: true
    },
    {
      stormId: "a6e90fb5-46aa-11ea-b196-44032c88b4b8",
      terminalId: "2058GW53",
      businessName: "dapo@webmallng.com",
      username: "dapo@webmallng.com",
      phoneNumber: "08064932359",
      bankName: "Zenith International Bank Limited",
      bankAccountNumber: "2085118006",
      bvnNumber: "22222222222",
      activated: true
    },
    {
      stormId: "a6ea9a0c-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "funto@netplusadvisory.com",
      username: "funto@netplusadvisory.com",
      phoneNumber: "08036677937",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: false
    },
    {
      stormId: "a6ea8f0f-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "itsalexcrosby@gmail.com",
      username: "itsalexcrosby@gmail.com",
      phoneNumber: "08064367133",
      bankName: "STANDARD CHARTERED",
      bankAccountNumber: "7004815467",
      bvnNumber: "1245487784",
      activated: true
    },
    {
      stormId: "a6ea94cd-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "merchant2@gmail.com",
      username: "merchant2@gmail.com",
      phoneNumber: "946464949497",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: false
    },
    {
      stormId: "a6ea8d38-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "ms.mobileappz@gmail.com",
      username: "ms.mobileappz@gmail.com",
      phoneNumber: "9754722716",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: true
    },
    {
      stormId: "a6ea9098-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "olamideabraham@gmail.com",
      username: "olamideabraham@gmail.com",
      phoneNumber: "08068143280",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: true
    },
    {
      stormId: "a6ea9770-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "parag@vkaps.com",
      username: "parag@vkaps.com",
      phoneNumber: "9424578281",
      bankName: "STANDARD CHARTERED",
      bankAccountNumber: "1122334455",
      bvnNumber: "12345678901",
      activated: true
    },
    {
      stormId: "a6ea9207-46aa-11ea-b196-44032c88b4b8",
      terminalId: "ROSHNI001",
      businessName: "roshni@geeksperhour.com",
      username: "roshni@geeksperhour.com",
      phoneNumber: "7509431001",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: true
    },
    {
      stormId: "a6ea9365-46aa-11ea-b196-44032c88b4b8",
      terminalId: null,
      businessName: "roshni@gmail.com",
      username: "roshni@gmail.com",
      phoneNumber: "7549165075",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: true
    },
    {
      stormId: "a6ea857d-46aa-11ea-b196-44032c88b4b8",
      terminalId: "SUDESH69",
      businessName: "sudesh@vkaps.com",
      username: "sudesh@vkaps.com",
      phoneNumber: "123456789",
      bankName: "",
      bankAccountNumber: "",
      bvnNumber: "",
      activated: false
    }
  ];
  // return res.send({"storm_id": "AAds-sdsds-dsdss"})
  res.status(200).json(jobs);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// THIS API IS STANDING AS PROXY FOR THE CORS ISSUE
