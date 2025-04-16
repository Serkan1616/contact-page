import "./App.css";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/background.svg')] bg-no-repeat bg-cover bg-center font-sora">
      {/* Logo */}
      <div className="h-[10%] flex items-center pl-10">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Content */}
      <div className="flex flex-col h-[90%] gap-5">
        {/* Headline and Explaining */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-[2rem] w-80 line-clamp-2 font-bold">
            Interested in our business pricing?
          </h1>
          <p className="text-white w-80 line-clamp-2">
            Fill out the form to view details and we’ll contact you as soon as
            possible.
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center px-4 mb-10">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-white mb-1 text-sm sm:text-base">
                  Name
                </label>
                <input
                  className="w-full bg-white rounded-lg h-12 px-3 text-sm"
                  placeholder="ethan@johnson.com"
                  type="text"
                />
              </div>

              {/* Company Email */}
              <div className="flex flex-col">
                <label className="text-white mb-1 text-sm sm:text-base">
                  Company Email
                </label>
                <input
                  className="w-full bg-white rounded-lg h-12 px-3 text-sm"
                  placeholder="name@company.com"
                  type="text"
                />
              </div>

              {/* Company Size */}
              <div className="flex flex-col">
                <label className="text-white mb-1 text-sm sm:text-base">
                  Company Size
                </label>
                <select
                  className="w-full bg-white rounded-lg h-12 px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select company size
                  </option>
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                </select>
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-white mb-1 text-sm sm:text-base">
                  Subject
                </label>
                <select
                  className="w-full bg-white rounded-lg h-12 px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select subject
                  </option>
                  <option>Landing Page Design</option>
                  <option>Product Demo</option>
                </select>
              </div>

              {/* Message */}
              <div className="col-span-1 sm:col-span-2 flex flex-col">
                <label className="text-white mb-1 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  className="h-[120px] w-full bg-white rounded-md px-3 py-2 text-sm"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="col-span-1 sm:col-span-2 flex justify-center mt-2">
                <button className="w-full sm:w-1/2 bg-white text-[#4036A9] font-semibold rounded-lg h-12 hover:bg-gray-100 transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
