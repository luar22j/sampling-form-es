import { Link } from "react-router-dom";
import "../assets/css/global.css";

const Tally = () => {
  return (
    <div className="global-animation">
      <Link to="/" className="active-button py-2 flex items-center gap-1 m-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <p>Volver</p>
      </Link>

      <div className="bg-white py-4 flex items-center justify-center -mt-8">
        <img src="/img/sampling-logo.png" className="w-[150px]" alt="logo" />
      </div>

      <div className="flex flex-col">
        <div id="form-container" className="mx-3 md:mx-[20%] form-animation">
          <iframe
            id="tally-iframe"
            src="https://tally.so/embed/31JW2l?alignCenter=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="400"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Formulario de valoración"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tally;
