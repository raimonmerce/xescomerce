import { useEffect, useState } from "react";

const useDevice = () => {
  const [isPhone, setIsPhone] = useState<boolean>(false);

  useEffect(() => {
    setIsPhone(/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return isPhone;
};

export default useDevice;
