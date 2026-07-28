export function AboutMe() {
  const msg = "Halo semuanya! Namaku Hafidh Musyaffa, sekarang sedang bersekolah di SMKN 2 Kota " +
              "Jambi kelas X PPLG, kebanyakan nickname game atau apalah" +
              " itu 'zxui' dengan i yang jumlahnya variatif. Nah, untuk hal hal yang aku bisa" +
              " lakukan antara lain membuat sebuah Bahasa Pemrograman sendiri menggunakan" +
              " bahasa pemrograman rust. Membuat game cloningan seperti flappy bird" +
              " di rust juga, pakai library macroquad. Oh, dan juga sebelumnya bahasa" +
              " pemrograman yang aku tulis di tulis di python, baru setelah itu di tulis ulang" +
              " menggunakan rust. ";

  return (
    <>
      {/* <h2>About Me</h2> */}
      <p id="aboutme-text">
        {msg}
      </p>
    </>
  );
}
