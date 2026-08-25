import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import { students, structure } from './data'

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchPhotos()
  }, [])

  async function fetchPhotos() {
    const { data } = await supabase.from('documentation').select('*')
    if (data) setPhotos(data)
  }

  const handleTabChange = (tab) => {
    setIsLoading(true)
    setActiveTab(tab)
    setTimeout(() => setIsLoading(false), 400)
  }


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white relative bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">
      <nav className="sticky top-0 z-50 bg-blue-600 border-b border-blue-600">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleTabChange('dashboard')}>
            <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-wider text-white uppercase leading-none">XI RPL ONE</span>
              <span className="text-[9px] font-bold text-blue-50 tracking-widest uppercase mt-0.5">Software Engineering</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-blue-700/30 p-1 rounded-xl border border-blue-400/20 text-sm font-medium">
            {['dashboard', 'siswa', 'struktur', 'jadwal', 'dokumentasi', 'admin'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-1.5 rounded-lg capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-white hover:bg-blue-500/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="h-64 bg-gradient-to-b from-blue-600 via-blue-500/40 via-blue-200/20 to-transparent pointer-events-none" />
      <main className="max-w-6xl mx-auto px-6 py-12 -mt-52">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="h-12 w-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-sm font-semibold text-slate-500 tracking-wider">Memuat Halaman...</p>
          </div>
        )}

        {!isLoading && activeTab === 'dashboard' && (
          <section className="py-12 animate-fade-up max-w-4xl mx-auto space-y-20">
            <div className="text-center space-y-6">
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-100 uppercase tracking-widest">
                SMK KRIAN 1 SIDOARJO • AXIOO CLASS
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                XI RPL 1 – <span className="text-blue-600">AXIOO CLASS</span>
              </h1>
              <p className="text-xl text-slate-600 font-medium italic max-w-2xl mx-auto">
                "Empowering Future Software Engineers with Industry Standards"
              </p>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed text-lg border-l-4 border-blue-600 pl-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">About Our Class</h2>
              <p>
                Selamat datang di laman resmi <strong>XI RPL 1 (Axioo Class)</strong>. Kami adalah kelas unggulan program keahlian Rekayasa Perangkat Lunak yang mengombinasikan akademis vokasi dengan standar kebutuhan industri modern melalui kemitraan strategis bersama <strong>Axioo Class Program</strong> dan <strong>Intel Education</strong>.
              </p>
              <p>
                XI RPL 1 bukan sekadar kelas reguler. Sebagai kelas industri, kami dibina untuk memiliki kedisiplinan, etos kerja, serta penguasaan teknologi berbasis industri terkini. Terdiri dari <strong>36 siswa</strong> (8 siswa perempuan dan 28 siswa laki-laki), kelas ini menjadi wadah kolaborasi, inovasi, dan pengembangan potensi diri di bidang rekayasa perangkat lunak maupun penguasaan perangkat keras.
              </p>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed text-lg border-l-4 border-blue-600 pl-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Industry Collaboration & Credentials</h2>
              <p>
                Melalui dukungan Axioo Class Program dan Intel Education, seluruh peserta didik dibekali pembelajaran berbasis praktik (<em>hands-on experience</em>) yang selaras dengan perkembangan teknologi masa kini.
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Perakitan Perangkat Mandiri:</strong> Pelatihan terstruktur perakitan <em>laptop</em> dari komponen dasar hingga unit siap pakai sesuai standar manufaktur.</li>
                <li><strong>9 Sertifikat Kompetensi Industri:</strong> Portofolio sertifikasi resmi yang menjadi bukti kualifikasi teknis siswa, sekaligus tiket prioritas untuk program Praktik Kerja Lapangan (PKL) dan penyaluran kerja di jaringan ekosistem Axioo maupun kemitraan teknologinya.</li>
              </ul>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed text-lg border-l-4 border-blue-600 pl-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Study Excursion 2026 & Field Experiences</h2>
              <p>
                Pembelajaran di XI RPL 1 tidak hanya berlangsung di dalam ruang kelas, tetapi juga diperkaya melalui kegiatan <em>Study Excursion 2026</em> ke pusat-pusat industri dan teknologi nasional:
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Factory Tour PT Teradata Indonusa (Jakarta):</strong> Melihat langsung proses produksi dan perakitan lini produk Axioo secara <em>real-time</em>—mulai dari <em>laptop</em>, <em>monitor</em>, <em>PC All-in-One</em>, hingga alur <em>quality control</em> dan manajemen arsitektur pabrik.</li>
                <li><strong>Eksplorasi Robotika di RoboPark Jakarta:</strong> Mempelajari mekanika, rancang bangun <em>body</em>, serta logika pemrograman robot. Siswa berinteraksi langsung dengan berbagai jenis teknologi robotika (seperti <em>humanoid</em>, <em>robotic canine</em>, hingga robot entertainer) serta menjajal simulator balap berbasis teknologi tinggi.</li>
                <li><strong>Kunjungan Edukasi & Budaya:</strong> Memperluas wawasan kebangsaan dan kebersamaan melalui kunjungan ke landmark ikonik ibu kota, meliputi Monumen Nasional (Monas), Masjid Istiqlal, dan kawasan Ancol.</li>
              </ul>
              
              {/* Highlight Photos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="h-64 rounded-xl overflow-hidden relative shadow-md">
                  <img src={photos.find(p => p.title === 'dashboard_1')?.image_url || photos[0]?.image_url} alt="Factory Tour" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-md">
                    Factory Tour PT Teradata Indonusa
                  </div>
                </div>
                <div className="h-64 rounded-xl overflow-hidden relative shadow-md">
                  <img src={photos.find(p => p.title === 'dashboard_2')?.image_url || photos[1]?.image_url} alt="RoboPark Jakarta" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-md">
                    Eksplorasi RoboPark Jakarta
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-200">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Our Core Values</h3>
                <ul className="space-y-3 text-slate-600">
                  <li><strong>High Competence:</strong> Menguasai fundamental <em>software engineering</em> serta pemahaman mendalam pada <em>hardware</em>.</li>
                  <li><strong>Industry Readiness:</strong> Memiliki kualifikasi dan sertifikasi resmi yang diakui oleh dunia kerja.</li>
                  <li><strong>Strong Teamwork:</strong> Solidaritas tinggi antarsiswa dalam menyelesaikan proyek teknis maupun kegiatan akademik.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Class Stats</h3>
                <div className="space-y-3 text-slate-600">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-semibold text-slate-700">Total Siswa</span>
                    <span>36 Personel (8 P | 28 L)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-semibold text-slate-700">Program</span>
                    <span>Axioo Class & Intel</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-semibold text-slate-700">Sertifikasi</span>
                    <span>9 Sertifikat Industri</span>
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="https://www.smkkrian1.sch.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
                  >
                    Website SMK Krian 1 Sidoarjo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {!isLoading && activeTab === 'siswa' && (
          <section className="animate-fade-up">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900">Daftar Siswa</h2>
              <p className="text-slate-500 text-sm mt-1">Total 36 anggota aktif kelas XI RPL ONE. Klik kartu untuk melihat detail profil.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {students.map((student) => (
                <div 
                  key={student.id} 
                  onClick={() => setSelectedStudent(student)}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition flex items-center space-x-3 cursor-pointer"
                >
                  <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center border border-blue-100 flex-shrink-0">
                    {String(student.id).padStart(2, '0')}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-semibold text-slate-800 text-sm truncate">{student.name}</h3>
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{student.gender}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Student Popup Modal */}
            {selectedStudent && (
              <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
                <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-100 text-center relative space-y-6">
                  <button 
                    onClick={() => setSelectedStudent(null)}
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition font-bold"
                  >
                    ✕
                  </button>

                  <div className="w-32 h-32 mx-auto rounded-2xl bg-blue-50 border-4 border-blue-100 flex items-center justify-center overflow-hidden shadow-inner">
                    <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                      Absen #{String(selectedStudent.id).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 pt-2">{selectedStudent.name}</h3>
                    <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">XI RPL 1 • Axioo Class</p>
                  </div>

                  <button 
                    onClick={() => setSelectedStudent(null)}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {!isLoading && activeTab === 'struktur' && (
          <section className="animate-fade-up max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900">Struktur Organisasi</h2>
              <p className="text-slate-500 text-sm mt-1">Pengurus kelas XI RPL ONE.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {structure.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">{item.role}</span>
                  <h3 className="text-lg font-bold text-slate-800 mt-1">{item.name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {!isLoading && activeTab === 'jadwal' && (
          <section className="animate-fade-up max-w-2xl mx-auto py-12">
            <div className="space-y-6 text-center">
              <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-100 uppercase tracking-widest">
                Status Kegiatan
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sedang Melaksanakan <span className="text-blue-600">PKL</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto pt-2">
                Saat ini seluruh siswa-siswi kelas XI RPL 1 sedang melaksanakan Praktik Kerja Lapangan (PKL) di berbagai instansi dan dunia industri mitra.
              </p>
            </div>
          </section>
        )}

        {!isLoading && activeTab === 'dokumentasi' && (
          <section className="animate-fade-up max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Galeri & Dokumentasi</h2>
              <p className="text-slate-500 text-sm">Dokumentasi kegiatan Study Excursion 2026 dan kunjungan industri XI RPL 1.</p>
            </div>

            <div className="space-y-8 pt-4">
              {photos.filter(p => p.title === 'dokumentasi').length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300 text-slate-400">
                  Belum ada foto dokumentasi.
                </div>
              ) : (
                photos.filter(p => p.title === 'dokumentasi').map((photo, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition">
                    <div className="w-full max-h-[500px] overflow-hidden bg-slate-100 flex items-center justify-center">
                      <img src={photo.image_url} alt={`Dokumentasi ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Dokumentasi #{index + 1}</span>
                      <h3 className="font-extrabold text-slate-800 text-lg mt-1">Study Excursion 2026</h3>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        {!isLoading && activeTab === 'admin' && (
          <section className="animate-fade-up max-w-xl mx-auto py-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 space-y-8">
              <h2 className="text-2xl font-black text-slate-900">Admin Panel</h2>
              
              {/* Form Upload */}
              <form 
                onSubmit={async (e) => {
                  e.preventDefault()
                  const file = e.target.file.files[0]
                  const section = e.target.section.value
                  if (file) {
                    const fileName = `${Date.now()}_${file.name}`
                    const { error } = await supabase.storage.from('galeri').upload(fileName, file)
                    if (error) return alert('Gagal: ' + error.message)
                    
                    const { data: { publicUrl } } = supabase.storage.from('galeri').getPublicUrl(fileName)
                    await supabase.from('documentation').insert([{ title: section, image_url: publicUrl }])
                    alert('Foto berhasil diupload!')
                    e.target.reset()
                    fetchPhotos()
                  }
                }}
                className="space-y-4 border-b pb-8"
              >
                <h3 className="font-bold text-slate-800">Upload Foto Baru</h3>
                <div>
                  <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Pilih Posisi / Bagian Web</label>
                  <select name="section" className="w-full mt-2 p-3 bg-slate-50 border rounded-xl" required>
                    <option value="dashboard_1">Dashboard - Foto 1 (Factory Tour)</option>
                    <option value="dashboard_2">Dashboard - Foto 2 (RoboPark)</option>
                    <option value="dokumentasi">Galeri Dokumentasi</option>
                  </select>
                </div>
                <input name="file" type="file" accept="image/*" className="w-full p-3 bg-slate-50 border rounded-xl" required />
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">Upload</button>
              </form>

              {/* List Hapus */}
              <div className="space-y-4">
                <h3 className="font-bold text-slate-800">Daftar Foto Terpasang</h3>
                {photos.length === 0 ? (
                  <p className="text-slate-400 text-sm text-center py-4">Belum ada foto yang diupload.</p>
                ) : (
                  photos.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl gap-4">
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <img src={item.image_url} alt="Preview" className="h-12 w-12 object-cover rounded-lg border flex-shrink-0" />
                        <div className="overflow-hidden">
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider block w-max">
                            {item.title === 'dashboard_1' ? 'Dashboard - Factory Tour' : item.title === 'dashboard_2' ? 'Dashboard - RoboPark' : 'Galeri Dokumentasi'}
                          </span>
                          <p className="text-xs text-slate-500 truncate mt-1">{item.image_url.split('/').pop()}</p>
                        </div>
                      </div>
                      <button 
                        onClick={async () => {
                          const path = item.image_url.split('/').pop()
                          const { error: storageError } = await supabase.storage.from('galeri').remove([path])
                          if (storageError) {
                            alert('Gagal hapus file: ' + storageError.message)
                            return
                          }
                          
                          const { error: dbError } = await supabase.from('documentation').delete().eq('id', item.id)
                          if (dbError) {
                            alert('Gagal hapus database: ' + dbError.message)
                            return
                          }
                          
                          alert('Foto berhasil dihapus!')
                          await fetchPhotos()
                        }}
                        className="text-red-500 hover:text-red-700 text-sm font-bold px-3 py-1.5 hover:bg-red-50 rounded-lg transition flex-shrink-0"
                      >
                        Hapus
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="py-12 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© 2026 XI RPL ONE - Axioo Class. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-600 transition">Instagram</a>
          <a href="#" className="hover:text-blue-600 transition">GitHub</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </footer>
    </div>
  )
}