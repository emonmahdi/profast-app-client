import React from 'react'
import { useAuth } from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        isPending,
        data: payments = [],
      } = useQuery({
        queryKey: ["payments", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/payments?email=${user?.email}`);
          return res.data;
        },
        enabled: !!user?.email,
      });
    console.log(payments)
    if(isPending){
        return <p className="text-center text-lg font-semibold">Loading Payments...</p>;
    }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Payment History</h2>

    {payments.length === 0 ? (
      <p className="text-gray-500">No payment history found.</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Parcel ID</th> 
              <th>Amount (৳)</th> 
              <th>Transaction ID</th>
              <th>Paid At</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((pay, index) => (
              <tr key={pay._id || index}>
                <td>{index + 1}</td>
                <td>{pay.parcelId}</td> 
                <td>{pay.amount}</td> 
                <td>{pay.transactionId}</td>
                <td>{new Date(pay.paidAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
  )
}

export default PaymentHistory