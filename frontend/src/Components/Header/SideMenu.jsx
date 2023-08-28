import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./SideMenu.css";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

function SideMenu() {
  const {
    setsideMenuBar,
    sideMenuBarDropDown,
    setsideMenuBarDropDown,
    sideMenuBarDropDownIndex,
    setsideMenuBarDropDownIndex,
  } = useContext(UserContext);
  return (
    <div className="sideMenu">
      <div
        id="cross"
        onClick={() => {
          setsideMenuBar(false);
        }}
      >
        <ClearIcon
          style={{
            color: "rgb(82, 82, 82)",
            fontSize: "2.3rem",
          }}
        />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <p
            onClick={() => {
              sideMenuBarDropDown === false ? (
                setsideMenuBarDropDown(!sideMenuBarDropDown)
              ) : (
                <></>
              );
              setsideMenuBarDropDownIndex(1);
            }}
          >
            <ArrowDropDownIcon />
            Products
          </p>
          {sideMenuBarDropDown === true && sideMenuBarDropDownIndex === 1 ? (
            <ul>
              <li>
                <a href="/">Product Hub</a>
              </li>
              <li>
                <a href="/">Custom Parts</a>
              </li>
              <li>
                <a href="/">Gaskets And Custom Settings</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
        <li>
          <p
            onClick={() => {
              sideMenuBarDropDown === false ? (
                setsideMenuBarDropDown(!sideMenuBarDropDown)
              ) : (
                <></>
              );
              setsideMenuBarDropDownIndex(2);
            }}
          >
            <ArrowDropDownIcon />
            Materials
          </p>
          {sideMenuBarDropDown === true && sideMenuBarDropDownIndex === 2 ? (
            <ul>
              <li>
                <a href="/">Product Hub</a>
              </li>
              <li>
                <a href="/">Custom Parts</a>
              </li>
              <li>
                <a href="/">Gaskets And Custom Settings</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
        <li>
          <p
            onClick={() => {
              sideMenuBarDropDown === false ? (
                setsideMenuBarDropDown(!sideMenuBarDropDown)
              ) : (
                <></>
              );
              setsideMenuBarDropDownIndex(3);
            }}
          >
            <ArrowDropDownIcon />
            Refrences
          </p>
          {sideMenuBarDropDown === true && sideMenuBarDropDownIndex === 3 ? (
            <ul>
              <li>
                <a href="/">Product Hub</a>
              </li>
              <li>
                <a href="/">Custom Parts</a>
              </li>
              <li>
                <a href="/">Gaskets And Custom Settings</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
        <li>
          <p
            onClick={() => {
              sideMenuBarDropDown === false ? (
                setsideMenuBarDropDown(!sideMenuBarDropDown)
              ) : (
                <></>
              );
              setsideMenuBarDropDownIndex(4);
            }}
          >
            <ArrowDropDownIcon />
            Services
          </p>
          {sideMenuBarDropDown === true && sideMenuBarDropDownIndex === 4 ? (
            <ul>
              <li>
                <a href="/">Product Hub</a>
              </li>
              <li>
                <a href="/">Custom Parts</a>
              </li>
              <li>
                <a href="/">Gaskets And Custom Settings</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
        <li>
          <p
            onClick={() => {
              sideMenuBarDropDown === false ? (
                setsideMenuBarDropDown(!sideMenuBarDropDown)
              ) : (
                <></>
              );
              setsideMenuBarDropDownIndex(5);
            }}
          >
            <ArrowDropDownIcon />
            Contact
          </p>
          {sideMenuBarDropDown === true && sideMenuBarDropDownIndex === 5 ? (
            <ul>
              <li>
                <a href="/">Product Hub</a>
              </li>
              <li>
                <a href="/">Custom Parts</a>
              </li>
              <li>
                <a href="/">Gaskets And Custom Settings</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
              <li>
                <a href="/">Speciality Compliances</a>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
