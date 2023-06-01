import '@/styles/globals.css'
import Footer from '@components/Footer';

export const metadata = {
  title: "Victoria Lizzi",
  description: "Welcome to my portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html leng="en">
      <head>
        <link rel="icon" href="https://toriadev-portfolio.s3.us-west-2.amazonaws.com/portfolio-logo.png" />
      </head>
      <body className="bg-white">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
