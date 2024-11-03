function Simage({ url, alt }) {
   return (
      <p style={{ width: "400px", height: "300px" }}>
         <img
            src={url}
            alt={alt}
            width={200}
            height={200}
            style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
         />
      </p>
   )
}

export default Simage
