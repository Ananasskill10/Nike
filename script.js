const style = document.createElement("style");
style.textContent = `
:root {
  --bg:#0b0b0b;
  --panel:#0f0f10;
  --accent:#ff2e2e;
  --muted:#bdbdbd;
  --card:#141414;
  --glass: rgba(255,255,255,0.03);
  --max-width:1300px;
  --radius:14px;
}

*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{
  background: url("assets/images/739c66ae-3895-43d9-9b34-a9075f664fce.png") no-repeat center center fixed;
  background-size: cover;
  color:#fff;
  font-family: "Inter", Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.4;
  overflow-x:hidden;
}

.header{
  width:100%;
  background:linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2));
  position:sticky;
  top:0;
  z-index:50;
  border-bottom:1px solid rgba(255,255,255,0.02);
}
.header .wrap{
  max-width:var(--max-width);
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:18px 24px;
  gap:16px;
}
.logo{font-weight:700;color:var(--accent);font-size:20px;letter-spacing:1px}
.nav{display:flex;gap:18px;align-items:center}
.nav a{color:#e9e9e9;text-decoration:none;padding:8px 10px;border-radius:8px;font-weight:500;transition:all .3s ease}

.hero{
  min-height:78vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:48px 20px;
  background-image:linear-gradient(120deg, rgba(0,0,0,0.6), rgba(0,0,0,0.15));
}
.hero .wrap{display:grid;grid-template-columns:1fr 520px;gap:32px;align-items:center}
.hero h1{font-size:56px;margin:0 0 12px;color:var(--accent);line-height:1}
.hero p{color:var(--muted);font-size:18px;margin-bottom:18px}

.cta-row{display:flex;gap:12px;align-items:center}
.btn{
  position:relative;
  background:var(--accent);
  color:#fff;
  border:none;
  padding:14px 22px;
  border-radius:12px;
  cursor:pointer;
  font-weight:600;
  box-shadow:0 4px 18px rgba(255,46,46,0.25);
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  overflow:hidden;
}
.btn.ghost{
  background:transparent;
  border:1px solid rgba(255,255,255,0.15);
}
.btn:hover{
  transform:translateY(-3px) scale(1.05);
  box-shadow:0 8px 25px rgba(255,46,46,0.5);
  background:linear-gradient(145deg, #ff3b3b, #d91c1c);
}

.section{padding:64px 20px}
.container{max-width:var(--max-width);margin:0 auto}
.products-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:24px;
  margin-top:28px;
}

.card{
  background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  border-radius:var(--radius);
  overflow:hidden;
  box-shadow:0 6px 30px rgba(0,0,0,0.5);
  transition:all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform-style: preserve-3d;
  perspective: 800px;
}
.card:hover{
  transform:translateY(-8px) rotateX(5deg) rotateY(-5deg);
  box-shadow:0 18px 50px rgba(0,0,0,0.7);
}
.card .img{
  height:360px;
  background:#111;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}
.card img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  transition:transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.card:hover img{
  transform:scale(1.08) rotateZ(-1deg);
}
.card .meta{padding:18px}
.card h3{margin:0 0 8px;font-size:20px}
.card p{margin:0;color:var(--muted);font-size:14px}
.price-row{display:flex;align-items:center;justify-content:space-between;margin-top:14px}
.price{color:var(--accent);font-weight:700;font-size:18px}

.footer{
  padding:32px 20px;
  background:#080808;
  border-top:1px solid rgba(255,255,255,0.02);
  margin-top:auto;
}
.footer .container{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:16px;
  flex-wrap:wrap;
}

.page{padding:64px 20px}
.page .card-panel{
  background:var(--panel);
  padding:28px;
  border-radius:12px;
  max-width:1000px;
  margin:0 auto;
  box-shadow:0 8px 30px rgba(0,0,0,0.5);
}
.kicker{color:var(--muted);font-size:13px;margin-bottom:8px}
.center{text-align:center}
`;
document.head.appendChild(style);

window.addEventListener("load", () => {
  const header = document.querySelector(".header");
  if (header) {
    header.style.opacity = "0";
    header.style.transform = "translateY(-20px)";
    setTimeout(() => {
      header.style.transition = "all 0.9s ease";
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }, 200);
  }
});

const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "all 0.8s ease";
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});
cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "all 0.35s cubic-bezier(0.25, 1, 0.5, 1)";
    btn.style.transform = "translateY(-3px) scale(1.05)";
    btn.style.boxShadow = "0 8px 25px rgba(255,46,46,0.5)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0) scale(1)";
    btn.style.boxShadow = "0 4px 18px rgba(255,46,46,0.25)";
  });
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) hero.style.backgroundPositionY = window.scrollY * 0.3 + "px";
});

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,46,46,0.08), rgba(0,0,0,0.8))`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))";
  });
});

document.querySelectorAll(".btn").forEach(btn => {
  btn.style.transition = "all 0.3s ease";
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 25px rgba(255, 46, 46, 0.6)";
    btn.style.transform = "scale(1.06)";
    btn.style.filter = "brightness(1.1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
    btn.style.transform = "scale(1)";
    btn.style.filter = "brightness(1)";
  });
});

document.querySelectorAll(".nav a").forEach(link => {
  const underline = document.createElement("span");
  underline.style.position = "absolute";
  underline.style.left = "0";
  underline.style.bottom = "0";
  underline.style.height = "2px";
  underline.style.width = "0";
  underline.style.background = "#ff2e2e";
  underline.style.transition = "width 0.3s ease";
  underline.style.borderRadius = "2px";
  underline.style.pointerEvents = "none";

  link.style.position = "relative";
  link.style.display = "inline-block";
  link.appendChild(underline);

  link.addEventListener("mouseenter", () => {
    underline.style.width = "100%";
    link.style.color = "#ff2e2e";
  });

  link.addEventListener("mouseleave", () => {
    underline.style.width = "0";
    link.style.color = "#e9e9e9";
  });
});

document.querySelectorAll(".card").forEach(card => {
  card.style.transition = "all 0.4s ease";
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
    card.style.boxShadow = "0 8px 25px rgba(255, 46, 46, 0.15)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "0 6px 30px rgba(0,0,0,0.6)";
  });
});

const floatingContainer = document.createElement("div");
floatingContainer.style.position = "fixed";
floatingContainer.style.top = "0";
floatingContainer.style.left = "0";
floatingContainer.style.width = "100%";
floatingContainer.style.height = "100%";
floatingContainer.style.overflow = "hidden";
floatingContainer.style.zIndex = "0";
floatingContainer.style.pointerEvents = "none";
document.body.prepend(floatingContainer);

function createFloatingWord() {
  const word = document.createElement("span");
  word.textContent = "JORDAN";
  word.style.position = "absolute";
  word.style.fontWeight = "700";
  word.style.color = "rgba(255, 46, 46, 0.15)";
  word.style.fontSize = Math.random() * 40 + 40 + "px"; // 40–80px
  word.style.left = Math.random() * window.innerWidth + "px";
  word.style.top = window.innerHeight + "px"; // снизу
  word.style.opacity = "0";
  word.style.transition = "transform 8s linear, opacity 2s ease";
  floatingContainer.appendChild(word);

  setTimeout(() => {
    word.style.opacity = "1";
    word.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 20 - 10}deg)`;
  }, 100);

  setTimeout(() => {
    word.style.opacity = "0";
    word.remove();
  }, 9000);
}

setInterval(createFloatingWord, 1500);
