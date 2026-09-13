import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
        <div style={
          {margin:"20px", width: "100%", display: "flex", 
            flexDirection: "row", alignContent: "space-around", 
            justifyContent: "space-around", flexWrap: "wrap"
        }}>
          <Card venueName="The Bloom Pavilion" imgSrc="bloom.jpg"/>
          <Card venueName="Spark Space" imgSrc="sparkspace.jpg"/>
          <Card venueName="The Grand Table" imgSrc="grandtable.jpg"/>
        </div>
      </main>
    </div>
  );
}
