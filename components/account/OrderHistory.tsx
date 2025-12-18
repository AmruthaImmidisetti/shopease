export default function OrderHistory() {
  const orders = [
    {
      id: 'ORD-001',
      date: '2025-01-10',
      amount: 199.99,
      status: 'Delivered',
    },
    {
      id: 'ORD-002',
      date: '2025-02-02',
      amount: 89.5,
      status: 'Delivered',
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Order History
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No orders placed yet.
        </p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div
              key={order.id}
              className="flex items-center justify-between border rounded-lg p-4 hover:shadow-sm transition"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {order.id}
                </p>
                <p className="text-sm text-gray-500">
                  {order.date}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ₹{order.amount}
                </p>
                <span className="inline-block mt-1 text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
