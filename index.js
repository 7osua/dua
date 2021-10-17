const root = document.getElementById('root');
const infos = document.createElement('section');
const h1 = document.createElement('h1');
const p = document.createElement('p');

h1.textContent = `Budget >= Pengeluaran`;
p.textContent = `Setiap traveler perlu memastikan keamanan dan kenyamanan selama berpergian, termasuk dalam proses budgeting untuk memastikan pengeluaran traveling. Sehingga keuangan tetap terjaga dan dapat diatur. 

Web ini akan membantu traveler mempersiapkan daftar pengeluaran yang diperlukan, mulai dari yang pengeluaran yang sangat penting hingga mempersiapkan untuk pengeluaran yang sangat mendesak.

Pada akhirnya setelah berhasil mengetahui dan memastikan pengeluaran selama traveling, proses untuk mengambil keputusan sebelum, saat, setelah melakukan perjalanan akan menjadi lebih mudah.`;

p.style.whiteSpace = 'pre-line';
infos.append(h1);
infos.append(p);
root.append(infos);
