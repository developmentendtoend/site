import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function MainLayout({ children, socialNetworks }: any) {
  return <main className="h-screen w-screen flex flex-col relative">
    <Navbar />
      <section className="mt-[130px]">
        { children }
      </section>
    <Footer />
  </main>;
}