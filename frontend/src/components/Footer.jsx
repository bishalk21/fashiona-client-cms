import { Link } from "react-router-dom";

const Footer = () => {
  const cYear = new Date().getFullYear();

  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          to: "/",
          name: "Partners",
        },
        {
          to: "/",
          name: "Blog",
        },
        {
          to: "/",
          name: "Team",
        },
        {
          to: "/",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          to: "/",
          name: "contact",
        },
        {
          to: "/",
          name: "Support",
        },
        {
          to: "/",
          name: "Docs",
        },
        {
          to: "/",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          to: "/",
          name: "Terms",
        },
        {
          to: "/",
          name: "License",
        },
        {
          to: "/",
          name: "Privacy",
        },
        {
          to: "/",
          name: "About US",
        },
      ],
    },
  ];

  return (
    <footer className=" bg-white px-10 py-5 mt-10  bottom-0  mx-auto">
      <div className="gap-6 justify-between md:flex max-w-app">
        <div className="flex-1">
          <div className="max-w-xs">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl sm:font-bold">
              Fewa Store
            </h1>

            <p className="leading-relaxed mt-2 text-[15px]">
              Online Shopping Site for Mobiles, Electronics, Furniture,
              Grocery,Lifestyle, Books & More. Best Offers.
            </p>
          </div>
        </div>
        <div className=" hidden sm:flex-1  mx-10 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-gray-800 font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    to={el.to}
                    className="hover:underline hover:text-indigo-600"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center  justify-between sm:flex max-w-app">
        <div className=" flex mt-4 sm:mt-0 justify-center sm:justify-start">
          &copy; {cYear} Fewa Store All rights reserved.
        </div>
        <div className="flex justify-center items-center space-x-1 my-2 sm:my-0 text-base text-indigo-600">
          <span>Made with</span>{" "}
          <span className="text-red-500 text-2xl">♥</span> <span>by</span>
          <a
            href="https://karkibishal.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Bishal
          </a>
        </div>
        <div className=" flex mt-4 sm:mt-0 justify-center sm:justify-start">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link to="/karkibishal.com">
                <i className="fa-solid fa-globe"></i>
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link to="/">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link to="/">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link to="/">
                <svg
                  className="svg-icon w-6 h-6 text-red-600"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="none"
                    d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
