export default function Form() {
  return (
    <div className="w-full max-w-125 mt-12 p-6 flex flex-col items-center gap-6 bg-gray-100 rounded-2xl border-2 border-gray-200 shadow-md">
      <h3 className="text-2xl text-sky-700 font-semibold">Leave a Message</h3>
      <form className="w-full space-y-4">
        <div className="flex flex-col gap-1 text-gray-700">
          <label className="text-lg">Name</label>
          <input
            type="text"
            className="h-10 p-2 border border-gray-400 rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col gap-1 text-gray-700">
          <label className="text-lg">Email</label>
          <input
            type="email"
            className="h-10 p-2 border border-gray-400 rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-1 text-gray-700">
          <label className="text-lg">Number</label>
          <input
            type="tel"
            className="h-10 p-2 border border-gray-400 rounded-lg"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex flex-col gap-1 text-gray-700">
          <label className="text-lg">Message</label>
          <textarea
            className="h-30 p-2 border border-gray-400 rounded-lg"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          className="w-full h-10 rounded-lg bg-sky-700 tracking-wider text-white text-lg mt-6 hover:cursor-pointer hover:bg-sky-600"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
