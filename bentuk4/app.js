/* =========================================================
   LITURGI HARI MINGGU — BENTUK IV
   Data dibuat terpisah agar lagu/notasi mudah diganti.
   ========================================================= */

const LITURGY = {
  meta: {
    title: "LITURGI HARI MINGGU (BENTUK IV)",
    church: "GEREJA KALIMANTAN EVANGELIS",
    date: "Minggu, 26 Juli 2026",
    service: "06.00 WIB",
    reading: "KEJADIAN 29:15–30 / NAS KHOTBAH: MATIUS 13:31–35",
    theme: "“HIDUP YANG BERDAMPAK”"
  },

  sections: [
    {
      id: "persiapan",
      number: 1,
      title: "PERSIAPAN / INTROITUS",
      content: `
        <div class="role-line"><div class="role">a.</div><div>Doa Konsistorium</div></div>
        <div class="role-line"><div class="role">b.</div><div>Berita Jemaat</div></div>
        <div class="standing">Jemaat Berdiri</div>
      `
    },

    {
      id: "pkj7",
      number: 2,
      title: "MENYANYI DARI PKJ NO. 7: 1–3 “BERSYUKURLAH PADA TUHAN”",
      song: {
        source: "PKJ No. 7: 1–3 | Do = C, 4 ketuk",
        title: "Bersyukurlah Pada Tuhan",
        notation: "assets/notasi/pkj-7.png"
      }
    },

    {
      id: "votum",
      number: 3,
      title: "VOTUM DAN SALAM (PENDETA)",
      content: `
        <div class="role-line">
          <div class="role">Pendeta</div>
          <div>Dalam nama Bapa Anak dan Roh Kudus. Kasih karunia dan damai sejahtera dari Allah, Bapa kita dan dari Tuhan Yesus Kristus menyertai kamu.</div>
        </div>
        <div class="role-line">
          <div class="role">Jemaat</div>
          <div>Amin</div>
        </div>
        <div class="standing">Jemaat Duduk</div>
      `
    },

    {
      id: "kj39",
      number: 4,
      title: "MENYANYI DARI KJ NO. 39: 1–2 “KU DIBERI BELAS KASIHAN”",
      song: {
        source: "KJ No. 39: 1–2 | Do",
        title: "Ku Diberi Belas Kasihan",
        notation: "assets/notasi/kj-39.png"
      }
    },

    {
      id: "pengakuan-dosa",
      number: 5,
      title: "PENGAKUAN DOSA DAN UCAPAN SYUKUR (LITURGOS)",
      content: `
        <p>Setelah kita menjalani kehidupan dari waktu ke waktu, Allah dengan setia menyertai dan memberkati kita. Namun betapa banyaknya kita masih tidak mampu menuruti perintah-Nya. Karena itu marilah kita datang pada Dia untuk mengaku Dosa dan kelemahan kita. Marilah kita merenung ulang dan menyesali dosa di hadapan Tuhan dalam saat teduh.</p>
        <p class="instruction">-------- <strong>SAAT TEDUH</strong> -------- : Berdoa .....</p>
        <div class="standing">Jemaat Berdiri</div>
      `
    },

    {
      id: "anugerah",
      number: 6,
      title: "BERITA ANUGERAH DAN PETUNJUK HIDUP BARU (PENDETA)",
      content: `
        <p>Kepada saudara-saudara yang sungguh percaya kepada Kristus, yakinlah bahwa dosamu sudah diampuni. Bersukacitalah dan bersyukurlah kepada Tuhan yang mengampuni dosamu.</p>
        <p>Dengarlah petunjuk hidup baru bagi sekalian orang percaya seperti terdapat dalam Kolose 3:12–14:</p>
        <div class="scripture">
          <strong>Kolose 3:12–14</strong>
          “Karena itu, sebagai orang-orang pilihan Allah yang dikuduskan dan dikasihi-Nya, kenakanlah belas kasihan, kemurahan, kerendahan hati, kelemahlembutan dan kesabaran. Sabarlah kamu seorang terhadap yang lain, dan ampunilah seorang akan yang lain apabila yang seorang menaruh dendam terhadap yang lain, sama seperti Tuhan telah mengampuni kamu, kamu perbuat jugalah demikian. Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan.”
        </div>
        <div class="standing">Jemaat Duduk</div>
      `
    },

    {
      id: "alkitab",
      number: 7,
      title: "PEMBACAAN ALKITAB (OLEH PENATUA/DIAKON YANG DITUGASKAN)",
      content: `
        <p>Marilah kita mendengar Firman Allah yang tertulis dalam:</p>
        <div class="scripture">
          <strong>Kitab KEJADIAN Pasal 29 Ayat 15 sampai dengan ayat 30.</strong>
        </div>
        <p>Setelah pembacaan, liturgos mengucapkan: “Yang berbahagia ialah mereka yang mendengarkan Firman Allah dan memeliharanya. Amin.” (Lukas 11 : 28 atau Matius 7 : 24)</p>
      `
    },

    {
      id: "kasih-setiamu",
      number: 8,
      title: "MENYANYI DARI KP. “KASIH SETIAMU YANG KURASAKAN”",
      lyrics: {
        items: [
          {
            heading: "VERSE 1",
            text: "KASIH SETIAMU YANG KU RASAKAN\nLEBIH TINGGI DARI LANGIT BIRU\nKEBAIKANMU YANG\nTELAH KAU NYATAKAN\nLEBIH DALAM DARI LAUTAN"
          },
          {
            heading: "VERSE 2",
            text: "BERKATMU YANG TELAH KU TERIMA\nSEMPAT MEMBUATKU TERPESONA\nAPA YANG TAK PERNAH KUPIRKAN\nITU YANG KAU SEDIAKAN BAGIKU"
          },
          {
            heading: "CHORUS",
            text: "SIAPAKAH AKU INI TUHAN\nJADI BIJI MATAMU\nDENGAN APAKAH KU BALAS TUHAN\nSELAIN PUJI DAN SEMBAH KAU"
          }
        ]
      }
    },

    {
      id: "firman",
      number: 9,
      title: "PEMBERITAAN FIRMAN TUHAN",
      content: `
        <p class="instruction">Bagian ini disiapkan untuk khotbah berdasarkan tema “HIDUP YANG BERDAMPAK”.</p>
      `
    },

    {
      id: "syafaat",
      number: 10,
      title: "DOA SYAFAAT (DIAKHIRI DOA BAPA KAMI)",
      content: `
        <p class="instruction">Doa syafaat.</p>
      `
    },

    {
      id: "paduan-suara",
      number: 11,
      title: "PADUAN SUARA / VOKAL GRUP / PUJI-PUJIAN",
      content: `
        <p class="instruction">Diisi sesuai jadwal pelayanan.</p>
      `
    },

    {
      id: "pengakuan-iman",
      number: 12,
      title: "PENGAKUAN IMAN (LITURGOS)",
      content: `
        <div class="standing">Jemaat Berdiri</div>
        <div class="role-line">
          <div class="role">Liturgos</div>
          <div>Marilah kita berdiri bersama-sama dengan sekalian orang percaya dari segala masa dan tempat mengikrarkan Pengakuan Iman Kristen.</div>
        </div>
        <div class="role-line">
          <div class="role">Bersama</div>
          <div>“Aku percaya kepada ...”</div>
        </div>
        <p>Diakhiri dengan nyanyian <strong>Haleluya 3x</strong></p>
        <div class="standing">Jemaat Duduk</div>
      `
    },

    {
      id: "persembahan",
      number: 13,
      title: "PERSEMBAHAN SYUKUR (LITURGOS)",
      content: `
        <div class="role-line">
          <div class="role">a. Nas Pengantar</div>
          <div>“Muliakanlah Tuhan dengan hartamu dan dengan hasil pertama dari segala penghasilanmu (Amsal 3:9)”</div>
        </div>
        <div class="role-line">
          <div class="role">b. Doa Persembahan</div>
          <div></div>
        </div>
        <div class="role-line">
          <div class="role">c.</div>
          <div>Sementara persembahan syukur dikumpulkan, Jemaat Menyanyi dari <strong>NKB NO. 208 : 1–DST “TABUR WAKTU PAGI”</strong></div>
        </div>
        <div class="standing">Jemaat Berdiri</div>
      `,
      song: {
        source: "NKB No. 208 : 1–dst",
        title: "Tabur Waktu Pagi",
        notation: "assets/notasi/nkb-208.png"
      }
    },

    {
      id: "berkat",
      number: 14,
      title: "BERKAT TUHAN (PENDETA)",
      content: `
        <div class="role-line">
          <div class="role">Pendeta</div>
          <div>Kasih karunia Tuhan Yesus Kristus dan kasih Allah, dan persekutuan Roh Kudus menyertai kamu sekalian.</div>
        </div>
        <div class="role-line">
          <div class="role">Jemaat</div>
          <div>Nyanyian Kidung Jemaat No. 478a | Do = d, 2 Ketuk</div>
        </div>
        <div class="amin-box">
          5  6’  | 5  6’ | 5  4 | 3  . ||
          <br>
          <small>A-min &nbsp;&nbsp; A-min &nbsp;&nbsp; A-min</small>
        </div>
      `
    }
  ]
};


/* =========================
   RENDER
   ========================= */

const container = document.getElementById("liturgyContainer");
const tocList = document.getElementById("tocList");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderSong(song) {
  return `
    <div class="song-card">
      <div class="song-info">
        <div class="song-source">${escapeHtml(song.source)}</div>
        <div class="song-title">${escapeHtml(song.title)}</div>
      </div>

      <div class="notation-wrap">
        <img
          class="notation-image"
          src="${escapeHtml(song.notation)}"
          alt="Notasi ${escapeHtml(song.title)}"
          loading="lazy">
      </div>

      <div class="song-actions">
        <button class="zoom-button" data-image="${escapeHtml(song.notation)}">
          🔍 Perbesar notasi
        </button>
      </div>
    </div>
  `;
}

function renderLyrics(lyrics) {
  return `
    <div class="lyrics-grid">
      ${lyrics.items.map(item => `
        <div class="lyrics-cell">
          <div class="lyrics-heading">${escapeHtml(item.heading)}</div>
          <div class="lyrics-text">${escapeHtml(item.text)}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSection(section) {
  let body = "";

  if (section.content) body += section.content;

  if (section.lyrics) {
    body += `<div style="height:10px"></div>${renderLyrics(section.lyrics)}`;
  }

  if (section.song) {
    body += `<div style="height:12px"></div>${renderSong(section.song)}`;
  }

  return `
    <section class="liturgy-section" id="section-${escapeHtml(section.id)}">
      <div class="section-heading">
        <div class="section-number">${section.number}</div>
        <h2 class="section-title">${escapeHtml(section.title)}</h2>
      </div>
      <div class="section-body">${body}</div>
    </section>
  `;
}

function renderLiturgy() {
  document.getElementById("pageTitle").textContent = LITURGY.meta.title;
  document.getElementById("pageSubtitle").textContent =
    `${LITURGY.meta.church} • ${LITURGY.meta.date}`;

  document.getElementById("heroTitle").textContent = LITURGY.meta.date;
  document.getElementById("serviceCode").textContent = LITURGY.meta.service;
  document.getElementById("heroTheme").textContent = LITURGY.meta.theme;
  document.getElementById("heroReading").textContent = LITURGY.meta.reading;

  container.innerHTML = LITURGY.sections.map(renderSection).join("");

  tocList.innerHTML = LITURGY.sections.map(section => `
    <button class="toc-item" data-target="section-${escapeHtml(section.id)}">
      <span class="toc-number">BAGIAN ${section.number}</span>
      <span class="toc-title">${escapeHtml(section.title)}</span>
    </button>
  `).join("");
}


/* =========================
   MENU
   ========================= */

const tocPanel = document.getElementById("tocPanel");
const backdrop = document.getElementById("backdrop");

function openMenu() {
  tocPanel.classList.add("open");
  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  tocPanel.classList.remove("open");
  backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("menuButton").addEventListener("click", openMenu);
document.getElementById("closeMenu").addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

document.addEventListener("click", event => {
  const item = event.target.closest(".toc-item");
  if (!item) return;

  closeMenu();

  const target = document.getElementById(item.dataset.target);
  if (target) {
    setTimeout(() => target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    }), 100);
  }
});


/* =========================
   FONT SIZE
   ========================= */

const root = document.documentElement;
let fontScale = Number(localStorage.getItem("liturgiFontScale") || 1);

function applyFontScale() {
  fontScale = Math.min(1.25, Math.max(.85, fontScale));
  root.style.setProperty("--content-size", `${17 * fontScale}px`);
  localStorage.setItem("liturgiFontScale", fontScale.toFixed(2));
}

document.getElementById("fontMinus").addEventListener("click", () => {
  fontScale -= .05;
  applyFontScale();
});

document.getElementById("fontPlus").addEventListener("click", () => {
  fontScale += .05;
  applyFontScale();
});

document.getElementById("fontReset").addEventListener("click", () => {
  fontScale = 1;
  applyFontScale();
});


/* =========================
   SCROLL
   ========================= */

document.getElementById("scrollTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  const progress = max > 0 ? (scrollY / max) * 100 : 0;
  document.getElementById("progressBar").style.width = `${progress}%`;
});


/* =========================
   LIGHTBOX NOTASI
   ========================= */

function createLightbox() {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `
    <button class="lightbox-close" aria-label="Tutup">×</button>
    <img src="" alt="Notasi diperbesar">
  `;
  document.body.appendChild(box);

  const image = box.querySelector("img");

  function close() {
    box.classList.remove("open");
  }

  box.querySelector(".lightbox-close").addEventListener("click", close);

  box.addEventListener("click", e => {
    if (e.target === box) close();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
  });

  return {
    open(src) {
      image.src = src;
      box.classList.add("open");
    }
  };
}

const lightbox = createLightbox();

document.addEventListener("click", event => {
  const button = event.target.closest(".zoom-button");
  if (!button) return;
  lightbox.open(button.dataset.image);
});


/* =========================
   START
   ========================= */

renderLiturgy();
applyFontScale();
