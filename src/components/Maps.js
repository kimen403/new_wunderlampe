'use client';

export function Maps() {
  return (
    <section className="w-full h-[665px]">
      <div className="bg-yellow-30 py-10 rounded-t-4xl">
        <h2 className="text-black text-center text-4xl w-full text-shadow">Wir freuen uns darauf, dich bei uns Willkommen zu heißen</h2>
        <h2 className="text-black text-center text-4xl font-extrabold w-full text-shadow">Hier findest du unsere Standorten</h2>        
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12262.32294628206!2d6.632608960976757!3d49.751532289883905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47957d65dac8939b%3A0x8ccd924f8b89730d!2sDie%20Wunderlampe!5e0!3m2!1sen!2sde!4v1746909469171!5m2!1sen!2sde"
      className="w-full h-full"
      allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    </section>
  );
}
