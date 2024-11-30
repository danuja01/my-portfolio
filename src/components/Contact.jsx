import { useEffect } from "react";
import Gradient2 from "./Gradient2";
import LinkedInProfileBadge from "react-linkedin-profile-badge";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contacts = [
    {
      name: "github",
      href: "https://github.com/danuja01",
      img: "assets/contacts/github.png",
    },
    {
      name: "stackoverflow",
      href: "https://stackoverflow.com/users/15913029/danuja",
      img: "assets/contacts/stackover.png",
    },
    {
      name: "twitter",
      href: "https://twitter.com/DanujaJayasuri3",
      img: "assets/contacts/Twitter.png",
    },
  ];

  return (
    <section
      id="contact"
      className="select-none relative overflow-y-hidden snap-start md:h-screen md:w-screen  py-1"
    >
      <div className="absolute z-[-1] left-16 top-0 md:left-80 md:top-0 2xl:left-[35rem] md:dark:animate-pulse">
        <Gradient2 />
      </div>
      <div className="grid grid-rows-3   h-full ">
        <div className="font-bold md:text-[69.46px] text-[22px] flex items-center my-10 md:mt-10 mx-auto text-blue-ac2 dark:text-muted">
          <h2>CONNECT WITH ME</h2>
        </div>
        <div className="flex items-center justify-center">
          <LinkedInProfileBadge
            profileId="danuja-jayasuriya"
            theme="dark"
            size="large"
            orientation="horizontal"
          />
        </div>

        <div className="flex items-center justify-center ">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="p-3 bg-blue-ac1 rounded-full mx-[0.5rem] translate-x-1 ease-in-out duration-200 hover:scale-110  md:mx-6 "
            >
              <img
                src={contact.img}
                className="w-[2.3rem] md:w-[5.5rem] p-1 md:p-3"
                alt={contact.name}
              />
            </a>
          ))}
        </div>
        <div className="mx-auto items-center  flex h-full p-4 ">
          <p className="text-[8px] md:text-xs text-blue-ac2 dark:text-muted">
            Design & Developed by Danuja Jayasuriya | 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
