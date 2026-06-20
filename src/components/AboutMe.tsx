import { useState } from "react";

function toggleTrueOrFalse(value: boolean): boolean {
  return value ? false : true;
}

export function AboutMe() {
  const msg =
    "Halo semuanya! Namaku seperti yang tertera diatas, yaitu Hafidh Musyaffa. Aku kelas 10 SMK jurusan PPLG/RPL \
yang dimana ini kali pertamanya diriku menggunakan ReactJS serta hal-hal web-things lainnya juga baru ku pelajari. \
Biasanya, Aku hanya menggunakan bahasa pemrograman seperti C++, Rust dan Python untuk melakukan hal sederhana seperti \
membuat TODO-App, Random guess number, yaa, sesuatu yang biasa dan sangat umum menjadi sebuah pelajaran saat menggunakan \
suatu bahasa pemrograman yang baru. Akhir-akhir ini, aku mulai menggunakan bahasa pemrograman dengan serius seperti C++ \
untuk membuat sebuah game flappy bird yang ada di dalam youtube-ku! Walau itu masih belum selesai, tapi itu sudah sangat \
membuktikan kalau aku semakin maju kedepan. Aku bercita-cita memiliki sebuah tim untuk membangun game original pertamaku, \
lalu game tersebut di mainkan oleh banyak orang dan mereka merasa puas dengan itu. ";

  let msgTrunc = msg.substring(0, 500);

  const ua = navigator.userAgent;
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if (mobileRegex.test(ua)) {
    msgTrunc = msg.substring(0, 200);
  }

  let [msgTruncated, setMsgTruncated] = useState(msgTrunc);
  let [isTrunc, setTrunc] = useState(false);

  return (
    <>
      {/* <h2>About Me</h2> */}
      <p id="aboutme-text">
        {msgTruncated}{" "}
        <a
          href="#"
          onClick={() => {
            setMsgTruncated((msgTruncated = isTrunc ? msgTrunc : msg));
            setTrunc((isTrunc = toggleTrueOrFalse(isTrunc)));
          }}
        >
          {isTrunc ? "... Sembunyikan" : "... Lihat selengkapnya"}
        </a>
      </p>
    </>
  );
}
