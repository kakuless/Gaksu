export const poem = {
  title: "Üvercinka",
  author: "Cemal Süreya",
  /** "Hikayemiz" bloğunda gösterilen kısa alıntı (şiirin nakaratı). */
  excerpt: ["Bütün kara parçalarında", "  Afrika dahil"],
  /**
   * Kıtalar; her kıta dize listesi. Boşlukla başlayan dize, bir önceki dizenin
   * devamı ya da nakarat olarak içeriden (girintili) gösterilir.
   */
  stanzas: [
    [
      "Böylece bir kere daha boynunlayız sayılı yerlerinden",
      "En uzun boynun bu senin dayanmaya ya da umudu",
      "  kesmemeye",
      "Laleli'den dünyaya doğru giden bir tramvaydayız",
      "Birden nasıl oluyor sen yüreğimi elliyorsun",
      "Ama nasıl oluyor sen yüreğimi eller ellemez",
      "Sevişmek bir kere daha yürürlüğe giriyor",
      "Bütün kara parçalarında",
      "  Afrika dahil",
    ],
    [
      "Aydınca düşünmeyi iyi biliyorsun eksik olma",
      "Yatakta yatmayı bildiğin kadar",
      "Sayın Tanrıya kalırsa seninle yatmak günah, daha neler",
      "Boşunaymış gibi bunca uzaması saçlarının",
      "Ben böyle canlı saç görmedim ömrümde",
      "Her telinin içinde ayrı bir kalp çarpıyor",
      "Bütün kara parçaları için",
      "  Afrika dahil",
    ],
    [
      "Senin bir havan var beni asıl saran o",
      "Onunla daha bir değere biniyor soluk almak",
      "Sabahları acıktığı için haklı",
      "Gününü kazanıp kurtardı diye güzel",
      "Birçok çiçek adları gibi güzel",
      "En tanınmış kırmızılarla açan",
      "Bütün kara parçalarında",
      "  Afrika dahil",
    ],
    [
      "Birlikte mısralar düşünüyoruz ama iyi ama kötü",
      "Boynun diyorum boynunu benim kadar kimse",
      "  değerlendiremez",
      "Bir mısra daha söylesek sanki her şey düzelecek",
      "İki adım daha atmıyoruz bizi tutuyorlar",
      "Böylece bizi bir kere daha tutup kurşuna diziyorlar",
      "Zaten bizi her gün sabahtan akşama kadar kurşuna",
      "  diziyorlar",
      "Bütün kara parçalarında",
      "  Afrika dahil",
    ],
    [
      "Burda senin cesaretinden laf açmanın tam da sırası",
      "Kalabalık caddelerde hürlüğün şarkısına katılırkenki",
      "Padişah gibi cesaretti o, alımlı değme kadında yok",
      "Aklıma kadeh tutuşların geliyor",
      "Çiçek Pasajında akşamüstleri",
      "Asıl yoksulluk ondan sonra başlıyor",
      "Bütün kara parçalarında",
      "  Afrika hariç değil",
    ],
  ],
};

export const isIndented = (line: string) => line.startsWith(" ");
