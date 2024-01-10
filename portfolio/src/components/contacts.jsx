
const Contacts = () => {
  return (
    <section id="contact" className="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
        <div className="flex flex-wrap items-center gap-6">
          <h2 className="text-7xl font-bold text-fuchsia-500 xl:text-8xl">Lets work together</h2>
          <span className="h-max rounded-full border border-fuchsia-500/40 px-2 py-1 text-xs tracking-wider text-fuchsia-500">__</span>
        </div>
        <div className="mt-24">
          <div className="grid gap-6 border-t border-fuchsia-500/30 pt-24 lg:grid-cols-3 lg:gap-24">
            <div className="lg:col-span-2">
              <form action="" className="mx-auto space-y-8 md:w-3/4">
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label htmlFor="firstname" className="tracking-wide text-white">Fistname</label>
                    <input type="text" id="fistname" name="fistname" autoComplete="name" placeholder="Your fistname" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500" />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="tracking-wide text-white">Last name</label>
                    <input type="text" id="lastname" name="lastname" autoComplete="family-name" placeholder="Your last name" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="tracking-wide text-white">Mail address</label>
                  <input type="email" id="email" name="email" placeholder="Your mail address" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500" />
                </div>
                <div>
                  <label htmlFor="message" className="tracking-wide text-white">Your message</label>
                  <textarea name="message" id="message" cols="30" rows="6" placeholder="Your message" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500" data-gramm="false" ></textarea>
                </div>
                <button type="submit" className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-fuchsia-500 px-5 transition-all duration-300 hover:bg-white">
                  <span className="relative uppercase tracking-wide text-white group-hover:text-fuchsia-500"> Send message </span>
                </button>
              </form>
            </div>
            <div className="mt-8 border border-fuchsia-500/30 p-8 sm:p-12">
              <div>
                <h3 className="text-xs font-light uppercase tracking-widest text-white">Address</h3>
                <p className="mt-4 text-white">Riverside 25, San Francisco, California</p>
              </div>
              <div className="mt-16">
                <h3 className="text-xs font-light uppercase tracking-widest text-white">Contact Info</h3>
                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                  <li>
                    <a href="tel:+243000000000">Phone ------ +243 000 000 000</a>
                  </li>
                  <li>
                    <a href="mailto:hello@tailus.io">E-mail ------- hello@tailus.io</a>
                  </li>
                </ul>
              </div>
              <div className="mt-16">
                <h3 className="text-xs font-light uppercase tracking-widest text-white">Follow Me</h3>
                <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                  <li>
                    <a href="#" target="_blank">001 ------ LinkedIn</a>
                  </li>
                  <li>
                    <a href="#" target="_blank">002 ------ GitHub</a>
                  </li>
                  <li>
                    <a href="#" target="_blank">003 ------ LeetCode</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
