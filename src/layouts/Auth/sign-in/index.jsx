import React from 'react';
import MicrosoftLogin from 'react-microsoft-login';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const authHandler = (err, data) => {
    console.log(data.accessToken);
    navigate('/home');
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="flex justify-center">
                <MicrosoftLogin
                  clientId={'46f8cd61-1276-48e0-bbc6-db92aa39baa2'}
                  authCallback={authHandler}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LoginPage };
