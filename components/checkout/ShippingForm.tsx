export default function ShippingForm({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-4"
    >
      <input
        required
        placeholder="Full Name"
        className="w-full border p-2 rounded"
      />
      <input
        required
        placeholder="Address"
        className="w-full border p-2 rounded"
      />
      <input
        required
        placeholder="City"
        className="w-full border p-2 rounded"
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Continue to Billing
      </button>
    </form>
  );
}
