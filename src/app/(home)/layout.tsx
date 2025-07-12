import Footer from "@/components/layouts/Footer";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
export default HomeLayout;
