A. BASIC REACT

1. Apa itu React.js, dan React Native?
    React.js → Library JavaScript untuk membangun UI (User Interface) berbasis komponen, digunakan di web. Fokusnya pada view layer di arsitektur MVC.
    React Native → Framework untuk membangun aplikasi mobile (Android & iOS) menggunakan React, tapi hasilnya jadi aplikasi native, bukan web.
    Singkatnya: React.js → Web UI. React Native → Mobile app.

2. Apa itu JSX?
    JSX (JavaScript XML) adalah ekstensi sintaks JavaScript yang memungkinkan kita menulis kode HTML di dalam JavaScript.
    
    Contoh:
    jsx
    Copy
    Edit
    const element = <h1>Hello World</h1>;
    JSX akan di-transpile oleh Babel menjadi React.createElement() sebelum dijalankan.

3. Apa itu Real DOM dan Virtual DOM?
    Real DOM → Representasi pohon HTML asli di browser. Update kecil tetap memaksa render ulang seluruh bagian yang terpengaruh → lambat.
    Virtual DOM → Representasi virtual dari DOM di memori. React membandingkan Virtual DOM lama dan baru (diffing), lalu hanya meng-update bagian yang berubah (reconciliation) → lebih cepat.

4. Apa bedanya Functional Component dan Class Component?
    Functional Component → Komponen berbentuk fungsi. Sederhana, menggunakan React Hooks untuk state & lifecycle.
    Class Component → Komponen berbentuk class. Gunakan this.state & method lifecycle (componentDidMount, dsb).
    Functional lebih direkomendasikan sekarang karena lebih ringan, simpel, dan mendukung Hooks.

5. Apa itu React Lifecycle?
    Siklus hidup komponen React: mulai dibuat (mount), diperbarui (update), lalu dihapus (unmount).
    Di Class Component → gunakan lifecycle methods.
    Di Functional Component → pakai useEffect.

B. EVENT HANDLING

1. Sebutkan Event Handling yang kamu ketahui?
    onClick, onChange, onSubmit, onMouseEnter, onMouseLeave, onKeyDown, onKeyUp, onFocus, onBlur.

2. Apa fungsi onClick dan onChange?
    onClick → Menangani event saat elemen diklik.
    onChange → Menangani perubahan nilai input (form, select, textarea).

3. Mengapa dalam onClick dan onChange terdapat fungsi Callback?
    Agar fungsi tidak langsung dieksekusi saat render, tapi hanya saat event terjadi.

        onClick={handleClick} // benar
        onClick={handleClick()} // salah (langsung jalan)

C. REACT HOOKS

1. Apa itu React Hooks?
    Fitur React (mulai v16.8) yang memungkinkan Functional Component punya state dan lifecycle tanpa class.

2. Apa bedanya React Hooks dengan React Lifecycle?
    Hooks → cara modern untuk mengatur state & efek di functional component.
    Lifecycle → konsep tahapan hidup komponen (mount, update, unmount). Hooks (useEffect) dipakai untuk mengatur efek di setiap tahap lifecycle.

3. Sebutkan React Hooks yang kamu ketahui min 5?
    useState, useEffect, useContext, useRef, useReducer, useMemo, useCallback.

4. Mengapa harus menggunakan useState dibanding variable biasa?
    Variabel biasa tidak memicu re-render saat berubah.
    useState memberi React sinyal untuk menggambar ulang UI sesuai data terbaru.

5. Apa fungsi useEffect dan apa yang dimaksud Array Dependencies?
    useEffect → Menjalankan efek samping (fetch data, manipulasi DOM, subscribe event) setelah render.
    Array Dependencies → Parameter kedua useEffect yang menentukan kapan efek dijalankan.

    [] → sekali saat mount.

    [value] → setiap value berubah.

    tanpa array → setiap render.

D. REACT ROUTER DOM

1. Apa itu React Router DOM?
    Library untuk mengatur navigasi & routing di aplikasi React berbasis web.

2. Sebutkan React Router DOM yang kamu ketahui?
    <BrowserRouter>, <Routes>, <Route>, <Link>, <NavLink>, useParams, useNavigate, useLocation.

3. Apa fungsi <BrowserRouter/>?
    Pembungkus utama aplikasi yang mengaktifkan fitur routing berbasis History API di browser.

4. Apa fungsi useParams dan useNavigate?
    useParams → Mengambil parameter dari URL.
    useNavigate → Navigasi secara programatik ke halaman lain.

5. Versi berapakah React Router yang kita gunakan?
    Periksa di package.json → biasanya versi terbaru saat ini adalah v6.x.

E. Designing CSS

1. Apa itu CSS in JS?
    Teknik menulis CSS langsung di file JavaScript/JSX, biasanya dengan library seperti Styled Components atau Emotion.

2. Apa itu Styled Component?
    Library untuk membuat komponen React dengan gaya CSS yang langsung melekat pada komponennya, menggunakan sintaks tagged template literals.

3. Apa itu SASS/SCSS?
    CSS Preprocessor yang menambahkan fitur seperti variabel, nested rules, mixins.
    SCSS adalah sintaks SASS yang mirip CSS biasa tapi dengan fitur tambahan.