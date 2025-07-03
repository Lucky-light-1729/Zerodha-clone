import React from "react";
import Steps from '../assets/img/steps-acop.svg'
import Benifits from '../assets/img/acop-benefits.svg'
function Signup() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-3xl font-bold text-center mb-4">
        Open a free demat and trading account online
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Start investing brokerage free and join a community of 1.6+ crore investors and traders
      </p>

  
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Signup now</h2>
        <p className="text-gray-600 mb-4">Or track your existing application</p>
        <form className="flex flex-col">
          <div className="flex mb-4">
            <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              🇨🇮 +91
            </span>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="flex-1 block w-full rounded-r border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Get OTP
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          By proceeding, you agree to the Zerodha <a href="#" className="text-blue-600">terms</a> & <a href="#" className="text-blue-600">privacy policy</a>.
        </p>
      </div>

  
      <h2 className="text-2xl font-bold text-center mb-8">
        Investment options with Zerodha demat account
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl w-full">
        
        <div className="flex items-start space-x-4">
          <div className="text-3xl">📈</div>
          <div>
            <h3 className="text-lg font-semibold">Stocks</h3>
            <p className="text-gray-600">
              Invest in all exchange-listed securities
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="text-3xl">💰</div>
          <div>
            <h3 className="text-lg font-semibold">Mutual funds</h3>
            <p className="text-gray-600">
              Invest in commission-free direct mutual funds
            </p>
          </div>
        </div>
  
        <div className="flex items-start space-x-4">
          <div className="text-3xl">📝</div>
          <div>
            <h3 className="text-lg font-semibold">IPO</h3>
            <p className="text-gray-600">
              Apply to the latest IPOs instantly via UPI
            </p>
          </div>
        </div>
      
        <div className="flex items-start space-x-4">
          <div className="text-3xl">📄</div>
          <div>
            <h3 className="text-lg font-semibold">Futures & options</h3>
            <p className="text-gray-600">
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
      </div>
      <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition mb-12">
        Explore Investments
      </button>

  
      <div className="bg-gray-50 w-full py-12 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mb-8">
          Steps to open a demat account with Zerodha
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl">
        
          <div className="w-64 h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
            <img
              src={Steps}
              alt="Steps Illustration"
            />
          </div>
  
          <div className="space-y-6">

            <div className="flex items-start space-x-4">
              <div className="text-gray-500 font-semibold">01</div>
              <p className="text-gray-700">Enter the requested details</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-gray-500 font-semibold">02</div>
              <p className="text-gray-700">Complete e-sign & verification</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-gray-500 font-semibold">03</div>
              <p className="text-gray-700">Start investing!</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full py-16 flex flex-col items-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="w-full flex justify-center">
            <img
              src={Benifits}
              alt="Benefits Illustration"
              className="w-80"
            />
          </div>
      
          <div>
            <h2 className="text-2xl font-bold mb-8">
              Benefits of opening a Zerodha demat account
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Unbeatable pricing</h3>
                <p className="text-gray-600">
                  Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Best investing experience</h3>
                <p className="text-gray-600">
                  Simple and intuitive trading platform with an easy-to-understand user interface.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">No spam or gimmicks</h3>
                <p className="text-gray-600">
                  Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">The Zerodha universe</h3>
                <p className="text-gray-600">
                  More than just an app — gain free access to the entire ecosystem of our partner products.
                </p>
  
              </div>
            </div>
          </div>
        </div>
      </div>
      
<div className="w-full py-16 flex flex-col items-center">
  <h2 className="text-2xl font-bold text-center mb-8">
    Explore different account types
  </h2>
  <div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    
    <div className="border rounded-lg p-6 hover:shadow transition">
      <div className="flex items-center mb-4">
        <span className="text-blue-500 text-2xl mr-2">👤</span>
        <h3 className="text-lg font-medium">Individual Account</h3>
      </div>
      <p className="text-gray-600 text-sm">
        Invest in equity, mutual funds and derivatives
      </p>
    </div>
    <div className="border rounded-lg p-6 hover:shadow transition">
      <div className="flex items-center mb-4">
        <span className="text-blue-500 text-2xl mr-2">👪</span>
        <h3 className="text-lg font-medium">HUF Account</h3>
      </div>
      <p className="text-gray-600 text-sm">
        Make tax-efficient investments for your family
      </p>
    </div>
  
    <div className="border rounded-lg p-6 hover:shadow transition">
      <div className="flex items-center mb-4">
        <span className="text-blue-500 text-2xl mr-2">🌐</span>
        <h3 className="text-lg font-medium">NRI Account</h3>
      </div>
      <p className="text-gray-600 text-sm">
        Invest in equity, mutual funds, debentures, and more
      </p>
    </div>
  
    <div className="border rounded-lg p-6 hover:shadow transition">
      <div className="flex items-center mb-4">
        <span className="text-blue-500 text-2xl mr-2">👶</span>
        <h3 className="text-lg font-medium">Minor Account</h3>
      </div>
      <p className="text-gray-600 text-sm">
        Teach your little ones about money & invest for their future
      </p>
    </div>
    
    <div className="border rounded-lg p-6 hover:shadow transition">
      <div className="flex items-center mb-4">
        <span className="text-blue-500 text-2xl mr-2">🏢</span>
        <h3 className="text-lg font-medium">Corporate / LLP / Partnership</h3>
      </div>
      <p className="text-gray-600 text-sm">
        Manage your business surplus and investments easily
      </p>
    </div>
  </div>
</div>

    </div>
    
    
  );
}

export default Signup;