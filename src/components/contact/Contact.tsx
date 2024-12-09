// pages/contact.tsx
import { Button } from "@/components/ui/button"; // Update path if needed
import {
  MapPin,
  Phone,
  Clock,
} from "lucide-react"; // Import necessary icons from lucide-react

const Contact = () => {
  return (
    <div className="flex flex-col items-center px-4 pt-12 md:px-16 lg:px-32">
      {/* Header */} 
      <div className="text-center">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          Get In Touch With Us
        </h1>
        <p className="mt-2 text-base text-[#9F9F9F]">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-12 flex flex-col md:flex-row gap-x-36">
        {/* Left Section */}
        <div className="flex flex-col gap-12">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="text-primary w-6 h-6 md:h-8 md:w-8" />
            <div className="space-y-1">
              <h3 className="font-medium text-xl md:text-2xl">Address</h3>
              <p>936 5th SE Avenue, <br /> New York NY10000, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="text-primary w-6 h-6 md:h-8 md:w-8" />
            <div className="space-y-1">
              <h3 className="font-medium text-xl md:text-2xl">Phone</h3>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start gap-4">
            <Clock className="text-primary w-6 h-6 md:h-8 md:w-8" />
            <div className="space-y-1">
              <h3 className="font-medium text-xl md:text-2xl">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form className="flex flex-col w-full md:w-1/2 space-y-4 mt-14 md:mt-0">
          <div className="flex flex-col lg:w-96">
            <label htmlFor="name" className="text-sm font-medium">
              Your name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 py-4 px-6 text-sm focus:outline-none focus:ring focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 py-4 px-6 text-sm focus:outline-none focus:ring focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 py-4 px-6 text-sm focus:outline-none focus:ring focus:ring-primary"
              placeholder="This is optional"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 w-full rounded-md border border-gray-300 py-4 px-6 text-sm focus:outline-none focus:ring focus:ring-primary"
              rows={4}
              placeholder="Hi! I&#39;d like to ask about..."
            />
          </div>

          <Button className="w-60 h-12 bg-primary text-white hover:bg-primary-dark">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
