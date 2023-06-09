import Link from "next/link";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import LoginButton from "../login/LoginButton";
import { useSelector } from "react-redux";
import { RootState } from "../../global/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles["menu-container"]}>
      <Link href="/" className={styles["home-link"]}>
        <AiFillHome size={40} />
      </Link>
      <div className={styles["menu-right-side"]}>
        <LoginButton />
        <Button
          className={styles["basic-button"]}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <GiHamburgerMenu size={40} />
        </Button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href={"/"} className={styles["menu-item"]}>
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <Link href={"/map"} className={styles["menu-item"]}>
            View Map
          </Link>
        </MenuItem>
        {isLoggedIn ? (
          <MenuItem onClick={handleClose}>
            {" "}
            <Link href={"/create"} className={styles["menu-item"]}>
              Add new shop
            </Link>
          </MenuItem>
        ) : (
          ""
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
