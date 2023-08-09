import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#1C2238] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/515b369b-ca0d-4b27-9032-5b428a4f5dd2" className="flex flex-col max-w-xl w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-[#FF8A00] inline border-b-2 border-white">
            Contact
          </p>
          <p className="py-4">
            Submit the form below or talk to me via email -{" "}
            <a
              href="mailto:antuelciampi@gmail.com"
              className="border-b-2 text-[#FF8A00]"
            >
              antuelciampi@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-col text-black">
          <input
            className="p-2 rounded-sm"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="my-4 p-2 rounded-sm"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="resize-none text-black p-2 rounded-sm h-48"
            name="message"
            rows="15"
            placeholder="Add a message"
          ></textarea>
        </div>
          <button className="my-2 text-white border-2 w-fit p-3 rounded-sm self-end hover:bg-[#FF8A00]">
            Let's work!
          </button>
      </form>
    </div>
  );
}

export default Contact;
