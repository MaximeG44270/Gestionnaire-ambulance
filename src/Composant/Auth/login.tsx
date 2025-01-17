import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Cookies from 'js-cookie';
import '../../index.css';
import '../../fonts.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const rememberedEmail = Cookies.get('rememberedEmail');
    const rememberedPassword = Cookies.get('rememberedPassword');
    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setIsChecked(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (isChecked) {
        Cookies.set('rememberedEmail', email, { expires: 30 });
        Cookies.set('rememberedPassword', password, { expires: 30 });
      } else {
        Cookies.remove('rememberedEmail');
        Cookies.remove('rememberedPassword');
      }
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Identifiants incorrects ou problème réseau.");
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col bg-login lg:flex-row lg:p-12 p-8 min-h-screen">
{/* ---------------------------------------------- PREMIER BLOCK --------------------------------------------------------------- */}
      <div className="bg-cover bg-container-left bg-center p-4 lg:rounded-t-none rounded-t-2xl shadow-lg h-3/10 lg:h-auto lg:w-1/2 flex justify-center items-center lg:rounded-tl-2xl lg:rounded-bl-2xl">
        <img
          src="/image/logo-amb.png"
          alt="logo-amb"
          className="w-full"
        />
      </div>

{/* ---------------------------------------------- SECOND BLOCK --------------------------------------------------------------- */}
      <div className="bg-white p-4 xl:rounded-b-none rounded-b-2xl shadow-lg xl:shadow-2xl xl:rounded-tr-2xl xl:rounded-br-2xl flex-grow xl:w-1/2 flex flex-col justify-center items-center">
        <p className="text-5xl mt-4 text-center FC-BM font-carving-black">
          MedLogiQ
        </p>
        <p className="text-2xl mt-5 text-center FC-BL font-carving-bold">
          Le gestionnaire des Ambulances MG Digital
        </p>

{/* ---------------------------------------------- FORMULAIRE --------------------------------------------------------------- */}
        <form onSubmit={handleLogin} className="mt-4 w-full max-w-md">
          {error && (
            <div className="text-red-500 text-center font-carving-semi-bold">
              {error}
            </div>
          )}

{/* ---------------------------------------------- EMAIL --------------------------------------------------------------- */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block md:mt-8 mx-auto FC-BM font-carving-semi-bold text-base"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="gestionnaire-ambulances@mg-crea.fr"
              className="mt-2 md:mt-4 md:px-4 px-2 mx-auto w-full text-base py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-BM font-carving-semi-bold"
            />
          </div>

{/* ---------------------------------------------- MOT DE PASSE --------------------------------------------------------------- */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block mx-auto mt-2 FC-BM font-carving-semi-bold text-base"
            >
              Mot de passe
            </label>
            <div className="relative mx-auto w-full">
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full md:mt-4 md:px-4 mt-2 px-2 py-2 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-BM font-carving-semi-bold pr-10"
                />
                <img
                  src={
                    showPassword
                      ? "/image/picto-password-2.png"
                      : "/image/picto-password.png"
                  }
                  alt="toggle password"
                  className="absolute right-3 top-1/2 transform -translate-y-1/4 w-6 h-6 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
          </div>

{/* ---------------------------------------------- CHECKBOX --------------------------------------------------------------- */}
          <div className="flex flex-col w-full items-center md:mb-4 md:mt-8 mb-2 mt-4">
            <div className="w-full flex flex-col items-center">
              <label className="themeSwitcherTwo flex items-center justify-between relative cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <span
                  className={`slider flex h-6 w-[40px] items-center rounded-full p-1 duration-200 ${
                    isChecked ? "bg-[#0f6ca5]" : "bg-[#7a94a5]"
                  }`}
                >
                  <span
                    className={`dot h-4 w-4 rounded-full bg-white duration-200 ${
                      isChecked ? "translate-x-[16px]" : ""
                    }`}
                  ></span>
                </span>
                <span className="label FC-BM font-carving-semi-bold text-base ml-2">
                  Se souvenir de moi
                </span>
              </label>
              <span className="label FC-BM font-carving-semi-bold text-base md:mt-8 mt-4 text-[#0f6ca5] cursor-pointer">
                Mot de passe oublié?
              </span>
            </div>
          </div>

{/* ---------------------------------------------- BOUTON CONNECTION --------------------------------------------------------------- */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full bg-BM text-white text-base py-2 rounded-lg hover:bg-BL transition duration-200 font-carving-semi-bold"
            >
              Connexion
            </button>
          </div>

{/* ---------------------------------------------- MESSAGE INSCRIPTION --------------------------------------------------------------- */}
          <div className="flex flex-col items-center">
            <p className="text-center FC-BL font-carving-semi-bold mt-2 md:mt-4 text-base">
              Pas de compte?
            </p>
            <p className="mt-1 mb-3 md:mt-2 md:mb-6 text-center FC-BL font-carving-semi-bold text-base">
              Contact <span className="text-[#0f6ca5]">ton responsable</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;