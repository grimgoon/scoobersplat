import styles from "../styles/main.module.scss";
import Footer from "../components/footer";
import AboutCard from "../components/aboutCard";
import Link from "next/link";
import MailchimpForm from "react-mailchimp-subscribe";

export default function home() {
  return (
    <iframe
      frameborder="0"
      src="https://itch.io/embed-upload/4099743?color=333333"
      allowfullscreen=""
      allow="fullscreen"
      style={{position: "fixed",  top:0,  left:0,  bottom:0, right:0, width:"100%", height:"100%", border:"none", margin:0, padding:0, overflow:"hidden", "z-index":999999}}
    >
      <a href="https://nobloat.itch.io/scoobersplat">
        Play Scoober Splat on itch.io
      </a>
    </iframe>
  );
}
