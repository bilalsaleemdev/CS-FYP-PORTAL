import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@material-ui/icons/Menu";

import { Aside } from "./Aside";
import styles from "../assets/css/header.module.css";
// import MenuIcon from "@mui/icons-material/Menu";
export const Header = () => {
  return (
    <div className={styles.header}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="absolute"
          style={{
            background: "transparent",
            boxShadowColor: "red",
            padding: ".5rem 0rem",
            boxShadow: "none",
            zIndex: 5,
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Toolbar variant="dense" className={styles.header_toolbar}>
            <h1>Logo</h1>
            <nav>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#about_us">About Us</a>
              </li>
              <li>
                <a href="#contact_us">Contact Us</a>
              </li>
              <li>
                <a  href={"http://localhost:8005/register"} className="button">
                  Sign Up
                </a>
              </li>{" "}
              <li>
                <a  href={"http://localhost:8005/login"} className="button">
                  Login
                </a>
              </li>
            </nav>

            <div
              className={styles.bars}
              onClick={(e) => {
                document.querySelector("aside").classList.toggle("active");
                if (
                  document.querySelector("aside").classList.contains("active")
                ) {
                  document.querySelector("aside").style.left = "0";
                } else {
                  document.querySelector("aside").style.left = "-100%";
                }
              }}
            >
              <MenuIcon />
            </div>
          </Toolbar>
        </AppBar>
      </Box>{" "}
      <Aside />{" "}
    </div>
  );
};
