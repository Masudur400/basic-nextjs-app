 

const Footer = () => {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto px-6 py-5 md:flex justify-around items-center gap-8">
        {/* Column 1 */}
        <div className="">
          <h2 className="text-xl font-bold  mb-4">My Website</h2>
          <p className="text-sm ">
            Building modern and user-friendly web applications <br /> with React,
            Next.js, and Tailwind CSS.
          </p>
        </div> 

        {/* Column 3 */}
        <div className="">
          <h3 className="text-lg font-semibold  mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-4">
            <p className=" ">Facebook</p>
            <p className=" ">Twitter</p>
            <p className=" ">LinkedIn</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" text-center py-4 text-sm ">
        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
