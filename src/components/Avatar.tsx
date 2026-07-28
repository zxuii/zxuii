import pfp from "../assets/pfp.png";

export function Avatar() {
  return (
    <>
      <img src={pfp} className="pfp-avatar"></img>
      <h2>Hafidh Musyaffa</h2>
      <p>
        AKA. @
        <a href="https://www.youtube.com/channel/UCjfYPhRLoUsIGYghnd_hIUA">
            TelurTerbulat
        </a>{" "}
        & @<a href="https://www.youtube.com/@zxuiiii">Zxuiii</a>
      </p>
    </>
  );
}
