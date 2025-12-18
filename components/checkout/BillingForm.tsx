export default function BillingForm({
  onBack,
  onNext,
}: {
  onBack: () => void;
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
        placeholder="Card Number"
        className="w-full border p-2 rounded"
      />
      <input
        required
        placeholder="Expiry Date"
        className="w-full border p-2 rounded"
      />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="underline"
        >
          Back
        </button>

        <button className="bg-black text-white px-4 py-2 rounded">
          Review Order
        </button>
      </div>
    </form>
  );
}
