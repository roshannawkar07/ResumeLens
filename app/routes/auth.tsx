import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import "remixicon/fonts/remixicon.css";
export const meta = () => [
  { title: "Resumind | Auth" },
  { name: "description", content: "Log into your account" },
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black">
      {/* 🔥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/images/background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for theme */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative gradient-border shadow-xl rounded-2xl">
        <section className="flex flex-col gap-8 bg-neutral-900 border border-neutral-800 text-gray-100 rounded-2xl p-10 w-xl  ">
          <div className="flex flex-col items-center  gap-2 text-center">
            <h1 className="text-2xl  text-yellow-400">
              Resume <i className="ri-search-line"></i> Lens
            </h1>
            <h2 className="authPara text-gray-300 text-sm">
              Access intelligent resume, personalized optimization tips, boost
              your chances of landing interviews.
            </h2>
          </div>

          <div>
            {isLoading ? (
              <button className="auth-button w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg animate-pulse">
                Signing you in...
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button
                    className="auth-button w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600"
                    onClick={auth.signOut}
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="auth-button w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-300"
                    onClick={auth.signIn}
                  >
                    Log In
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
