import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  const {user} = useAuth();

  const {parcelId} = useParams();

  console.log(parcelId)

  const {isPending,data:parcelInfo = {}} = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async() => {
        const res = await axiosSecure.get(`/parcels/${parcelId}`)
        return res.data
    }
  })
  const amount = parcelInfo.cost;
  const amountInCents = amount * 100;
  console.log(amountInCents)


  if(isPending){
    return <p className="text-red-600">Parcel Pending.......</p>
  }
  console.log(parcelInfo)

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    // step - 1 validate the card
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
        setError(error?.message)
      console.log("[error]", error);
    } else {
        setError('')
      console.log("[PaymentMethod]", paymentMethod);

      // step-2:  create payment intent api
    const res = await axiosSecure.post('/create-payment-intent', {
        amountInCents,
        parcelId
    })
    console.log('response data', res.data.clientSecret)


    // Step 3: Confirm Payment
    const result = await stripe.confirmCardPayment(res.data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.displayName,
            email: user?.email
          },
        },
      });
    
      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        setError('')
        console.log("✅ Payment successful");
        // save the payment data
        const paymentData  = {
            parcelId,
            email: user?.email,
            amount,
            transactionId: result.paymentIntent.id,
            paymentMethod:result.paymentIntent.payment_method_types
        }
        const paymentRes = await axiosSecure.post('/payments', paymentData)
        if(paymentRes.data.insertedId){
            console.log('Payment Successfully')
            Swal.fire({
                title: "Payment Successful!",
                text: "Your payment was completed successfully.",
                icon: "success",
                confirmButtonText: "Go to My Parcels",
              }).then(() => {
                navigate("/dashboard/myParcels");   
              });
        }
      }

    }

    

  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <CardElement className="p-2 border rounded">
      </CardElement>
        <button className="btn bg-[#CAEB66] text-black w-full" type="submit" disabled={!stripe}>
          Pay ${amount}
        </button>
        {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default PaymentForm;
