import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function useCookies() {
  const [mode, setMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    const cookies = Cookies.get("mode");

    if (cookies) {
      setMode(JSON.parse(cookies));
    } else {
      setMode(false);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      Cookies.set("mode", JSON.stringify(mode));
    }
  }, [mode]);

  return { mode, setMode };
}

export default useCookies;
