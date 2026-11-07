/**
 * Central content configuration for the HERO website.
 *
 * All copy, images, navigation and card data live here so pages/components stay
 * presentational. To update the site, edit this file only.
 */

export type TextSegment = {
  text: string;
  /** Tailwind classes for this segment, e.g. "text-my-primary". */
  className?: string;
};

export type IconName =
  | "book"
  | "layers"
  | "users"
  | "lightbulb"
  | "sliders"
  | "bolt"
  | "chip"
  | "lines"
  | "gear";

export type SocialId = "instagram" | "tiktok" | "youtube";

export type SocialLink = {
  id: SocialId;
  label: string;
  handle: string;
  href: string;
};

export type ProkerItem = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export type Member = {
  /** Photo path inside /public. */
  image: string;
  /** Used for alt text (cards currently show the photo only). */
  name: string;
  role: string;
};

export type MemberGroup = {
  title?: TextSegment[];
  members: Member[];
};

export type MemberLayout = "grid" | "masonry";

export type Structure = {
  title?: TextSegment[];
  coordinator?: Member;
  groups: MemberGroup[];
};

export type DivisionPage = {
  slug: string;
  navLabel: string;
  seo: { title: string; description: string };
  hero: {
    titleLines: TextSegment[][];
    /** Single hero image. */
    image: string;
  };
  intro: {
    title: string;
    body: string;
  };
  structure?: Structure;
  /** Member card layout. Defaults to "grid"; use "masonry" for mixed photo ratios. */
  memberLayout?: MemberLayout;
  proker?: {
    title: string;
    items: ProkerItem[];
  };
};

/** One generation/batch on the Angkatan page. */
export type Angkatan = {
  /** Stable id for React keys and anchor links, e.g. "angkatan-1". */
  id: string;
  /** Section label, supports highlighted segments. */
  label: TextSegment[];
  /** Optional period shown under the label, e.g. "2023/2024". */
  period?: string;
  /** Optional description shown under the period. */
  description?: string;
  members: Member[];
};

export type AngkatanPage = {
  slug: string;
  navLabel: string;
  seo: { title: string; description: string };
  hero: {
    titleLines: TextSegment[][];
    /** [center, bottom-left, bottom-right] */
    images: [string, string, string];
    imageGap?: string;
    imageOverlap?: boolean;
  };
  intro: DivisionPage["intro"];
  /** Render order follows the array order. Add one entry per angkatan. */
  angkatan: Angkatan[];
};

/* -------------------------------------------------------------------------- */
/*                                   Site                                     */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  name: "HERO",
  fullName: "Habibie Engineering Robotic of Organization",
  tagline: "Habibie Engineering Robotic of Organization",
  description:
    "Unit Kegiatan Mahasiswa Habibie Engineering Robotic of Organization (HERO) Institut Teknologi B.J. Habibie — wadah pengembangan minat, bakat, dan pengetahuan di bidang robotika.",
  logo: "/assets/hero.png",
  copyright: "© 2025 Habibie Engineering Robotic of Organization",
  footerImage: "/assets/footer.JPG",
  backgroundImage: "/assets/bg1.svg",
} as const;

export const socials: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@robotika.ith",
    href: "https://instagram.com/robotika.ith",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@robotika.ith",
    href: "https://tiktok.com/@robotika.ith",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@ROBOTIKAITH",
    href: "https://youtube.com/@ROBOTIKAITH",
  },
];

export const navigation = {
  /** Dropdown "Beranda" in the header. */
  home: [
    { label: "Home", href: "/#home" },
    { label: "Tentang", href: "/#tentang" },
    { label: "Sambutan", href: "/#sambutan" },
    { label: "Visi Misi", href: "/#visimisi" },
    { label: "Filosofi Logo", href: "/#filosofi" },
    { label: "Struktur", href: "/#struktur" },
    { label: "Berita", href: "/#berita" },
  ],
  angkatan: { label: "Angkatan", href: "/angkatan" },
  contact: { label: "Hubungi Kami", href: "#contact" },
  /** Footer quick links. */
  footer: [
    { label: "Home", href: "/#home" },
    { label: "Tentang", href: "/#tentang" },
    { label: "Visi Misi", href: "/#visimisi" },
    { label: "Filosofi Logo", href: "/#filosofi" },
    { label: "Struktur", href: "/#struktur" },
    { label: "Berita", href: "/#berita" },
    { label: "Hubungi Kami", href: "/#contact" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*                                  Home page                                 */
/* -------------------------------------------------------------------------- */

export const homePage = {
  seo: {
    title: "HERO — Habibie Engineering Robotic of Organization",
    description: siteConfig.description,
  },
  hero: {
    lines: [
      [
        { text: "H", className: "text-my-primary" },
        { text: "abibie" },
      ],
      [
        { text: "E", className: "text-my-primary" },
        { text: "ngineering" },
      ],
      [
        { text: "R", className: "text-my-primary" },
        { text: "obotics of" },
      ],
      [
        { text: "O", className: "text-my-primary" },
        { text: "rganization" },
      ],
    ] as TextSegment[][],
    image: "/assets/hero.png",
  },
  about: {
    title: [
      { text: "Mari kenalan dengan " },
      { text: "HERO", className: "text-my-primary" },
    ] as TextSegment[],
    body: "Habibie Engineering Robotic of Organization merupakan unit kegiatan Mahasiswa yang menjadi sarana bagi mahasiswa institut kenologi bj habibie untuk mengembangkan minat, bakat, dan pengetahuan dalam bidang robotika, juga diharapkan dapat menjadi wadah bagi mahasiswa untuk mengembangkan soft skill seperti kemampuan berkomunikasi, kerjasama tim, dan kepemimpinan serta sebagai wadah untuk mahasiswa menoreh prestasi dalam kompetisi robot baik di tingkat nasional maupun di tingkat internasional. Hal ini sesuai dengan tujuan pendidikan tinggi untuk tidak hanya menghasilkan lulusan yang cerdas secara akademis, tetapi juga memiliki kepribadian yang baik dan berlandaskan CINTA",
    images: [
      "/assets/angkatan/2025/semua.jpeg",
      "/assets/angkatan/2024/angkatan.jpg",
      "/assets/angkatan/2024/angkatan-santai.jpg",
    ] as [string, string, string],
    cta: { label: "Sambutan", href: "#sambutan" },
  },
  sambutan: {
    title: "Sambutan",
    images: [
      { image: "/assets/divisi/inti/inti-ketua-muadz.webp", name: "Muhammad Mu'adz Ibda", role: "Ketua HERO" },
      { image: "/assets/divisi/inti/inti-wakil-ketua-abel.webp", name: "Abriel Yosua Nathanael Leskona", role: "Wakil Ketua HERO" },
    ] as Member[],
    greeting:
      '"Assalamualaikum Warahmatullahi Wabarakatuh, Shalom, Om Swastyastu, Namo Buddhaya, Salam Kebajikan Bagi Kita Semua."',
    body: '"Puji dan syukur kita panjatkan kepada Tuhan Yang Maha Esa atas rahmat dan karunia-Nya yang selalu menyertai perjuangan kami. Habibie Engineering Robotik Of Organization hadir bagaikan pena yang siap mengukir cerita pada setiap lembaran, dengan tekad untuk memberikan sumbangsih demi kebermanfaatan yang berkelanjutan. Kami menjalankan kewajiban dari aspek Pengembangan, Pelayanan, Pengabdian, dan Pergerakan, yang menjadi identitas kami dalam mempertahankan nilai vital sebuah organisasi. Dengan semangat dan partisipasi dari seluruh anggota HERO, kami hadir untuk membawa perubahan positif dan inovasi dalam setiap langkah yang kami ambil. Melalui kebersamaan, kami menghadapi setiap rintangan, menciptakan solusi kreatif, dan memberikan kontribusi aktif demi mencapai tujuan dan harapan bersama. HERO membutuhkan media untuk mendokumentasikan setiap aksi nyata kami. Untuk mengiringi perjalanan hingga akhir kisah, pada platform inilah HERO yang akan menjadi museum dari setiap karya yang kami hadirkan. Kami mengucapkan terima kasih kepada seluruh pihak yang terlibat dan selalu mendukung kami, sang pembawa secercah harapan demi mensukseskan Institut Teknologi Bj Habibie dan Indonesia. Wassalamualaikum Warahmatullahi Wabarakatuh....""',
  },
  visiMisi: {
    title: [
      { text: "Visi", className: "text-my-primary" },
      { text: " dan " },
      { text: "Misi", className: "text-my-primary" },
    ] as TextSegment[],
    visi: {
      label: "Visi",
      body: "Menjadi pusat inovasi teknologi robotika bertujuan untuk meningkatkan kapasitas teknologi dan keahlian teknis mahasiswa di lingkungan kampus, serta mendorong integrasi robotika dalam pendidikan dan penelitian.",
    },
    misi: {
      label: "Misi",
      items: [
        {
          icon: "book" as IconName,
          title: "Integrasi Kurikulum",
          description:
            "Mengintegrasikan teknologi robotika dalam kurikulum untuk memastikan mahasiswa memiliki pengetahuan dan keterampilan yang relevan dengan perkembangan teknologi.",
        },
        {
          icon: "layers" as IconName,
          title: "Pengembangan Inovasi",
          description:
            "Mendorong pengembangan inovasi dan kreativitas dalam bidang robotika melalui penelitian dan pengembangan proyek.",
        },
        {
          icon: "users" as IconName,
          title: "Kolaborasi",
          description:
            "Membangun jaringan kolaborasi dengan industri dan institusi pendidikan untuk pengembangan bersama.",
        },
        {
          icon: "lightbulb" as IconName,
          title: "Kompetisi",
          description:
            "Mengikuti kompetisi robotika nasional dan internasional untuk meningkatkan kemampuan dan prestasi.",
        },
        {
          icon: "sliders" as IconName,
          title: "Pengembangan SDM",
          description:
            "Mengembangkan sumber daya manusia yang kompeten dalam bidang robotika melalui pelatihan dan workshop.",
        },
        {
          icon: "bolt" as IconName,
          title: "Inovasi Teknologi",
          description:
            "Mengembangkan teknologi robotika yang inovatif dan bermanfaat bagi masyarakat.",
        },
      ],
    },
  },
  filosofi: {
    title: [
      { text: "Filosofi " },
      { text: "Logo", className: "text-my-primary" },
    ] as TextSegment[],
    image: "/assets/hero.png",
    items: [
      {
        icon: "chip" as IconName,
        iconClassName: "bg-blue-500 text-white",
        title: [
          { text: "Robot " },
          { text: "Biru", className: "text-blue-500" },
          { text: " dengan Mata Bulat" },
        ] as TextSegment[],
        points: [
          "Makna: Robot ini melambangkan teknologi canggih, inovasi, dan kemampuan mekanis. Mata bulat bisa menunjukkan sifat ramah atau kemanusiaan dari teknologi yang diciptakan.",
          "Warna Biru: Biru dikaitkan dengan kepercayaan, stabilitas, dan kecerdasan. Warna ini menunjukkan bahwa teknologi yang diwakili oleh logo dapat diandalkan dan cerdas.",
        ],
      },
      {
        icon: "lines" as IconName,
        iconClassName: "bg-white text-black",
        title: [{ text: 'Tulisan "HERO"' }] as TextSegment[],
        points: [
          'Makna: "HERO" merupakan singkatan dari Habibie Engineering Robotic of Organization.',
          "Warna Putih: Putih melambangkan kemurnian, kebersihan, dan kesederhanaan. Dalam konteks ini, menunjukkan bahwa entitas ini memiliki niat baik dan bersih dalam tujuannya.",
          "Garis Hitam: Hitam sering melambangkan kekuatan dan keanggunan. Ini menunjukkan ketegasan dan profesionalisme.",
        ],
      },
      {
        icon: "gear" as IconName,
        iconClassName: "bg-red-600 text-white",
        title: [
          { text: "Gigi Roda " },
          { text: "Merah", className: "text-my-primary" },
        ] as TextSegment[],
        points: [
          "Makna: Gigi roda sering melambangkan mekanik, teknik, atau rekayasa. Ini menunjukkan aspek teknis dan mekanis dari entitas yang diwakili oleh logo.",
          "Warna Merah: Merah melambangkan energi, kekuatan, dan keberanian. Dalam konteks ini, warna merah bisa menggambarkan semangat tinggi dan ketangguhan.",
        ],
      },
      {
        icon: "bolt" as IconName,
        iconClassName: "bg-yellow-500 text-white",
        title: [
          { text: "Mesin dengan Roda " },
          { text: "Kuning", className: "text-yellow-500" },
        ] as TextSegment[],
        points: [
          "Makna: Kendaraan atau mesin melambangkan mobilitas, utilitas, dan kemampuan operasional. Ini menunjukkan bahwa entitas yang diwakili oleh logo memiliki fungsi praktis dan dapat bergerak atau beroperasi.",
          "Warna Kuning: Kuning melambangkan optimisme, kebahagiaan, dan energi. Ini bisa menunjukkan bahwa mesin atau kendaraan tersebut membawa solusi positif dan energi ke dalam pekerjaan atau tugas yang dilakukan.",
        ],
      },
    ],
  },
  berita: {
    title: "Berita",
    items: [
      {
        image: "/assets/berita/HRC2.jpeg",
        title:
          "Wadah Kolaborasi Komunitas Robotik Indonesia Timur, HRC #2 Jadi Ajang Unggulan Asah Keterampilan STEM",
        description:
          "Institut Teknologi Bacharuddin Jusuf Habibie (ITH) Kota Parepare kembali menunjukkan komitmennya dalam mengembangkan dunia teknologi melalui penyelenggaraan ajang kompetisi robotik tahunan, Habibie Robotic Competition (HRC) #2 dengan tema “Spark the Purpose, Honor the Craft”. Bertempat di Aula Kampus 2 ITH, Jalan Pemuda, kegiatan bergengsi skala regional ini resmi dibuka pada Jumat (25/9/2026) dan dijadwalkan berlangsung meriah hingga Minggu (27/9/2026)",
        link: "https://ruminews.id/wadah-kolaborasi-komunitas-robotik-indonesia-timur-hrc-2-jadi-ajang-unggulan-asah-keterampilan-stem/",
      },
      {
        image: "/assets/berita/hrc2-2.webp",
        title:
          "Institut Teknologi BJ Habibie Sukses Gelar Kompetisi Robotik HRC 2025, Berikut Daftar Pemenangnya",
        description:
          "Habibie Robotic Competition (HRC) 2025, merupakan kegiatan tahunan Unit Kegiatan Mahasiswa Habibie Engineeering Robotic of Organization (UKM HERO) Institut Teknologi Bacharuddin Jusuf Habibie (ITH), telah sukses berlangsung. Kegiatan diadakan selama 3 hari yaitu 9-11 Oktober 2025 di Aula Kampus 2 ITH Parepare.",
        link: "https://www.mitraindonesia.id/2025/10/institut-teknologi-bj-habibie-sukses.html",
      },
      {
        image: "/assets/berita/gts1.png",
        title:
          "HERO Goes to School, Wujudkan Inspirasi Peserta Didik SMKN 2 Parepare",
        description:
          "Kegiatan HERO Goes to School sukses digelar di SMKN 2 Parepare. Kegiatan ini diselenggarakan oleh salah satu Unit Kegiatan Mahasiswa yang ada di Kampus Intstitut Teknologi B.J. Habibie (ITH). Yakni Habibie Engineering Robotic Of Organization atau kerap disebut dengan HERO..",
        link: "https://parepos.fajar.co.id/2024/10/hero-goes-to-school-wujudkan-inspirasi-peserta-didik-smkn-2-parepare/",
      },
      {
        image: "/assets/berita/kompetisi2.png",
        title:
          "Tim Hero ITH Parepare Torehkan Prestasi Membanggakan di Kompetisi Lomba Robotic",
        description:
          "Anggota HERO melakukan kunjungan industri ke perusahaan teknologi terkemuka untuk memperluas wawasan.",
        link: "https://parepos.fajar.co.id/2024/03/tim-hero-ith-parepare-torehkan-prestasi-membanggakan-di-kompetisi-lomba-robotic/",
      },
      {
        image: "/assets/berita/seminar1.png",
        title:
          "Workshop Robotika di ITH: Kupas Manfaat, Ancaman, dan Prospek Masa Depan Teknologi",
        description:
          "Unit Kegiatan Mahasiswa (UKM) Habibie Engineering Robotic of Organization Institut Teknologi Bacharuddin Jusuf Habibie (ITH) melaksanakan kegiatan seminar dan workshop robotika 2024..",
        link: "https://parepos.fajar.co.id/2024/10/workshop-robotika-di-ith-kupas-manfaat-ancaman-dan-prospek-masa-depan-teknologi/",
      },
      {
        image: "/assets/berita/ramadhanfair.png",
        title: "UKM Robotika ITH hadir di Festival Ramadhan 2025",
        description:
          "Unit Kegiatan Mahasiswa (UKM) Robotika Institut Teknologi Habibie mengambil bagian dalam kegiatan festival Ramadhan Vol.4 di Lapangan Andi Makkasau, Kota Parepare. UKM Robotika ITH memamerkan beberapa macam robot hasil rakitan mereka, diantaranya robot sumo, robot pengangkut beban dan robot pengikut garis...",
        link: "https://maupa.id/ukm-robotika-ith-hadir-di-festival-ramadhan-2025/",
      },
      {
        image: "/assets/berita/kompetisi1.png",
        title:
          "Tim Robotik HERO ITH Raih Juara 1 di Kompetisi Robotik Universitas Hasanuddin",
        description:
          "Tim robotik dari Institut Teknologi BJ Habibie (ITH), yang tergabung dalam Habibie Engineering Robotic of Organization (HERO), berhasil meraih juara pertama dalam ajang kompetisi robotik yang diselenggarakan oleh Program Studi Teknik Mesin Universitas Hasanuddin (UNHAS).",
        link: "https://www.bicarabaik.id/otomotif/365620622/tim-robotik-hero-ith-raih-juara-1-di-kompetisi-robotik-universitas-hasanuddin",
      },
      {
        image: "/assets/berita/gts2.png",
        title:
          "UKM HERO Gelar HERO Goes to School di SMKN 5 Sidrap dan SMAN 1 Parepare",
        description:
          "Unit Kegiatan Mahasiswa Habibie Engineering Robotic of Organization (UKM HERO) menyelenggarakan kegiatan bertajuk “HERO Goes to School” di dua sekolah menengah atas, yaitu SMK Negeri 5 Sidrap pada Jumat, 2 Mei 2025 dan SMA Negeri 1 Parepare pada Sabtu, 3 Mei 2025.",
        link: "https://www.bicarabaik.id/otomotif/365620622/tim-robotik-hero-ith-raih-juara-1-di-kompetisi-robotik-universitas-hasanuddin",
      },

    ] as ProkerItem[],
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                              Division pages                                */
/* -------------------------------------------------------------------------- */

export const divisions: DivisionPage[] = [
  {
    slug: "inti",
    navLabel: "Inti",
    seo: {
      title: "Pengurus Inti — HERO",
      description:
        "Struktur pengurus inti Habibie Engineering Robotic of Organization (HERO).",
    },
    hero: {
      titleLines: [
        [
          { text: "P", className: "text-my-primary" },
          { text: "engurus" },
        ],
        [
          { text: "I", className: "text-my-primary" },
          { text: "nti" },
        ],
      ],
      image: "/assets/divisi/inti/hero.JPG",
    },
    intro: {
      title: "Tupoksi",
      body: "Memimpin, mengkoordinasikan dan mengendalikan HERO dalam pelaksanaan seluruh kegiatan HERO",
    },
    structure: {
      title: [
        { text: "Struktur Pengurus " },
        { text: "Inti", className: "text-my-primary" },
      ],
      coordinator: {
        image: "/assets/divisi/inti/inti-ketua-muadz.webp",
        name: "Muhammad Mu'adz Ibda",
        role: "Ketua Umum",
      },
      groups: [
        {
          members: [
            { image: "/assets/divisi/inti/inti-wakil-ketua-abel.webp", name: "Abriel Yosua Nathanael Leskona", role: "Wakil Ketua" },
            { image: "/assets/divisi/inti/inti-sekretaris-alang.webp", name: "Muhammad Aslam Al-Fadillah", role: "Sekretaris" },
            { image: "/assets/divisi/inti/inti-wakil-sekretaris-hera.webp", name: "Hera Andira", role: "Wakil Sekretaris" },
            { image: "/assets/divisi/inti/inti-bendahara-aulia.webp", name: "Auliah Handayani Tahir", role: "Bendahara" },
            { image: "/assets/divisi/inti/inti-wakil-bendahara-khofifah.webp", name: "Nurkhofifah", role: "Wakil Bendahara" },
          ],
        },
      ],
    },
    proker: {
      title: "Program Kerja",
      items: [
        {
          image: "/assets/berita/seminar1.png",
          title: "Habibie Robotic Competition",
          description:
            "Habibie Robotic Competition merupakan salah satu inisiatif yang bertujuan menjawab kebutuhan untuk menumbuhkan minat serta meningkatkan kemampuan pelajar dalam bidang sains dan teknologi, khususnya robotika.",
          link: "https://parepos.fajar.co.id/2024/03/tim-hero-ith-parepare-torehkan-prestasi-membanggakan-di-kompetisi-lomba-robotic/",
        },
      ],
    },
  },
  {
    slug: "riset",
    navLabel: "Riset dan Pengembangan",
    seo: {
      title: "Riset dan Pengembangan — HERO",
      description:
        "Divisi Riset dan Pengembangan Habibie Engineering Robotic of Organization (HERO).",
    },
    hero: {
      titleLines: [
        [
          { text: "R", className: "text-my-primary" },
          { text: "iset" },
        ],
        [
          { text: "D", className: "text-my-primary" },
          { text: "an" },
        ],
        [
          { text: "P", className: "text-my-primary" },
          { text: "engembangan" },
        ],
      ],
      image: "/assets/divisi/riset/hero.JPG",
    },
    intro: {
      title: "Tupoksi",
      body: "Sebagai wadah pengembangan minat dan bakat dibidang robotika dengan cara melakukan pelatihan internal HERO terkait dunia robotika serta bertanggung jawab terhadap persiapan mengikuti kompetisi atau melaksanakan penelitian",
    },
    structure: {
      title: [
        { text: "Struktur " },
        { text: "Divisi", className: "text-my-primary" },
      ],
      coordinator: {
        image: "/assets/divisi/riset/riset-koor-uchek.webp",
        name: "Muh. Uche Syaputra",
        role: "Koordinator Riset dan Pengembangan",
      },
      groups: [
        {
          members: [
            { image: "/assets/divisi/riset/riset-abdi.webp", name: "Muh. Abdi Setiawan Romi", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-adit.webp", name: "Aditya Ahmad Reinaldy", role: "Anggota Riset" },
            // { image: "/assets/divisi/riset/riset-aisyah.webp", name: "Aisyah", role: "Anggota Riset" },
            // { image: "/assets/divisi/riset/riset-akbar.webp", name: "Akbar", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-anggun.webp", name: "Anggun Anugrah Sulnas", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-ayu.webp", name: "Sri Ayu", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-cukur.webp", name: "Muhammad Syukran Husain", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-Damar.webp", name: "Damar Kandi", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-fathir.webp", name: "Abdul Fathir Zain", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-fikrank.webp", name: "Fikrank", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-Yonatan%20Rannu.webp", name: "Yonatan Rannu", role: "Anggota Riset" },
            { image: "/assets/divisi/riset/riset-zahra.webp", name: "Nur Zahrah Indriani", role: "Anggota Riset" },
          ],
        },
      ],
    },
    proker: {
      title: "Program Kerja",
      items: [
        {
          image: "/assets/divisi/prokerriset/hgts.jpg",
          title: "HERO Goes to School",
          description:
            "HERO bertujuan untuk menginspirasi generasi muda agar lebih mengenal dan memahami dunia robotika serta menumbuhkan semangat inovasi dalam pengembangan teknologi.",
          link: "https://parepos.fajar.co.id/2024/10/hero-goes-to-school-wujudkan-inspirasi-peserta-didik-smkn-2-parepare/",
        },
        {
          image: "/assets/berita/kompetisi2.png",
          title: "Pelatihan hero",
          description:
            "Anggota HERO melakukan pelatihan ke anggota dan pengurus untuk memperluas wawasan.",
          link: "https://parepos.fajar.co.id/2024/03/tim-hero-ith-parepare-torehkan-prestasi-membanggakan-di-kompetisi-lomba-robotic/",
        },
        {
          image: "/assets/divisi/prokerriset/web.png",
          title: "Pembuatan website hero",
          description:
            "Demi memenuhi kebutuhan platfrom online UKM sebagai wadah untuk menaruh informasi dan kegiatan UKM hero",
          link: "https://parepos.fajar.co.id/2024/10/workshop-robotika-di-ith-kupas-manfaat-ancaman-dan-prospek-masa-depan-teknologi/",
        },
        {
          image: "/assets/divisi/prokerriset/lkm.png",
          title: "Lomba kreasi mikrokontroller",
          description:
            "Kegiatan ini bertujuan untuk mendorong kreativitas, inovasi, serta penerapan ilmu pengetahuan dan teknologi dalam bidang mikrokontroler",
          link: "https://maupa.id/ukm-robotika-ith-hadir-di-festival-ramadhan-2025/",
        },
        {
          image: "/assets/divisi/prokerriset/projecthouse.png",
          title: "Hero Project House",
          description:
            "Menyediakan layanan pengembangan proyek robotika untuk klien internal dan eksternal. Serta menjadi wadah untuk melatih anggota internal dalam mengelola proyek secara professional.",
          link: "https://www.bicarabaik.id/otomotif/365620622/tim-robotik-hero-ith-raih-juara-1-di-kompetisi-robotik-universitas-hasanuddin",
        },
      ],
    },
  },
  {
    slug: "psdm",
    navLabel: "PSDM",
    seo: {
      title: "PSDM — HERO",
      description:
        "Divisi Pengembangan Sumber Daya Mahasiswa (PSDM) Habibie Engineering Robotic of Organization (HERO).",
    },
    hero: {
      titleLines: [
        [
          { text: "P", className: "text-my-primary" },
          { text: "engembangan" },
        ],
        [
          { text: "S", className: "text-my-primary" },
          { text: "DM" },
        ],
      ],
      image: "/assets/divisi/psdm/hero.JPG",
    },
    intro: {
      title: "Tupoksi",
      body: "Mengembangkan kompetensi, minat, dan bakat anggota HERO melalui pelatihan, kaderisasi, serta pengelolaan sumber daya mahasiswa secara berkelanjutan.",
    },
    structure: {
      title: [
        { text: "Struktur " },
        { text: "Divisi", className: "text-my-primary" },
      ],
      coordinator: {
        image: "/assets/divisi/psdm/psdm-koor-anwar.webp",
        name: "Fahrul Septiawan",
        role: "Koordinator PSDM",
      },
      groups: [
        {
          members: [
            { image: "/assets/divisi/psdm/psdm-aizah.webp", name: "Nur Azisah Basir", role: "Anggota PSDM" },
            { image: "/assets/divisi/psdm/psdm-aji.webp", name: "Muhammad Ismail Haji", role: "Anggota PSDM" },
            { image: "/assets/divisi/psdm/psdm-aliando.webp", name: "Nur Aqmal Nurdin", role: "Anggota PSDM" },
            { image: "/assets/divisi/psdm/psdm-andir.webp", name: "Andi Risawameqga", role: "Anggota PSDM" },
            { image: "/assets/divisi/psdm/psdm-eka.webp", name: "Eka Tanduklangi", role: "Anggota PSDM" },
            { image: "/assets/divisi/psdm/psdm-rani.webp", name: "Andi Maharani", role: "Anggota PSDM" },
            { image: "/assets/divisi/psdm/psdm-revan.webp", name: "Muh. Revan", role: "Anggota PSDM" },
          ],
        },
      ],
    },
  },
  {
    slug: "humas",
    navLabel: "Hubungan Masyarakat",
    seo: {
      title: "Hubungan Masyarakat — HERO",
      description:
        "Divisi Hubungan Masyarakat Habibie Engineering Robotic of Organization (HERO).",
    },
    hero: {
      titleLines: [
        [
          { text: "H", className: "text-my-primary" },
          { text: "ubungan" },
        ],
        [
          { text: "M", className: "text-my-primary" },
          { text: "asyarakat" },
        ],
      ],
      image: "/assets/divisi/humas/hero.JPG",
    },
    intro: {
      title: "Tupoksi",
      body: "Menjalin hubungan yang baik serta manajemen sosial media dengan terstruktur serta informatif agar terciptanya reputasi citra baik terhadap Habibie Engineering Robotic Of Organization.",
    },
    structure: {
      title: [
        { text: "Struktur " },
        { text: "Divisi", className: "text-my-primary" },
      ],
      coordinator: {
        image: "/assets/divisi/humas/humas-koor-amek.webp",
        name: "Khumaedi",
        role: "Koordinator Humas",
      },
      groups: [
        {
          members: [
            { image: "/assets/divisi/humas/humas-asma.webp", name: "Asma", role: "Anggota Humas" },
            { image: "/assets/divisi/humas/humas-fikri.webp", name: "Abdul Aziz Al Fiqri", role: "Anggota Humas" },
            { image: "/assets/divisi/humas/humas-irgi.png", name: "Irgi Ahmad Saputra Irwan", role: "Anggota Humas" },
            { image: "/assets/divisi/humas/humas-putri.webp", name: "Putri Kalsum", role: "Anggota Humas" },
            { image: "/assets/divisi/humas/humas-zaky.webp", name: "Muhammad Yusuf Dzaky", role: "Anggota Humas" },
          ],
        },
      ],
    },
    proker: {
      title: "Program Kerja",
      items: [
        {
          image: "/assets/divisi/humas/proker/Picture1.jpg",
          title: "BAKTI SOSIAL HERO",
          description:
            "kegiatan ini juga bertujuan untuk mempererat hubungan sosial dan menumbuhkan rasa kepedulian di lingkungan sekitar.",
          link: "https://parepos.fajar.co.id/2024/10/hero-goes-to-school-wujudkan-inspirasi-peserta-didik-smkn-2-parepare/",
        },
        {
          image: "/assets/berita/seminar1.png",
          title: "Konten Edukasi Robotika",
          description:
            "Konten edukasi yang disediakan oleh UKM HERO bertujuan untuk meningkatkan pemahaman mahasiswa ITH dalam bidang robotik.",
          link: "https://parepos.fajar.co.id/2024/10/workshop-robotika-di-ith-kupas-manfaat-ancaman-dan-prospek-masa-depan-teknologi/",
        },
        {
          image: "/assets/berita/ramadhanfair.png",
          title: "Manajemen Sosial Media",
          description:
            "Manajemen media sosial ini merupakan kegiatan untuk mengelola aktivitas UKM HERO di platform media sosial seperti Instagram dan YouTube.",
          link: "https://maupa.id/ukm-robotika-ith-hadir-di-festival-ramadhan-2025/",
        },
        {
          image: "/assets/divisi/humas/proker/seminar.png",
          title: "SEMINAR HRC",
          description:
            "meningkatkan literasi dan kompetensi teknologi generasi mudamelalui penyampaian wawasan mendalam mengenai Integrasi Robotika.",
          link: "https://www.bicarabaik.id/otomotif/365620622/tim-robotik-hero-ith-raih-juara-1-di-kompetisi-robotik-universitas-hasanuddin",
        },
      ],
    },
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Angkatan                                   */
/* -------------------------------------------------------------------------- */

export const angkatanPage: AngkatanPage = {
  slug: "angkatan",
  navLabel: "Angkatan",
  seo: {
    title: "Angkatan — HERO",
    description:
      "Para pengurus yang telah menyelesaikan masa baktinya di UKM Habibie Engineering Robotic of Organization (HERO).",
  },
  hero: {
    titleLines: [
      [
        { text: "A", className: "text-my-primary" },
        { text: "ngkatan" },
      ],
      [
        { text: "H", className: "text-my-primary" },
        { text: "ERO" },
      ],
    ],
    images: [
      "/assets/angkatan/2024/angkatan.jpg",
      "/assets/angkatan/2024/angkatan-santai.jpg",
      "/assets/angkatan/2025/semua.jpeg",
    ],
  },
  intro: {
    title: "Angkatan",
    body: "Bagian Angkatan merupakan wadah bagi para pengurus yang telah menyelesaikan masa baktinya di UKM Habibie Engineering Robotic Of Organization. Mereka adalah sosok-sosok yang telah memberikan dedikasi, waktu, dan pengetahuan terbaiknya dalam mengembangkan inovasi serta semangat kebersamaan di dunia robotika.\nSebagai generasi yang pernah berperan aktif, para pengurus angkatan menjadi sumber inspirasi dan motivasi bagi pengurus serta anggota baru untuk terus berkarya dan melanjutkan cita-cita organisasi.\nMelalui kolaborasi dan semangat kekeluargaan, Angkatan HERO tetap menjadi bagian penting dari perjalanan dan perkembangan komunitas ini — menjaga hubungan lintas generasi agar semangat inovasi, riset, dan teknologi tidak pernah padam.",
  },
  angkatan: [
    {
      id: "angkatan-2024",
      label: [
        { text: "Angkatan " },
        { text: "2024", className: "text-my-primary" },
      ],
      period: "2024",
      members: [
        { image: "/assets/angkatan/2024/angkatan.jpg", name: "Foto bersama Angkatan 2024", role: "Angkatan 2024" },
        { image: "/assets/angkatan/2024/angkatan-santai.jpg", name: "Foto santai Angkatan 2024", role: "Angkatan 2024" },
        { image: "/assets/angkatan/2024/1.jpg", name: "Foto kelompok Angkatan 2024 1", role: "Angkatan 2024" },
        { image: "/assets/angkatan/2024/2.jpg", name: "Foto kelompok Angkatan 2024 2", role: "Angkatan 2024" },
        { image: "/assets/angkatan/2024/3.jpg", name: "Foto kelompok Angkatan 2024 3", role: "Angkatan 2024" },
        { image: "/assets/angkatan/2024/9.jpg", name: "Foto kelompok Angkatan 2024 9", role: "Angkatan 2024" },
        { image: "/assets/angkatan/2024/10.jpg", name: "Foto kelompok Angkatan 2024 10", role: "Angkatan 2024" },
        { image: "/assets/angkatan/pengurus/4.jpg", name: "Foto pengurus Angkatan 2024 4", role: "Angkatan 2024" },
        { image: "/assets/angkatan/pengurus/5.jpg", name: "Foto pengurus Angkatan 2024 5", role: "Angkatan 2024" },
        { image: "/assets/angkatan/pengurus/6.jpg", name: "Foto pengurus Angkatan 2024 6", role: "Angkatan 2024" },
        { image: "/assets/angkatan/pengurus/7.jpg", name: "Foto pengurus Angkatan 2024 7", role: "Angkatan 2024" },
        { image: "/assets/angkatan/pengurus/8.jpg", name: "Foto pengurus Angkatan 2024 8", role: "Angkatan 2024" },
      ],
    },
    {
      id: "angkatan-2025",
      label: [
        { text: "Angkatan " },
        { text: "2025", className: "text-my-primary" },
      ],
      period: "2025",
      members: [
        { image: "/assets/angkatan/2025/semua.jpeg", name: "Foto bersama seluruh anggota Angkatan 2025", role: "Angkatan 2025" },
        { image: "/assets/angkatan/2025/intiii.jpg", name: "Foto Pengurus Inti Angkatan 2025", role: "Angkatan 2025" },
        { image: "/assets/angkatan/2025/humas.jpg", name: "Foto Divisi Humas Angkatan 2025", role: "Angkatan 2025" },
        { image: "/assets/angkatan/2025/psdm.jpg", name: "Foto Divisi PSDM Angkatan 2025", role: "Angkatan 2025" },
        { image: "/assets/angkatan/2025/risetcerdas.jpg", name: "Foto Divisi Riset dan Pengembangan Angkatan 2025", role: "Angkatan 2025" },
      ],
    },
    {
      id: "angkatan-2026",
      label: [
        { text: "Angkatan " },
        { text: "2026", className: "text-my-primary" },
      ],
      period: "2026",
      members: [
        { image: "/assets/angkatan/2026/DJI_20250820012926_0570_D%20(1).JPG", name: "Dokumentasi kegiatan Angkatan 2026 1", role: "Angkatan 2026" },
        { image: "/assets/angkatan/2026/DSC02271.JPG", name: "Dokumentasi kegiatan Angkatan 2026 2", role: "Angkatan 2026" },
        { image: "/assets/angkatan/2026/DSC02424%20(1).JPG", name: "Dokumentasi kegiatan Angkatan 2026 3", role: "Angkatan 2026" },
        { image: "/assets/angkatan/2026/DSC02543%20(1).JPG", name: "Dokumentasi kegiatan Angkatan 2026 4", role: "Angkatan 2026" },
        { image: "/assets/angkatan/2026/DSC02642%20(1).JPG", name: "Dokumentasi kegiatan Angkatan 2026 5", role: "Angkatan 2026" },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

export function getDivision(slug: string): DivisionPage | undefined {
  return divisions.find((division) => division.slug === slug);
}

export function getDivisionSlugs(): string[] {
  return divisions.map((division) => division.slug);
}
