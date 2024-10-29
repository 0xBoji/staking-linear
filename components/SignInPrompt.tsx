import * as React from 'react';

type Props = {
  greeting: string;
  onClick: React.MouseEventHandler;
};

const SignInPrompt = ({ greeting, onClick }: Props) => {
  return (
    <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className="mx-auto max-w-md">
        <div className="divide-y divide-gray-300/50">
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <h1>
              The contract says: <span className="greeting">{greeting}</span>
            </h1>
                  
            <br />
            <p style={{ textAlign: 'center' }}>
              <button
                className="py-2 px-3 bg-sky-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
                onClick={onClick}
              >
                Sign in with NEAR Wallet
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPrompt;
