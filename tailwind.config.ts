import type { Config } from 'tailwindcss'

const config: Config = {
     darkMode: 'class',  // Mode gelap aktif dengan class
     content: [
          './app/**/*.{ts,tsx}',  // Pastikan Tailwind tahu file mana yang harus diproses
          './components/**/*.{ts,tsx}',  // Lokasi komponen
     ],
     theme: {
          extend: {
               colors: {
                    primary: '#00F5FF',  // Warna utama
               },
               fontFamily: {
                    sans: ['Roboto', 'Arial', 'sans-serif'],  // Font kustom
               },
               spacing: {
                    '128': '32rem',  // Tambahkan ukuran spacing kustom
               },
          },
     },
     plugins: [],
}

export default config
