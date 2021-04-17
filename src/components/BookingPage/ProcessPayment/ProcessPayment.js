import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
import './ProcessPayment.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IgbSgCnLQQBj0PllEU41ojvpWm9EOcgrOV0eXc6yJPE1QXkKqsfSUkabMPMxhIgGVQo3PYFpbeywDDb0SnZNsoH000LI3xU5O');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};


export default ProcessPayment;