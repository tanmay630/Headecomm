import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51KZDInSFxpjtomovLZw1NjfwzTu6zZZ7HsfTm1HesChYFbbTLSmYaK8aktOl3HALyvGFABUwWnLmPjTOaYqKoNz900Q5bimpzJ");
  }

  return stripePromise;
}

export default getStripe;