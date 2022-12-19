let typingNick = document.querySelector(".typingEffectNick");
let typewriter = new Typewriter(typingNick, {
  loop: true,
});

typewriter
  .start()
  .pauseFor(1000)
  .typeString("Grewather!")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Programmer!")
  .pauseFor(1000)
  .deleteAll()
  .typeString("web developer!");
