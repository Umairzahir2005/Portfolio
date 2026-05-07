import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: 'Umair Zahir | Web Developer & Content Creator',
    description: 'Umair Zahir is a web developer and content creator who builds modern digital experiences.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100`}>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
