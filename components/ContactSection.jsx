'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function ContactSection() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Sending...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    emailjs.sendForm(
      "service_5q0ag5v",
      "template_ojik8se",
      form.current,
      "1UR-xecYzXTyy7O9i"
    ).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Sent successfully 🎉',
        text: 'Your message has been received and we will reply to you as soon as possible.',
        confirmButtonColor: '#7059e2'
      });
      form.current.reset();
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
        confirmButtonColor: '#7059e2'
      });
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <section id="contact" className="section-padding">
       <p className="text-brand-light font-bold uppercase tracking-widest mb-2 text-sm">Contact</p>
       <h2 className="heading-2">Let&apos;s make something awesome together!</h2>
       
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
         <div className="glass-panel p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input type="text" name="name" placeholder="Your Name*" required className="w-full bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-light transition-colors text-slate-800 dark:text-white" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email Address*" required className="w-full bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-light transition-colors text-slate-800 dark:text-white" />
              </div>
              <div>
                <input type="tel" name="tel" placeholder="No.Phone*" required className="w-full bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-light transition-colors text-slate-800 dark:text-white" />
              </div>
              <div>
                <textarea name="message" placeholder="A Few Words*" required rows={5} className="w-full bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-light transition-colors text-slate-800 dark:text-white resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-light text-white font-bold text-lg py-4 rounded-xl hover:bg-brand-dark transition-colors shadow-lg shadow-brand-light/30">
                Send Message
              </button>
            </form>
         </div>

         <div className="flex flex-col justify-center space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Want to know more about me?</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                Tell me about your project or just say hello. Drop me a line and I&apos;ll get back as soon as possible.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Location</p>
                  <p className="text-lg font-medium text-slate-800 dark:text-white">Egypt, Cairo</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Phone</p>
                  <a href="tel:+201065962515" className="text-lg font-medium text-slate-800 dark:text-white hover:text-brand-light transition-colors">+201065962515</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light/10 text-brand-light flex items-center justify-center">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400">Email</p>
                  <a href="mailto:ahmed.fr1988@gmail.com" className="text-lg font-medium text-slate-800 dark:text-white hover:text-brand-light transition-colors">ahmed.fr1988@gmail.com</a>
                </div>
              </div>
            </div>
         </div>
       </div>
    </section>
  );
}
