// Test.js
import axios from "axios";

const Test = () => {
  const getData = async () => {
    try {
      const response = await axios.get(
        "/api/resource/order/cl/po",
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "es-ES,es;q=0.9",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-xsrf-token":
              "99da507e757bbfbc80d62393ec3f682b868af354c3eaa1de049ff0023faf8f0c",
          },
          referrer: "https://seller.walmart.com/order-management/details",
          referrerPolicy: "strict-origin-when-cross-origin",
          withCredentials: true,
        }
      );

      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <button onClick={getData}>Get Data</button>
    </>
  );
};

export { Test };
