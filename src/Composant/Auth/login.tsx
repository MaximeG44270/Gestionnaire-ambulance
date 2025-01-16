import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import "../../index.css";
import "../../fonts.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Identifiants incorrects ou problème réseau.");
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col md:flex-row md:px-8 items-center justify-center h-screen bg-gray-200 bg-login">
      <div className="bg-container-left flex w-4/5 md:w-1/2 h-90 justify-center place-items-center box-shadow-left rounded-l-2xl">
        <img src="/image/logo-amb.png" alt="logo-amb" className="w-3/4"/>
      </div>
      <div className="w-4/5 md:w-1/2 h-90 bg-white box-shadow-right rounded-r-2xl">
        <div>
          <p className="text-5xl text-center mt-14 FC-BM font-carving-black">MedLogiQ</p>
          <p className="text-2xl text-center mt-4 FC-BL font-carving-bold">
            Le gestionnaire des Ambulances MG Digital
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6 mt-9">
          {error && (
            <div className="text-red-500 text-center font-carving-semi-bold">
              {error}
            </div>
          )}
{/* ----------------------------------------- EMAIL ----------------------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="email" className="block px-16 FC-BM font-carving-semi-bold text-base">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="gestionnaire-ambulances@mg-crea.fr"
              className="mt-2 px-2 mx-auto w-81 text-base py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-BM font-carving-semi-bold"
            />
          </div>
{/* ----------------------------------------- PASSWORD ----------------------------------------- */}
          <div className="flex flex-col">
            <label htmlFor="password" className="block px-16 FC-BM font-carving-semi-bold text-base">
              Mot de passe
            </label>
            <div className="relative mx-auto w-81">
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-2 px-2 py-2 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-BM font-carving-semi-bold pr-10"
                />
                <img
                  src={showPassword ? "/image/picto-password-2.png" : "/image/picto-password.png"}
                  alt="toggle password"
                  className="absolute right-3 top-1/2 transform -translate-y-1/4 w-6 h-6 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
          </div>
{/* ----------------------------------------- CHECKBOX ----------------------------------------- */}
        <div className="flex flex-col pl-12 pr-16 md:flex-row sm:justify-between md:items-center">
          <label className="themeSwitcherTwo flex justify-between px-4 relative cursor-pointer select-none items-center mb-4 sm:mb-0">
            <div className="flex">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <span
                className={`slider flex h-6 w-[40px] items-center rounded-full p-1 duration-200 ${
                  isChecked ? 'bg-[#0f6ca5]' : 'bg-[#7a94a5]'
                }`}
              >
                <span
                  className={`dot h-4 w-4 rounded-full bg-white duration-200 ${
                    isChecked ? 'translate-x-[16px]' : ''
                  }`}
                ></span>
              </span>
              <span className="label flex items-center FC-BM font-carving-semi-bold text-base ml-2.5">
                Se souvenir de moi
              </span>
            </div>
          </label>  
          <span className="label flex items-center FC-BM font-carving-semi-bold text-base sm:ml-16">
            Mot de passe oublié?
          </span>
        </div>        
{/* ----------------------------------------- BUTTON ----------------------------------------- */}  
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-81 bg-BM text-white text-base py-2 rounded-lg hover:bg-BL transition duration-200 font-carving-semi-bold">
              Connexion
            </button>
          </div>
          <p className="mt-4 text-center FC-BL font-carving-semi-bold text-base">
            Pas de compte? Contact <span className="text-[#0f6ca5]">ton responsable</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;