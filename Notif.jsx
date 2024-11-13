import React from 'react';

const Notif = () => {
  return (
    <div className="bg-blue-100 pb-16">
      <div id="3" className="font-serif pb-16">
        <h2 className="text-5xl font-serif text-black text-left pl-36 pt-20">Notifications.</h2>
        <h3 className="text-3xl font-serif text-black text-left pl-36 pt-4">One new message, two new updates.</h3>
      </div>

      <div className="flex justify-start space-x-8 pl-36">
        {/* First Box */}
        <div className="bg-white p-4 border-2 border-black w-96 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-semibold font-serif mb-2">Sangeetha posted:</p>
          <p className="italic font-serif mb-4">
            Hello Aditi,<br />
            I have read your query. Since your preferred method of response is email, I have replied to you on email so please check it out. My email is - sangeethama@gmail.com.
          </p>
          <div className="flex justify-end space-x-4 text-sm">
            <button className="flex font-serif items-center space-x-1 pt-12 hover:underline">
              <span>View</span>
            </button>
            <button className="flex font-serif items-center space-x-1 pt-12 hover:underline">
              <span>Reply</span>
            </button>
          </div>
        </div>
        <div className="h-68 w-px bg-black mx-4"></div>

        {/* Second Box */}
        <div className="bg-white p-4 border-2 border-black w-96 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-semibold font-serif mb-2">Vinayak Kumar posted:</p>
          <p className="italic font-serif mb-4">
            I am currently looking for a graphic designer willing to work for a month on a series of 30 posters. It is a paid and remote opportunity. Please mail me your resumes and portfolios at vinakumar21@gmail.com within a week. ONLY mails will be read. Queries will be answered on mail. Thank you.
          </p>
          <div className="flex justify-end space-x-4 text-sm">
            <button className="flex font-serif items-center space-x-1 hover:underline">
              <span>View</span>
            </button>
            <button className="flex font-serif items-center space-x-1 hover:underline">
              <span>Reply</span>
            </button>
          </div>
        </div>



        <div className="bg-white p-4 font-serif border-2 border-black w-96 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-semibold mb-2">Shridhar K. (Administrator) posted:</p>
          <p className="italic mb-4">
            The college will be closed tomorrow for all students because of the heavy flooding of the roads in Bangalore. Make sure you circulate this message with your friends. Thank you.
          </p>
          <div className="flex justify-end space-x-4 text-sm">
            <button className="flex items-center pt-16 space-x-1 hover:underline">
              <span>View</span>
            </button>
            <button className="flex items-center pt-16 space-x-1 hover:underline">
              <span>Reply</span>
            </button>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Notif;
