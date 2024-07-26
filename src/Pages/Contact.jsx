import React, { useState } from 'react'
import './Contact.css'
import toast from 'react-hot-toast'

const Contact = () => {

  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState(null)

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData) {
      toast.error("Oops! You missed to fill.")
      return
    }

    if (!formData?.name) {
      toast.error("Your good name please.")
      return
    }

    if (!formData?.email && !formData?.mobile) {
      toast.error("Please enter email or mobile, so that I contact you.")
      return
    }

    if (formData?.mobile) {
      if (formData?.mobile?.length > 10 || formData?.mobile?.length < 10) {
        toast.error("Please check your mobile no.")
        return;
      }
    }

    if (!formData?.message) {
      toast.error("Oops! You missed to type message.")
      return;
    }


    let url = 'https://script.google.com/macros/s/AKfycbykNpQE8WZAA18_2rhAOQWTbKLpCL4xz8nDZ1bR0VWqRTUiBhmNialNgx8rHbYneT6S/exec'

    try {
      setLoader(true)

      const fd = new FormData();
      fd.append('timestamp', new Date());
      fd.append('name', formData?.name);
      fd.append('email', formData?.email || '');
      fd.append('mobile', formData?.mobile || '');
      fd.append('message', formData?.message);

      const response = await fetch(url, {
        method: 'POST', body: fd
      });

      if (response.ok) {
        // Handle successful form submission
        toast.success('Message sent successfully');
        e.target.reset()
        e.target.querySelector('textarea').value = '';
      } else {
        // Handle error
        toast.error('Please try again later.');
      }
    } catch (error) {
      toast.error('Please try again later.');
      console.error('An error occurred:', error);
    } finally {
      setLoader(false)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <>

      <div class="container mt-24 mb-16 mx-auto md:px-6">
        <section class="mb-4">
          <div
            className={`main_container relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat`}>
          </div>
          <div class="container px-4 md:px-12">
            <div
              class="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div class="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                <div class="mx-auto mb-12 text-center lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                  <h6 class="font-medium">India</h6>
                </div>
                <div class="mx-auto mb-12 text-center lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <h6 class="font-medium">Ranchi, 834001</h6>
                </div>
                <a href='tel:+918340441298' class="mx-auto mb-6 text-center md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <h6 class="font-medium">+91 8340441298</h6>
                </a>
                <div class="mx-auto text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  <h6 class="font-medium">Projects: 25+</h6>
                </div>
              </div>

              <div class="mx-auto max-w-[700px]">
                <form onSubmit={handleSubmit} onChange={handleChange}>
                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <input type="text"
                      name='name'
                      class="peer block min-h-[auto] w-full rounded border-b bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90" placeholder="Name" />
                    <label
                      class={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${formData?.name && '-translate-y-[0.9rem] scale-[0.8]'}`}
                      for="exampleInput90">Name
                    </label>
                  </div>
                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      name='email'
                      class="peer block min-h-[auto] w-full rounded border-b bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91" placeholder="Email address" />
                    <label
                      class={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${formData?.email && '-translate-y-[0.9rem] scale-[0.8]'}`}
                      for="exampleInput91">Email Id
                    </label>
                  </div>
                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                      name='mobile'
                      type="number"
                      class="peer block min-h-[auto] w-full rounded border-b bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91" placeholder="Mobile No." />
                    <label
                      class={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${formData?.mobile && '-translate-y-[0.9rem] scale-[0.8]'}`}
                      for="exampleInput91">Mobile No.
                    </label>
                  </div>
                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      name='message'
                      class="peer block min-h-[auto] w-full rounded border-b bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                    <label for="exampleFormControlTextarea1"
                      class={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${formData?.message && '-translate-y-[0.9rem] scale-[0.8]'}`}>Message</label>
                  </div>

                  {
                    loader ?
                      <div className="flex justify-center"><div class="spinner"></div></div>
                      :
                      <button className='beauty_button' type='submit' data-te-ripple-init data-te-ripple-color="light">
                        Send
                        <div class="star-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            version="1.1"
                            style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
                            viewBox="0 0 784.11 815.53"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <defs></defs>
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                              <path
                                class="fil0"
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="star-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            version="1.1"
                            style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
                            viewBox="0 0 784.11 815.53"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <defs></defs>
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                              <path
                                class="fil0"
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="star-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            version="1.1"
                            style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
                            viewBox="0 0 784.11 815.53"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <defs></defs>
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                              <path
                                class="fil0"
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="star-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            version="1.1"
                            style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
                            viewBox="0 0 784.11 815.53"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <defs></defs>
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                              <path
                                class="fil0"
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="star-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            version="1.1"
                            style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
                            viewBox="0 0 784.11 815.53"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <defs></defs>
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                              <path
                                class="fil0"
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="star-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            version="1.1"
                            style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
                            viewBox="0 0 784.11 815.53"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <defs></defs>
                            <g id="Layer_x0020_1">
                              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                              <path
                                class="fil0"
                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </button>
                  }

                </form>
              </div>

            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Contact