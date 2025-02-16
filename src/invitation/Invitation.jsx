import { useRef } from "react";
import "./invitation.css";
import logo from "/src/assets/logo.svg";
import logout from "/src/assets/logout.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Invitation() {
  const contentRef = useRef(null);

  const handleDownloadPDF = () => {
    if (contentRef.current) {
      html2canvas(contentRef.current, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("invitation.pdf");
      });
    }
  };

  return (
    <div className="container">
      <div ref={contentRef} className="invitation">
        <div className="content">
          <div className="frame">
            <div className="info">
              <h3>Invoice</h3>
              <div className="item">
                date: <span>March 3, 2077</span>{" "}
              </div>
              <div className="item">
                Invoice: <span>#LI7701</span>{" "}
              </div>
            </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="account">
            <div className="client">
              <div>BILL TO</div>
              <div className="title">Your Client’s Company</div>
              <div>Jakarta, Indonesia</div>
              <div>+62 21 123456</div>
            </div>
            <div className="designer">
              <div>Pay To</div>
              <div className="title">Bima Agustian Wanaputra</div>
              <div>Jakarta, Indonesia</div>
              <div>+62 853 1234 5678</div>
            </div>
          </div>
          <div className="details">
            <div className="row header">
              <div className="item">Description</div>
              <div className="item">Rate</div>
              <div className="item">Quantity</div>
              <div className="item">Subtotal</div>
            </div>
            <div className="row">
              <div className="item">UI Design Landing Page (1 Page)</div>
              <div className="item">Rp 500.000</div>
              <div className="item">1</div>
              <div className="item">Rp 500.000</div>
            </div>
            <div className="row">
              <div className="item">UI Design Mobile Apps</div>
              <div className="item">Rp 5.000.000</div>
              <div className="item">1</div>
              <div className="item">Rp 5.000.000</div>
            </div>
            <div className="row">
              <div className="item">Development Landing Page (1 Page)</div>
              <div className="item">Rp 1.000.000</div>
              <div className="item">1</div>
              <div className="item">Rp 1.000.000</div>
            </div>
            <div className="row">
              <div className="item">Development Mobile Apps</div>
              <div className="item">Rp 10.000.000</div>
              <div className="item">1</div>
              <div className="item">Rp 10.000.000</div>
            </div>
          </div>
        </div>
        <div className="paid">
          <div className="content">
            <div className="title">PAID 20%</div>
            <div className="rp">Rp 3.630.000</div>
            <div className="date">04/03/2077</div>
          </div>
        </div>
        <div className="footer">
          <div className="top">
            <div>Additional Information</div>
            <div>Totals</div>
          </div>
          <div className="middle">
            <div className="left">
              <div className="row">
                <span>Institution:</span>
                <span>Your Client’s Company</span>
              </div>
              <div className="row">
                <span>Period:</span>
                <span>03/06/2077</span>
              </div>
              <div className="row">
                <span>Terms:</span>
                <span>20 Percent Upfront</span>
              </div>
            </div>
            <div className="left right">
              <div className="row">
                <span>Subtotal:</span>
                <span>Rp 16.500.000</span>
              </div>
              <div className="row">
                <span>Tax:</span>
                <span>Rp 1.650.000</span>
              </div>
              <div className="row">
                <span>Total:</span>
                <span>Rp 18.150.000</span>
              </div>
            </div>
          </div>
          <div className="bottom">Thank you! — bimaagustian@gmail.com</div>
        </div>
      </div>
      <div onClick={handleDownloadPDF} className="download">
        Download PDF <img src={logout} alt="logout" />
      </div>
    </div>
  );
}
