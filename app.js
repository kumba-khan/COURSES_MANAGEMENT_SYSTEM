import express from "express";
import dotenv from "dotenv";
import { engine } from "express-handlebars";
import session from "express-session";
import MongoStore from "connect-mongo";
import methodOverride from "method-override";
import flash from "connect-flash";
import { protect } from "./backend/middleware/authMiddleware.js";

import authRoutes from "./backend/routes/authRoutes.js";
import dashboardRoutes from "./backend/routes/dashboardRoutes.js";
dotenv.config();

import connectDB from "./backend/config/db.js";
await connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Sessions + flash
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions", // optional: name of collection
      ttl: 3600, // session lifetime in seconds (1 hour)
    }),
  }),
);
app.use(flash());

// Flash globals
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.user = req.session.user || null;
  next();
});

// Handlebars
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: "frontend/views/layouts",
    partialsDir: "frontend/views/partials",
    helpers: {
      eq: (a, b) => a === b,
      lte: (a, b) => a <= b,
    },
  }),
);
app.set("view engine", "handlebars");
app.set("views", "frontend/views");

// Static files
app.use(express.static("frontend/public"));
app.get("/", (req, res) => {
    res.redirect("/dashboard");
})

//Routes
app.use("/auth", authRoutes);
app.use("/dashboard",protect, dashboardRoutes);


const PORT = process.env.PORT || 6500;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`),
);