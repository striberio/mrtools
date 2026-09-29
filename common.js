// Shared Firebase setup for all MRTools pages.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase console → Project settings → Your apps
const firebaseConfig = {
  apiKey: "AIzaSyBqEy0AZfn5jduktlfu1CxsTtQ7Jqr_zGM",
  authDomain: "mrtools-50586.firebaseapp.com",
  projectId: "mrtools-50586",
  appId: "1:960620008673:web:0c4f8bb48645b8324e53a0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// "29 set 2026, 15:13" / "29 Sept 2026, 15:13"
export const formatWhen = (date, lang) =>
  new Intl.DateTimeFormat(lang === "it" ? "it-IT" : "en-GB", { dateStyle: "medium", timeStyle: "short" }).format(date);

// Pages listed in the top-left menu. To add a feature, add a line here.
const PAGES = [
  { href: "index.html", it: "Check-in e messaggi", en: "Check-in & messages" },
  { href: "houses.html", it: "Case", en: "Houses" }
];

// Top-left menu: needs <button id="menuBtn"> and <nav id="menu"> in the top bar.
export function initMenu() {
  const btn = document.getElementById("menuBtn"), menu = document.getElementById("menu");
  const setOpen = open => { menu.classList.toggle("hide", !open); btn.setAttribute("aria-expanded", open); };
  btn.onclick = e => { e.stopPropagation(); setOpen(menu.classList.contains("hide")); };
  document.addEventListener("click", e => { if (!menu.contains(e.target)) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
}

// Fills in the menu in the given language, marking the current page.
export function renderMenu(lang) {
  const here = location.pathname.split("/").pop() || "index.html";
  document.getElementById("menu").innerHTML = PAGES.map(p =>
    `<a href="${p.href}"${p.href === here ? ' class="on" aria-current="page"' : ""}>${p[lang] || p.en}</a>`).join("");
}
