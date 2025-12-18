'use client';

type User = {
  name: string;
  email: string;
};

export default function ProfileCard({ user }: { user: User }) {
  return (
    <section className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
          {user.name.charAt(0).toUpperCase()}
        </div>

        {/* Details */}
        <div>
          <h2 className="text-xl font-semibold">
            {user.name}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-green-600 mt-1">
            ✔ Account Active
          </p>
        </div>
      </div>
    </section>
  );
}
