import pfp from "../assets/profile_photo.jpg";

export function Avatar() {
  return (
    <>
      <img src={pfp} className="pfp-avatar"></img>
      <h2>Hafidh Musyaffa</h2>
      <p>
        AKA. @
        <a href="https://www.youtube.com/channel/UCjfYPhRLoUsIGYghnd_hIUA">
          KentangCeplok
        </a>{" "}
        & @<a href="https://www.youtube.com/@zxuiiii">Zxuiii</a>
      </p>
    </>
  );
}
