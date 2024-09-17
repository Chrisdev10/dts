import './home.css';
import { Header, Content, Events, MyFooter } from '@CompAll';
import AOS from 'aos';
import { useEffect } from 'preact/hooks';
export function Home() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animation
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <Content />
      <Events data-aos="fade-up" />
      <MyFooter />
    </>
  );
}
