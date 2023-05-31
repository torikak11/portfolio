import '@/styles/globals.css'
import Footer from '@components/Footer';

export const metadata = {
  title: "Victoria Lizzi",
  description: "Welcome to my portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html leng="en">
      <body className="bg-white">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
