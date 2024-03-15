const Contacts = () => {
    return (
        <section id="Contact" className="relative z-10 lg:pb-32 lg:pt-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex flex-wrap items-center gap-6">
              <h2
                className="text-7xl font-bold text-white xl:text-8xl"
                data-aos="fade-up"
              >
                Let&apos;s talk!
              </h2>
    
              <span
                className="h-max rounded-full border border-fuchsia-500/40 px-2 py-1 text-xs tracking-wider text-fuchsia-500"
                data-aos="fade-up"
              >
                __
              </span>
            </div>
            <div className="mt-24">
              <div className="grid gap-6 border-t border-fuchsia-500/30 pt-24 lg:grid-cols-3 lg:gap-24">
                <div className="lg:col-span-2">
                  <form
                    action=""
                    className="mx-auto space-y-8 md:w-3/4"
                    data-aos="fade-up"
                  >
                    <div className="grid gap-8 sm:grid-cols-2 sm:gap-4">
                      <div>
                        <label
                          htmlFor="firstname"
                          className="tracking-wide text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="fistname"
                          name="fistname"
                          autoComplete="name"
                          placeholder="Enter your first name"
                          className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastname"
                          className="tracking-wide text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          autoComplete="family-name"
                          placeholder="Enter your last name"
                          className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="tracking-wide text-white"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="tracking-wide text-white"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="6"
                        placeholder="Please enter your message here"
                        className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500"
                        data-gramm="false"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-fuchsia-500 px-5 transition-all duration-300 hover:bg-white"
                    //   data-aos="fade-right"
                    >
                      <span className="relative uppercase tracking-wide text-white group-hover:text-fuchsia-500">
                        Send Message
                      </span>
                    </button>
                  </form>
                </div>
    
                <div
                  className="mt-3 border border-fuchsia-500/30 p-4 sm:p-8"
                  data-aos="fade-up"
                >
                  <div>
                    <h3 className="text-xs font-light uppercase tracking-widest text-white">
                      Address
                    </h3>
                    <p className="mt-8 text-white">
                      Nairobi City, Kenya
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xs font-light uppercase tracking-widest text-white">
                      Contact Info
                    </h3>
                    <ul className="relative z-20 mt-8 space-y-2 font-light text-white">
                      <li>
                        <a href="tel:+243000000000">
                          Phone ------ +254-748-20-48-33
                        </a>
                      </li>
                      <li>
                        <a href="mailto:hello@tailus.io">
                          Email ------ samuelkabuya14@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xs font-light uppercase tracking-widest text-white">
                      Follow Me
                    </h3>
                    <ul className="relative z-20 mt-8 space-y-2 font-light text-white">
                      <li>
                        <a href="https://www.linkedin.com/in/samuelkabuya/"  rel='noreferrer'target="_blank">
                          001 ------ LinkedIn
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/KabuyaSamuel"  rel='noreferrer'target="_blank">
                          002 ------ GitHub
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          003 ------ LeetCode
                        </a>
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