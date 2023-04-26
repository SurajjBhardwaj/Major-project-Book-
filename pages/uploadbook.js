import { useState } from "react";
import Profile from "@/Component/Profile";
import SearchBar from "@/Component/searchBar";
import Sidebar from "@/Component/Sidebar";
import styles from "../styles/Pages/uploadbook.module.scss";

import Image from "next/image";

function UploadForm() {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [bookPicture, setBookPicture] = useState(null);
  const [originalPrice, setOriginalPrice] = useState("");
  const [rentPrice, setRentPrice] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [qualityRating, setQualityRating] = useState(1);
  const [bookDescription, setBookDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // code to submit form data to backend API
  };

  return (
    <>
      <div className={styles.upload__main}>
        
          <Sidebar />
        

        <div className={styles.upload}>
          {/* search bar */}
          <div className={styles.search}>
            <SearchBar />
          </div>

          {/* profile bar */}
          <div className={styles.profilebar}>
            <Profile />
          </div>

          {/* Heading */}
          {/* <div className={styles.heading}>Rent Book</div> */}
          {/* Background 1 */}
          <div className={styles.background1}>
          <div className={styles.gifupload}>
            <Image
            alt="svg"
              className={styles.img_upload}
              style={{  transform: "scaleX(-1)" }} 
              src="/img/upload2.svg"
              width={300}
              height={800}
            />
          
        </div>
          </div>

          {/* Background 2 */}
          <div className={styles.background2}></div>

          {/* Book content */}
          <div className={styles.form}>
            <div className={styles.heading}>Rent Book</div>

            <form onSubmit={handleFormSubmit}>
              <div>
                <label className={styles.label} htmlFor="bookName">
                  Name of Book
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="bookName"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="authorName">
                  Name of Author
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="authorName"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="ownerName">
                  Owner of Book
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="ownerName"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="bookPicture">
                  Picture of Book
                </label>
                <input
                  className={styles.input}
                  type="file"
                  id="bookPicture"
                  onChange={(e) => setBookPicture(e.target.files[0])}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="originalPrice">
                  Original Price of Book
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="originalPrice"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  required
                />
              </div>
              {/* <div>
          <label className={styles.label} htmlFor="rentPrice">Rent Price of Book</label>
          <input className={styles.input}
            type="number"
            id="rentPrice"
            value={rentPrice}
            onChange={(e) => setRentPrice(e.target.value)}
            required
          />
        </div> */}
              <div>
                <label className={styles.label} htmlFor="city">
                  City
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="state">
                  State
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="country">
                  Country
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="qualityRating">
                  Quality of Pages (1-10)
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="qualityRating"
                  min="1"
                  max="10"
                  value={qualityRating}
                  onChange={(e) => setQualityRating(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="bookDescription">
                  Description of Book
                </label>
                <textarea
                  className={styles.input}
                  id="bookDescription"
                  value={bookDescription}
                  onChange={(e) => setBookDescription(e.target.value)}
                  required
                />
              </div>
              <button className={styles.btn} type="submit">
                Submit `&#x2197;`
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default UploadForm;
