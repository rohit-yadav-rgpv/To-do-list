const express = require("express");
const {userRegister, userLogin} = require("../Controllers/userLoginController")



router.post("/register", userRegister);

router.post("/login", userLogin)