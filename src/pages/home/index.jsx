import { useNavigate } from "react-router-dom";

import check from "../../assets/icons/check.svg";
import hrs from "../../assets/icons/icon_24hrs.svg";
import complete from "../../assets/icons/icon_complete.svg";
import fb from "../../assets/icons/icon_facebook.svg";
import ig from "../../assets/icons/icon_instagram.svg";
import mail from "../../assets/icons/icon_mail.svg";
import price from "../../assets/icons/icon_price.svg";
import prof from "../../assets/icons/icon_professional.svg";
import twitch from "../../assets/icons/icon_twitch.svg";
import twitter from "../../assets/icons/icon_twitter.svg";
import logo from "../../assets/icons/logobinar.png";
import service from "../../assets/image/img_service.svg";
import profile1 from "../../assets/image/profile_1.svg";
import profile2 from "../../assets/image/profile_2.svg";
import "../../assets/css/style.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Our Service */}
      <section id="ourservice" className="pt-5 mt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 my-auto">
              <img src={service} alt="Image Services" className="img-fluid" />
            </div>
            <div
              className="col-md-6 m-auto p-4"
              style={{ textAlign: "justify" }}
            >
              <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <p>
                <span>
                  <img src={check} className="img-fluid p-2" />
                </span>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p>
                <span>
                  <img src={check} className="img-fluid p-2" />
                </span>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p>
                <span>
                  <img src={check} className="img-fluid p-2" />
                </span>
                Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p>
                <span>
                  <img src={check} className="img-fluid p-2" />
                </span>
                Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p>
                <span>
                  <img src={check} className="img-fluid p-2" />
                </span>
                Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus" className="pt-5">
        <div className="container">
          <div id="title">
            <h3>Why Us</h3>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <div className="row mt-4 pb-5 gy-2">
            <div className="col-md-3">
              <div className="card" alt="lengkap">
                <div className="card-body">
                  <h4 className="card-title">
                    <span>
                      <img src={complete} className="img-fluid" />
                    </span>
                  </h4>
                  <h5>Mobil Lengkap</h5>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" alt="murah">
                <div className="card-body">
                  <h4 className="card-title">
                    <span>
                      <img src={price} />
                    </span>
                  </h4>
                  <h5>Harga Murah</h5>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" alt="layanan">
                <div className="card-body">
                  <h4 className="card-title">
                    <span>
                      <img src={hrs} />
                    </span>
                  </h4>
                  <h5>Layanan 24 Jam</h5>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" alt="profesional">
                <div className="card-body">
                  <h4 className="card-title">
                    <span>
                      <img src={prof} />
                    </span>
                  </h4>
                  <h5>Sopir Profesional</h5>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="pt-5">
        <div className="container">
          <div className="title">
            <h3 className="d-flex justify-content-center">Testimonial</h3>
            <p className="d-flex justify-content-center pb-3">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
          <div id="carousel" className="carousel carousel-dark slide">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                  <div className="m-3">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <img
                              src={profile1}
                              className="rounded-circle img-fluid shadow-1"
                              alt="avatar"
                            />
                          </div>
                          <div className="col-md-10">
                            <ul
                              id="star"
                              className="list-unstyled d-flex text-warning mb-0"
                            >
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                            <p className="pt-2">
                              "Pelayanan yang sangat memuaskan! Mobil yang
                              disewa sangat bersih dan terawat. Sangat
                              direkomendasikan!"
                            </p>
                            <h5>John Dee 32, Bromo</h5>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <img
                              src={profile2}
                              className="rounded-circle img-fluid shadow-1"
                              alt="avatar"
                            />
                          </div>
                          <div className="col-md-10">
                            <ul
                              id="star"
                              className="list-unstyled d-flex text-warning mb-0"
                            >
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                            </ul>
                            <p className="pt-2">
                              "Pelayanan cepat dan ramah. Mobil yang disewa
                              sesuai dengan yang diharapkan. Terima kasih Binar
                              Car Rental!"
                            </p>
                            <h5>Jane Doe 28, Bali</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </section>

      {/* Sewa Mobil Section */}
      <section id="sewa-mobil" className="pt-5">
        <div className="container">
          <div className="text-center d-flex flex-column align-items-center justify-content-center">
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="col-md-8">
              Sewa mobil dengan mudah dan nyaman bersama kami di (Lokasimu)!
              Temukan kendaraan yang sesuai untuk perjalanan Anda, dengan harga
              yang terjangkau dan layanan yang handal.
            </p>
            <button
              type="button"
              className="btn btn-md fw-bold rounded"
              onClick={() => navigate("/carimobil")}
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h3>Frequently Asked Question</h3>
            </div>
            <div className="col-md-7">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-3 rounded-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Syarat yang dibutuhkan untuk menyewa mobil dengan kami
                      meliputi: KTP atau identitas resmi lainnya, SIM yang masih
                      berlaku, dan Deposit yang sesuai dengan kebijakan kami.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Minimal sewa mobil lepas kunci adalah 1 hari penuh (24
                      jam).
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Sebaiknya Anda melakukan booking sewa mobil minimal 3-7
                      hari sebelum tanggal keberangkatan untuk memastikan
                      ketersediaan kendaraan yang Anda inginkan.
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Suscipit facilis, dicta illum culpa aspernatur dolore
                      aliquam quod voluptas tenetur modi nihil doloribus
                      provident ullam asperiores ab quidem eius dolorem enim.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Ya, kami menyediakan layanan antar-jemput dengan biaya
                      tambahan. Untuk informasi lebih lanjut, silakan hubungi
                      tim layanan pelanggan kami.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Jika terjadi kecelakaan, segera hubungi kami dan pihak
                      berwenang. Pastikan untuk mengikuti prosedur yang telah
                      ditetapkan dan menghubungi asuransi jika diperlukan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section id="footer" className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-2 fw-medium">
              <a className="nav-link mb-3" href="#ourservice">
                Our services
              </a>
              <a className="nav-link mb-3" href="#whyus">
                Why Us
              </a>
              <a className="nav-link mb-3" href="#testimonial">
                Testimonial
              </a>
              <a className="nav-link mb-3" href="#faq">
                FAQ
              </a>
            </div>
            <div className="col-md-4">
              <p>Connect with us</p>
              <div className="row">
                <div className="col-md-2">
                  <img className="img-fluid" src={fb} />
                </div>
                <div className="col-md-2">
                  <img className="img-fluid" src={ig} />
                </div>
                <div className="col-md-2">
                  <img className="img-fluid" src={twitter} />
                </div>
                <div className="col-md-2">
                  <img className="img-fluid" src={mail} />
                </div>
                <div className="col-md-2">
                  <img className="img-fluid" src={twitch} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
              <img className="nav-link" src={logo} id="logobinar" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
