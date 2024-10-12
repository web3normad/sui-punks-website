import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} SuiPunks. All rights reserved.</p>
        <div className="flex flex-wrap justify-center mt-2">
          <a href="https://x.com/suipunksnfts" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">SuiPunks X</a>
          <a href="https://dexscreener.com/sui/0x1398db6e3bfbc48b4c27ba8be7ba6164236ac59dafa5852d19373853e7edf093" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">$PUNK Dexscreener</a>
          <a href="https://t.me/suipunksnfts" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">SuiPunks 🇺🇸</a>
          <a href="https://t.me/suipunksphilippines" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">SuiPunks 🇵🇭</a>
          <a href="https://t.me/SuiPunksChina" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">SuiPunks 🇨🇳</a>
          <a href="https://t.me/SuiPunksNigeria" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">SuiPunks 🇳🇬</a>
          <a href="https://t.me/SuiPunksBalkan" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">SuiPunks Balkan 🇭🇷🇲🇪🇧🇦🇷🇸🇲🇰</a>
          <a href="https://movepump.com/token/0xd42570d78904f4e80a27852446b02b7dfb80d515f5b67399e8644e913c987748::punk::PUNK" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">$PUNK fair launch on MovePump</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
