import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import {useAuth} from "../../context/auth.js";
import {Outlet} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner.js";
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/user-auth`);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token)
      authCheck();
  }, [auth?.token]);
  return ok ? /* @__PURE__ */ React.createElement(Outlet, null) : /* @__PURE__ */ React.createElement(Spinner, null);
}
