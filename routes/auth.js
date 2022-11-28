const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { body, validationResult } = require("express-validator");
// REGISTER;
router.post("/register", async (req, res) => {
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).send({ msg: "user already exist , please login" });
    }

    const newUser = new User({ ...req.body });
    const hashedPassword = await bcrypt.hash(password, 10);

    newUser.password = hashedPassword;

    await newUser.save();

    newUser.password = undefined;
    res.send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// router.post(
//   "/register",
//   body("username", "Please add username").notEmpty(),
//   body("email", "Please add a valid email").isEmail(),
//   body(
//     "password",
//     "Please enter a password with 6 or more characters"
//   ).isLength({ min: 6 }),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { username, email, password } = req.body;
//     try {
//       let user = await User.findOne({ email });

//       if (user) {
//         return res.status(400).json({ msg: "user already exists" });
//       }

//       user = new User({ username, email, password });

//       const salt = await bcrypt.genSalt(10);

//       user.password = await bcrypt.hash(password, salt);

//       await user.save();

//       const payload = {
//         user: { id: user._id },
//       };

//       jwt.sign(
//         payload,
//         process.env.JWT_SEC,
//         { expiresIn: 360000 },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );
// LOGIN;

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // !user && res.status(401).json("Wrong credentials!");
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // OriginalPassword !== req.body.password &&
    //   res.status(401).json("Wrong credentials!");
    if (OriginalPassword !== req.body.password) {
      return res.status(401).json("Wrong credentials2!");
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      // { expiresIn: "6d" }
      { expiresIn: 360000 }
    );

    const { password, ...others } = user._doc;

    return res.status(200).json({ ...others, accessToken });
  } catch (err) {
    return res.status(500).json(err);
  }
});
// router.post(
//   "/login2",
//   body("username", "username is required").exists(),
//   body("password", "Password is required").exists(),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     console.log(req.body);

//     const { username, password } = req.body;

//     try {
//       let user = await User.findOne({ username });

//       console.log(user);

//       if (!user) {
//         return res.status(400).json({ msg: "Invalid Credentials2" });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);

//       console.log(isMatch);

//       if (!isMatch) {
//         return res.status(400).json({ msg: "Invalid Credentials" });
//       }

//       const payload = {
//         user: { id: user.id },
//       };

//       jwt.sign(
//         payload,
//         process.env.JWTSECRET,
//         { expiresIn: 360000 },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );

module.exports = router;
