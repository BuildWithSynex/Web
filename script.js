const c = window.CLINIC_CONFIG || {};
const $ = (id) => document.getElementById(id);
const setText = (id, value) => { if ($(id) && value) $(id).textContent = value; };

setText("announcement", c.announcement);
setText("brandName", c.shortName || c.name);
setText("brandSub", "DENTAL STUDIO");
setText("footerBrand", c.shortName || c.name);
setText("footerName", c.name);
setText("heroEyebrow", c.heroEyebrow);
setText("heroText", c.heroText);
setText("proofText", c.proofText);
setText("heroLocation", (c.location || "").toUpperCase());
setText("yearsExperience", c.yearsExperience);
setText("aboutText", c.aboutText);
setText("phoneDisplay", c.phoneDisplay);
setText("addressDisplay", c.address);
setText("hoursDisplay", c.hours);
setText("reviewQuote", `“${c.review?.quote || ""}”`);
setText("reviewName", c.review?.name);
setText("reviewMeta", c.review?.meta);
setText("year", new Date().getFullYear());
if (c.heroImage) $("heroImage").src = c.heroImage;
if (c.aboutImage) $("aboutImage").src = c.aboutImage;

const titleParts = (c.heroTitle || "A healthier smile.|A happier you.").split("|");
$("heroTitle").innerHTML = `${titleParts[0]}<br><em>${titleParts[1] || ""}</em>`;

$("serviceGrid").innerHTML = (c.services || []).map((s, i) => `
  <article class="service-card">
    <div class="service-card-top"><span class="service-icon">${s.icon}</span><span class="service-number">0${i + 1}</span></div>
    <h3>${s.name}</h3><p>${s.text}</p><div class="service-card-bottom"><span>${s.detail}</span><span>↗</span></div>
  </article>`).join("");

$("teamGrid").innerHTML = (c.team || []).map((p) => `
  <article class="team-card"><div class="team-photo"><div class="team-initials">${p.initials}</div><span>✳</span></div>
  <h3>${p.name}</h3><div class="team-role">${p.role}</div><p>${p.bio}</p></article>`).join("");

const wa = `https://wa.me/${c.whatsappNumber || "919876543210"}`;
$("whatsappFloat").href = `${wa}?text=${encodeURIComponent("Hello, I'd like to enquire about an appointment.")}`;

$("menuToggle").addEventListener("click", () => $("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => $("mainNav").classList.remove("open")));

$("appointmentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    `Hello ${c.name || "Dental Clinic"}, I'd like to request an appointment.`,
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Treatment: ${data.get("treatment")}`,
    `Preferred date: ${data.get("date") || "Flexible"}`
  ].join("\n");
  $("formStatus").textContent = "Opening WhatsApp to send your request…";
  window.open(`${wa}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
