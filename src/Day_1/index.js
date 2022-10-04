import React, { useState } from "react";
import "./day1.css";

//Day 1 contains UI with Sieves algorithms
const Sieves = () => {
  const [error, setError] = useState(false);
  const [number, setNumber] = useState();
  const [primes, setPrimes] = useState();
  const sievesEth = async (number) => {
    const prime_arr = new Array(number + 1);
    prime_arr.fill(1);
    prime_arr[0] = 0;
    prime_arr[1] = 0;
    for (let i = 2; i * i <= number; i++) {
      for (let j = i; i * j <= number; j++) {
        prime_arr[i * j] = 0;
      }
    }
    return prime_arr;
  };

  const handleInput = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setNumber(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handlePrimeCheck = async () => {
    const prime_arr = await sievesEth(number);
    setPrimes(prime_arr);
  };
  return (
    <div className="day1-container">
      <h2>Sieves Algorithms</h2>
      <p>
        Enter a number and the algorithms will return list of prime numbers till
        that number
      </p>
      <div>
        <input
          type="text"
          value={number}
          placeholder="Number of primes you want"
          onChange={handleInput}
          className="input"
        />
        <button className="btn" type="submit" onClick={handlePrimeCheck}>
          check prime
        </button>
        {error && <p>Please enter a number</p>}
      </div>
      {primes && (
        <div className="tiles-container">
          {primes?.map((number, idx) => {
            return (
              <span
                className={`tile ${
                  number === 1 ? "prime" : idx % 2 === 0 ? "even" : "odd"
                }`}
                key={`${
                  number === 1 ? "prime" : idx % 2 === 0 ? "even" : "odd"
                } ${idx}`}
              >
                {idx}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sieves;
