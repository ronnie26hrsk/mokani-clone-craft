export const AboutSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Quirky intro text */}
        <div className="mb-16 space-y-4 text-lg leading-relaxed">
          <p>There's a demon. His name is Natas.</p>
          <p>He reeks of despair and cheap talcum powder.</p>
          <p>He moans, spanks me at random,</p>
          <p>and sings <em>*Aye Shaam Mastani*</em> like it's a ritual.</p>
          <p className="font-bold">I build to keep him quiet.</p>
          <p>If I stop, he appears with a tambourine,</p>
          <p>whispers "innovate, baby,"</p>
          <p>and slaps my soul without blinking.</p>
          <p className="text-2xl font-bold">I'm Aakash Mokani.</p>
          <p>The only escape is a spell:</p>
          <p className="italic">"Om Trimmer Krim pav Kandivaliborivalium Bhajiyum Namah."</p>
          <p className="font-bold">or just pay me hefty</p>
        </div>

        {/* About Me section */}
        <div className="bg-card border-4 border-foreground rounded-lg p-8 shadow-xl">
          <h2 className="text-4xl font-black mb-6 text-secondary">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-base leading-relaxed">
              <p>I'm Aakash — I got into coding through pirated movies and an accidental intro to GitHub.</p>
              <p>Since then, I've been obsessed with building things that feel original.</p>
              <p>I enjoy backend problem-solving just as much as crafting bold, unusual experiences on the front end.</p>
              <p>I don't follow templates — I look for ideas that break the usual flow and still make sense.</p>
              <p>For me, building is about standing out — not for the sake of it, but because I can't settle for generic.</p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://www.mokanichokani.me/profile3.jpg" 
                alt="Aakash Mokani" 
                className="w-64 h-64 object-cover rounded-lg border-4 border-foreground shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
